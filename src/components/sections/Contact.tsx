
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-navy-light">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <p className="text-mint">05. What's Next?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-lightest">Get In Touch</h2>
          <p className="text-slate-light max-w-xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, a project idea, or just want to say hi, 
            I'll do my best to get back to you!
          </p>
        </div>
        
        <div className="bg-navy rounded-lg shadow-xl p-6 md:p-8 border border-navy-lightest">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-slate-lightest">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-navy-lightest border-navy-lightest focus:border-mint"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-slate-lightest">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-navy-lightest border-navy-lightest focus:border-mint"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-slate-lightest">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-navy-lightest border-navy-lightest focus:border-mint"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-slate-lightest">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-navy-lightest border-navy-lightest focus:border-mint h-40 resize-none"
                required
              />
            </div>
            
            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-mint text-navy hover:bg-mint/90 px-8 py-6"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2" size={18} />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate">
            Prefer direct email?{" "}
            <a href="mailto:s1.jaimin@gmail.com" className="underline-link">
              s1.jaimin@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
