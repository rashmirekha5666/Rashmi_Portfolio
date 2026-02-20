import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">Education</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
          My <span className="gradient-text">Education</span>
        </h2>

        <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="text-primary" size={32} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-xl text-foreground mb-1">B.Sc. Computer Science</h3>
            <p className="text-primary font-medium mb-2">NIST University</p>
            <p className="text-muted-foreground text-sm">Graduation Year: 2023</p>
            <p className="text-muted-foreground text-sm mt-2">
              Developed a strong foundation in programming, data structures, algorithms, and web development during the course of study.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
