"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MoveUpRight } from 'lucide-react';
import Image from 'next/image';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
        
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99]"
          />

         
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            
            className="fixed inset-0 m-auto w-[92%] md:w-[80%] max-w-7xl h-fit max-h-[80vh] md:max-h-[90vh] bg-[#EBF9FE] z-[100] rounded-2xl md:rounded-3xl overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
          
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/50 md:bg-transparent hover:bg-black/5 rounded-full transition-colors z-[110]"
            >
              <X className="w-6 h-6 md:w-8 md:h-8 text-slate-800" />
            </button>

         
            <div className="flex-1 p-6 md:p-16 flex flex-col justify-between relative">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-md border border-slate-300 text-[10px] md:text-xs font-medium text-slate-600 bg-white/50 mb-4 md:mb-6">
                  Let's Work Together
                </span>
                <h2 className="text-2xl md:text-5xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
                  Ready to Build Your Dream Project?
                </h2>
                <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
                  Whether you have a clear vision or need guidance, StrongHold is here to help. Let's collaborate.
                </p>
              </div>

             
              <div className="hidden md:block mt-8 relative w-full h-48 md:h-80 lg:h-96">
                <Image
                  src="/surveyor-illustration.png"
                  alt="Construction Surveyor"
                  fill
                  className="object-contain object-left-bottom"
                />
              </div>
            </div>

            
            <div className="flex-1 p-4 md:p-12 lg:p-16 flex items-start md:items-center justify-center bg-[#EBF9FE]">
              <div className="bg-white w-full rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Get in Touch!</h3>
                <div className="h-px bg-slate-100 w-full mb-6 md:mb-8" />

                <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs md:text-sm font-bold text-slate-800">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full h-11 md:h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs md:text-sm font-bold text-slate-800">Mobile Number</label>
                      <input
                        type="tel"
                        placeholder="Enter your mob. no."
                        className="w-full h-11 md:h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                      />
                    </div>
                  </div>

               
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs md:text-sm font-bold text-slate-800">
                        Mail ID <span className="text-slate-400 font-normal ml-1 text-[10px] md:text-xs">(optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your mail address"
                        className="w-full h-11 md:h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs md:text-sm font-bold text-slate-800">Service Type</label>
                      <div className="relative">
                        <select
                          defaultValue=""
                          className="w-full h-11 md:h-12 pl-4 pr-10 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none text-sm text-slate-700"
                        >
                          <option value="" disabled>Choose service type</option>
                          <option value="design">Post-Tensioning Design</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs md:text-sm font-bold text-slate-800">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Type your message here"
                      className="w-full p-3 md:p-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm resize-none"
                    />
                  </div>

                 
                  <button className="w-full md:w-auto bg-[#002B5B] text-white px-8 h-12 md:h-14 rounded-xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-all">
                    Submit Enquiry <MoveUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}