'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { BookOpen, Brain, Award, Shield } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        if (!name.trim()) {
          throw new Error('Name is required');
        }
        await signup(email, password, name);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const loginAsDemo = async (role: 'admin' | 'user') => {
    setLoading(true);
    try {
      if (role === 'admin') {
        await login('admin@epicquiz.com', 'admin123');
      } else {
        await login('demo@epicquiz.com', 'demo123');
      }
    } catch (err: any) {
      // If demo accounts don't exist, create them
      try {
        if (role === 'admin') {
          await signup('admin@epicquiz.com', 'admin123', 'Admin User');
          const users = JSON.parse(localStorage.getItem('epicquiz_users') || '[]');
          const adminUser = users.find((u: any) => u.email === 'admin@epicquiz.com');
          if (adminUser) {
            adminUser.role = 'admin';
            localStorage.setItem('epicquiz_users', JSON.stringify(users));
          }
          await login('admin@epicquiz.com', 'admin123');
        } else {
          await signup('demo@epicquiz.com', 'demo123', 'Demo User');
          await login('demo@epicquiz.com', 'demo123');
        }
      } catch (createErr: any) {
        setError(createErr.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-indigo-600 to-purple-700 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-white space-y-6 hidden md:block">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold flex items-center gap-3">
              <BookOpen className="w-12 h-12" />
              EpicQuiz
            </h1>
            <p className="text-xl text-indigo-100">
              Master Essential Epidemiology with AI-Powered Learning
            </p>
          </div>

          <div className="space-y-4 mt-8">
            <div className="feature-card">
              <Brain className="w-8 h-8 text-accent" />
              <div>
                <h3 className="font-semibold text-lg">AI Learning Assistant</h3>
                <p className="text-indigo-200 text-sm">EpiMentor AI helps you understand complex concepts</p>
              </div>
            </div>
            <div className="feature-card">
              <BookOpen className="w-8 h-8 text-secondary" />
              <div>
                <h3 className="font-semibold text-lg">Comprehensive Content</h3>
                <p className="text-indigo-200 text-sm">All chapters from Essential Epidemiology 2nd Edition</p>
              </div>
            </div>
            <div className="feature-card">
              <Award className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="font-semibold text-lg">Interactive Quizzes</h3>
                <p className="text-indigo-200 text-sm">Test your knowledge with topic-wise MCQs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {isLogin ? 'Welcome Back' : 'Get Started'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isLogin ? 'Log in to continue learning' : 'Create your account to begin'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  placeholder="Enter your name"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? 'Please wait...' : isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Quick Access</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => loginAsDemo('user')}
              disabled={loading}
              className="btn-secondary text-sm"
            >
              Demo User
            </button>
            <button
              onClick={() => loginAsDemo('admin')}
              disabled={loading}
              className="btn-secondary text-sm flex items-center justify-center gap-1"
            >
              <Shield className="w-4 h-4" />
              Admin
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
              className="text-primary hover:text-indigo-700 font-medium"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.3s;
        }
        .input-field:focus {
          outline: none;
          border-color: #4F46E5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        .btn-primary {
          width: 100%;
          padding: 0.75rem;
          background: linear-gradient(135deg, #4F46E5, #7C3AED);
          color: white;
          font-weight: 600;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
        }
        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .btn-secondary {
          padding: 0.625rem 1rem;
          background: white;
          color: #4F46E5;
          font-weight: 500;
          border: 2px solid #4F46E5;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-secondary:hover:not(:disabled) {
          background: #4F46E5;
          color: white;
        }
        .btn-secondary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
