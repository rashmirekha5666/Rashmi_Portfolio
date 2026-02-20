import { motion } from "framer-motion";
import { Lightbulb, Zap, Heart, Code } from "lucide-react";

const strengths = [
  { icon: Zap, label: "Quick Learner" },
  { icon: Lightbulb, label: "Problem Solver" },
  { icon: Heart, label: "Passionate Developer" },
  { icon: Code, label: "Frontend Focused" },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">About Me</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-8">
          Who I <span className="gradient-text">Am</span>
        </h2>

        <div className="glass-card p-8 md:p-12 mb-10">
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto text-lg">
            Motivated and detail-oriented B.Sc. Computer Science student with strong knowledge of HTML, CSS, JavaScript, and Flask. Seeking an entry-level Web Developer position to build responsive and user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass-card p-6 flex flex-col items-center gap-3 text-center hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <s.icon className="text-primary" size={28} />
              <span className="text-sm font-medium text-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Career Objective */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-heading font-bold text-2xl text-center mb-6">
          Career <span className="gradient-text">Objective</span>
        </h3>
        <div className="glass-card p-8 text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            To obtain an entry-level Web Developer position where I can apply my knowledge of frontend technologies, continuously learn and grow in a professional environment, and contribute to building innovative and user-centric web applications.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
