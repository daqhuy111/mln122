
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, RefreshCw } from 'lucide-react';
import { quotes } from '../data/content';

export default function QuoteCard() {
  const [quote, setQuote] = React.useState(quotes[0]);
  const [isExiting, setIsExiting] = React.useState(false);

  const getRandomQuote = () => {
    setIsExiting(true);
    setTimeout(() => {
      let newQuote;
      do {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      } while (newQuote.text === quote.text);
      setQuote(newQuote);
      setIsExiting(false);
    }, 300);
  };

  React.useEffect(() => {
    const interval = setInterval(getRandomQuote, 10000);
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative p-8 bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
        <Quote className="absolute -top-4 -left-4 w-24 h-24 text-white/5 -rotate-12" />
        
        <div className="min-h-[120px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isExiting && (
              <motion.div
                key={quote.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl font-medium text-white leading-relaxed italic">
                  "{quote.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-red-600"></div>
                  <span className="text-red-500 font-bold tracking-wider uppercase text-xs">
                    {quote.author}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={getRandomQuote}
          className="absolute bottom-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors group/btn"
          title="Đổi câu khác"
        >
          <RefreshCw className="w-4 h-4 text-slate-500 group-hover/btn:rotate-180 transition-transform duration-500" />
        </button>
      </div>
    </div>
  );
}
