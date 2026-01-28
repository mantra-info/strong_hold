"use client"; // Required for useState in Next.js App Router
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import ContactModal from './ContactusModal';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 const [isModalOpen, setIsModalOpen] = useState(false);
  const navLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/works' },
    { name: 'Blogs', href: '/blogs' },
  ];

  return (
    <>
     <nav className="fixed top-0 w-full z-[100] bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
     
        <Link href={'/'} className="flex items-center">
          <Image 
            src='/logo.png' 
            width={120} 
            height={40} 
            alt='logo' 
            className="w-24 md:w-32 h-auto"
          />
        </Link>

      
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

       
        <div className="hidden md:block">
          <button 
            type='button'
            onClick={() => {setIsOpen(false),setIsModalOpen(true)}}
            className="bg-[#003B73] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all text-sm font-semibold"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </button>
        </div>

       
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          > 
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

     
      <div className={`fixed inset-x-0 top-20 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'}`}>
        <div className="flex flex-col p-6 gap-6 text-lg font-medium text-white">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="border-b border-white/10 pb-4">
              {link.name}
            </Link>
          ))}
          <button 
            type='button'
            onClick={() => {setIsOpen(false),setIsModalOpen(true)}}
            className="bg-[#003B73] text-white p-4 rounded-xl flex items-center justify-center gap-2 font-semibold"
          >
            Contact Us
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </nav>
          <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </>
   
  );
};

export default Navbar;