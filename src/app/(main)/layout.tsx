import Footer from "@/src/components/main/shared/footer";
import Header from "@/src/components/main/shared/header";
import React from "react";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <div className="bg-background min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
