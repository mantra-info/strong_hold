import Image from 'next/image';
import { ArrowUpRight, Heart, Shield, Users, Zap } from 'lucide-react';
import OpenContactButton from '@/component/OpenContactButton';


const VALUES = [
  {
    icon: <Shield size={20} className="text-[#00D1FF]" />,
    title: "Structural Intelligence",
    description: "By adding Post-Tensioning to our civil works, we let architects build spaces without columns and with broader spans. This implies that our clients get more usable square feet and a better, more efficient use of concrete and steel. We combine the \"smartness\" of a specialist with the \"grit\" of a general contractor."
  },
  {
    icon: <Zap size={20} className="text-[#00D1FF]" />,
    title: "Quality & Integrity",
    description: "We see every project as a personal promise to do a good job. We follow a strict, open approach no matter what we're doing, whether it's laying a foundation or putting stress on a high-tensile tendon. We design structures that not only meet rules but also earn the trust of the people who live in them for life by combining traditional civil craftsmanship with international PT standards."
  },
  {
    icon: <Heart size={20} className="text-[#00D1FF]" />,
    title: "Culture of Collective Safety",
    description: "We take our responsibilities for managing huge internal forces during post-tensioning very seriously. We make our safety rules more human by hiring highly trained supervisors and enforcing strict site management. This way, every worker gets home safely and every project stays a safe investment for the developer."
  },
  {
    icon: <Users size={20} className="text-[#00D1FF]" />,
    title: "Synergistic Partnership",
    description: "We don't only work as a contractor, we work with you as a structural partner. We make sure that the Civil + PT workflow goes smoothly by keeping lines of communication open between developers, consultants, and our site teams. We keep the construction site from getting too crazy so you can focus on the big picture, knowing that the technical details are in good hands."
  }
];

const STATS = [
  { value: "10+", label: "Years Of Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "100+", label: "Professionals" },
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
                We are a civil contracting company that works in many different fields. We employ both new Post-Tensioning technology and old-fashioned building skills. We know how to build structural frames that use space better, require fewer resources, and last longer than most RCC methods.

                  </p>
                  <p>
           We assist developers construct sensibly by making it easier for them to get from complicated structural design to strict site implementation. Our experts make sure that every slab and column is as strong and affordable as possible, whether they are building a sophisticated home or a tall business center.
                  </p>
                  <p>
                    We don't merely follow plans at StrongHold; we also give technical advice. We use a disciplined, process-driven approach to every project that blends a thorough grasp of how concrete works with safety and engineering integrity.
                  </p>
                </div>
                <div className="pt-4">
                  <OpenContactButton className="bg-[#002D5B] hover:bg-[#003B73] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold transition-all active:scale-95 shadow-lg shadow-blue-900/10 w-full sm:w-fit">
                    Get a Quote
                    <ArrowUpRight size={20} />
                  </OpenContactButton>
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

     
      <section className="bg-[#EBF9FB] py-10 lg:py-14 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex flex-col gap-8 items-center text-center">
           
            <div className="absolute -top-12 right-0 w-24 h-20 md:w-32 md:h-24 opacity-20">
               <Image 
                src="/quote.png" 
                fill 
                alt="quote decoration" 
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-6 relative z-10 items-center text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Founders Message</h2>
              <div className="flex flex-col gap-6 text-[#6B7C8B] leading-relaxed text-base md:text-[17px] max-w-2xl">
                <p>“We don't just use concrete and steel to build, we also use trust. You have to follow the rules to get that. I founded StrongHold to make sure that the Indian construction sector is held to a high technical standard. To me, Post-Tensioning isn't just a process, it's a pledge to be careful and accurate. We keep our promise to our clients with every foundation we build and every wire we tension.</p>
                <p>We respect your idea and show it by paying attention to the small details that make sure your project is done honestly, safely, and to the highest standards. We at StrongHold build strength that lasts.”
</p>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorySection;
