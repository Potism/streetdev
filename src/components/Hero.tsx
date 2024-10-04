"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Button } from "./ui/button";

export default function Hero() {
  const words = [
    {
      text: "We",
    },
    {
      text: "are",
    },
    {
      text: "Street",
    },
    {
      text: "Devs.",
      className: "text-blue-500 dark:bg-white dark:text-stone-900",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-white dark:bg-gray-950 bg-dot-black/[0.2] dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100">
            Welcome to StreetDevs
          </h1>
        </motion.div>

        <TypewriterEffect words={words} />

        <motion.p
          className="mt-6 max-w-xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          We're a collective of passionate developers creating innovative web
          and mobile solutions for the modern digital landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8"
        >
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-white dark:text-stone-900 dark:hover:bg-blue-700"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
