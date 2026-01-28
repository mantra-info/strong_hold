import Image from 'next/image';
import { Home, Building2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
          
            <div className="w-fit">
              <span className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-600">
                About StrongHold
              </span>
            </div>

        
            <h2 className="text-3xl md:text-5xl font-medium leading-tight text-gray-900 max-w-2xl">
              Delivering reliable construction through experience, accountability, and precision.
            </h2>

       
            <div className="flex flex-col sm:flex-row rounded-3xl overflow-hidden shadow-sm">
            
              <div className="bg-[#EBF9FB] p-8 flex-1">
                <div className="text-[#00A3B1] mb-4">
                  <Home size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  To be a trusted and recognized post-tensioning contractor known for innovation,
                  reliability, and sustainable concrete construction solutions.
                </p>
              </div>

              <div className="bg-[#008294] p-8 flex-1 text-white">
                <div className="text-white/80 mb-4">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  To provide high-quality post-tensioning construction services that enhance
                  structural efficiency, reduce costs, and deliver long-lasting performance
                  through engineering excellence and safe construction practices.
                </p>
              </div>
            </div>

           
            <div>
              <Link
                href="/about-us"
                className="inline-flex bg-[#002D5B] hover:bg-[#003B73] text-white px-8 py-4 rounded-2xl items-center gap-3 font-medium transition-all active:scale-95"
              >
                More About StrongHold
                <ArrowUpRight size={20} />
              </Link>

            </div>
          </div>

        
          <div className="relative flex justify-center lg:justify-end ">
           
            <div className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[450px]">
              <Image
                src="/building-sketch.png"
                width={300} 
                height={300}
                alt="Architectural Sketch"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;