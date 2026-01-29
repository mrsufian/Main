'use client';

import { useState } from 'react';
import { bookContent, getTopicById } from '@/data/bookContent';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronRight, CheckCircle, Circle, BookOpen, Lightbulb } from 'lucide-react';

export default function ReadingSection() {
  const { user, updateProgress } = useAuth();
  const [selectedChapter, setSelectedChapter] = useState(bookContent[0]);
  const [selectedTopic, setSelectedTopic] = useState(selectedChapter.topics[0]);

  const handleTopicSelect = (topicId: string) => {
    const result = getTopicById(topicId);
    if (result) {
      setSelectedChapter(result.chapter);
      setSelectedTopic(result.topic);
    }
  };

  const handleMarkComplete = () => {
    updateProgress(selectedTopic.id);
  };

  const isTopicCompleted = (topicId: string) => {
    return user?.progress.completedTopics.includes(topicId) || false;
  };

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {/* Sidebar - Chapter/Topic Navigation */}
      <div className="md:col-span-1 space-y-4">
        <div className="sticky top-20">
          <div className="sidebar-header">
            <BookOpen className="w-5 h-5" />
            <h2 className="font-bold">Chapters</h2>
          </div>
          
          <div className="sidebar-content">
            {bookContent.map((chapter) => (
              <div key={chapter.id} className="chapter-group">
                <div
                  className={`chapter-header ${selectedChapter.id === chapter.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedChapter(chapter);
                    setSelectedTopic(chapter.topics[0]);
                  }}
                >
                  <span className="chapter-number">{chapter.id}</span>
                  <span className="chapter-title">{chapter.title}</span>
                </div>
                
                {selectedChapter.id === chapter.id && (
                  <div className="topics-list">
                    {chapter.topics.map((topic) => (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        className={`topic-item ${selectedTopic.id === topic.id ? 'active' : ''}`}
                      >
                        {isTopicCompleted(topic.id) ? (
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        )}
                        <span className="topic-text">{topic.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="md:col-span-3">
        <div className="content-card">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span className="text-primary font-medium">Chapter {selectedChapter.id}</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">{selectedTopic.title}</span>
          </div>

          {/* Topic Title */}
          <h1 className="topic-title">{selectedTopic.title}</h1>

          {/* Topic Content */}
          <div className="topic-content">
            <p className="content-text">{selectedTopic.content}</p>
          </div>

          {/* Key Points */}
          <div className="key-points-section">
            <div className="key-points-header">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h3 className="font-semibold text-gray-800">Key Points</h3>
            </div>
            <ul className="key-points-list">
              {selectedTopic.keyPoints.map((point, index) => (
                <li key={index} className="key-point-item">
                  <div className="key-point-bullet"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="actions-section">
            {!isTopicCompleted(selectedTopic.id) ? (
              <button onClick={handleMarkComplete} className="btn-complete">
                <CheckCircle className="w-5 h-5" />
                Mark as Complete
              </button>
            ) : (
              <div className="completed-badge">
                <CheckCircle className="w-5 h-5" />
                <span>Completed</span>
              </div>
            )}

            {/* Navigation */}
            <div className="navigation-buttons">
              {(() => {
                const currentTopicIndex = selectedChapter.topics.findIndex(t => t.id === selectedTopic.id);
                const prevTopic = currentTopicIndex > 0 ? selectedChapter.topics[currentTopicIndex - 1] : null;
                const nextTopic = currentTopicIndex < selectedChapter.topics.length - 1 
                  ? selectedChapter.topics[currentTopicIndex + 1] 
                  : selectedChapter.id < bookContent.length 
                    ? bookContent[selectedChapter.id].topics[0] 
                    : null;

                return (
                  <>
                    {prevTopic && (
                      <button
                        onClick={() => setSelectedTopic(prevTopic)}
                        className="nav-button prev"
                      >
                        Previous
                      </button>
                    )}
                    {nextTopic && (
                      <button
                        onClick={() => setSelectedTopic(nextTopic)}
                        className="nav-button next"
                      >
                        Next
                      </button>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sidebar-header {
          background: white;
          padding: 1rem;
          border-radius: 0.75rem 0.75rem 0 0;
          border-bottom: 2px solid #E5E7EB;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4F46E5;
        }
        .sidebar-content {
          background: white;
          border-radius: 0 0 0.75rem 0.75rem;
          max-height: calc(100vh - 200px);
          overflow-y: auto;
        }
        .chapter-group {
          border-bottom: 1px solid #F3F4F6;
        }
        .chapter-header {
          padding: 0.75rem 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.2s;
        }
        .chapter-header:hover {
          background: #F9FAFB;
        }
        .chapter-header.active {
          background: #EEF2FF;
          color: #4F46E5;
          font-weight: 600;
        }
        .chapter-number {
          width: 24px;
          height: 24px;
          background: #E5E7EB;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
          flex-shrink: 0;
        }
        .chapter-header.active .chapter-number {
          background: #4F46E5;
          color: white;
        }
        .chapter-title {
          font-size: 0.875rem;
          line-height: 1.25;
        }
        .topics-list {
          background: #F9FAFB;
          padding: 0.5rem;
        }
        .topic-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 0.625rem 0.75rem;
          margin-bottom: 0.25rem;
          border-radius: 0.5rem;
          text-align: left;
          width: 100%;
          transition: all 0.2s;
          border: 1px solid transparent;
        }
        .topic-item:hover {
          background: white;
          border-color: #E5E7EB;
        }
        .topic-item.active {
          background: white;
          border-color: #4F46E5;
          box-shadow: 0 2px 4px rgba(79, 70, 229, 0.1);
        }
        .topic-text {
          font-size: 0.8125rem;
          color: #4B5563;
          line-height: 1.4;
        }
        .topic-item.active .topic-text {
          color: #4F46E5;
          font-weight: 500;
        }
        .content-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #F3F4F6;
        }
        .topic-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1F2937;
          margin-bottom: 1.5rem;
        }
        .topic-content {
          margin-bottom: 2rem;
        }
        .content-text {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: #374151;
        }
        .key-points-section {
          background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
          padding: 1.5rem;
          border-radius: 0.75rem;
          margin-bottom: 2rem;
        }
        .key-points-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .key-points-list {
          list-style: none;
          padding: 0;
          margin: 0;
          space-y: 0.75rem;
        }
        .key-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.5rem 0;
          color: #92400E;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        .key-point-bullet {
          width: 6px;
          height: 6px;
          background: #F59E0B;
          border-radius: 50%;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }
        .actions-section {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          border-top: 2px solid #F3F4F6;
        }
        .btn-complete {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          border-radius: 0.5rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-complete:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        .completed-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #D1FAE5;
          color: #065F46;
          border-radius: 0.5rem;
          font-weight: 600;
        }
        .navigation-buttons {
          display: flex;
          gap: 0.5rem;
        }
        .nav-button {
          padding: 0.75rem 1.5rem;
          background: white;
          color: #4F46E5;
          border: 2px solid #4F46E5;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nav-button:hover {
          background: #4F46E5;
          color: white;
        }
        @media (max-width: 768px) {
          .content-card {
            padding: 1.25rem;
          }
          .topic-title {
            font-size: 1.5rem;
          }
          .actions-section {
            flex-direction: column;
            align-items: stretch;
          }
          .navigation-buttons {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}
