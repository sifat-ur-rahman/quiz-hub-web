"use client";

import { use, useState } from "react";
import Link from "next/link";
import { FiChevronLeft, FiEye, FiCheck } from "react-icons/fi";

const quizData = {
  1: {
    subject: "Mathematics",
    title: "Algebra & Calculus Fundamentals",
    duration: 60,
    totalQuestions: 20,
    questions: [
      {
        id: 1,
        question: "What is the derivative of x²?",
        options: ["2x", "x", "2", "x³"],
        correct: 0,
      },
      {
        id: 2,
        question: "Solve: 2x + 5 = 15",
        options: ["5", "10", "3", "7"],
        correct: 0,
      },
      {
        id: 3,
        question: "What is the value of π (pi) approximately?",
        options: ["2.14", "3.14", "4.14", "5.14"],
        correct: 1,
      },
    ],
  },
};

export default function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const quiz = quizData[resolvedParams.id as unknown as keyof typeof quizData];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPreview, setShowPreview] = useState(true);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Quiz not found
          </h1>
          <Link
            href="/student/dashboard"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correct++;
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  if (submitted) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md w-full animate-fade-in-up">
          <div
            className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
              score >= 70 ? "bg-emerald-100" : "bg-amber-100"
            }`}
          >
            <span
              className={`text-4xl font-bold ${
                score >= 70 ? "text-emerald-600" : "text-amber-600"
              }`}
            >
              {score}%
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {score >= 70 ? "Great Job! 🎉" : "Good Effort! 💪"}
          </h2>
          <p className="text-slate-600 mb-8">
            You answered {Object.keys(answers).length} out of{" "}
            {quiz.questions.length} questions correctly.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Retake Quiz
            </button>
            <Link
              href="/student/dashboard"
              className="w-full bg-slate-100 text-slate-900 py-3 rounded-lg font-semibold hover:bg-slate-200 transition block"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full animate-fade-in-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                <FiEye className="text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {quiz.subject}
                </h2>
                <p className="text-slate-600">{quiz.title}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-emerald-50 rounded-lg">
              <div>
                <p className="text-sm text-slate-600">Duration</p>
                <p className="text-lg font-bold text-emerald-600">
                  {quiz.duration} mins
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Questions</p>
                <p className="text-lg font-bold text-emerald-600">
                  {quiz.totalQuestions}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-slate-900">Instructions:</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>
                    You have {quiz.duration} minutes to complete the quiz
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Answer all {quiz.totalQuestions} questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>You can review your answers before submitting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Click Submit to finalize your quiz</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowPreview(false)}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Start Quiz
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-emerald-100 shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/student/dashboard"
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition"
          >
            <FiChevronLeft className="text-xl" />
            <span className="font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold text-slate-900">
            {quiz.subject} - Question {currentQuestion + 1}/
            {quiz.questions.length}
          </h1>
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-semibold text-sm">
            {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <div className="w-full bg-emerald-100 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full h-2 transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestion + 1) / quiz.questions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {question.question}
          </h2>

          <div className="space-y-3 mb-12">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all font-medium ${
                  answers[currentQuestion] === index
                    ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index
                        ? "border-emerald-500 bg-emerald-500"
                        : "border-slate-300"
                    }`}
                  >
                    {answers[currentQuestion] === index && (
                      <FiCheck className="text-white text-lg" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 rounded-lg border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentQuestion
                      ? "bg-emerald-600 w-8"
                      : answers[index] !== undefined
                      ? "bg-emerald-300"
                      : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {currentQuestion === quiz.questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2"
              >
                <FiCheck className="text-lg" />
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
