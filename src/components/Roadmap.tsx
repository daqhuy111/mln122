
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle } from 'lucide-react';
import { RoadmapStep } from '../data/content';

interface RoadmapProps {
  steps: RoadmapStep[];
}

export default function Roadmap({ steps }: RoadmapProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-red-500 group-hover:text-red-500 transition-colors">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          
          {/* Content */}
          <div className="w-[calc(100%-4rem)] md:w-[45%] p-4 rounded-xl border border-white/5 bg-slate-900/50 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-white">{step.title}</div>
              <time className="font-mono text-xs text-red-500">Bước {index + 1}</time>
            </div>
            <div className="text-slate-400 text-sm leading-relaxed">
              {step.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
