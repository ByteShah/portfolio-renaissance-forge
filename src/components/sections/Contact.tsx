import { useState, useRef, useEffect } from "react";
import { Send, Loader2, CheckCircle, Copy, Check } from "lucide-react";
import { useCopyEmail } from "@/hooks/useCopyEmail";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailjs";

const FloatingInput = ({ id, name, label, type = "text", value, onChange, required }: {
  id: string; name: string; label: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const isUp = focused || value.length > 0;
  return (
    <div className="relative">
      <input id={id} name={name} type={type} value={value} onChange={onChange} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="w-full px-4 pt-6 pb-2 text-sm rounded-xl outline-none transition-all duration-200"
        style={{ background: "var(--bg)", border: `1px solid ${focused ? "var(--accent)" : "var(--border-color)"}`, color: "var(--text-primary)", caretColor: "var(--accent)" }}
      />
      <motion.label htmlFor={id} className="absolute left-4 pointer-events-none font-medium"
        animate={{ top: isUp ? "8px" : "50%", y: isUp ? "0%" : "-50%", fontSize: isUp ? "10px" : "14px", color: isUp ? "var(--accent)" : "var(--text-muted)" }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >{label}</motion.label>
    </div>
  );
};

const FloatingTextarea = ({ id, name, label, value, onChange, required }: {
  id: string; name: string; label: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; required?: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const isUp = focused || value.length > 0;
  return (
    <div className="relative">
      <textarea id={id} name={name} value={value} onChange={onChange} required={required} rows={5}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="w-full px-4 pt-8 pb-3 text-sm rounded-xl outline-none resize-none transition-all duration-200"
        style={{ background: "var(--bg)", border: `1px solid ${focused ? "var(--accent)" : "var(--border-color)"}`, color: "var(--text-primary)", caretColor: "var(--accent)" }}
      />
      <motion.label htmlFor={id} className="absolute left-4 pointer-events-none font-medium"
        animate={{ top: isUp ? "10px" : "20px", fontSize: isUp ? "10px" : "14px", color: isUp ? "var(--accent)" : "var(--text-muted)" }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >{label}</motion.label>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const { copied: emailCopied, copy: copyEmail } = useCopyEmail("s1.jaimin@gmail.com");
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    try {
      await sendEmail(formData);
      setSuccess(true); setFormData({ name: "", email: "", subject: "", message: "" });
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    } catch {
      toast({ title: "Error", description: "Failed to send. Please try again.", variant: "destructive" });
    } finally { setLoading(false); }
  };

  useEffect(() => { if (!success) return; const t = setTimeout(() => setSuccess(false), 5000); return () => clearTimeout(t); }, [success]);

  useGSAP(() => {
    gsap.from(".contact-form-container", {
      opacity: 0, y: 50, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
    });
  }, { scope: sectionRef });

  const cardStyle = { background: "var(--surface)", border: "1px solid var(--border-color)", borderRadius: "1rem" };

  return (
    <section id="contact" ref={sectionRef} className="section-padding" style={{ background: "var(--surface)" }}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase gradient-text">What's Next?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>Get In Touch</h2>
          <p className="max-w-xl mx-auto leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
            Open to new opportunities and collaborations. Whether you have a project idea, a question, or just want to connect — I'll get back to you.
          </p>
        </div>

        {/* ── Cal.com primary CTA ── */}
        <motion.a
          href="https://cal.com/jaimin-shah"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-form-container flex flex-col sm:flex-row items-center justify-between gap-6 p-8 mb-6 group"
          style={{
            ...cardStyle,
            background: "var(--bg)",
            borderColor: "rgba(74,94,58,0.25)",
            textDecoration: "none",
          }}
          whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(74,94,58,0.15)" }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-5">
            {/* Calendar icon */}
            <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(74,94,58,0.1)", border: "1px solid rgba(74,94,58,0.2)" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <circle cx="8" cy="15" r="1" fill="var(--accent)"/>
                <circle cx="12" cy="15" r="1" fill="var(--accent)"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-lg leading-tight" style={{ color: "var(--text-primary)" }}>
                Book a 30-min call
              </p>
              <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>
                Free intro call · No commitment · via Cal.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "rgba(74,94,58,0.1)", color: "var(--accent)" }}>
              Usually responds same day
            </span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 group-hover:translate-x-1"
              style={{ background: "var(--accent)", color: "#F2EDE4" }}>
              →
            </span>
          </div>
        </motion.a>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            or send a message
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
        </div>

        {/* Form */}
        <div className="contact-form-container p-8 md:p-10" style={cardStyle}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FloatingInput id="name" name="name" label="Name" value={formData.name} onChange={handleChange} required />
              <FloatingInput id="email" name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <FloatingInput id="subject" name="subject" label="Subject" value={formData.subject} onChange={handleChange} required />
            <FloatingTextarea id="message" name="message" label="Message" value={formData.message} onChange={handleChange} required />

            <motion.button type="submit" disabled={loading || success}
              className="glow-button w-full py-4 rounded-xl font-semibold disabled:opacity-70"
              whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.span key="loading" className="flex items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </motion.span>
                ) : success ? (
                  <motion.span key="success" className="flex items-center justify-center gap-2" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <CheckCircle size={16} /> Sent! Talk soon.
                  </motion.span>
                ) : (
                  <motion.span key="idle" className="flex items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Send Message <Send size={14} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 text-sm transition-all duration-200 group"
            style={{ color: "var(--text-secondary)" }}
          >
            Direct email:
            <span className="underline-link font-medium" style={{ color: "var(--accent)" }}>
              s1.jaimin@gmail.com
            </span>
            <span className="flex items-center justify-center w-5 h-5 rounded transition-all duration-200"
              style={{ color: emailCopied ? "var(--accent)" : "var(--text-muted)" }}>
              {emailCopied ? <Check size={13} /> : <Copy size={13} />}
            </span>
            {emailCopied && (
              <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>Copied!</span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
