import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: "01.",
      title: "Post-Tensioning Design Coordination",
      description: "We work alongside structural engineers to ensure accurate tendon layout, profiling, anchorage systems, and stressing sequences, fully compliant with project specifications and design standards."
    },
    {
      id: "02.",
      title: "Supply of Post-Tensioning Systems & Materials",
      description: "We supply high-quality PT tendons, anchorages, ducts, and accessories, ensuring compatibility, durability, and performance."
    },
    {
      id: "03.",
      title: "Stressing & Grouting Services",
      description: "Our controlled post-tensioning stressing and grouting services ensure proper force transfer, crack control, and long-term protection of tendons."
    },
    {
      id: "04.",
      title: "Structural Strengthening & PT Repairs",
      description: "We offer post-tensioning repair, modification, and strengthening solutions for existing concrete structures to improve load capacity and service life."
    }
  ];

  return (
    <section className="relative bg-[#EBF9FB] py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        
        <div className="flex flex-col gap-8 relative z-10">
          <div>
            <span className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-600 bg-white/50">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
            Delivering reliable construction services from planning through completion.
          </h2>

          <div>
            <button className="bg-[#002D5B] hover:bg-[#003B73] text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold transition-all active:scale-95">
              Get a Quote
              <ArrowUpRight size={20} />
            </button>
          </div>

          
          <div className="hidden lg:block absolute -bottom-[450px] -left-[100px] w-[600px] h-[600px] opacity-100">
            
          </div>
        </div>

       
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex gap-6 md:gap-10 py-8 ${index !== services.length - 1 ? 'border-b border-blue-200/50' : ''}`}
            >
              <span className="text-lg md:text-xl font-bold text-gray-900 min-w-[35px]">
                {service.id}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="lg:hidden flex justify-center mt-12 opacity-20">
        
      </div>
    </section>
  );
};

export default ServicesSection;