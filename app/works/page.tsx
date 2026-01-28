"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id: 1, title: "Anwar Villa, Kochi", status: "Ongoing", image: "/anvarvilla.png" },
  { id: 2, title: "Bizopp Mall, Kochi", status: "Ongoing", image: "/bizzopmall.png" },
  { id: 3, title: "Chamakala Masjid, Kochi", status: "Ongoing", image: "/chammakala.jpg" },
  { id: 4, title: "Nila Mansion, Kottayam", status: "Completed", image: "/nilamansion.png" },
  { id: 5, title: "Happy Mall, Trissur", status: "Completed", image: "/happymall.png" },
  { id: 6, title: "Church, Kochi", status: "Completed", image: "/churchkochi.png" },
  { id: 7, title: "Modern Apartment, Kochi", status: "Completed", image: "/modernapartment.jpg" },
  { id: 8, title: "Sunset Villa, Idukki",status: "Completed", image: "/anvarvilla.png" },
  { id: 9, title: "Central Plaza, Kochi", status: "Completed",image: "/bizzopmall.png" },
];

const categories = ["All Works", "Ongoing", "Completed"];

export default function WorksSection() {
  const [activeTab, setActiveTab] = useState("All Works");

  const filteredProjects = projects.filter(project => 
    activeTab === "All Works" ? true : project.status === activeTab
  );

  return (
    <section className="w-full bg-white font-sans pb-20 overflow-hidden">
     
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#EBF9FE] py-16 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-md border border-slate-300 text-xs font-medium text-slate-600 bg-white mb-6">
            Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Works
          </h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12">
       
        <div className="flex justify-center gap-8 md:gap-16 border-b border-slate-100 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-xs font-bold transition-colors relative ${
                activeTab === tab ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

    
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 min-h-[600px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group cursor-pointer"
              >
               
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold border ${
                    project.status === "Ongoing" 
                      ? "border-orange-200 text-orange-400" 
                      : "border-emerald-200 text-emerald-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-10 py-3 border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            Load More <MoveUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}