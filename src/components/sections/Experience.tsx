
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
      company: "Tech Solutions Inc.",
      title: "Senior Frontend Developer",
      date: "January 2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead front-end development for a SaaS platform serving over 50,000 users, resulting in a 30% improvement in user engagement metrics.",
        "Developed and maintained reusable component library in React, improving team development efficiency by 40%.",
        "Collaborated with UX/UI designers to implement responsive, accessible interfaces across the application.",
        "Mentored junior developers and conducted code reviews to ensure quality and best practices.",
        "Implemented automated testing strategies that increased code coverage from 60% to 90%."
      ]
    },
    {
      company: "Digital Innovations",
      title: "Frontend Developer",
      date: "March 2020 - December 2021",
      location: "San Francisco, CA",
      description: [
        "Rebuilt the company's main product using React, TypeScript, and Tailwind CSS, improving performance by 45%.",
        "Integrated RESTful APIs and GraphQL endpoints to create dynamic and interactive user interfaces.",
        "Collaborated with back-end team to design and implement new features and improvements.",
        "Participated in agile development processes, including daily stand-ups, sprint planning, and retrospectives.",
        "Optimized application performance through code splitting, lazy loading, and efficient state management."
      ]
    },
    {
      company: "Web Crafters",
      title: "Junior Developer",
      date: "June 2018 - February 2020",
      location: "San Francisco, CA",
      description: [
        "Assisted in the development of responsive websites for various clients using HTML, CSS, and JavaScript.",
        "Built interactive components and animations to enhance user experience across multiple projects.",
        "Participated in client meetings to understand requirements and provide technical insights.",
        "Maintained and updated existing websites, improving SEO rankings and performance metrics.",
        "Collaborated with design team to ensure pixel-perfect implementation of mockups."
      ]
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="numbered-heading mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-mint mr-2">04.</span> Experience
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
