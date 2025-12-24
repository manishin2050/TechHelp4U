'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {  ArrowRight } from 'lucide-react';
import Link from "next/link";
// import { Code2, Cpu, Shield, Network, Database, Zap } from 'lucide-react';

export function Teams() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {  img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"

    },
    {  title: 'Founder', description: 'Intelligent systems for smart decisions lorem23 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis numquam, amet delectus nemo, temporibus molestiae quia ea dignissimos placeat voluptatibus quisquam nobis perferendis. Nihil deserunt quod maxime suscipit, ut omnis quaerat corrupti error quis ad pariatur sunt, tenetur rem totam molestiae! Voluptate nihil dicta velit voluptatibus delectus sint minus blanditiis ipsa cumque distinctio. Nihil sapiente iusto omnis quod fugit, nam reprehenderit nulla? Voluptatum, delectus harum, cupiditate illum est quod a itaque, modi aspernatur at veniam? Facere neque deleniti et corporis cupiditate harum enim nisi architecto mollitia natus sapiente quas minus, odit distinctio quisquam vel ipsa amet explicabo! Dolores, nisi odit!' },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="teams" ref={ref} className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12"
        >
         {services.map((service, i) => (
  <motion.div
    key={i}
    variants={itemVariants}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className="group glassmorphism p-6 rounded-2xl hover:border-purple-500/50 transition-all duration-300  glow-sm hover:glow-md"
  >
    {/* 🖼️ IMAGE CARD */}
    {service.img ? (
      <div className="relative h-[55vh]  rounded-xl overflow-hidden">
        <img
          src={service.img}
          alt="service image"
          className="w-full h-full object-cover group-hover:scale-105 cursor-default transition-transform duration-300"
        />
      </div>
    ) : (
      /* 📝 TEXT CARD */
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 cursor-default group-hover:text-purple-400 transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-400 mb-6 cursor-default">
          {service.description}
        </p>
        <Link href={`/our-team`} className='mt-auto' >
         <Button className="bg-gradient-to-r  cursor-pointer from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full px-8 py-6 text-base">
            Explore More
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    )}
  </motion.div>
))}

        </motion.div>
      </div>
    </section>
  );
}


