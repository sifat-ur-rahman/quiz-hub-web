"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import Header from "@/components/header"
// import Footer from "@/components/footer"
import { FiUser, FiMail, FiPhone, FiArrowRight } from "react-icons/fi";

export default function StudentDetailsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    school: "",
    grade: "",
    address: "",
    city: "",
    interests: "",
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
    const studentData = {
      type: "student",
      ...formData,
    };
    localStorage.setItem("studentProfile", JSON.stringify(studentData));
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
              <div className="mb-4 inline-block rounded-full bg-linear-to-br from-blue-100 to-blue-200 p-4">
                <FiUser className="text-blue-600" size={32} />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-slate-900">
                Complete Your Student Profile
              </h1>
              <p className="text-slate-600">
                Tell us about yourself to personalize your learning experience
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
                    placeholder="John Doe"
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none"
                    required
                  />
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
                      className="absolute top-3 left-3 text-blue-500"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@example.com"
                      className="w-full rounded-lg border-2 border-slate-200 py-3 pr-4 pl-10 transition-colors focus:border-blue-500 focus:outline-none"
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
                      className="absolute top-3 left-3 text-blue-500"
                      size={20}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border-2 border-slate-200 py-3 pr-4 pl-10 transition-colors focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    School/Institution *
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="Your School Name"
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Grade/Class *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select your grade</option>
                    <option value="9">9th Grade</option>
                    <option value="10">10th Grade</option>
                    <option value="11">11th Grade</option>
                    <option value="12">12th Grade</option>
                    <option value="college">College</option>
                  </select>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="New York"
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address"
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Areas of Interest
                </label>
                <textarea
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="e.g., Mathematics, Science, Languages..."
                  rows={3}
                  className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-blue-600 py-3 font-semibold text-white transition-all hover:shadow-lg disabled:opacity-70"
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
