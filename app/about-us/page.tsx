import Image from 'next/image';
import { ArrowUpRight, Heart, Shield, Users, Zap } from 'lucide-react';


const VALUES = [
  {
    icon: <Shield size={20} className="text-[#00D1FF]" />,
    title: "Engineering Excellence",
    description: "We are driven by technical accuracy and structural performance. Every post-tensioning system and civil construction activity is executed with engineering precision, ensuring safety, efficiency, and long-term durability."
  },
  {
    icon: <Zap size={20} className="text-[#00D1FF]" />,
    title: "Quality & Compliance",
    description: "Quality is embedded in every stage of our work. From material selection to site execution, we follow strict quality control procedures and comply with industry standards to deliver structures that perform reliably over time."
  },
  {
    icon: <Heart size={20} className="text-[#00D1FF]" />,
    title: "Safety Responsibility",
    description: "Safety is a non-negotiable priority with us. We implement disciplined site practices, trained supervision, and proven methodologies to ensure a safe working environment for our teams and stakeholders."
  },
  {
    icon: <Users size={20} className="text-[#00D1FF]" />,
    title: "Collaborative Approach",
    description: "Successful projects are built through coordination. We work closely with developers, consultants, and contractors to ensure seamless integration, clear communication, and smooth execution from start to finish."
  }
];

const STATS = [
  { value: "100%", label: "Client Satisfaction" },
  { value: "6+", label: "Years Of Experience" },
  { value: "25+", label: "Projects Completed" },
  { value: "20+", label: "Professionals" },
];

const StorySection = () => {
  return (
    <div className="w-full">
    
      <section className="w-full">
        <div className="bg-[#EBF9FB] pt-16 pb-12 md:pt-24 md:pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
              <div className="w-fit">
                <span className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white/50 backdrop-blur-sm">
                  Welcome to StrongHold Structures
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] lg:leading-[1.1] text-gray-900 tracking-tight max-w-full lg:max-w-[65%]">
                Delivering reliable construction through experience, accountability, and precision.
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white pb-16 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
              <div className="lg:col-span-7 flex flex-col gap-6 pt-8 md:pt-12">
                <div className="w-fit">
                  <span className="px-3 py-1 border border-gray-200 rounded-md text-[10px] uppercase font-bold tracking-widest text-gray-500 bg-gray-50">
                    Our Story
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">StrongHold Structure</h3>
                <div className="flex flex-col gap-5 text-[#6B7C8B] leading-relaxed max-w-xl text-sm md:text-base lg:text-[17px]">
                  <p>
                  We are a specialised construction company delivering advanced post-tensioning solutions alongside dependable civil construction services. We focus on creating structurally efficient buildings that optimise materials, enhance performance, and ensure long-term reliability.
                  </p>
                  <p>
             With a wide range of industry experience, our team collaborates closely with developers, structural consultants, and contractors to deliver customized solutions for each project. From planning to execution, we approach every structure with technical accuracy and accountability. <br />
             Our strength lies in combining engineering expertise with practical site execution, ensuring projects are delivered safely, efficiently, and to the highest standards.


                  </p>
                </div>
                <div className="pt-4">
                  <button className="bg-[#002D5B] hover:bg-[#003B73] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold transition-all active:scale-95 shadow-lg shadow-blue-900/10 w-full sm:w-fit">
                    Get a Quote
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[500px] lg:h-[600px] xl:h-[700px] lg:-mt-48 xl:-mt-60 z-20">
                <div className="relative w-full h-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                  <Image 
                    src="/aboutsection.png" 
                    alt="StrongHold Construction Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative bg-[#001122] py-20 md:py-28 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 L15 0 L30 15 L45 0 L60 15' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 40px'
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {VALUES.map((item, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                  <div className="bg-[#00D1FF]/10 p-2 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 mb-16 md:mb-24">
            <div className="w-fit">
              <span className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-600">Our Commitment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001D3D] tracking-tight">Why Choose StrongHold?</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12">
            {STATS.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center lg:items-start lg:pl-8 first:pl-0 ${index !== STATS.length - 1 ? 'lg:border-r border-gray-200' : ''}`}
              >
                <span className="text-4xl md:text-6xl font-bold text-[#001D3D] mb-2">{stat.value}</span>
                <p className="text-[#6B7C8B] text-sm md:text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-[#EBF9FB] py-2 lg:py-2 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  items-center">
          
          <div className="relative flex items-center justify-center">
          
            <div className="absolute w-[120%] h-[120%] md:w-[140%] md:h-[140%] opacity-100 z-0">
               {/* <Image src="/logo-icon.png" fill alt="bg" className="object-contain" /> */}
            </div>

            <div className="relative z-10 w-full max-w-[550px] aspect-[4/5]">
              <Image src="/founder.png" fill alt="Abraham John" className="object-contain" priority />
            </div>
          </div>

          <div className="relative flex flex-col gap-8">
           
            <div className="absolute -top-12 right-0 w-24 h-20 md:w-32 md:h-24 opacity-20">
               <Image 
                src="/quote.png" 
                fill 
                alt="quote decoration" 
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Founder&apos;s Message</h2>
              <div className="flex flex-col gap-6 text-[#6B7C8B] leading-relaxed text-base md:text-[17px]">
                <p>We began with a simple idea, to build structures the right way, with honesty, care, and technical responsibility.</p>
                <p>Over the years, I’ve learned that post-tensioning is not just about systems and calculations. It’s about precision on site, attention to detail, and taking responsibility for every structure we deliver. That mindset shapes how we work every day.</p>
                <p>What matters most to me is the trust our clients place in us. We respect that trust by focusing on quality, safety, and timely execution, while working closely with everyone involved in the project. As we continue to grow, our commitment remains the same, to build strong, reliable structures and lasting relationships.</p>
              </div>
            </div>

            <div className="pt-8 border-t border-blue-200/60 relative z-10">
              <h4 className="text-xl font-bold text-gray-900">Abraham John</h4>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mt-1">Managing Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorySection;