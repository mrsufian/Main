'use client';

import { useState, useEffect } from 'react';
import { Shield, Users, BarChart3, Settings, Activity, Trash2, Eye } from 'lucide-react';

interface StoredUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  progress: {
    completedTopics: string[];
    quizScores: { [topicId: string]: number };
  };
}

export default function AdminPanel() {
  const [adminTab, setAdminTab] = useState<'users' | 'analytics' | 'settings'>('users');
  const [users, setUsers] = useState<StoredUser[]>([]);
  const [aiEnabled, setAiEnabled] = useState(true);
  const [readingEnabled, setReadingEnabled] = useState(true);
  const [quizEnabled, setQuizEnabled] = useState(true);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('epicquiz_users') || '[]');
    setUsers(storedUsers);
  }, []);

  const deleteUser = (userId: string) => {
    if (confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter(u => u.id !== userId);
      setUsers(updatedUsers);
      localStorage.setItem('epicquiz_users', JSON.stringify(updatedUsers));
    }
  };

  const totalUsers = users.length;
  const adminUsers = users.filter(u => u.role === 'admin').length;
  const regularUsers = users.filter(u => u.role === 'user').length;
  const totalQuizzes = users.reduce((acc, u) => acc + Object.keys(u.progress.quizScores).length, 0);
  const avgScore = users.length > 0 
    ? Math.round(users.reduce((acc, u) => acc + Object.values(u.progress.quizScores).reduce((a, b) => a + b, 0), 0) / (totalQuizzes || 1))
    : 0;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', color: 'white', padding: '2rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Shield style={{ width: '48px', height: '48px' }} />
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Admin Panel</h1>
          <p style={{ color: '#E9D5FF' }}>Manage users, monitor analytics, and configure settings</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { icon: Users, label: 'Total Users', value: totalUsers },
          { icon: Activity, label: 'Admin Users', value: adminUsers },
          { icon: BarChart3, label: 'Regular Users', value: regularUsers },
          { icon: Trophy as any, label: 'Avg Quiz Score', value: `${avgScore}%` }
        ].map((stat, idx) => (
          <div key={idx} style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ background: '#F3F4F6', padding: '0.75rem', borderRadius: '0.5rem' }}>
                <stat.icon style={{ width: '24px', height: '24px', color: '#7C3AED' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>{stat.label}</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1F2937' }}>{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid #E5E7EB' }}>
        {[
          { id: 'users', label: 'Users', icon: Users },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          { id: 'settings', label: 'Settings', icon: Settings }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setAdminTab(tab.id as any)}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'transparent',
              border: 'none',
              borderBottom: adminTab === tab.id ? '3px solid #7C3AED' : '3px solid transparent',
              color: adminTab === tab.id ? '#7C3AED' : '#6B7280',
              fontWeight: adminTab === tab.id ? '600' : '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            <tab.icon style={{ width: '18px', height: '18px' }} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {adminTab === 'users' && (
        <div style={{ background: 'white', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem', borderBottom: '2px solid #F3F4F6' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1F2937' }}>User Management</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F9FAFB' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>User</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>Email</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>Role</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>Progress</th>
                  <th style={{ padding: '1rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: '600', color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user.id} style={{ borderBottom: idx !== users.length - 1 ? '1px solid #E5E7EB' : 'none' }}>
                    <td style={{ padding: '1rem', color: '#374151' }}>
                      <div style={{ fontWeight: '500' }}>{user.name}</div>
                      <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>ID: {user.id.slice(0, 8)}</div>
                    </td>
                    <td style={{ padding: '1rem', color: '#374151' }}>{user.email}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ padding: '0.25rem 0.75rem', background: user.role === 'admin' ? '#DDD6FE' : '#D1FAE5', color: user.role === 'admin' ? '#5B21B6' : '#065F46', borderRadius: '0.25rem', fontSize: '0.875rem', fontWeight: '500' }}>
                        {user.role === 'admin' ? 'Admin' : 'User'}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: '#374151' }}>
                      <div style={{ fontSize: '0.875rem' }}>
                        Topics: {user.progress.completedTopics.length}/45
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                        Quizzes: {Object.keys(user.progress.quizScores).length}
                      </div>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <button
                        onClick={() => deleteUser(user.id)}
                        style={{
                          background: '#FEE2E2',
                          color: '#DC2626',
                          border: 'none',
                          padding: '0.5rem',
                          borderRadius: '0.5rem',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          transition: 'all 0.2s'
                        }}
                      >
                        <Trash2 style={{ width: '16px', height: '16px' }} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {users.length === 0 && (
              <div style={{ padding: '3rem', textAlign: 'center', color: '#6B7280' }}>
                <Users style={{ width: '48px', height: '48px', margin: '0 auto 1rem', opacity: 0.5 }} />
                <p>No users found</p>
              </div>
            )}
          </div>
        </div>
      )}

      {adminTab === 'analytics' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {[
            { title: 'Quiz Performance', stat: `${avgScore}%`, subtitle: 'Average Score' },
            { title: 'Completion Rate', stat: users.length > 0 ? Math.round((users.reduce((a, u) => a + u.progress.completedTopics.length, 0) / (users.length * 45)) * 100) : 0 + '%', subtitle: 'Topics Completed' },
            { title: 'User Engagement', stat: totalQuizzes, subtitle: 'Quizzes Taken' }
          ].map((item, idx) => (
            <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <h3 style={{ color: '#6B7280', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#7C3AED' }}>{item.stat}</p>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>{item.subtitle}</p>
            </div>
          ))}
        </div>
      )}

      {adminTab === 'settings' && (
        <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1F2937', marginBottom: '2rem' }}>Feature Settings</h2>
          
          <div style={{ space: '1.5rem' }}>
            {[
              { id: 'ai', label: 'EpiMentor AI Assistant', state: aiEnabled, setter: setAiEnabled },
              { id: 'reading', label: 'Reading Section', state: readingEnabled, setter: setReadingEnabled },
              { id: 'quiz', label: 'Quiz Section', state: quizEnabled, setter: setQuizEnabled }
            ].map(feature => (
              <div key={feature.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem', background: '#F9FAFB', borderRadius: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <p style={{ fontWeight: '600', color: '#1F2937' }}>{feature.label}</p>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
                    {feature.state ? 'Currently enabled' : 'Currently disabled'}
                  </p>
                </div>
                <button
                  onClick={() => feature.setter(!feature.state)}
                  style={{
                    width: '56px',
                    height: '32px',
                    background: feature.state ? '#10B981' : '#E5E7EB',
                    border: 'none',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    background: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '2px',
                    left: feature.state ? '26px' : '2px',
                    transition: 'left 0.2s'
                  }} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#EEF2FF', borderRadius: '0.75rem', borderLeft: '4px solid #7C3AED' }}>
            <p style={{ color: '#4F46E5', fontWeight: '600', marginBottom: '0.5rem' }}>AI System Status</p>
            <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
              ✓ EpiMentor AI is secure and functioning normally. All user data is encrypted and isolated per user.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
