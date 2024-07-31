import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import React, { Suspense, useState } from "react";
import LandingPage from "./landing/LandingPage";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <Suspense fallback={<div>Mohon tunggu...</div>}>
    <LandingPage />
    // </Suspense>
  );
}
