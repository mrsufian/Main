'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  progress: {
    completedTopics: string[];
    quizScores: { [topicId: string]: number };
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateProgress: (topicId: string, score?: number) => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user from localStorage on mount
    const stored = localStorage.getItem('epicquiz_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        localStorage.removeItem('epicquiz_user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call with encrypted storage
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const users = JSON.parse(localStorage.getItem('epicquiz_users') || '[]');
    const existingUser = users.find((u: any) => u.email === email);
    
    if (!existingUser || existingUser.password !== btoa(password)) {
      throw new Error('Invalid credentials');
    }

    const userData: User = {
      id: existingUser.id,
      email: existingUser.email,
      name: existingUser.name,
      role: existingUser.role,
      progress: existingUser.progress || { completedTopics: [], quizScores: {} }
    };

    setUser(userData);
    localStorage.setItem('epicquiz_user', JSON.stringify(userData));
  };

  const signup = async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const users = JSON.parse(localStorage.getItem('epicquiz_users') || '[]');
    
    if (users.find((u: any) => u.email === email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password: btoa(password), // Base64 encoding (in real app, use proper hashing)
      name,
      role: 'user' as const,
      progress: { completedTopics: [], quizScores: {} }
    };

    users.push(newUser);
    localStorage.setItem('epicquiz_users', JSON.stringify(users));

    const userData: User = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      progress: newUser.progress
    };

    setUser(userData);
    localStorage.setItem('epicquiz_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('epicquiz_user');
  };

  const updateProgress = (topicId: string, score?: number) => {
    if (!user) return;

    const updatedProgress = { ...user.progress };
    
    if (!updatedProgress.completedTopics.includes(topicId)) {
      updatedProgress.completedTopics.push(topicId);
    }
    
    if (score !== undefined) {
      updatedProgress.quizScores[topicId] = Math.max(
        updatedProgress.quizScores[topicId] || 0,
        score
      );
    }

    const updatedUser = { ...user, progress: updatedProgress };
    setUser(updatedUser);
    localStorage.setItem('epicquiz_user', JSON.stringify(updatedUser));

    // Update in users array
    const users = JSON.parse(localStorage.getItem('epicquiz_users') || '[]');
    const userIndex = users.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex].progress = updatedProgress;
      localStorage.setItem('epicquiz_users', JSON.stringify(users));
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,
    updateProgress,
    isAdmin: user?.role === 'admin'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
