
import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter } from 'lucide-react';
import TopicCard from '../components/TopicCard';
import QuoteCard from '../components/QuoteCard';
import { topics } from '../data/content';

export default function TopicList() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('Tất cả');

  const categories = ['Tất cả', 'Lịch sử', 'Triết học', 'Kinh tế'];

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Tất cả' || topic.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl font-black text-white mb-4">Danh sách chủ đề</h1>
        <p className="text-slate-500">Khám phá 9 mảnh ghép tri thức quan trọng về đất nước Việt Nam.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Tìm kiếm chủ đề..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-white/5 rounded-xl text-white focus:outline-none focus:border-red-500/50 transition-colors"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredTopics.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredTopics.map((topic, i) => (
            <TopicCard key={topic.id} topic={topic} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-white/5 mb-24">
          <p className="text-slate-500">Không tìm thấy chủ đề nào phù hợp.</p>
        </div>
      )}

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Lời hay ý đẹp</h2>
          <p className="text-slate-500 text-sm">Những tư tưởng lớn làm thay đổi thế giới</p>
        </div>
        <QuoteCard />
      </div>
    </div>
  );
}
