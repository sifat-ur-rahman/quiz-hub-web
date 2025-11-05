import React from 'react'
import { FiBook, FiCheck, FiClipboard } from 'react-icons/fi'

function UserTypeSelection( { handleRegisterClick }: any) {
  return (
                 <div className="grid md:grid-cols-2 gap-8">
                {/* Student Card */}
                <div onClick={() => handleRegisterClick("student")} className="group cursor-pointer">
                  <div className="relative h-full bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FiBook className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Student</h3>
                      <p className="text-slate-600 mb-6">Take quizzes, learn new subjects, and track your progress</p>
                      <ul className="space-y-2 text-sm text-slate-700 text-left mb-6">
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
                      <button className="w-full bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all">
                        Register as Student
                      </button>
                    </div>
                  </div>
                </div>

                {/* Examiner Card */}
                <div onClick={() => handleRegisterClick("examiner")} className="group cursor-pointer">
                  <div className="relative h-full bg-linear-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FiClipboard className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Examiner</h3>
                      <p className="text-slate-600 mb-6">Create quizzes, manage tests, and evaluate students</p>
                      <ul className="space-y-2 text-sm text-slate-700 text-left mb-6">
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
                      <button className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all">
                        Register as Examiner
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default UserTypeSelection