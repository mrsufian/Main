'use client';

import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Send, X, Mic, Volume2, Image as ImageIcon, Video, FileUp, Play, Pause, Square } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  media?: {
    type: 'image' | 'video';
    url: string;
  };
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
• Generate educational images and diagrams
• Create study videos
• Communicate via voice

Upload images, videos, or use voice to interact with me. How can I assist you today?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; url: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Text-to-Speech for AI responses
  const speakMessage = (text: string, messageId: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => setIsPlaying(messageId);
      utterance.onend = () => setIsPlaying(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(null);
    }
  };

  // Speech-to-Text (Voice Input)
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        
        // Simulate voice-to-text conversion
        const voiceTexts = [
          'Can you explain incidence and prevalence?',
          'What is the chain of infection?',
          'How do I calculate relative risk?',
          'Explain confounding bias',
          'What is a cohort study?'
        ];
        
        const randomText = voiceTexts[Math.floor(Math.random() * voiceTexts.length)];
        setInputValue(randomText);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Microphone access denied:', error);
      alert('Please allow microphone access to use voice input');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  // Handle Image Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target?.result as string;
        setSelectedMedia({ type: 'image', url });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Video Upload
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedMedia({ type: 'video', url });
    }
  };

  // Generate Image (Simulated)
  const generateImage = () => {
    const imagePrompts = [
      'A diagram showing the epidemiological triangle with host, agent, and environment',
      'An epidemic curve showing a point source outbreak pattern',
      'A flowchart of the chain of infection in disease transmission',
      'A visual representation of incidence vs prevalence over time',
      'A map showing geographic distribution of disease clusters'
    ];

    const randomPrompt = imagePrompts[Math.floor(Math.random() * imagePrompts.length)];
    setInputValue(`Generate image: ${randomPrompt}`);
  };

  // Generate Video (Simulated)
  const generateVideo = () => {
    const videoPrompts = [
      'Create a 2-minute video on study design types in epidemiology',
      'Make an animated video explaining bias in epidemiological studies',
      'Generate a video tutorial on calculating standardized mortality rates',
      'Create an educational video on outbreak investigation steps',
      'Make a video explaining the concepts of sensitivity and specificity'
    ];

    const randomPrompt = videoPrompts[Math.floor(Math.random() * videoPrompts.length)];
    setInputValue(`Generate video: ${randomPrompt}`);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() && !selectedMedia) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
      media: selectedMedia || undefined
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setSelectedMedia(null);
    setIsLoading(true);

    // Simulate AI response with delay
    setTimeout(() => {
      let responseText = '';
      
      if (userMessage.content.toLowerCase().includes('generate image')) {
        responseText = `I've generated an educational image based on your request. This diagram shows the epidemiological concept you asked about. You can use this for your study materials!`;
      } else if (userMessage.content.toLowerCase().includes('generate video')) {
        responseText = `I've created an educational video explaining this concept. The video includes animations, explanations, and real-world examples. It's about 2-3 minutes long and suitable for learning!`;
      } else if (selectedMedia?.type === 'image') {
        responseText = `Great! I've analyzed the image you uploaded. It shows important epidemiological concepts. Here's what I found: This appears to be related to disease distribution and data analysis. Would you like me to explain any specific part in detail?`;
      } else if (selectedMedia?.type === 'video') {
        responseText = `Excellent! I've reviewed the video you uploaded. It contains valuable content on epidemiology. I can help you extract key points, create study notes, or answer specific questions about the content. What would you like to focus on?`;
      } else {
        const responses = [
          `That's a great question! In epidemiology, this relates to the fundamental principles of disease distribution and determinants. Let me explain this in detail...`,
          `Excellent point! This connects to several key concepts we've covered. Here's a comprehensive explanation...`,
          `I can help you with that. This is an important topic in Essential Epidemiology. Here's what you need to know...`,
          `Very relevant question! This is crucial for understanding epidemiological study designs. Let me break it down for you...`,
          `Interesting! This touches on the core principles of disease causation and risk factors. Here's my analysis...`
        ];
        responseText = responses[Math.floor(Math.random() * responses.length)];
      }

      // Generate a media response sometimes
      const shouldIncludeMedia = Math.random() > 0.5;
      const mediaResponse = shouldIncludeMedia ? {
        type: (Math.random() > 0.5 ? 'image' : 'video') as 'image' | 'video',
        url: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%234F46E5' width='400' height='300'/%3E%3Ctext x='200' y='150' fill='white' font-size='24' text-anchor='middle' dominant-baseline='middle'%3EEducational Content%3C/text%3E%3C/svg%3E`
      } : undefined;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date(),
        media: mediaResponse
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);

      // Auto-play voice response
      if ('speechSynthesis' in window) {
        setTimeout(() => {
          speakMessage(responseText, aiMessage.id);
        }, 500);
      }
    }, 1500);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '420px', maxHeight: '700px', background: 'white', borderRadius: '1.25rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', zIndex: 1000 }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #10B981, #059669)', color: 'white', padding: '1.25rem', borderRadius: '1.25rem 1.25rem 0 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>EpiMentor AI</h3>
          <p style={{ fontSize: '0.75rem', color: '#D1FAE5' }}>Images • Videos • Voice • Learning</p>
        </div>
        <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '0.5rem', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <X style={{ width: '20px', height: '20px' }} />
        </button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{ maxWidth: '90%' }}>
              {msg.media && (
                <div style={{ marginBottom: '0.5rem', borderRadius: '0.75rem', overflow: 'hidden', background: '#F3F4F6' }}>
                  {msg.media.type === 'image' ? (
                    <img src={msg.media.url} alt="Shared content" style={{ maxWidth: '100%', maxHeight: '250px', display: 'block' }} />
                  ) : (
                    <video src={msg.media.url} style={{ maxWidth: '100%', maxHeight: '250px', display: 'block' }} controls />
                  )}
                </div>
              )}
              <div style={{
                padding: '0.875rem 1.125rem',
                borderRadius: '1rem',
                background: msg.role === 'user' ? '#4F46E5' : '#F3F4F6',
                color: msg.role === 'user' ? 'white' : '#1F2937',
                fontSize: '0.9375rem',
                lineHeight: '1.5',
                wordWrap: 'break-word',
                whiteSpace: 'pre-wrap'
              }}>
                <div>{msg.content}</div>
                {msg.role === 'assistant' && (
                  <button
                    onClick={() => isPlaying === msg.id ? stopSpeaking() : speakMessage(msg.content, msg.id)}
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.4rem 0.75rem',
                      background: msg.role === 'user' ? 'rgba(255,255,255,0.2)' : 'rgba(79, 70, 229, 0.1)',
                      color: msg.role === 'user' ? 'white' : '#4F46E5',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem'
                    }}
                  >
                    {isPlaying === msg.id ? (
                      <>
                        <Pause style={{ width: '14px', height: '14px' }} />
                        Stop
                      </>
                    ) : (
                      <>
                        <Volume2 style={{ width: '14px', height: '14px' }} />
                        Play
                      </>
                    )}
                  </button>
                )}
              </div>
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

      {/* Selected Media Preview */}
      {selectedMedia && (
        <div style={{ padding: '0.75rem 1rem', background: '#F3F4F6', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '0.5rem', overflow: 'hidden', background: 'white' }}>
            {selectedMedia.type === 'image' ? (
              <img src={selectedMedia.url} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <video src={selectedMedia.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            )}
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#1F2937' }}>
              {selectedMedia.type === 'image' ? 'Image' : 'Video'} attached
            </p>
            <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>Ready to send</p>
          </div>
          <button
            onClick={() => setSelectedMedia(null)}
            style={{ background: '#FEE2E2', color: '#DC2626', border: 'none', padding: '0.5rem', borderRadius: '0.375rem', cursor: 'pointer' }}
          >
            <X style={{ width: '18px', height: '18px' }} />
          </button>
        </div>
      )}

      {/* Input Area */}
      <div style={{ padding: '1rem', borderTop: '1px solid #E5E7EB' }}>
        {/* Media Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <button
            onClick={() => mediaInputRef.current?.click()}
            style={{ flex: 1, padding: '0.625rem', background: '#F3F4F6', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', color: '#4F46E5', fontWeight: '500', fontSize: '0.875rem', transition: 'all 0.2s' }}
          >
            <ImageIcon style={{ width: '18px', height: '18px' }} />
            Image
          </button>
          <button
            onClick={() => videoInputRef.current?.click()}
            style={{ flex: 1, padding: '0.625rem', background: '#F3F4F6', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', color: '#4F46E5', fontWeight: '500', fontSize: '0.875rem', transition: 'all 0.2s' }}
          >
            <Video style={{ width: '18px', height: '18px' }} />
            Video
          </button>
          <button
            onClick={generateImage}
            style={{ flex: 1, padding: '0.625rem', background: '#FEF3C7', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', color: '#92400E', fontWeight: '500', fontSize: '0.875rem', transition: 'all 0.2s' }}
          >
            ✨ Gen Image
          </button>
          <button
            onClick={generateVideo}
            style={{ flex: 1, padding: '0.625rem', background: '#FEF3C7', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem', color: '#92400E', fontWeight: '500', fontSize: '0.875rem', transition: 'all 0.2s' }}
          >
            ✨ Gen Video
          </button>
        </div>

        {/* Text Input + Voice */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
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
          <button
            onClick={isRecording ? stopRecording : startRecording}
            style={{ background: isRecording ? '#EF4444' : '#10B981', color: 'white', border: 'none', padding: '0.625rem', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }}
            title={isRecording ? 'Stop recording' : 'Start recording'}
          >
            {isRecording ? <Square style={{ width: '18px', height: '18px' }} /> : <Mic style={{ width: '18px', height: '18px' }} />}
          </button>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() && !selectedMedia || isLoading}
            style={{ background: (inputValue.trim() || selectedMedia) ? '#4F46E5' : '#E5E7EB', color: 'white', border: 'none', padding: '0.625rem', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', opacity: (inputValue.trim() || selectedMedia) ? 1 : 0.5 }}
          >
            <Send style={{ width: '18px', height: '18px' }} />
          </button>
        </div>

        {isRecording && (
          <p style={{ fontSize: '0.75rem', color: '#EF4444', marginTop: '0.5rem', fontWeight: '500' }}>🔴 Recording... Click to stop</p>
        )}
      </div>

      {/* Hidden File Inputs */}
      <input
        ref={mediaInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <input
        ref={videoInputRef}
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        style={{ display: 'none' }}
      />

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
