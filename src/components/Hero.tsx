import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 md:pt-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">Welcome to my portfolio</p>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              Hello, I'm{" "}
              <span className="gradient-text">Rashmi Rekha Patra</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
              Aspiring Web Developer | B.Sc. Computer Science Student
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
              Building Responsive & User-Friendly Web Applications. Passionate about crafting clean, modern web experiences with a focus on usability and performance.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                View Resume
                <ArrowDown size={18} />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-ring animate-pulse-glow">
                <img
                  src={profileImg}
                  alt="Rashmi Rekha Patra"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
