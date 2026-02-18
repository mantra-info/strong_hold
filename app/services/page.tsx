"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import FAQSection from '@/component/FaqSection';


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function ServicesPage() {
  return (
    <main className="w-full font-sans bg-white overflow-hidden">
     
      <section className="bg-[#EBF9FE] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-sm border border-gray-300 text-xs font-medium text-gray-600 bg-white mb-6"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-24 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={fadeInUp}
              className="flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-gray-200">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <span className="text-gray-400 font-medium mb-4">{service.id}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#002B5B] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <motion.button 
                whileHover={{ x: 5 }}
                className="flex items-center text-[#002B5B] font-bold text-sm hover:underline decoration-2 underline-offset-4 w-fit"
              >
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#EBF9FE] rounded-lg p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Download Our Brochure
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Download the file to get our brochure showcasing services, products, and company details.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#0f172a" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#002B5B] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all whitespace-nowrap shadow-lg shadow-blue-900/10"
          >
            Download Brochure <MoveUpRight className="ml-3 w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <FAQSection page={'services'}/>
    </main>
  );
}

const services = [
  {
    id: "01.",
    title: "Structural Planning & Engineering Support",
    description: "We support projects from the early planning stage by offering practical engineering input for both post-tensioned and conventional civil structures. Our involvement helps align design intent with site realities, ensuring smoother execution and structurally sound outcomes.",
    image: "/services1.png", 
  },
  {
    id: "02.",
    title: "Post-Tensioning Systems & Material Supply",
    description: "We provide complete post-tensioning systems, including tendons, anchorages, and accessories required for execution. All materials are selected to meet performance standards and ensure reliability throughout the life of the structure.",
    image: "/services6.png",
  },
  {
    id: "03.",
    title: "Post-Tensioning Execution, Stressing & Protection",
    description: "Our experienced site teams handle post-tensioning execution, including stressing and protection works. Careful control during these stages ensures effective load transfer, reduced cracking, and long-term durability of structural elements.",
    image: "/services2.png",
  },
  {
    id: "04.",
    title: "Civil Construction & Structural Execution",
    description: "We undertake civil construction works across residential, commercial, and industrial projects. From foundations to structural frames, our focus remains on accuracy, coordination, safety, and consistent quality on site.",
    image: "/services3.png",
  },
  {
    id: "05.",
    title: "Structural Strengthening & Rehabilitation",
    description: "We deliver strengthening and rehabilitation solutions for existing structures using both civil construction methods and post-tensioning techniques. These services help improve load capacity, extend service life, and restore structural performance.",
    image: "/services4.png",
  },
  {
    id: "06.",
    title: "Post-Tensioned & Conventional Structural Systems",
    description: "We execute post-tensioned slabs, beams, and structural components alongside conventional RCC systems. This combined expertise allows us to recommend and implement the most efficient structural solution for each project.",
    image: "/services5.png",
  },
];