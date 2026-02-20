import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:rashmirekhapatra413@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">Get In Touch</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Contact <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info */}
            <div className="space-y-6">
              <div className="glass-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium text-sm">rashmirekhapatra413@gmail.com</p>
                </div>
              </div>
              <div className="glass-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium text-sm">Available on request</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-sm"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
