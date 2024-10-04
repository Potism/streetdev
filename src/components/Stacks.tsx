"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiNestjs,
} from "react-icons/si";
import { Timeline } from "./ui/timeline";

const stacks = [
  {
    title: "React",
    content: (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <SiReact className="text-blue-500 dark:text-blue-400 text-3xl" />
          <h4 className="text-lg font-semibold">React</h4>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">
          A JavaScript library for building user interfaces with reusable
          components. React&apos;s declarative syntax and component-based
          architecture make it easy to create interactive UIs.
        </p>
      </div>
    ),
  },
  {
    title: "Next.js",
    content: (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <SiNextdotjs className="text-black dark:text-white text-3xl" />
          <h4 className="text-lg font-semibold">Next.js</h4>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">
          The React framework for production, offering server-side rendering and
          static site generation. Next.js provides a powerful toolset for
          building scalable and performant web applications.
        </p>
      </div>
    ),
  },
  {
    title: "Tailwind CSS",
    content: (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <SiTailwindcss className="text-teal-500 dark:text-teal-400 text-3xl" />
          <h4 className="text-lg font-semibold">Tailwind CSS</h4>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">
          A utility-first CSS framework for rapidly building custom user
          interfaces. Tailwind CSS allows for quick prototyping and consistent
          design implementation across projects.
        </p>
      </div>
    ),
  },
  {
    title: "MongoDB",
    content: (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <SiMongodb className="text-green-500 dark:text-green-400 text-3xl" />
          <h4 className="text-lg font-semibold">MongoDB</h4>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">
          A document-based, distributed database built for modern application
          developers. MongoDB&apos;s flexible schema and powerful query language
          make it ideal for handling complex data structures.
        </p>
      </div>
    ),
  },
  {
    title: "Node.js",
    content: (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <SiNodedotjs className="text-green-600 dark:text-green-500 text-3xl" />
          <h4 className="text-lg font-semibold">Node.js</h4>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">
          A JavaScript runtime built on Chrome&apos;s V8 JavaScript engine for
          server-side development. Node.js enables building scalable network
          applications and provides a vast ecosystem of packages through npm.
        </p>
      </div>
    ),
  },
  {
    title: "Nest.js",
    content: (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <SiNestjs className="text-red-500 dark:text-red-400 text-3xl" />
          <h4 className="text-lg font-semibold">Nest.js</h4>
        </div>
        <p className="text-neutral-700 dark:text-neutral-300">
          A progressive Node.js framework for building efficient and scalable
          server-side applications. Nest.js leverages TypeScript and combines
          elements of OOP, FP, and FRP for robust application architectures.
        </p>
      </div>
    ),
  },
];

export default function StacksTimeline() {
  return (
    <section id="stacks" className="bg-gray-50 dark:bg-gray-950">
      <Timeline data={stacks} />
    </section>
  );
}
