"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const questions = [
  {
    question:
      "What is the main purpose of passive fire protection?",
    options: [
      "To extinguish fires automatically",
      "To slow the spread of fire and smoke",
      "To replace smoke alarms",
      "To provide ventilation",
    ],
    answer:
      "To slow the spread of fire and smoke",
  },
  {
    question:
      "What is fire compartmentation?",
    options: [
      "A ventilation system",
      "A sprinkler system",
      "Dividing a building into fire-rated compartments",
      "A smoke alarm network",
    ],
    answer:
      "Dividing a building into fire-rated compartments",
  },
  {
    question:
      "What commonly passes through fire-rated walls and floors requiring fire stopping protection?",
    options: [
      "Furniture",
      "Lighting only",
      "Pipes, cables and ducts",
      "Windows",
    ],
    answer:
      "Pipes, cables and ducts",
  },
  {
    question:
      "Why are fire doors important?",
    options: [
      "They improve air conditioning",
      "They help maintain compartmentation and protect escape routes",
      "They reduce lighting costs",
      "They are decorative only",
    ],
    answer:
      "They help maintain compartmentation and protect escape routes",
  },
  {
    question:
      "What is a common passive fire defect identified during inspections?",
    options: [
      "Paint colour changes",
      "Broken ceiling tiles only",
      "Unsealed service penetrations",
      "Loose carpet edges",
    ],
    answer:
      "Unsealed service penetrations",
  },
];

export default function QuizPage() {

  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [showResult, setShowResult] =
    useState(false);

  const [name, setName] =
    useState("");

  const handleAnswer = () => {

    if (
      selectedAnswer ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (
      currentQuestion + 1 <
      questions.length
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );
    } else {
      setShowResult(true);
    }
  };

  const passed =
    score >= 4;

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-24">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/christchurch.png"
            alt="Christchurch Passive Fire Quiz"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Christchurch Passive Fire Learning
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Awareness Quiz
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Test your understanding of passive fire protection,
            fire compartmentation,
            service penetrations and fire door systems.
          </p>

        </div>

      </section>

      {/* QUIZ */}
      <section className="py-24">

        <div className="mx-auto max-w-4xl px-6">

          {!showResult ? (

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
                Question {currentQuestion + 1} of {questions.length}
              </p>

              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">
                {questions[currentQuestion].question}
              </h2>

              <div className="mt-12 space-y-4">

                {questions[currentQuestion].options.map(
                  (option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setSelectedAnswer(option)
                      }
                      className={`w-full rounded-2xl border px-6 py-5 text-left text-lg transition ${
                        selectedAnswer === option
                          ? "border-orange-500 bg-orange-500 text-black"
                          : "border-zinc-700 bg-black text-white hover:border-orange-500"
                      }`}
                    >
                      {option}
                    </button>
                  )
                )}

              </div>

              <button
                onClick={handleAnswer}
                disabled={!selectedAnswer}
                className="mt-10 rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next Question
              </button>

            </div>

          ) : (

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-12 text-center">

              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
                Quiz Complete
              </p>

              <h2 className="mt-6 text-5xl font-bold">
                Your Score: {score}/{questions.length}
              </h2>

              {passed ? (

                <div>

                  <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                    Congratulations.
                    You have successfully completed the Christchurch Passive Fire Awareness Quiz.
                  </p>

                  {/* NAME INPUT */}
                  <div className="mx-auto mt-12 max-w-xl">

                    <input
                      type="text"
                      placeholder="Enter your name for the certificate"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                      className="w-full rounded-2xl border border-zinc-700 bg-black px-6 py-5 text-lg text-white outline-none transition focus:border-orange-500"
                    />

                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      router.push(
                        `/learning/certificate?name=${encodeURIComponent(name || "Participant")}`
                      )
                    }
                    className="mt-8 rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
                  >
                    Generate Certificate
                  </button>

                </div>

              ) : (

                <div>

                  <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                    You did not achieve a passing score.
                    Review the learning pages and try again.
                  </p>

                  <button
                    onClick={() => window.location.reload()}
                    className="mt-10 rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
                  >
                    Retry Quiz
                  </button>

                </div>

              )}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}