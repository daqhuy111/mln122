
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '../data/content';

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === questions[currentStep].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border border-white/5 rounded-2xl p-8 text-center"
      >
        <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Star className="w-10 h-10 text-red-500 fill-red-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Hoàn thành bài trắc nghiệm!</h3>
        <p className="text-slate-400 mb-6">Bạn đã trả lời đúng {score}/{questions.length} câu hỏi.</p>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-semibold"
          >
            <RotateCcw className="w-4 h-4" />
            Làm lại
          </button>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-semibold"
          >
            Quay lại bài học
          </button>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          Câu hỏi {currentStep + 1} / {questions.length}
        </span>
        <div className="h-1.5 w-32 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-red-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-8 leading-snug">
        {currentQuestion.question}
      </h3>

      <div className="space-y-4 mb-8">
        {currentQuestion.options.map((option, index) => {
          const isCorrect = index === currentQuestion.correctAnswer;
          const isSelected = index === selectedOption;
          
          let bgColor = "bg-slate-900 border-white/5";
          if (isSubmitted) {
            if (isCorrect) bgColor = "bg-emerald-500/10 border-emerald-500/50 text-emerald-400";
            else if (isSelected) bgColor = "bg-red-500/10 border-red-500/50 text-red-400";
          } else if (isSelected) {
            bgColor = "bg-red-600/10 border-red-600/50 text-red-500";
          }

          return (
            <button
              key={index}
              disabled={isSubmitted}
              onClick={() => handleOptionSelect(index)}
              className={`w-full p-4 text-left rounded-xl border transition-all duration-200 flex items-center justify-between group ${bgColor}`}
            >
              <span className="font-medium">{option}</span>
              {isSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
              {isSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-slate-800/50 rounded-xl border border-white/5 mb-8"
          >
            <p className="text-sm text-slate-400 italic">
              <span className="font-bold text-slate-300 not-italic">Giải thích: </span>
              {currentQuestion.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-end">
        {!isSubmitted ? (
          <button
            disabled={selectedOption === null}
            onClick={handleSubmit}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all"
          >
            Kiểm tra
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3 bg-slate-100 hover:bg-white text-slate-950 rounded-xl font-bold transition-all"
          >
            {currentStep === questions.length - 1 ? 'Xem kết quả' : 'Tiếp theo'}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function Star(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
