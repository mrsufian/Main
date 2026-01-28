'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import AuthPage from '@/components/AuthPage';
import Dashboard from '@/components/Dashboard';
import ReadingSection from '@/components/ReadingSection';
import QuizSection from '@/components/QuizSection';
import AIAssistant from '@/components/AIAssistant';
import AdminPanel from '@/components/AdminPanel';
import Navbar from '@/components/Navbar';

export default function Home() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState<'dashboard' | 'read' | 'quiz' | 'ai' | 'admin'>('dashboard');
  const [showAI, setShowAI] = useState(false);

  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onAIToggle={() => setShowAI(!showAI)}
        showAI={showAI}
      />
      
      <main className="container mx-auto px-4 py-6 pb-24 md:pb-6 max-w-7xl">
        {activeSection === 'dashboard' && <Dashboard setActiveSection={setActiveSection} />}
        {activeSection === 'read' && <ReadingSection />}
        {activeSection === 'quiz' && <QuizSection />}
        {activeSection === 'admin' && user.role === 'admin' && <AdminPanel />}
      </main>

      {showAI && <AIAssistant onClose={() => setShowAI(false)} />}
    </div>
  );
}
