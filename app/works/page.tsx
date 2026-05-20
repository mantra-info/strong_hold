"use client";

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { MoveUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  status: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Anwar Villa, Kochi",
    status: "Ongoing",
    images: ["/projects/ANWAR.jpg.jpeg", "/projects/ANWAR01.jpg.jpeg"],
  },
  {
    id: 2,
    title: "Bizopp Mall, Kochi",
    status: "Ongoing",
    images: ["/projects/bizzop01.jpg.jpeg", "/projects/bizzop002.jpg.jpeg"],
  },
  {
    id: 3,
    title: "Chamakala Masjid, Kochi",
    status: "Ongoing",
    images: [
      "/projects/MASJID01.jpg.jpeg",
      "/projects/MASJID02.jpg.jpeg",
      "/projects/MASJID002.jpg.jpeg",
      "/projects/masjid%200002.jpg.jpeg",
    ],
  },
  { id: 4, title: "Nila Mansion, Kottayam", status: "Completed", images: ["/nila_mansion.jpg"] },
  { id: 5, title: "Happy Mall, Trissur", status: "Completed", images: ["/happymall.png"] },
  { id: 6, title: "Church, Kochi", status: "Completed", images: ["/churchkochi.png"] },
  { id: 7, title: "Modern Apartment, Kochi", status: "Completed", images: ["/modernapartment.jpg"] },
  { id: 8, title: "Sunset Villa, Idukki", status: "Completed", images: ["/sunset_villa_idukki.webp"] },
  { id: 9, title: "Central Plaza, Kochi", status: "Completed", images: ["/central_plaza.jpg"] },
];

const categories = ["All Works", "Ongoing", "Completed"];

function ImageCarouselModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = project.images.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  const jumpTo = useCallback(
    (i: number) => {
      if (i === index) return;
      setDirection(i > index ? 1 : -1);
      setIndex(i);
    },
    [index]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  };

  const progressWidth = total > 1 ? ((index + 1) / total) * 100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex flex-col bg-zinc-950"
      onClick={onClose}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 z-20">
        <motion.div
          className="h-full bg-white/70"
          animate={{ width: `${progressWidth}%` }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <div
        className="relative z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/70 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span
            className={`w-2 h-2 rounded-full ${
              project.status === "Ongoing" ? "bg-orange-400" : "bg-emerald-400"
            }`}
          />
          <h2 className="text-white font-semibold text-base tracking-tight">{project.title}</h2>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
              project.status === "Ongoing"
                ? "border-orange-400/40 text-orange-300 bg-orange-400/10"
                : "border-emerald-400/40 text-emerald-300 bg-emerald-400/10"
            }`}
          >
            {project.status}
          </span>
        </div>

        {total > 1 && (
            <span className="text-white/40 text-xs tabular-nums font-medium">
              {index + 1} <span className="text-white/20">/</span> {total}
            </span>
          )}
      </div>

      {/* Top-right close button — fixed, always on top */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 hover:border-zinc-400 shadow-lg transition-all duration-200 hover:scale-110 group"
      >
        <X className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
      </button>

      {/* Main image — clicking the dark padding area closes the modal */}
      <div className="flex-1 relative flex items-center justify-center px-16 overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={project.images[index]}
                alt={`${project.title} — ${index + 1}`}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        {total > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-4 z-10 group flex items-center justify-center w-11 h-11 rounded-full bg-white/8 hover:bg-white/16 border border-white/10 hover:border-white/25 backdrop-blur-sm transition-all duration-200 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-4 z-10 group flex items-center justify-center w-11 h-11 rounded-full bg-white/8 hover:bg-white/16 border border-white/10 hover:border-white/25 backdrop-blur-sm transition-all duration-200 hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </button>
          </>
        )}

        {/* Hint */}
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/20 text-[10px] tracking-widest uppercase select-none pointer-events-none">
          Click outside image or press ESC to close
        </p>
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div
          className="relative z-20 flex items-center justify-center gap-2.5 px-6 py-5 bg-gradient-to-t from-black/70 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          {project.images.map((src, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                i === index
                  ? "w-16 h-12 ring-2 ring-white ring-offset-2 ring-offset-zinc-950 opacity-100"
                  : "w-12 h-10 opacity-40 hover:opacity-70 hover:scale-105"
              }`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
              {i === index && (
                <div className="absolute inset-0 bg-white/10" />
              )}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function WorksSection() {
  const [activeTab, setActiveTab] = useState("All Works");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) =>
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Our Major Works</h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12">
        {/* Tabs */}
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

        {/* Grid */}
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
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-slate-100">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Multi-image badge */}
                  {project.images.length > 1 && (
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {project.images.length} photos
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-0.5 rounded-full text-[10px] font-bold border ${
                      project.status === "Ongoing"
                        ? "border-orange-200 text-orange-400"
                        : "border-emerald-200 text-emerald-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ImageCarouselModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
