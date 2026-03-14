
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, RotateCcw, ArrowUp, ArrowDown, Layers, Check } from 'lucide-react';
import { MiniGameData } from '../data/content';

interface MiniGameProps {
  game: MiniGameData;
}

export default function MiniGame({ game }: MiniGameProps) {
  const [isCompleted, setIsCompleted] = React.useState(false);

  const handleComplete = () => setIsCompleted(true);
  const handleReset = () => setIsCompleted(false);

  return (
    <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-slate-500 text-sm">{game.description}</p>
      </div>

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key="game"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {game.type === 'matching' && <MatchingGame data={game.data} onComplete={handleComplete} />}
            {game.type === 'ordering' && <OrderingGame data={game.data} onComplete={handleComplete} />}
            {game.type === 'flashcard' && <FlashcardGame data={game.data} onComplete={handleComplete} />}
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center"
          >
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="text-emerald-500 font-bold mb-6">Tuyệt vời! Bạn đã hoàn thành trò chơi củng cố.</p>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-xl mx-auto font-bold hover:bg-emerald-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Chơi lại
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Matching Game ---
function MatchingGame({ data, onComplete }: { data: any[], onComplete: () => void }) {
  const [selectedConcept, setSelectedConcept] = React.useState<number | null>(null);
  const [selectedDefinition, setSelectedDefinition] = React.useState<number | null>(null);
  const [matchedIds, setMatchedIds] = React.useState<number[]>([]);
  const [errorId, setErrorId] = React.useState<number | null>(null);

  const concepts = React.useMemo(() => [...data].sort(() => Math.random() - 0.5), [data]);
  const definitions = React.useMemo(() => [...data].sort(() => Math.random() - 0.5), [data]);

  React.useEffect(() => {
    if (selectedConcept !== null && selectedDefinition !== null) {
      if (selectedConcept === selectedDefinition) {
        const newMatched = [...matchedIds, selectedConcept];
        setMatchedIds(newMatched);
        setSelectedConcept(null);
        setSelectedDefinition(null);
        if (newMatched.length === data.length) {
          setTimeout(onComplete, 500);
        }
      } else {
        setErrorId(selectedConcept);
        setTimeout(() => {
          setErrorId(null);
          setSelectedConcept(null);
          setSelectedDefinition(null);
        }, 1000);
      }
    }
  }, [selectedConcept, selectedDefinition, matchedIds, data.length, onComplete]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Khái niệm</h4>
        {concepts.map((pair) => {
          const isMatched = matchedIds.includes(pair.id);
          const isSelected = selectedConcept === pair.id;
          const isError = errorId === pair.id;

          return (
            <button
              key={pair.id}
              disabled={isMatched}
              onClick={() => setSelectedConcept(pair.id)}
              className={`w-full p-4 text-left rounded-xl border transition-all duration-200 ${
                isMatched ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500 opacity-50' :
                isError ? 'bg-red-500/10 border-red-500/50 text-red-500 animate-shake' :
                isSelected ? 'bg-red-600/10 border-red-600/50 text-red-500' :
                'bg-slate-900 border-white/5 text-slate-300 hover:border-white/20'
              }`}
            >
              {pair.concept}
            </button>
          );
        })}
      </div>
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Định nghĩa</h4>
        {definitions.map((pair) => {
          const isMatched = matchedIds.includes(pair.id);
          const isSelected = selectedDefinition === pair.id;

          return (
            <button
              key={pair.id}
              disabled={isMatched}
              onClick={() => setSelectedDefinition(pair.id)}
              className={`w-full p-4 text-left rounded-xl border transition-all duration-200 text-sm leading-relaxed ${
                isMatched ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500 opacity-50' :
                isSelected ? 'bg-red-600/10 border-red-600/50 text-red-500' :
                'bg-slate-900 border-white/5 text-slate-300 hover:border-white/20'
              }`}
            >
              {pair.definition}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// --- Ordering Game ---
function OrderingGame({ data, onComplete }: { data: any[], onComplete: () => void }) {
  const [currentOrder, setCurrentOrder] = React.useState<any[]>([]);
  const [isError, setIsError] = React.useState(false);

  const shuffled = React.useMemo(() => [...data].sort(() => Math.random() - 0.5), [data]);

  React.useEffect(() => {
    setCurrentOrder(shuffled);
  }, [shuffled]);

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...currentOrder];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newOrder.length) return;
    
    [newOrder[index], newOrder[targetIndex]] = [newOrder[targetIndex], newOrder[index]];
    setCurrentOrder(newOrder);
    setIsError(false);
  };

  const checkOrder = () => {
    const isCorrect = currentOrder.every((item, idx) => item.order === idx + 1);
    if (isCorrect) {
      onComplete();
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      {currentOrder.map((item, index) => (
        <motion.div
          layout
          key={item.id}
          className={`p-4 bg-slate-900 border ${isError ? 'border-red-500/50' : 'border-white/5'} rounded-xl flex items-center justify-between group`}
        >
          <span className="text-sm font-medium text-slate-300">{item.text}</span>
          <div className="flex gap-2">
            <button
              onClick={() => moveItem(index, 'up')}
              disabled={index === 0}
              className="p-1 hover:bg-slate-800 rounded disabled:opacity-20"
            >
              <ArrowUp className="w-4 h-4 text-slate-500" />
            </button>
            <button
              onClick={() => moveItem(index, 'down')}
              disabled={index === currentOrder.length - 1}
              className="p-1 hover:bg-slate-800 rounded disabled:opacity-20"
            >
              <ArrowDown className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </motion.div>
      ))}
      <button
        onClick={checkOrder}
        className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all mt-6"
      >
        Kiểm tra thứ tự
      </button>
      {isError && (
        <p className="text-center text-red-500 text-xs mt-2 flex items-center justify-center gap-1">
          <AlertCircle className="w-3 h-3" /> Thứ tự chưa chính xác, hãy thử lại!
        </p>
      )}
    </div>
  );
}

// --- Flashcard Game ---
function FlashcardGame({ data, onComplete }: { data: any[], onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [rememberedCount, setRememberedCount] = React.useState(0);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
      setRememberedCount(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="mb-4 flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
        <span>Thẻ {currentIndex + 1} / {data.length}</span>
        <span>Đã nhớ: {rememberedCount}</span>
      </div>

      <div 
        className="relative h-64 w-full perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          className="w-full h-full relative preserve-3d"
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-slate-900 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-xl">
            <Layers className="w-8 h-8 text-red-500/30 mb-4" />
            <h4 className="text-lg font-bold text-white">{data[currentIndex].front}</h4>
            <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest">Chạm để lật</p>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 backface-hidden bg-red-600 rounded-2xl flex flex-col items-center justify-center p-8 text-center shadow-xl"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <p className="text-white font-medium leading-relaxed">{data[currentIndex].back}</p>
            <div className="absolute bottom-4 right-4">
              <CheckCircle2 className="w-6 h-6 text-white/50" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-8">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-slate-100 hover:bg-white text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
        >
          <Check className="w-5 h-5" />
          Tôi đã nhớ nội dung này
        </button>
      </div>
    </div>
  );
}
