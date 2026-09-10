"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { blogPosts } from './blogs-data';


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};


export default function BlogSection() {
  const popularPost = blogPosts[0];
  const recentPosts = blogPosts.slice(0, 3);
  const allPosts = blogPosts.slice(3);

  return (
    <section className="w-full bg-white font-sans pb-20 overflow-hidden">

      <div className="bg-[#EBF9FE] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-md border border-slate-300 text-xs font-medium text-slate-600 bg-white mb-6"
          >
            Blogs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            News & Articles
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  pt-16">


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 py-12 items-stretch">


          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-8">Popular Post</h2>
            <Link href={`/blogs/${popularPost.slug}`} className="group cursor-pointer flex-grow block">
              <div className="relative aspect-[5/3] w-full overflow-hidden rounded-lg mb-6 shadow-sm">
                <Image
                  src={popularPost.image}
                  alt={popularPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[#94A3B8] text-sm font-medium mb-4">{popularPost.date}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight group-hover:text-blue-800 transition-colors">
                {popularPost.title}
              </h3>
            </Link>
          </motion.div>


          <div className="lg:col-span-1 relative flex flex-col">

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 origin-top hidden lg:block"
            />

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:pl-12 flex flex-col h-full"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-8">Recent Posts</h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex-grow flex flex-col justify-between"
              >
                {recentPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={fadeInUp}
                    className="pb-6 lg:pb-0"
                  >
                    <Link href={`/blogs/${post.slug}`} className="flex flex-col group cursor-pointer">
                      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg mb-4 bg-slate-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-[#94A3B8] text-xs font-medium mb-2">{post.date}</p>
                      <h4 className="text-[15px] font-bold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                        {post.title}
                      </h4>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.hr
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="border-slate-200 mb-16 origin-left"
        />


        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-slate-900 mb-8"
          >
            All Posts
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {allPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
              >
                <Link href={`/blogs/${post.slug}`} className="group cursor-pointer block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-blue-400 text-xs font-medium mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-800 transition-colors">
                    {post.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>


        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-10 py-3 border border-slate-300 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
          >
            Load More <MoveUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}