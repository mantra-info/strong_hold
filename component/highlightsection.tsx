import Image from 'next/image';

const HighlightSection = () => {
    return (
        <section className="relative w-full h-[400px] md:h-[400px] lg:h-[400px] flex items-center justify-center overflow-hidden">
            
            <Image
                src="/highlightImage.jpg"
                alt="Construction Team"
                fill
                className="object-cover z-0"
                priority
            />

          
            <div className="absolute inset-0 bg-black/60 z-[1]" />

           
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-4">

               
                <div className="flex items-center gap-2 mb-2">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7L16 8L19 5" stroke="#1BC2DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="#1BC2DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <p className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
                        Best Construction Company in Kochi
                    </p>
                </div>

               
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.2]">
                  Leading Structural Engineering & Construction Experts

                </h2>
            </div>
        </section>
    );
};

export default HighlightSection;