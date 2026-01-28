'use client'
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Facebook, 
  Instagram, 
  Youtube, 
  ArrowUp,
  Phone
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001122] text-white pt-20 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="relative border-b border-white/10 pb-20 mb-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-2xl mb-8">
              Thinking about a project?<br />
              Let’s bring it to life.
            </h2>
            
            <div className="flex flex-wrap gap-4">
              
              <button className="bg-[#00D1FF] hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl flex items-center gap-3 font-bold transition-all active:scale-95">
                Call Us Now
                <ArrowUpRight size={20} />
              </button>

              
              <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-2xl flex items-center gap-3 font-bold transition-all active:scale-95">
                Chat via Whatsapp
                <Image src="/whatsapp-icon.png" width={50} height={50} alt="whatsapp"  />
              </button>
            </div>
          </div>

      
          <div className="hidden lg:block absolute right-0 -top-10 opacity-60">
             <Image 
                src="/building-outline.png"
                width={300} 
                height={400} 
                alt="Building graphic" 
                className="object-contain"
             />
          </div>
        </div>

 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
        
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
                <Image src="/logo.png" width={180} height={60} alt="Stronghold Logo" className="w-48 h-auto" />
            </div>

            <div className="flex items-center gap-6">
              <Link href="#" className="text-white/80 hover:text-[#00D1FF] transition-colors"><Facebook size={24} /></Link>
              <Link href="#" className="text-white/80 hover:text-[#00D1FF] transition-colors"><Instagram size={24} /></Link>
            
              <Link href="#" className="text-white/80 hover:text-[#00D1FF] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </Link>
              <Link href="#" className="text-white/80 hover:text-[#00D1FF] transition-colors"><Youtube size={26} /></Link>
            </div>
          </div>

       
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-gray-400 font-medium">Reach Us</h4>
              <p className="text-[#00D1FF] font-medium leading-relaxed max-w-[250px]">
                02 Floor, Muhammed Haji Building Near Sai Service Centre, Oppo Lulu Mall, Edappally, Kochi
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-gray-400 font-medium">Contact Us</h4>
              <div className="flex flex-col gap-1 text-[#00D1FF] font-medium">
                <Link href="mailto:hello@stronghold.in">hello@stronghold.in</Link>
                <Link href="tel:+919876543210">+91 9876543210</Link>
              </div>
            </div>
          </div>

         
          <div className="flex flex-col gap-6">
            <h4 className="text-gray-400 font-medium">Quick Links</h4>
            <div className="flex flex-col gap-4 text-white/90">
              <Link href="#" className="hover:text-[#00D1FF] transition-colors">About Us</Link>
              <Link href="#" className="hover:text-[#00D1FF] transition-colors">Services</Link>
              <Link href="#" className="hover:text-[#00D1FF] transition-colors">Works</Link>
              <Link href="#" className="hover:text-[#00D1FF] transition-colors">FAQ's</Link>
              <Link href="#" className="hover:text-[#00D1FF] transition-colors">Blogs</Link>
            </div>
          </div>

      
          <div className="flex flex-col gap-6">
            <h4 className="text-gray-400 font-medium">Useful Links</h4>
            <div className="flex flex-col gap-4 text-white/90">
              <Link href="#" className="hover:text-[#00D1FF] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#00D1FF] transition-colors">Terms & Conditions</Link>
            </div>
          </div>

        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10">
          <p className="text-sm text-white/60">
            <span className="text-[#00D1FF]">© 2026</span> StrongHold . All Rights Reserved
          </p>
          
          <div className="flex items-center gap-8">
            <p className="text-sm text-white/60">
              Designed&Developed By <span className="text-[#00D1FF] font-bold">mits</span>
            </p>
            
          
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;