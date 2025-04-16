
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, BookOpen, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleTheme, isDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Handle outside click to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { name: "About", href: "#about", icon: BookOpen },
    { name: "Skills", href: "#skills", icon: Award },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Experience", href: "#experience", icon: Award },
    { name: "Contact", href: "#contact", icon: BookOpen },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300", 
        scrolled ? "bg-navy/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-2xl font-serif font-bold text-mint">
          JS
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
                <a href={item.href} className="nav-link group flex items-center">
                  <span className="text-mint mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <item.icon size={16} />
                  </span> 
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
{/*           
          <Button 
            variant="outline" 
            className="border-mint text-mint hover:bg-mint/10"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Resume
          </Button> */}
          
          {/* <Button 
            variant="ghost" 
            size="icon" 
            className="text-slate hover:text-slate-lightest hover:bg-navy-light" 
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          {/* <Button 
            variant="ghost" 
            size="icon" 
            className="text-slate hover:text-slate-lightest hover:bg-navy-light" 
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button> */}
          
          <Button
            id="menu-button"
            variant="ghost"
            size="icon"
            className="text-slate hover:text-slate-lightest hover:bg-navy-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-y-0 right-0 w-3/4 bg-navy-light p-6 shadow-xl transform transition-transform duration-300 ease-in-out z-50",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate hover:text-slate-lightest"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </Button>
          </div>
          
          <nav className="mt-8">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-lg nav-link flex items-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-mint mr-3">
                      <item.icon size={18} />
                    </span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* <Button 
              variant="outline" 
              className="mt-8 w-full border-mint text-mint hover:bg-mint/10"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Resume
            </Button> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
