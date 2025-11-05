import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReduxProvider from "../providers/ReduxProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "QuizHub - Professional Quiz Platform",
  description:
    "QuizHub: A professional platform for creating, managing, and taking quizzes with Admin, Examiner, and Student roles.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
        <Analytics />
      </body>
    </html>
  );
}
