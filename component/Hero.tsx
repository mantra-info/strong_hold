import { ArrowUpRight, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-end pb-12 md:pb-20 px-4 md:px-12 overflow-hidden">
           
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
                <img src="/fallback-image.jpg" alt="Background" className="w-full h-full object-cover" />
            </video>

            
            <div className="absolute inset-0 bg-black/50 z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-[1]" />

            <div className="max-w-7xl mx-auto w-full z-10">
               
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium max-w-5xl leading-[1.2] tracking-tight mb-8 md:mb-12">
                  Engineering Smarter, Stronger Concrete Structures

                </h1>

               
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href={'/about-us'} className="bg-[#003B73] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold hover:bg-blue-700 transition-all active:scale-95 w-full sm:w-auto">
                            Who We Are?
                            <ArrowUpRight size={20} />
                        </Link>
                        <Link href={'/works'} className="backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold hover:bg-white/10 transition-all active:scale-95 w-full sm:w-auto">
                            View Our Projects
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>

                   
                    <button className="group flex items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 p-2 pr-6 rounded-2xl hover:bg-white/10 transition-all w-fit">
                        <div className="relative w-12 h-12 flex-shrink-0">
                           
                            <div className="bg-red-500/20 rounded-xl w-full h-full flex items-center justify-center">
                                <Image src="/pdf.png" width={32} height={32} alt="pdf icon" />
                            </div>
                            
                            <div className="absolute inset-0 flex items-center justify-center bg-blue-600 rounded-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                <Download size={20} className="text-white" />
                            </div>
                        </div>

                        <div className="text-left">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">
                                Download
                            </p>
                            <p className="text-white text-sm md:text-base font-semibold">
                                Our Brochure
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;