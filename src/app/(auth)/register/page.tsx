"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import UserTypeSelection from "@/src/components/auth/UserTypeSelection";
import CreateAccountForm from "@/src/components/auth/CreateAccountForm";

export default function RegisterPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<"student" | "examiner">("student");

  const [step, setStep] = useState(1);

  const handleRegisterClick = (type: "student" | "examiner") => {
    setUserType(type);
    setStep(2);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* <Header /> */}
      <main className="flex min-h-screen items-center justify-center px-4 py-20">
        <div className="w-full max-w-4xl">
          {step === 1 && (
            <div className="animate-fade-in-up">
              {/* Header */}
              <div className="mb-12 text-center">
                <h1 className="mb-2 text-4xl font-bold text-slate-900">
                  Join QuizHub
                </h1>
                <p className="text-lg text-slate-600">
                  Choose your role to get started
                </p>
              </div>

              {/* User Type Selection */}
              <UserTypeSelection handleRegisterClick={handleRegisterClick} />

              {/* Sign In Link */}
              <div className="mt-12 text-center">
                <span className="text-slate-600">
                  Already have an account?{" "}
                </span>
                <button
                  onClick={() => router.push("/login")}
                  className="font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <CreateAccountForm userType={userType} setStep={setStep} />
          )}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
