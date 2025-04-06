
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface JobExperience {
  company: string;
  title: string;
  date: string;
  location: string;
  description: string[];
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences: JobExperience[] = [
    {
      company: "Got2 India",
      title: "Sr. Odoo Developer",
      date: "January 2024 - Present",
      location: "Ahmedabad, Gujarat",
      description: [
        "Built end-to-end Odoo eCommerce solution with product configurators, multi-vendor support, and RazorPay/Stripe integrations.",
        "Designed responsive website themes (HTML5, CSS3, Bootstrap) improving mobile conversion rates by 25%.",
        "Developed AI chatbot to analyze customer interactions (post-engagement) and auto-suggest responses.",
        "Integrated appointment scheduling logic to book slots with providers based on availability (Calendar module), reducing manual coordination by 50%.",
        "Created modular email template snippets (QWeb) for cart abandonment, order confirmations, and promotions, increasing click-through rates by 40%."
      ]
    },
    {
      company: "Odoo India PVT LTD",
      title: "Odoo Developer",
      date: "January 2022 - January 2024",
      location: "Remote",
      description: [
        "Built Sales Forecasting Dashboard (Python + OWL) with time-series analysis, boosting inventory planning accuracy by 45%.",
        "Developed Stock Traceability Dashboard, reducing discrepancies by 60% via real-time tracking.",
        "Led 15+ Tally-to-Odoo transitions, including custom API development for HRMS/logistics integrations.",
        "Created collaborative drawing app (OWL + Odoo Knowledge) with attachment-based data storage.",
        "Mentored 8 junior developers; conducted 50+ technical interviews."
      ]
    },
    {
      company: "Level.ai",
      title: "AI Research Associate",
      date: "December 2021 - January 2022",
      location: "Remote",
      description: [
        "Developed machine learning models for stock prediction using LSTM and CNN architectures.",
        "Integrated sentiment analysis with time-series forecasting to improve prediction accuracy.",
        "Created an AI-powered library management system that auto-populated book records using Google Books API and web scraping.",
        "Built a React dashboard with JWT authentication, reducing manual data entry by 80%.",
        "Implemented noise-filtered EMG signal processing for gesture recognition with 95% accuracy."
      ]
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="numbered-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Experience
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-6 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-l border-navy-lightest">
            {experiences.map((experience, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  "justify-start rounded-none px-4 py-3 text-left whitespace-nowrap",
                  activeTab === index
                    ? "text-mint border-b-2 md:border-b-0 md:border-l-2 border-mint bg-mint/5 font-medium"
                    : "text-slate border-b-2 md:border-b-0 md:border-l-2 border-transparent hover:bg-navy-light hover:text-slate-lightest"
                )}
                onClick={() => setActiveTab(index)}
              >
                {experience.company}
              </Button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="flex-1 p-2">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={cn(
                  "space-y-4 transition-opacity duration-300",
                  activeTab === index ? "opacity-100" : "hidden opacity-0"
                )}
              >
                <div>
                  <h3 className="text-xl text-slate-lightest font-bold">
                    {experience.title}{" "}
                    <span className="text-mint">@ {experience.company}</span>
                  </h3>
                  <p className="text-slate">{experience.date}</p>
                  <p className="text-slate">{experience.location}</p>
                </div>
                
                <ul className="space-y-3">
                  {experience.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight size={18} className="text-mint mt-1 mr-2 shrink-0" />
                      <span className="text-slate-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
