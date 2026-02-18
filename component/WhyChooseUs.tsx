import Image from 'next/image';

const WhyChooseUs = () => {
  const features = [
    "On-Time, On-Budget Delivery",
    "Proven Experience",
    "Safety-First Culture",
    "Clear Communication",
    "Quality Craftsmanship",
    "Long-Term Partnership Approach",
  ];

  const stats = [
    { label: "100%", subtext: "Client Satisfaction" },
    { label: "6+", subtext: "Years Of Experience" },
    { label: "25+", subtext: "Projects Completed" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">


        <div className="relative h-[400px] md:h-[550px] w-full">
          <Image
            src="/whychooseus.jpg"
            alt="Construction team looking at blueprints"
            fill
            className="object-cover rounded-[2rem]"
          />
        </div>


        <div className="flex flex-col gap-8">

          <div>
            <span className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-600">
              Why Choose Us?
            </span>
          </div>


          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 tracking-tight">
            A construction partner focused on reliability, transparency, and results.
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7L16 8L19 5" stroke="#1BC2DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="#1BC2DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span className="text-sm md:text-base font-medium text-gray-800">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          
          <div className="w-full h-px bg-gray-100 my-4" />

          
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className="text-3xl md:text-5xl font-bold text-gray-900">
                  {stat.label}
                </span>
                <span className="text-xs md:text-sm font-semibold text-[#6B7C8B] tracking-wide">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;