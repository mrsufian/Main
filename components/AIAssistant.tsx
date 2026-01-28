'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Send, X, Mic, Volume2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  onClose: () => void;
}

export default function AIAssistant({ onClose }: AIAssistantProps) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hello! I'm EpiMentor AI, your personal study assistant for Essential Epidemiology. I can help you:
      
• Explain complex epidemiological concepts
• Generate quizzes on any topic
• Create study notes and summaries
• Answer questions about the book content
• Help with any academic subject

How can I assist you today?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `That's a great question about epidemiology! Let me help you understand this concept better...`,
        `I'd be happy to explain that. In epidemiology, this relates to the fundamental principles of disease distribution and determinants...`,
        `Excellent point! This connects to several key concepts we've covered in the chapters...`,
        `Let me provide you with a comprehensive explanation of this topic...`,
        `I can help you with that. Here's what you need to know...`
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: randomResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '380px', maxHeight: '600px', background: 'white', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', zIndex: 1000 }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #10B981, #059669)', color: 'white', padding: '1rem', borderRadius: '1rem 1rem 0 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontWeight: 'bold', fontSize: '1rem' }}>EpiMentor AI</h3>
          <p style={{ fontSize: '0.75rem', color: '#D1FAE5' }}>Always learning, always helping</p>
        </div>
        <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <X style={{ width: '20px', height: '20px' }} />
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '85%',
              padding: '0.75rem 1rem',
              borderRadius: '1rem',
              background: msg.role === 'user' ? '#4F46E5' : '#F3F4F6',
              color: msg.role === 'user' ? 'white' : '#1F2937',
              fontSize: '0.9375rem',
              lineHeight: '1.5',
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap'
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', animation: 'pulse 1.4s infinite' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', animation: 'pulse 1.4s infinite 0.2s' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', animation: 'pulse 1.4s infinite 0.4s' }} />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={{ padding: '1rem', borderTop: '1px solid #E5E7EB', display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          placeholder="Ask EpiMentor AI..."
          style={{ flex: 1, padding: '0.625rem 1rem', border: '2px solid #E5E7EB', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
          onFocus={(e) => e.target.style.borderColor = '#4F46E5'}
          onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
        />
        <button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading} style={{ background: '#4F46E5', color: 'white', border: 'none', padding: '0.625rem', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', opacity: inputValue.trim() ? 1 : 0.5 }}>
          <Send style={{ width: '18px', height: '18px' }} />
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 60%, 100% {
            opacity: 0.3;
          }
          30% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
