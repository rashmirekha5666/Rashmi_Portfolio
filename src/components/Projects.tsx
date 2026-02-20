import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

const projects = [
  { title: "Web Development Project", desc: "Coming soon – a responsive web app built with modern technologies." },
  { title: "Python Automation Tool", desc: "Coming soon – a utility tool built with Python and Flask." },
  { title: "Portfolio Website", desc: "This very portfolio – designed and built with React & Tailwind CSS." },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">Portfolio</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 flex flex-col items-center text-center gap-4 hover:border-primary/40 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <FolderGit2 className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
              <span className="text-xs text-primary/60 mt-auto">Coming Soon</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
