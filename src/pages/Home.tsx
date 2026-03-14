
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Zap, BookOpen, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroFlag from '../components/HeroFlag';
import TopicCard from '../components/TopicCard';
import QuoteCard from '../components/QuoteCard';
import { topics } from '../data/content';

export default function Home() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              Dự án giáo dục tri thức
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Khát vọng <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                non sông liền một dải
              </span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              Khám phá lịch sử, triết học và kinh tế chính trị Việt Nam thông qua hành trình 9 thẻ NFC tri thức. Một trải nghiệm học tập hiện đại, trang trọng và đầy tự hào.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/topics"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-red-600/20"
              >
                Bắt đầu hành trình
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#about"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-white/5 rounded-xl font-bold transition-all"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroFlag />
          </motion.div>
        </div>
      </section>

      {/* Random Quote Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <QuoteCard />
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-950 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Cách thức hoạt động</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Sử dụng công nghệ NFC để kết nối tri thức từ thế giới thực vào không gian số.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8 text-red-500" />,
                title: "Scan NFC",
                desc: "Chạm điện thoại vào thẻ NFC tại các khu vực trưng bày để mở trang kiến thức."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
                title: "Tiếp nhận tri thức",
                desc: "Đọc các bài viết chuyên sâu, xem sơ đồ tư duy và lộ trình học tập chi tiết."
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-500" />,
                title: "Củng cố kiến thức",
                desc: "Tham gia các bài trắc nghiệm nhanh và mini-game để ghi nhớ nội dung lâu hơn."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-red-500/30 transition-colors">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-white mb-6">Bản đồ 9 thẻ NFC</h2>
            <p className="text-slate-500">
              Mỗi thẻ NFC tương ứng với một chủ đề quan trọng trong tiến trình phát triển của đất nước. Hãy khám phá trọn vẹn 9 mảnh ghép tri thức.
            </p>
          </div>
          <Link to="/topics" className="text-red-500 font-bold flex items-center gap-2 hover:underline">
            Xem tất cả chủ đề <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.slice(0, 3).map((topic, i) => (
            <TopicCard key={topic.id} topic={topic} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
