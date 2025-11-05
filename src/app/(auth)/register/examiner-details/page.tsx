"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import Header from "@/components/header"
// import Footer from "@/components/footer"
import { FiMail, FiPhone, FiBriefcase, FiArrowRight } from "react-icons/fi";

export default function ExaminerDetailsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    designation: "",
    institution: "",
    experience: "",
    subjects: "",
    qualifications: "",
    bio: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Here you would typically send both basic and detailed info to backend
    // For now, saving to localStorage as example
    const examinerData = {
      type: "examiner",
      ...formData,
    };
    localStorage.setItem("examinerProfile", JSON.stringify(examinerData));
    setTimeout(() => {
      setLoading(false);
      // router.push("/dashboard")
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main className="flex items-center justify-center min-h-screen px-4 py-20">
        <div className="w-full max-w-2xl">
          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block bg-linear-to-br from-emerald-100 to-emerald-200 rounded-full p-4 mb-4">
                <FiBriefcase className="text-emerald-600" size={32} />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Examiner Profile Setup
              </h1>
              <p className="text-slate-600">
                Share your professional details to start creating quizzes
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
            >
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Dr. Jane Smith"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Designation *
                  </label>
                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    required
                  >
                    <option value="">Select designation</option>
                    <option value="teacher">Teacher</option>
                    <option value="professor">Professor</option>
                    <option value="trainer">Trainer</option>
                    <option value="instructor">Instructor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <FiMail
                      className="absolute left-3 top-3 text-emerald-500"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="examiner@example.com"
                      className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FiPhone
                      className="absolute left-3 top-3 text-emerald-500"
                      size={20}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Institution *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Your Institution Name"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    required
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              {/* Subjects */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subjects You Teach *
                </label>
                <textarea
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleChange}
                  placeholder="e.g., Mathematics, Physics, English..."
                  rows={2}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
              </div>

              {/* Qualifications */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Qualifications
                </label>
                <textarea
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                  placeholder="e.g., B.Sc in Physics, M.Ed..."
                  rows={2}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Professional Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about your teaching experience and expertise..."
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? "Saving..." : "Complete Registration"}
                <FiArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
