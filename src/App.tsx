import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Home from './pages/Home';
import TopicList from './pages/TopicList';
import TopicDetail from './pages/TopicDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-red-500/30 selection:text-red-500">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<TopicList />} />
            <Route path="/topic/:id" element={<TopicDetail />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  );
}
