import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const RecentWorks = () => {
  const projects = [
    {
      title: "Anwar Villa, Kochi",
      image: "/property1.png", 
    },
    {
      title: "Bizopp Mall, Kochi",
      image: "/property2.png",
    },
    {
      title: "Chamakala Masjid, Kochi",
      image: "/property3.png",
    }
  ];

  return (
    <section className="bg-[#001A38] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="flex flex-col gap-6">
            
            <div className="w-fit">
              <span className="px-4 py-1.5 border border-white/20 rounded-lg text-xs font-medium text-white/80 uppercase tracking-widest">
                Recent Works
              </span>
            </div>
            
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-4xl tracking-tight">
              Demonstrating expertise through projects across multiple sectors.
            </h2>
          </div>

         
          <Link 
            href="/works" 
            className="group border border-white/30 hover:border-white text-white px-8 py-3.5 rounded-full flex items-center gap-3 transition-all duration-300 text-sm font-semibold"
          >
            View All Works
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
             
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              
              <h3 className="text-white text-lg font-medium tracking-wide">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentWorks;