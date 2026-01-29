'use client';

import { useState } from 'react';
import { bookContent } from '@/data/bookContent';
import { getQuestionsByTopicId, getRandomQuestions, QuizQuestion } from '@/data/quizData';
import { useAuth } from '@/contexts/AuthContext';
import { Trophy, BookOpen, CheckCircle2, XCircle, ChevronRight, RotateCcw, Award } from 'lucide-react';

type QuizMode = 'select' | 'active' | 'results';

export default function QuizSection() {
  const { user, updateProgress } = useAuth();
  const [quizMode, setQuizMode] = useState<QuizMode>('select');
  const [selectedChapter, setSelectedChapter] = useState(bookContent[0]);
  const [selectedTopic, setSelectedTopic] = useState(selectedChapter.topics[0]);
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = () => {
    const questions = getRandomQuestions(selectedTopic.id, 5);
    if (questions.length === 0) {
      alert('No questions available for this topic yet.');
      return;
    }
    setCurrentQuestions(questions);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setQuizCompleted(false);
    setQuizMode('active');
  };

  const handleAnswerSelect = (answer: string) => {
    if (!showExplanation) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: answer
      });
    }
  };

  const handleSubmitAnswer = () => {
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const score = calculateScore();
    updateProgress(selectedTopic.id, score);
    setQuizCompleted(true);
    setQuizMode('results');
  };

  const calculateScore = () => {
    let correct = 0;
    currentQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / currentQuestions.length) * 100);
  };

  const restartQuiz = () => {
    setQuizMode('select');
  };

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

  // Select Mode
  if (quizMode === 'select') {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', padding: '2rem', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Trophy style={{ width: '48px', height: '48px', color: '#FCD34D' }} />
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>Quiz Section</h1>
            <p style={{ marginTop: '0.5rem', color: '#FEF3C7' }}>Test your knowledge on any topic</p>
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1F2937', marginBottom: '1.5rem' }}>Select Chapter & Topic</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Chapter</label>
            <select
              value={selectedChapter.id}
              onChange={(e) => {
                const chapter = bookContent.find(c => c.id === Number(e.target.value))!;
                setSelectedChapter(chapter);
                setSelectedTopic(chapter.topics[0]);
              }}
              style={{ width: '100%', padding: '0.75rem', border: '2px solid #E5E7EB', borderRadius: '0.5rem', fontSize: '1rem' }}
            >
              {bookContent.map((chapter) => (
                <option key={chapter.id} value={chapter.id}>
                  Chapter {chapter.id}: {chapter.title}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Topic</label>
            <select
              value={selectedTopic.id}
              onChange={(e) => {
                const topic = selectedChapter.topics.find(t => t.id === e.target.value)!;
                setSelectedTopic(topic);
              }}
              style={{ width: '100%', padding: '0.75rem', border: '2px solid #E5E7EB', borderRadius: '0.5rem', fontSize: '1rem' }}
            >
              {selectedChapter.topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.title}
                </option>
              ))}
            </select>
          </div>

          <div style={{ background: '#EEF2FF', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
            <BookOpen style={{ width: '20px', height: '20px', color: '#4F46E5', flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: '500', color: '#1F2937' }}>{selectedTopic.title}</p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
                {getQuestionsByTopicId(selectedTopic.id).length} questions available
              </p>
            </div>
          </div>

          {user?.progress.quizScores[selectedTopic.id] && (
            <div style={{ background: '#FEF3C7', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
              <Award style={{ width: '20px', height: '20px', color: '#F59E0B', flexShrink: 0 }} />
              <span style={{ fontSize: '0.875rem', color: '#333' }}>
                Previous Best: <strong>{user.progress.quizScores[selectedTopic.id]}%</strong>
              </span>
            </div>
          )}

          <button
            onClick={startQuiz}
            style={{ width: '100%', padding: '0.875rem', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: 'white', fontWeight: '600', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
          >
            Start Quiz
            <ChevronRight style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </div>
    );
  }

  // Active Quiz Mode
  if (quizMode === 'active' && currentQuestion) {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
                Question {currentQuestionIndex + 1} of {currentQuestions.length}
              </span>
              <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4F46E5' }}>{Math.round(progress)}%</span>
            </div>
            <div style={{ height: '8px', background: '#E5E7EB', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, #4F46E5, #7C3AED)', width: `${progress}%`, transition: 'width 0.3s ease' }} />
            </div>
          </div>
        </div>

        <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #F3F4F6' }}>
            <span style={{ padding: '0.25rem 0.75rem', background: currentQuestion.difficulty === 'Easy' ? '#D1FAE5' : currentQuestion.difficulty === 'Medium' ? '#FEF3C7' : '#FEE2E2', color: currentQuestion.difficulty === 'Easy' ? '#065F46' : currentQuestion.difficulty === 'Medium' ? '#92400E' : '#7F1D1D', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '600' }}>
              {currentQuestion.difficulty}
            </span>
            <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              Topic: {selectedTopic.title}
            </span>
          </div>

          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F2937', marginBottom: '1.5rem' }}>{currentQuestion.question}</h2>

          <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
            {Object.entries(currentQuestion.options).map(([key, value]) => {
              const isSelected = selectedAnswer === key;
              const isCorrectAnswer = key === currentQuestion.correctAnswer;
              const showCorrect = showExplanation && isCorrectAnswer;
              const showWrong = showExplanation && isSelected && !isCorrect;

              return (
                <button
                  key={key}
                  onClick={() => handleAnswerSelect(key)}
                  disabled={showExplanation}
                  style={{
                    padding: '1rem',
                    border: showCorrect ? '2px solid #10B981' : showWrong ? '2px solid #EF4444' : isSelected ? '2px solid #4F46E5' : '2px solid #E5E7EB',
                    background: showCorrect ? '#D1FAE5' : showWrong ? '#FEE2E2' : isSelected ? '#EEF2FF' : 'white',
                    borderRadius: '0.75rem',
                    cursor: showExplanation ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.2s',
                    opacity: showExplanation ? 0.8 : 1
                  }}
                >
                  <span style={{ width: '32px', height: '32px', background: '#F3F4F6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', color: '#374151', flexShrink: 0 }}>{key}</span>
                  <span style={{ flex: 1, textAlign: 'left', color: '#374151' }}>{value}</span>
                  {showCorrect && <CheckCircle2 style={{ width: '20px', height: '20px', color: '#059669' }} />}
                  {showWrong && <XCircle style={{ width: '20px', height: '20px', color: '#DC2626' }} />}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div style={{ background: isCorrect ? '#D1FAE5' : '#FEE2E2', border: `2px solid ${isCorrect ? '#10B981' : '#EF4444'}`, padding: '1rem', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {isCorrect ? (
                  <>
                    <CheckCircle2 style={{ width: '24px', height: '24px', color: '#059669' }} />
                    <span style={{ fontWeight: '600', color: '#065F46' }}>Correct!</span>
                  </>
                ) : (
                  <>
                    <XCircle style={{ width: '24px', height: '24px', color: '#DC2626' }} />
                    <span style={{ fontWeight: '600', color: '#7F1D1D' }}>Incorrect</span>
                  </>
                )}
              </div>
              <p style={{ color: isCorrect ? '#047857' : '#991B1B', fontSize: '0.9375rem', lineHeight: '1.6' }}>{currentQuestion.explanation}</p>
            </div>
          )}

          <div>
            {!showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                style={{ width: '100%', padding: '0.875rem', background: selectedAnswer ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' : '#E5E7EB', color: selectedAnswer ? 'white' : '#6B7280', fontWeight: '600', borderRadius: '0.5rem', border: 'none', cursor: selectedAnswer ? 'pointer' : 'not-allowed', transition: 'all 0.2s' }}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                style={{ width: '100%', padding: '0.875rem', background: 'linear-gradient(135deg, #10B981, #059669)', color: 'white', fontWeight: '600', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              >
                {currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <ChevronRight style={{ width: '20px', height: '20px' }} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Results Mode
  if (quizMode === 'results') {
    const score = calculateScore();
    const correctCount = currentQuestions.filter((q, i) => selectedAnswers[i] === q.correctAnswer).length;
    const previousBest = user?.progress.quizScores[selectedTopic.id] || 0;
    const isNewRecord = score > previousBest;

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <div style={{ width: '120px', height: '120px', margin: '0 auto 1.5rem', background: score >= 80 ? 'linear-gradient(135deg, #10B981, #059669)' : score >= 60 ? 'linear-gradient(135deg, #F59E0B, #D97706)' : 'linear-gradient(135deg, #EF4444, #DC2626)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', position: 'relative' }}>
            <Trophy style={{ width: '48px', height: '48px' }} />
            <span style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{score}%</span>
          </div>
          
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1F2937' }}>
            {score >= 80 ? 'Excellent Work!' : score >= 60 ? 'Good Job!' : 'Keep Practicing!'}
          </h2>
          <p style={{ color: '#6B7280', marginTop: '0.5rem' }}>
            You answered {correctCount} out of {currentQuestions.length} questions correctly
          </p>
          {isNewRecord && previousBest > 0 && (
            <div style={{ background: '#FEF3C7', padding: '0.75rem 1rem', borderRadius: '0.5rem', marginTop: '1rem', color: '#92400E', fontWeight: '500' }}>
              🎉 New Personal Best! (Previous: {previousBest}%)
            </div>
          )}
        </div>

        <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1F2937' }}>Question Review</h3>
          <div style={{ space: '1rem' }}>
            {currentQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div key={index} style={{ padding: '1rem', background: isCorrect ? '#D1FAE5' : '#FEE2E2', borderRadius: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    {isCorrect ? (
                      <CheckCircle2 style={{ width: '20px', height: '20px', color: '#059669' }} />
                    ) : (
                      <XCircle style={{ width: '20px', height: '20px', color: '#DC2626' }} />
                    )}
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: isCorrect ? '#065F46' : '#7F1D1D' }}>Question {index + 1}</span>
                  </div>
                  <p style={{ fontWeight: '500', marginBottom: '0.5rem', color: '#1F2937' }}>{question.question}</p>
                  <div style={{ fontSize: '0.875rem' }}>
                    <p style={{ color: '#374151' }}>
                      <span style={{ fontWeight: '500' }}>Your answer:</span> {userAnswer} - {question.options[userAnswer as keyof typeof question.options]}
                    </p>
                    {!isCorrect && (
                      <p style={{ color: isCorrect ? '#065F46' : '#7F1D1D', marginTop: '0.25rem' }}>
                        <span style={{ fontWeight: '500' }}>Correct answer:</span> {question.correctAnswer} - {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <button
            onClick={startQuiz}
            style={{ padding: '0.875rem', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: 'white', fontWeight: '600', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <RotateCcw style={{ width: '20px', height: '20px' }} />
            Try Again
          </button>
          <button
            onClick={restartQuiz}
            style={{ padding: '0.875rem', background: 'white', border: '2px solid #4F46E5', color: '#4F46E5', fontWeight: '600', borderRadius: '0.5rem', cursor: 'pointer' }}
          >
            Choose New Topic
          </button>
        </div>
      </div>
    );
  }

  return null;
}
