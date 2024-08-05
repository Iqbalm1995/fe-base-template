import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import React, { Suspense, useState } from "react";
import LandingPage from "./landing/LandingPage";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <Suspense fallback={<div>Mohon tunggu...</div>}>
    <>
      <Head>
        <title>Application Name - Bank bjb</title>
        <meta name="description" content="Learn more about Bank bjb." />
        <link rel="icon" href="/img/logo-bjb.png" />
      </Head>
      <LandingPage />
    </>
    // </Suspense>
  );
}
