"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const questions = [
  {
    question:
      "What is the purpose of passive fire protection?",
    options: [
      "To stop all fires instantly",
      "To slow the spread of fire and smoke",
      "To replace sprinklers",
      "To cool buildings",
    ],
    answer:
      "To slow the spread of fire and smoke",
  },
  {
    question:
      "What happens when a service penetrates a fire-rated wall?",
    options: [
      "Nothing is required",
      "It must be fire stopped",
      "It can remain open",
      "Only paint is required",
    ],
    answer:
      "It must be fire stopped",
  },
  {
    question:
      "What is a fire door designed to do?",
    options: [
      "Stay open permanently",
      "Improve ventilation",
      "Maintain compartmentation",
      "Replace smoke alarms",
    ],
    answer:
      "Maintain compartmentation",
  },
  {
    question:
      "What is one common passive fire defect?",
    options: [
      "Clean windows",
      "Unsealed penetrations",
      "Paint colour",
      "Carpet tiles",
    ],
    answer:
      "Unsealed penetrations",
  },
  {
    question:
      "Why are smoke seals important on fire doors?",
    options: [
      "They improve decoration",
      "They stop doors rattling",
      "They help limit smoke spread",
      "They make doors lighter",
    ],
    answer:
      "They help limit smoke spread",
  },
];

export default function QuizStartPage() {

  const router = useRouter();

  const [name, setName] =
    useState("");

  const [started, setStarted] =
    useState(false);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [completed, setCompleted] =
    useState(false);

  const handleAnswer = (
    selected: string
  ) => {

    if (
      selected ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    const nextQuestion =
      currentQuestion + 1;

    if (
      nextQuestion < questions.length
    ) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-24">

        <div className="w-full rounded-[40px] border border-zinc-800 bg-zinc-950 p-12">

          {!started ? (

            <div className="text-center">

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
                Passive Fire Awareness Quiz
              </p>

              <h1 className="text-5xl font-bold leading-tight">
                Enter Your Name
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-xl leading-10 text-zinc-400">
                Your name will appear on the Passive Fire Awareness Certificate after completing the quiz.
              </p>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Enter your full name"
                className="mt-12 w-full rounded-2xl border border-zinc-700 bg-black px-6 py-5 text-lg text-white outline-none transition focus:border-orange-500"
              />

              <button
                onClick={() => setStarted(true)}
                disabled={!name.trim()}
                className="mt-10 rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Start Quiz
              </button>

            </div>

          ) : !completed ? (

            <>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
                Question {currentQuestion + 1} of {questions.length}
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {questions[currentQuestion].question}
              </h1>

              <div className="mt-12 grid gap-4">

                {questions[currentQuestion].options.map(
                  (option) => (

                    <button
                      key={option}
                      onClick={() =>
                        handleAnswer(option)
                      }
                      className="rounded-2xl border border-zinc-700 px-6 py-5 text-left text-lg transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                    >
                      {option}
                    </button>

                  )
                )}

              </div>
            </>

          ) : (

            <div className="text-center">

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
                Quiz Completed
              </p>

              <h1 className="text-5xl font-bold">
                Your Score:
              </h1>

              <p className="mt-6 text-7xl font-bold text-orange-500">
                {score} / {questions.length}
              </p>

              <p className="mx-auto mt-10 max-w-2xl text-xl leading-10 text-zinc-400">
                Thank you for completing the Passive Fire Awareness Quiz for Sydney and NSW.
              </p>

              <button
                onClick={() =>
                  router.push(
                    `/learning/certificate?name=${encodeURIComponent(name)}`
                  )
                }
                className="mt-12 rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
              >
                Generate Certificate
              </button>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}