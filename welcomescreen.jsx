"use client";
import React from "react";

/**
 * WelcomeScreen component displays a full-screen welcome message
 * with responsive text sizing and padding
 */
function WelcomeScreen() {
  return (
    <section className="px-16 pt-0 pb-52 w-full min-h-screen text-5xl text-center text-white max-md:px-10 max-md:pt-0 max-md:pb-40 max-md:text-4xl max-sm:px-5 max-sm:pt-0 max-sm:pb-32 max-sm:text-3xl">
      <h1>Welcome</h1>
    </section>
  );
}

export default WelcomeScreen;
