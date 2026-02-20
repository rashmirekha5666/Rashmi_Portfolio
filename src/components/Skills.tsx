import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "Flask", level: 60 },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2 text-center">Skills</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-muted-foreground text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(20,90%,65%)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
