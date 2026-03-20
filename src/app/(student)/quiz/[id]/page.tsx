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
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-slate-900">
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
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6">
        <div className="animate-fade-in-up w-full max-w-md rounded-2xl bg-white p-12 text-center shadow-2xl">
          <div
            className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${
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
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            {score >= 70 ? "Great Job! 🎉" : "Good Effort! 💪"}
          </h2>
          <p className="mb-8 text-slate-600">
            You answered {Object.keys(answers).length} out of{" "}
            {quiz.questions.length} questions correctly.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 font-semibold text-white transition hover:shadow-lg"
            >
              Retake Quiz
            </button>
            <Link
              href="/student/dashboard"
              className="block w-full rounded-lg bg-slate-100 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="animate-fade-in-up w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                <FiEye className="text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {quiz.subject}
                </h2>
                <p className="text-slate-600">{quiz.title}</p>
              </div>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-emerald-50 p-4">
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

            <div className="mb-8 space-y-3 rounded-lg bg-blue-50 p-4">
              <h3 className="font-semibold text-slate-900">Instructions:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>
                    You have {quiz.duration} minutes to complete the quiz
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Answer all {quiz.totalQuestions} questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>You can review your answers before submitting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">•</span>
                  <span>Click Submit to finalize your quiz</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowPreview(false)}
              className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 font-semibold text-white transition hover:shadow-lg"
            >
              Start Quiz
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/student/dashboard"
            className="flex items-center gap-2 text-emerald-600 transition hover:text-emerald-700"
          >
            <FiChevronLeft className="text-xl" />
            <span className="font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold text-slate-900">
            {quiz.subject} - Question {currentQuestion + 1}/
            {quiz.questions.length}
          </h1>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-600">
            {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b border-emerald-100 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-3">
          <div className="h-2 w-full rounded-full bg-emerald-100">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300"
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
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="animate-fade-in-up rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            {question.question}
          </h2>

          <div className="mb-12 space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full rounded-lg border-2 p-4 text-left font-medium transition-all ${
                  answers[currentQuestion] === index
                    ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                      answers[currentQuestion] === index
                        ? "border-emerald-500 bg-emerald-500"
                        : "border-slate-300"
                    }`}
                  >
                    {answers[currentQuestion] === index && (
                      <FiCheck className="text-lg text-white" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="rounded-lg border-2 border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    index === currentQuestion
                      ? "w-8 bg-emerald-600"
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
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
              >
                <FiCheck className="text-lg" />
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
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
