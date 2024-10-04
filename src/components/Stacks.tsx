"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiNestjs,
} from "react-icons/si";

const stacks = [
  { name: "React", icon: SiReact, color: "text-blue-500 dark:text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-teal-500 dark:text-teal-400",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500 dark:text-green-400",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-600 dark:text-green-500",
  },
  { name: "Nest.js", icon: SiNestjs, color: "text-red-500 dark:text-red-400" },
];

export default function Stacks() {
  return (
    <section id="stacks" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
          Our Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <stack.icon className={`text-4xl ${stack.color} mb-2`} />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {stack.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
