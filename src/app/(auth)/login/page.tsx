"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login - replace with actual auth logic
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main className="flex items-center justify-center min-h-screen px-4 py-20">
        <div className="w-full max-w-md">
          {/* Animated background blob */}
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-30" />

          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome Back</h1>
              <p className="text-slate-600">Sign in to your QuizHub account</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-3 text-emerald-500" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors bg-slate-50"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-3 text-emerald-500" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors bg-slate-50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-500 hover:text-emerald-500 transition-colors"
                  >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 border-2 border-slate-200 rounded accent-emerald-500" />
                  <span className="ml-2 text-slate-600">Remember me</span>
                </label>
                <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign In"}
                <FiArrowRight size={18} />
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-slate-500 text-sm">New to QuizHub?</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              {/* Sign Up Link */}
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="w-full border-2 border-emerald-500 text-emerald-600 font-semibold py-3 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
