import Image from 'next/image';
import { Play } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anwar & Family",
      location: "Anwar Villa, Kochi",
      initials: "AF",
      avatarBg: "bg-[#B2EBF2]", 
      thumbnail: "/testimonial1.png", 
    },
    {
      name: "Jhon David",
      location: "Owner of Bizopp Mall, Kochi",
      initials: "JD",
      avatarBg: "bg-[#1A1A1A]", 
      thumbnail: "/testimonial2.png",
    }
  ];

  const clientLogos = [
    "/clientlogo1.png", "/clientlogo2.png", "/clientlogo3.png", "/clientlogo4.png", "/clientlogo5.png",
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
     
        <div className="mb-16">
          <div className="mb-6">
            <span className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-600">
              What Our Client Say
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight max-w-3xl">
            Trusted by clients for quality, reliability, and results.
          </h2>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="group border border-gray-100 rounded-[2.5rem] p-4 md:p-6 bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
            >
              
              <div className="relative aspect-video md:aspect-[16/8] rounded-[1.8rem] overflow-hidden mb-6">
                <Image 
                  src={item.thumbnail} 
                  alt={item.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
               
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/50 backdrop-blur-sm bg-white/10 text-white hover:scale-110 transition-transform cursor-pointer">
                    <Play size={20} fill="currentColor" />
                  </div>
                </div>
              </div>

             
              <div className="flex items-center gap-4 px-2 pb-2">
                <div className={`${item.avatarBg} w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${index === 0 ? 'text-gray-800' : 'text-white'}`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="relative">
         
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-[#001D3D] text-white px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">
              Our Valuable Clients
            </div>
            <div className="w-full h-px bg-gray-100" />
          </div>

          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-between opacity-70   transition-all">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="flex justify-center group">
                <Image 
                  src={logo} 
                  width={140} 
                  height={50} 
                  alt="client logo" 
                  className="object-contain max-h-12 w-auto group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;