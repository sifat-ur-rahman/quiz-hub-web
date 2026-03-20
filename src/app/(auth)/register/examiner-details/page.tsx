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
    >,
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
    <div className="bg-background min-h-screen">
      {/* <Header /> */}
      <main className="flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl">
          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 inline-block rounded-full bg-linear-to-br from-emerald-100 to-emerald-200 p-4">
                <FiBriefcase className="text-emerald-600" size={32} />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-slate-900">
                Examiner Profile Setup
              </h1>
              <p className="text-slate-600">
                Share your professional details to start creating quizzes
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              {/* Row 1 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Dr. Jane Smith"
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Designation *
                  </label>
                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
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
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email *
                  </label>
                  <div className="relative">
                    <FiMail
                      className="absolute top-3 left-3 text-emerald-500"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="examiner@example.com"
                      className="w-full rounded-lg border-2 border-slate-200 py-3 pr-4 pl-10 transition-colors focus:border-emerald-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FiPhone
                      className="absolute top-3 left-3 text-emerald-500"
                      size={20}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border-2 border-slate-200 py-3 pr-4 pl-10 transition-colors focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Institution *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Your Institution Name"
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
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
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Subjects You Teach *
                </label>
                <textarea
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleChange}
                  placeholder="e.g., Mathematics, Physics, English..."
                  rows={2}
                  className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
                  required
                />
              </div>

              {/* Qualifications */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Qualifications
                </label>
                <textarea
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                  placeholder="e.g., B.Sc in Physics, M.Ed..."
                  rows={2}
                  className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Professional Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about your teaching experience and expertise..."
                  rows={3}
                  className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 py-3 font-semibold text-white transition-all hover:shadow-lg disabled:opacity-70"
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
