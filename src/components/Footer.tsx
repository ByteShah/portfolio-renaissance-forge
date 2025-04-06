
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/jaiminshah", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/jaiminshah", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/jaiminshah", label: "Twitter" },
    { icon: Mail, href: "mailto:s1.jaimin@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-navy py-8 border-t border-navy-lightest">
      <div className="container flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-mint transform hover:-translate-y-1 transition-all duration-200"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
        
        <div className="text-sm text-slate">
          <p>Designed & Built by Jaimin Shah</p>
          <p className="mt-1">© {year} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
