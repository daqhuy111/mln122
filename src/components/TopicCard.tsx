
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Topic } from '../data/content';

interface TopicCardProps {
  topic: Topic;
  index: number;
  key?: string | number;
}

export default function TopicCard({ topic, index }: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-slate-900 border border-white/5 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-red-600/10 rounded-lg">
          <BookOpen className="w-5 h-5 text-red-500" />
        </div>
        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 bg-slate-950 px-2 py-1 rounded border border-white/5">
          {topic.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
        {topic.title}
      </h3>
      
      <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
        {topic.summary}
      </p>
      
      <Link
        to={`/topic/${topic.id}`}
        className="flex items-center gap-2 text-red-500 font-semibold text-sm group/btn"
      >
        Khám phá ngay
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
      
      {/* Decorative background number */}
      <span className="absolute bottom-4 right-6 text-6xl font-black text-white/5 pointer-events-none select-none">
        0{topic.id}
      </span>
    </motion.div>
  );
}
