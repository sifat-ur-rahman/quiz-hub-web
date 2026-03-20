"use client";

import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-emerald-50 to-cyan-50">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-slate-900 md:text-6xl">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-700">
            We'd love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg">
                  <FiMail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">support@quizhub.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg">
                  <FiPhone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg">
                  <FiMapPin className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Address</h3>
                  <p className="text-slate-600">
                    123 Learning Street, Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="animate-fade-in-up rounded-2xl bg-white p-8 shadow-lg"
          >
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message subject"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <FiSend className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
