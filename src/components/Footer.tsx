
import React from 'react';
import { Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              </div>
              <span className="text-white font-bold tracking-tight">
                Khát vọng non sông
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Dự án giáo dục lịch sử và tư tưởng Việt Nam, hướng tới khát vọng dân tộc tự cường, non sông liền một dải.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="/" className="hover:text-red-500 transition-colors">Trang chủ</a></li>
              <li><a href="/topics" className="hover:text-red-500 transition-colors">Chủ đề học tập</a></li>
              <li><a href="/#about" className="hover:text-red-500 transition-colors">Về dự án</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Ý nghĩa</h4>
            <p className="text-slate-500 text-sm italic">
              "Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không..."
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2026 Khát vọng non sông liền một dải. Phát triển bởi Đội ngũ Giáo dục.</p>
          <div className="flex gap-6">
            <span>Bảo mật</span>
            <span>Điều khoản</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
