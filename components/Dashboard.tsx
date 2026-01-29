'use client';

import { useAuth } from '@/contexts/AuthContext';
import { bookContent } from '@/data/bookContent';
import { BookOpen, Trophy, Brain, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

interface DashboardProps {
  setActiveSection: (section: 'dashboard' | 'read' | 'quiz' | 'ai' | 'admin') => void;
}

export default function Dashboard({ setActiveSection }: DashboardProps) {
  const { user } = useAuth();
  
  const totalTopics = bookContent.reduce((acc, chapter) => acc + chapter.topics.length, 0);
  const completedTopics = user?.progress.completedTopics.length || 0;
  const quizzesTaken = Object.keys(user?.progress.quizScores || {}).length;
  const avgScore = quizzesTaken > 0 
    ? Object.values(user?.progress.quizScores || {}).reduce((a, b) => a + b, 0) / quizzesTaken 
    : 0;

  const progressPercentage = (completedTopics / totalTopics) * 100;

  const stats = [
    {
      icon: BookOpen,
      label: 'Topics Completed',
      value: `${completedTopics}/${totalTopics}`,
      color: 'bg-blue-500',
      bgLight: 'bg-blue-50',
    },
    {
      icon: Trophy,
      label: 'Quizzes Taken',
      value: quizzesTaken,
      color: 'bg-amber-500',
      bgLight: 'bg-amber-50',
    },
    {
      icon: TrendingUp,
      label: 'Average Score',
      value: `${Math.round(avgScore)}%`,
      color: 'bg-green-500',
      bgLight: 'bg-green-50',
    },
    {
      icon: Award,
      label: 'Progress',
      value: `${Math.round(progressPercentage)}%`,
      color: 'bg-purple-500',
      bgLight: 'bg-purple-50',
    },
  ];

  const quickActions = [
    {
      title: 'Continue Reading',
      description: 'Pick up where you left off',
      icon: BookOpen,
      action: () => setActiveSection('read'),
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Take a Quiz',
      description: 'Test your knowledge',
      icon: Trophy,
      action: () => setActiveSection('quiz'),
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Ask EpiMentor AI',
      description: 'Get instant help',
      icon: Brain,
      action: () => {},
      gradient: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="welcome-card">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Continue your journey in mastering Essential Epidemiology
          </p>
        </div>
        <div className="hidden md:block">
          <div className="icon-circle">
            <Brain className="w-12 h-12 text-primary" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className={`stat-icon ${stat.bgLight}`}>
              <stat.icon className={`w-6 h-6 text-white ${stat.color} p-1 rounded`} />
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-card">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Overall Progress</h3>
          <span className="text-sm font-medium text-primary">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {completedTopics} of {totalTopics} topics completed
        </p>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="action-card"
            >
              <div className={`action-icon bg-gradient-to-br ${action.gradient}`}>
                <action.icon className="w-8 h-8 text-white" />
              </div>
              <div className="mt-4 text-left">
                <h3 className="font-semibold text-gray-800 text-lg">{action.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{action.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Available Chapters</h2>
        <div className="space-y-3">
          {bookContent.slice(0, 5).map((chapter) => {
            const completedInChapter = chapter.topics.filter(
              t => user?.progress.completedTopics.includes(t.id)
            ).length;
            const chapterProgress = (completedInChapter / chapter.topics.length) * 100;
            
            return (
              <div key={chapter.id} className="chapter-card">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Chapter {chapter.id}: {chapter.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{chapter.description}</p>
                    </div>
                    {chapterProgress === 100 && (
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex-1">
                      <div className="chapter-progress-bar">
                        <div 
                          className="chapter-progress-fill"
                          style={{ width: `${chapterProgress}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-gray-600">
                      {completedInChapter}/{chapter.topics.length} topics
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .welcome-card {
          background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
          padding: 2rem;
          border-radius: 1rem;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .icon-circle {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }
        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        .stat-icon {
          width: 40px;
          height: 40px;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .progress-card {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        .progress-bar-container {
          width: 100%;
          height: 12px;
          background: #E5E7EB;
          border-radius: 999px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #4F46E5, #7C3AED);
          border-radius: 999px;
          transition: width 0.5s ease;
        }
        .action-card {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
          border: 2px solid transparent;
          text-align: left;
          width: 100%;
        }
        .action-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          border-color: #4F46E5;
        }
        .action-icon {
          width: 56px;
          height: 56px;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .chapter-card {
          background: white;
          padding: 1.25rem;
          border-radius: 0.75rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          display: flex;
          gap: 1rem;
          transition: all 0.2s;
        }
        .chapter-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateX(4px);
        }
        .chapter-progress-bar {
          height: 6px;
          background: #E5E7EB;
          border-radius: 999px;
          overflow: hidden;
        }
        .chapter-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981, #059669);
          border-radius: 999px;
          transition: width 0.3s ease;
        }
      `}</style>
    </div>
  );
}
