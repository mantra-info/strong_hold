"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

interface Pageprops{
  page?:string
}
const FAQSection = ({page}:Pageprops) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = page === "services"
    ? [
        {
          question: "What types of construction projects do you handle?",
          answer:
            "We undertake residential, commercial, and industrial construction projects. Our expertise covers both civil construction works and specialised post-tensioning systems. Each project is handled based on its structural needs, scale, and design requirements."
        },
        {
          question: "Do you provide complete project support?",
          answer:
            "Yes, we provide end-to-end support from initial planning to final execution. Our team coordinates with engineers, consultants, and site teams to ensure smooth progress. This approach helps deliver projects efficiently and with consistent quality."
        },
        {
          question: "How can I get a quotation for my project?",
          answer:
            "You can request a quotation by contacting us and sharing your project details or drawings. We carefully review the scope of work and technical requirements and provide a clear and transparent cost estimate."
        },
        {
          question: "What determines the project timeline?",
          answer:
            "Project timelines depend on the scope, complexity, and site conditions of the work. After reviewing the project, we define a realistic execution schedule and follow structured planning to ensure timely completion."
        },
        {
          question: "How do you ensure quality and safety on site?",
          answer:
            "We follow strict quality control and safety practices on all projects. Approved materials, trained supervision, and regular inspections are part of our process. This ensures safe execution and long-term structural reliability."
        },
        {
          question: "Do you provide warranty or post-project support?",
          answer:
            "Yes, we stand by the quality of our work. We offer post-project support in line with industry standards and project agreements, giving our clients confidence in the durability and performance of our structures."
        }
      ]
    : [
    {
      question: "What services does Stronghold specialise in?",
      answer: "We specialize in post-tensioning solutions and civil construction services. We deliver structurally efficient post-tensioned systems and execute civil works with precision, supporting residential, commercial, and industrial projects of varying scales."
    },
    {
      id: 2, 
      question: "Why choose post-tensioning for construction?",
      answer: "Post-tensioning enhances structural performance by increasing load capacity, reducing slab thickness, and minimising cracks. It allows for longer spans, material optimisation, and improved durability, making it a smart and cost-effective solution for modern construction."
    },
    {
      question: "What types of civil construction projects do you undertake?",
      answer: "We undertake a wide range of civil construction works including foundations, structural frameworks, slabs, beams, and complete building execution. Our approach focuses on technical accuracy, efficient coordination, and long-term structural reliability."
    },
    {
      question: "How does Stronghold manage project execution?",
      answer: "Each project is managed through detailed planning, technical supervision, and coordinated site execution. Our experienced engineers and site teams ensure that post-tensioning and civil works are completed efficiently, safely, and in accordance with approved specifications."
    },
     {
      question: "How do you maintain quality and safety on-site?",
      answer: "We follow stringent quality control measures, use certified materials, and adhere to industry-standard safety practices. Regular inspections, skilled workmanship, and strict process monitoring ensure consistent quality and safe execution across all projects."
    },
     {
      question: "How can I get started with Stronghold?",
      answer: "You can connect with our team by sharing your project details and requirements. We offer professional consultation, technical guidance, and reliable execution support to help you move forward with confidence."
    }
  ];

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`${page==="services"?"bg-white":"bg-[#EBF9FB]"} py-20 md:py-32 px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
      
        <div className="flex flex-col gap-8">
          <div>
            <span className="px-4 py-1.5 border border-gray-400/30 rounded-lg text-sm font-medium text-gray-700 bg-white/20">
              FAQ's
            </span>
          </div>

          <h2 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-gray-900 ">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold text-gray-900">
              Looking for clarity before you begin?

            </p>
            <p className="text-[#6B7C8B] max-w-sm">
            Our team is always ready to guide you with the right information and timely support, ensuring confidence at every stage of your project.
            </p>
          </div>

          <button className="bg-[#002D5B] hover:bg-[#003B73] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold transition-all w-fit active:scale-95 shadow-lg shadow-blue-900/10">
            Get a Free Call
            <ArrowUpRight size={20} />
          </button>
        </div>

       
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-blue-200/60"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-7 flex items-center justify-between text-left group"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-[#00A3B1]' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                
               
                <div className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-[#00D1FF] border-[#00D1FF] text-white rotate-180' : 'border-[#00D1FF] text-[#00D1FF]'}`}>
                  <ChevronDown size={16} strokeWidth={3} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-[#6B7C8B] leading-relaxed max-w-xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;