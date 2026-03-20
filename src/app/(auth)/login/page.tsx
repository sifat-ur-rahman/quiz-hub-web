"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login - replace with actual auth logic
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* <Header /> */}
      <main className="flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          {/* Animated background blob */}
          <div className="absolute inset-0 -z-10 rounded-full bg-linear-to-br from-emerald-50 to-teal-50 opacity-30 blur-3xl" />

          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-4xl font-bold text-slate-900">
                Welcome Back
              </h1>
              <p className="text-slate-600">Sign in to your QuizHub account</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail
                    className="absolute top-3 left-3 text-emerald-500"
                    size={20}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 py-3 pr-4 pl-10 transition-colors focus:border-emerald-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <FiLock
                    className="absolute top-3 left-3 text-emerald-500"
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 py-3 pr-12 pl-10 transition-colors focus:border-emerald-500 focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-3 text-slate-500 transition-colors hover:text-emerald-500"
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-2 border-slate-200 accent-emerald-500"
                  />
                  <span className="ml-2 text-slate-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="font-medium text-emerald-600 hover:text-emerald-700"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-emerald-500 to-teal-500 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign In"}
                <FiArrowRight size={18} />
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-sm text-slate-500">New to QuizHub?</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Sign Up Link */}
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="w-full rounded-lg border-2 border-emerald-500 py-3 font-semibold text-emerald-600 transition-colors hover:bg-emerald-50"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
