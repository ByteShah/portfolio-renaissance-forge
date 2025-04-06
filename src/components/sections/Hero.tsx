
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/jaiminshah", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/jaiminshah", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/jaiminshah", label: "Twitter" },
    { icon: Mail, href: "mailto:s1.jaimin@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-mint opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
              Hi, my name is
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
              Jaimin Shah.
            </h1>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
              Senior Odoo Developer & AI Specialist.
            </h2>
            
            <p className="text-slate max-w-lg opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
              With 3.3+ years of expertise in end-to-end ERP solutions, AI integrations, and complex module development. Delivered 15+ cross-functional projects for global clients, automating workflows and reducing operational costs by 30-70%.
            </p>
            
            <div className="flex gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '700ms' }}>
              <Button 
                className="bg-transparent border border-mint text-mint hover:bg-mint/10 transition-all duration-300 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                className="border-mint/30 text-slate hover:text-mint hover:border-mint/60"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
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
          </div>
          
          <div className="flex-1 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-mint/10 rounded-full animate-pulse-light"></div>
              <div className="absolute inset-4 border-2 border-dashed border-mint/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-navy-light border border-mint/20 overflow-hidden">
                  {/* Placeholder for profile image or avatar */}
                  <div className="w-full h-full flex items-center justify-center text-mint font-serif text-5xl">
                    JS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
