import { motion } from "framer-motion";
import Button from "../components/Button"; // adjust path if needed

import "../styles/Hero.css";


const Hero = () => {
  return (
    <div id="home" className="bg-neutral-950 text-neutral-100">
      <div style={{ height: "140px" }} />
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          UX & Digital Designer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Designing clear, usable digital experiences across web, mobile,
          motion, and interactive media.
        </motion.p>

        <div className="hero-buttons">
          <a href="/#portfolio">
            <Button type="button" variant="primary">
              View Work
            </Button>
          </a>

          <a href="#contact">
            <Button type="button" variant="outline">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </section>
</div>
  );
};

export default Hero;
