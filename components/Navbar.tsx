'use client';

import { useAuth } from '@/contexts/AuthContext';
import { BookOpen, FileText, Trophy, MessageCircle, LayoutDashboard, LogOut, Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: 'dashboard' | 'read' | 'quiz' | 'ai' | 'admin') => void;
  onAIToggle: () => void;
  showAI: boolean;
}

export default function Navbar({ activeSection, setActiveSection, onAIToggle, showAI }: NavbarProps) {
  const { user, logout, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'read', icon: BookOpen, label: 'Read' },
    { id: 'quiz', icon: Trophy, label: 'Quiz' },
  ];

  // Only add admin menu for admins
  const allMenuItems = isAdmin
    ? [...menuItems, { id: 'admin', icon: Shield, label: 'Admin' }]
    : menuItems;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="logo-gradient p-2 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">EpicQuiz</h1>
                <p className="text-xs text-gray-500 hidden md:block">Essential Epidemiology</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {allMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id as any);
                    setMobileMenuOpen(false);
                  }}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onAIToggle}
                className={`ai-button ${showAI ? 'active' : ''}`}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">EpiMentor AI</span>
              </button>

              <div className="hidden md:flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                </div>
                <button onClick={logout} className="logout-button" title="Logout">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {allMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id as any);
                    setMobileMenuOpen(false);
                  }}
                  className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                  </div>
                  <button onClick={logout} className="logout-button">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .logo-gradient {
          background: linear-gradient(135deg, #4F46E5, #7C3AED);
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          color: #6B7280;
          transition: all 0.2s;
          border: 2px solid transparent;
        }
        .nav-item:hover {
          background: #F3F4F6;
          color: #4F46E5;
        }
        .nav-item.active {
          background: #EEF2FF;
          color: #4F46E5;
          border-color: #4F46E5;
        }
        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          color: #6B7280;
          width: 100%;
          text-align: left;
          transition: all 0.2s;
        }
        .mobile-nav-item:hover {
          background: #F3F4F6;
          color: #4F46E5;
        }
        .mobile-nav-item.active {
          background: #EEF2FF;
          color: #4F46E5;
        }
        .ai-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }
        .ai-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }
        .ai-button.active {
          background: linear-gradient(135deg, #059669, #047857);
        }
        .logout-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background: #FEE2E2;
          color: #DC2626;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }
        .logout-button:hover {
          background: #FECACA;
        }
      `}</style>
    </>
  );
}
