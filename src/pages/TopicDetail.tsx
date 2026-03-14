
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Map, Milestone, GraduationCap, Gamepad2 } from 'lucide-react';
import { topics, roadmaps, quizzes, mindmaps, miniGames } from '../data/content';
import Roadmap from '../components/Roadmap';
import Quiz from '../components/Quiz';
import Mindmap from '../components/Mindmap';
import MiniGame from '../components/MiniGame';

export default function TopicDetail() {
  const { id } = useParams();
  const topic = topics.find(t => t.id === id);
  const roadmap = roadmaps[id || ''];
  const quiz = quizzes[id || ''];
  const mindmap = mindmaps[id || ''];
  const miniGame = miniGames[id || ''];

  if (!topic) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl text-white">Chủ đề không tồn tại</h2>
        <Link to="/topics" className="text-red-500 mt-4 inline-block">Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link to="/topics" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Quay lại danh sách
        </Link>
        
        <div className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">
          {topic.category}
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          {topic.title}
        </h1>
        <div className="p-6 bg-slate-900/50 border-l-4 border-red-600 rounded-r-xl text-slate-300 italic leading-relaxed">
          {topic.summary}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-invert prose-red max-w-none mb-20">
          <div 
            className="text-slate-400 leading-loose space-y-6"
            dangerouslySetInnerHTML={{ __html: topic.content }}
          />
        </article>

        {/* Mindmap Section */}
        {mindmap && (
          <section className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-blue-600/10 rounded-lg">
                <Map className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">Sơ đồ tư duy</h2>
            </div>
            <Mindmap nodes={mindmap.nodes} edges={mindmap.edges} />
          </section>
        )}

        {/* Roadmap Section */}
        {roadmap && (
          <section className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-yellow-600/10 rounded-lg">
                <Milestone className="w-6 h-6 text-yellow-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">Lộ trình học tập</h2>
            </div>
            <Roadmap steps={roadmap} />
          </section>
        )}

        {/* MiniGame Section */}
        {miniGame && (
          <section className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-purple-600/10 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">Trò chơi củng cố</h2>
            </div>
            <MiniGame game={miniGame} />
          </section>
        )}

        {/* Quiz Section */}
        {quiz && (
          <section id="quiz" className="mb-32 pt-20 border-t border-white/5">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-emerald-600/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-emerald-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">Kiểm tra kiến thức</h2>
            </div>
            <Quiz questions={quiz} />
          </section>
        )}

        {/* Conclusion */}
        <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-2xl mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-500" />
            Kết luận
          </h3>
          <p className="text-slate-400 leading-relaxed">
            {topic.conclusion}
          </p>
        </div>

        {/* Significance */}
        <div className="p-8 bg-red-600/5 border border-red-600/20 rounded-2xl mb-20">
          <h3 className="text-lg font-bold text-red-500 mb-4">
            Ý nghĩa đối với sự phát triển của đất nước Việt Nam hiện nay
          </h3>
          <p className="text-slate-300 leading-relaxed italic">
            {topic.significance}
          </p>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-white/5">
          <Link to="/topics" className="text-slate-500 hover:text-white transition-colors text-sm font-bold">
            ← Tất cả chủ đề
          </Link>
        </div>
      </div>
    </div>
  );
}
