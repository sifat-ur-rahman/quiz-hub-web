import React from "react";
import { FiBook, FiCheck, FiClipboard } from "react-icons/fi";

function UserTypeSelection({ handleRegisterClick }: any) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Student Card */}
      <div
        onClick={() => handleRegisterClick("student")}
        className="group cursor-pointer"
      >
        <div className="relative h-full rounded-2xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-blue-100 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 transition-transform group-hover:scale-110">
              <FiBook className="text-white" size={32} />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900">Student</h3>
            <p className="mb-6 text-slate-600">
              Take quizzes, learn new subjects, and track your progress
            </p>
            <ul className="mb-6 space-y-2 text-left text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <FiCheck className="text-blue-500" size={18} />
                Access thousands of quizzes
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-blue-500" size={18} />
                Performance tracking
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-blue-500" size={18} />
                Certificate earning
              </li>
            </ul>
            <button className="w-full rounded-lg bg-linear-to-r from-blue-500 to-blue-600 py-2 font-semibold text-white transition-all hover:shadow-lg">
              Register as Student
            </button>
          </div>
        </div>
      </div>

      {/* Examiner Card */}
      <div
        onClick={() => handleRegisterClick("examiner")}
        className="group cursor-pointer"
      >
        <div className="relative h-full rounded-2xl border-2 border-emerald-200 bg-linear-to-br from-emerald-50 to-emerald-100 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 transition-transform group-hover:scale-110">
              <FiClipboard className="text-white" size={32} />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-slate-900">Examiner</h3>
            <p className="mb-6 text-slate-600">
              Create quizzes, manage tests, and evaluate students
            </p>
            <ul className="mb-6 space-y-2 text-left text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500" size={18} />
                Create custom quizzes
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500" size={18} />
                Manage student results
              </li>
              <li className="flex items-center gap-2">
                <FiCheck className="text-emerald-500" size={18} />
                Advanced analytics
              </li>
            </ul>
            <button className="w-full rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 py-2 font-semibold text-white transition-all hover:shadow-lg">
              Register as Examiner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTypeSelection;
