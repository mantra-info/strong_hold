"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

interface Pageprops{
  page?:string
}
const FAQSection = ({page}:Pageprops) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of construction projects do you handle?",
      answer: "We specialize in a wide range of projects including high-rise residential buildings, commercial complexes, industrial warehouses, and specialized post-tensioning infrastructure."
    },
    {
      id: 2, 
      question: "How do I get a quote for my project?",
      answer: "You can click the 'Get a Free Call' button or contact us through our form. Our engineers will review your structural plans and provide a detailed estimate within 3-5 business days."
    },
    {
      question: "What is your project timeline?",
      answer: "Timelines vary based on project scale. A standard PT slab installation typically takes 7-14 days depending on the square footage and complexity of the design."
    },
    {
      question: "What is your warranty policy?",
      answer: "We provide comprehensive structural warranties on all our post-tensioning works, ensuring long-term durability and compliance with international engineering standards."
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
              You have different questions?
            </p>
            <p className="text-[#6B7C8B] max-w-sm">
              Our team will answer all your questions; we ensure a quick response.
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