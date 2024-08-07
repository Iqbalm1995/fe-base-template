import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import React, { Suspense, useState } from "react";
import LandingPage from "./landing/LandingPage";
import Head from "next/head";
import HeadTittleWeb from "@/base_templates/components/HeadTittleWeb";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <Suspense fallback={<div>Mohon tunggu...</div>}>
    <>
      <HeadTittleWeb tittlePage={""} />
      <LandingPage />
    </>
    // </Suspense>
  );
}
