import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

function CreateAccountForm({
  userType,
  setStep,
}: {
  userType: "student" | "examiner";
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBasicRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    // Save basic registration data and proceed to detailed onboarding
    setTimeout(() => {
      setLoading(false);
      if (userType === "student") {
        router.push("/register/student-details");
      } else {
        router.push("/register/examiner-details");
      }
    }, 1000);
  };

  const handleBack = () => {
    setStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold text-slate-900">
          Create Your {userType === "student" ? "Student" : "Examiner"} Account
        </h2>
        <p className="text-slate-600">
          Fill in your basic information to get started
        </p>
      </div>

      <form
        onSubmit={handleBasicRegister}
        className="mx-auto max-w-md space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        {error && (
          <div className="rounded-lg border-2 border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Full Name */}
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
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password *
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Min. 6 characters"
              className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-slate-600 hover:text-slate-900"
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Confirm Password *
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 transition-colors focus:border-emerald-500 focus:outline-none"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={handleBack}
            className="flex-1 rounded-lg bg-slate-200 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-300"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-emerald-500 to-teal-500 py-3 font-semibold text-white transition-all hover:shadow-lg disabled:opacity-70"
          >
            {loading ? "Creating..." : "Continue"}
            {!loading && <FiArrowRight size={18} />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountForm;
