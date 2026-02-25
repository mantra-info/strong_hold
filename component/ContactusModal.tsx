"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MoveUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState({ type: null, message: '' });
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || 'Failed to submit enquiry. Please try again.');
      }

      setSubmitState({
        type: 'success',
        message: 'Thanks for reaching out. We will contact you shortly.',
      });
      setFormData({ name: '', phone: '', email: '', location: '', message: '' });
    } catch (error) {
      setSubmitState({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Failed to submit enquiry. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  Let&apos;s Work Together
                </span>
                <h2 className="text-2xl md:text-5xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
                  Ready to Build Your Dream Project?
                </h2>
                <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
                  Whether you have a clear vision or need guidance, StrongHold is here to help. Let&apos;s collaborate.
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
                {submitState.type === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6 md:p-8"
                  >
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15, type: 'spring', stiffness: 220, damping: 16 }}
                      className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100"
                    >
                      <CheckCircle2 className="h-11 w-11 text-emerald-600" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                      className="absolute right-4 top-4 text-sky-400"
                    >
                      <Sparkles className="h-5 w-5" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.35 }}
                      className="absolute left-6 top-6 text-emerald-400"
                    >
                      <Sparkles className="h-4 w-4" />
                    </motion.div>

                    <h3 className="text-center text-2xl font-bold text-slate-900">Thank You!</h3>
                    <p className="mt-2 text-center text-sm text-slate-600 md:text-base">
                      Your enquiry was sent successfully. Our team will contact you soon.
                    </p>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                      className="mx-auto mt-5 h-1 max-w-xs rounded-full bg-emerald-300"
                    />

                    <button
                      type="button"
                      onClick={() => setSubmitState({ type: null, message: '' })}
                      className="mt-6 w-full rounded-xl bg-[#002B5B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a3b74]"
                    >
                      Send Another Enquiry
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Get in Touch!</h3>
                    <div className="h-px bg-slate-100 w-full mb-6 md:mb-8" />

                    <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                  
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs md:text-sm font-bold text-slate-900">Name</label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full h-11 md:h-12 px-4 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs md:text-sm font-bold text-slate-900">Mobile Number</label>
                          <input
                            name="phone"
                            type="tel"
                            placeholder="Enter your mob. no."
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full h-11 md:h-12 px-4 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                          />
                        </div>
                      </div>

               
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs md:text-sm font-bold text-slate-900">
                            Mail ID <span className="text-slate-500 font-normal ml-1 text-[10px] md:text-xs">(optional)</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="Enter your mail address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full h-11 md:h-12 px-4 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs md:text-sm font-bold text-slate-900">Location</label>
                          <input
                            name="location"
                            type="text"
                            placeholder="Enter your location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full h-11 md:h-12 px-4 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                          />
                        </div>
                      </div>

                  
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs md:text-sm font-bold text-slate-900">Message</label>
                        <textarea
                          name="message"
                          rows={3}
                          placeholder="Type your message here"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full p-3 md:p-4 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm resize-none"
                        />
                      </div>

                 
                      {submitState.type === 'error' && (
                        <p className="text-sm text-red-600">{submitState.message}</p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-[#002B5B] text-white px-8 h-12 md:h-14 rounded-xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}{' '}
                        <MoveUpRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
