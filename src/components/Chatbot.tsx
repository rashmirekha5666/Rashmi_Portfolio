import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Minimize2, Bot } from "lucide-react";

// ── Rashmi's portfolio knowledge base ──────────────────────────────────────
const SYSTEM_PROMPT = `You are a friendly and helpful AI assistant embedded in Rashmi Rekha Patra's personal portfolio website. Answer questions about Rashmi concisely and accurately using the information below. If you don't know something, say so politely.

## About Rashmi
- Full name: Rashmi Rekha Patra
- Role: Aspiring Web Developer | B.Sc. Computer Science Student
- Description: Motivated and detail-oriented developer with strong knowledge of HTML, CSS, JavaScript, and Flask. Seeking entry-level Web Developer positions to build responsive, user-friendly web applications.

## Skills
- HTML: 90%
- CSS: 85%
- JavaScript: 75%
- Python: 70%
- Flask: 60%

## Education
- Degree: B.Sc. Computer Science
- University: NIST University
- Graduation Year: 2023
- Focus: Programming, Data Structures, Algorithms, Web Development

## Projects
1. Web Development Project – A responsive web app built with modern technologies (coming soon)
2. Python Automation Tool – A utility tool built with Python and Flask (coming soon)
3. Portfolio Website – Designed and built with React & Tailwind CSS

## Strengths
- Quick Learner
- Problem Solver
- Passionate Developer
- Frontend Focused

## Career Objective
To obtain an entry-level Web Developer position where she can apply her knowledge of frontend technologies, continuously learn and grow in a professional environment, and contribute to building innovative and user-centric web applications.

## Contact
- Email: rashmirekhapatra413@gmail.com
- Phone: Available on request

Keep answers short, friendly, and professional. Use first person for Rashmi ("She has...", "Her skills include...").`;

// ──────────────────────────────────────────────────────────────────────────

type Message = {
    role: "user" | "assistant";
    content: string;
};

const GROQ_API_KEY = "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";

async function fetchGroqResponse(messages: Message[]): Promise<string> {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.map((m) => ({ role: m.role, content: m.content })),
            ],
            temperature: 0.7,
            max_tokens: 512,
        }),
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(err);
    }

    const data = await res.json();
    return data.choices[0]?.message?.content ?? "Sorry, I couldn't get a response.";
}

// ──────────────────────────────────────────────────────────────────────────

const SUGGESTIONS = [
    "What are Rashmi's skills?",
    "Tell me about her education",
    "What projects has she built?",
    "How can I contact Rashmi?",
];

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Hi! 👋 I'm Rashmi's AI assistant. Ask me anything about her skills, education, projects, or how to get in touch!",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open && !minimized) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, open, minimized]);

    const sendMessage = async (text?: string) => {
        const content = (text ?? input).trim();
        if (!content || loading) return;
        setInput("");

        const userMsg: Message = { role: "user", content };
        const nextMessages = [...messages, userMsg];
        setMessages(nextMessages);
        setLoading(true);

        try {
            const reply = await fetchGroqResponse(nextMessages);
            setMessages([...nextMessages, { role: "assistant", content: reply }]);
        } catch {
            setMessages([
                ...nextMessages,
                {
                    role: "assistant",
                    content: "Oops! Something went wrong. Please try again later.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Floating button */}
            <AnimatePresence>
                {!open && (
                    <motion.button
                        key="fab"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                        style={{ boxShadow: "0 0 24px hsl(4 80% 56% / 0.5)" }}
                        aria-label="Open chat"
                    >
                        <img src="/favicon.ico" alt="Chat" className="w-8 h-8 rounded-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        <Bot size={24} className="text-white absolute" style={{ opacity: 0 }} />
                        <MessageCircle size={26} className="text-white" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="chatwindow"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden"
                        style={{
                            background: "hsl(220 20% 7%)",
                            border: "1px solid hsl(220 14% 22%)",
                            boxShadow: "0 8px 40px hsl(4 80% 56% / 0.2), 0 2px 16px rgba(0,0,0,0.6)",
                        }}
                    >
                        {/* Header */}
                        <div
                            className="flex items-center justify-between px-4 py-3"
                            style={{
                                background: "linear-gradient(135deg, hsl(4 80% 36%), hsl(20 90% 45%))",
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20 flex items-center justify-center border border-white/30">
                                    <img
                                        src="/favicon.ico"
                                        alt="R"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = "none";
                                        }}
                                    />
                                    <span className="text-white text-xs font-bold absolute">R</span>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold leading-tight">Rashmi's Assistant</p>
                                    <p className="text-white/70 text-xs">Powered by Groq AI</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setMinimized((v) => !v)}
                                    className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                                    aria-label="Minimize"
                                >
                                    <Minimize2 size={14} className="text-white" />
                                </button>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={14} className="text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <AnimatePresence>
                            {!minimized && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ overflow: "hidden" }}
                                >
                                    {/* Messages */}
                                    <div className="h-72 overflow-y-auto p-4 space-y-3 scrollbar-thin">
                                        {messages.map((msg, i) => (
                                            <div
                                                key={i}
                                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                            >
                                                <div
                                                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${msg.role === "user"
                                                            ? "text-white rounded-br-sm"
                                                            : "rounded-bl-sm"
                                                        }`}
                                                    style={
                                                        msg.role === "user"
                                                            ? { background: "hsl(4 80% 56%)" }
                                                            : {
                                                                background: "hsl(220 18% 14%)",
                                                                color: "hsl(0 0% 90%)",
                                                                border: "1px solid hsl(220 14% 22%)",
                                                            }
                                                    }
                                                >
                                                    {msg.content}
                                                </div>
                                            </div>
                                        ))}

                                        {loading && (
                                            <div className="flex justify-start">
                                                <div
                                                    className="px-4 py-3 rounded-xl rounded-bl-sm"
                                                    style={{
                                                        background: "hsl(220 18% 14%)",
                                                        border: "1px solid hsl(220 14% 22%)",
                                                    }}
                                                >
                                                    <span className="flex gap-1">
                                                        {[0, 1, 2].map((d) => (
                                                            <span
                                                                key={d}
                                                                className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                                                                style={{ animationDelay: `${d * 0.15}s` }}
                                                            />
                                                        ))}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        <div ref={bottomRef} />
                                    </div>

                                    {/* Suggestions */}
                                    {messages.length === 1 && (
                                        <div className="px-4 pb-2 flex flex-wrap gap-2">
                                            {SUGGESTIONS.map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => sendMessage(s)}
                                                    className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:border-primary/60 hover:text-primary"
                                                    style={{
                                                        borderColor: "hsl(220 14% 22%)",
                                                        color: "hsl(220 10% 60%)",
                                                        background: "hsl(220 18% 10%)",
                                                    }}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* Input */}
                                    <div
                                        className="flex items-center gap-2 px-4 py-3"
                                        style={{ borderTop: "1px solid hsl(220 14% 18%)" }}
                                    >
                                        <input
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                            placeholder="Ask me anything..."
                                            className="flex-1 text-sm px-3 py-2 rounded-lg outline-none"
                                            style={{
                                                background: "hsl(220 18% 12%)",
                                                border: "1px solid hsl(220 14% 22%)",
                                                color: "hsl(0 0% 95%)",
                                            }}
                                            disabled={loading}
                                        />
                                        <button
                                            onClick={() => sendMessage()}
                                            disabled={loading || !input.trim()}
                                            className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity disabled:opacity-40"
                                            style={{ background: "hsl(4 80% 56%)" }}
                                        >
                                            <Send size={15} className="text-white" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
