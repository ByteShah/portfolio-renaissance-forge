
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ByteShah", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/jaiminshah198", label: "LinkedIn" },
    // { icon: Twitter, href: "https://twitter.com/jaiminshah", label: "Twitter" },
    { icon: Mail, href: "mailto:s1.jaimin@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-navy py-10 border-t border-violet/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="gradient-text text-3xl font-serif mb-2">Jaimin Shah</div>
            <p className="text-slate-light">Senior Odoo Developer & AI Specialist</p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-3 mb-8 md:mb-0">
            <div>
              <h3 className="text-slate-lightest font-medium mb-3">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate hover:text-violet transition-colors">About</a></li>
                <li><a href="#skills" className="text-slate hover:text-violet transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-slate hover:text-violet transition-colors">Projects</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-lightest font-medium mb-3">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#experience" className="text-slate hover:text-violet transition-colors">Experience</a></li>
                <li><a href="#contact" className="text-slate hover:text-violet transition-colors">Contact</a></li>
                {/* <li><a href="/resume.pdf" className="text-slate hover:text-violet transition-colors">Resume</a></li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-violet/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate mb-4 md:mb-0">
            <p>© {year} Jaimin Shah. All Rights Reserved</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-violet transform hover:-translate-y-1 transition-all duration-200"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
