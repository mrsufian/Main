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
      <div className="max-w-4xl mx-auto">
        <div className="header-card">
          <Trophy className="w-12 h-12 text-amber-500" />
          <div>
            <h1 className="text-3xl font-bold text-white">Quiz Section</h1>
            <p className="text-indigo-100 mt-2">Test your knowledge on any topic</p>
          </div>
        </div>

        <div className="selection-card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Select Chapter & Topic</h2>
          
          {/* Chapter Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Chapter</label>
            <select
              value={selectedChapter.id}
              onChange={(e) => {
                const chapter = bookContent.find(c => c.id === Number(e.target.value))!;
                setSelectedChapter(chapter);
                setSelectedTopic(chapter.topics[0]);
              }}
              className="select-field"
            >
              {bookContent.map((chapter) => (
                <option key={chapter.id} value={chapter.id}>
                  Chapter {chapter.id}: {chapter.title}
                </option>
              ))}
            </select>
          </div>

          {/* Topic Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
            <select
              value={selectedTopic.id}
              onChange={(e) => {
                const topic = selectedChapter.topics.find(t => t.id === e.target.value)!;
                setSelectedTopic(topic);
              }}
              className="select-field"
            >
              {selectedChapter.topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.title}
                </option>
              ))}
            </select>
          </div>

          {/* Topic Info */}
          <div className="info-box">
            <BookOpen className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-gray-800">{selectedTopic.title}</p>
              <p className="text-sm text-gray-600 mt-1">
                {getQuestionsByTopicId(selectedTopic.id).length} questions available
              </p>
            </div>
          </div>

          {/* Previous Score */}
          {user?.progress.quizScores[selectedTopic.id] && (
            <div className="score-box">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-sm text-gray-700">
                Previous Best: <strong>{user.progress.quizScores[selectedTopic.id]}%</strong>
              </span>
            </div>
          )}

          <button onClick={startQuiz} className="start-quiz-btn">
            Start Quiz
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Active Quiz Mode
  if (quizMode === 'active' && currentQuestion) {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

    return (
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="quiz-progress">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question Card */}
        <div className="question-card">
          <div className="question-header">
            <span className={`difficulty-badge ${currentQuestion.difficulty.toLowerCase()}`}>
              {currentQuestion.difficulty}
            </span>
            <span className="text-sm text-gray-500">
              Topic: {selectedTopic.title}
            </span>
          </div>

          <h2 className="question-text">{currentQuestion.question}</h2>

          {/* Options */}
          <div className="options-grid">
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
                  className={`option-button ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showWrong ? 'wrong' : ''}`}
                >
                  <span className="option-label">{key}</span>
                  <span className="option-text">{value}</span>
                  {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                  {showWrong && <XCircle className="w-5 h-5 text-red-600" />}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`explanation-box ${isCorrect ? 'correct' : 'incorrect'}`}>
              <div className="explanation-header">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <span className="font-semibold text-green-800">Correct!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-600" />
                    <span className="font-semibold text-red-800">Incorrect</span>
                  </>
                )}
              </div>
              <p className="explanation-text">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="quiz-actions">
            {!showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="submit-btn"
              >
                Submit Answer
              </button>
            ) : (
              <button onClick={handleNextQuestion} className="next-btn">
                {currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                <ChevronRight className="w-5 h-5" />
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
      <div className="max-w-3xl mx-auto">
        <div className="results-card">
          <div className="results-header">
            <div className={`score-circle ${score >= 80 ? 'excellent' : score >= 60 ? 'good' : 'needs-work'}`}>
              <Trophy className="w-12 h-12" />
              <span className="score-value">{score}%</span>
            </div>
            <h2 className="results-title">
              {score >= 80 ? 'Excellent Work!' : score >= 60 ? 'Good Job!' : 'Keep Practicing!'}
            </h2>
            <p className="results-subtitle">
              You answered {correctCount} out of {currentQuestions.length} questions correctly
            </p>
            {isNewRecord && previousBest > 0 && (
              <div className="new-record-badge">
                🎉 New Personal Best! (Previous: {previousBest}%)
              </div>
            )}
          </div>

          {/* Question Review */}
          <div className="review-section">
            <h3 className="review-title">Question Review</h3>
            <div className="review-list">
              {currentQuestions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;

                return (
                  <div key={index} className="review-item">
                    <div className="review-item-header">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span className="review-item-number">Question {index + 1}</span>
                    </div>
                    <p className="review-question">{question.question}</p>
                    <div className="review-answers">
                      <p className="text-sm">
                        <span className="font-medium">Your answer:</span> {userAnswer} - {question.options[userAnswer as keyof typeof question.options]}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-700">
                          <span className="font-medium">Correct answer:</span> {question.correctAnswer} - {question.options[question.correctAnswer]}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="results-actions">
            <button onClick={startQuiz} className="retry-btn">
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>
            <button onClick={restartQuiz} className="new-quiz-btn">
              Choose New Topic
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
