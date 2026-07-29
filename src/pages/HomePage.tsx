import { motion } from "framer-motion";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Services } from "../components/sections/Services";
import { Mentorship } from "../components/sections/Mentorship";
import { Contact } from "../components/sections/Contact";

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Mentorship />
      <Contact />
    </motion.div>
  );
}
