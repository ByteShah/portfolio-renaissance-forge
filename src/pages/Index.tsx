import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { cn } from "@/lib/utils";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Always start in dark mode
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className={cn("flex flex-col min-h-screen bg-background text-foreground")}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
