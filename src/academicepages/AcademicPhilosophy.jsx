import React from "react";
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  Check,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const AcademicPhilosophy = ({
  eyebrow = "Our Approach",

  title = "Learning that goes",
  highlight = "beyond the classroom.",

  description =
    "We believe education is not only about academic achievement. It is about helping every child think independently, discover their strengths, build confidence and develop the skills needed for a changing world.",

  image = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",

  imageAlt = "Students learning together in a classroom",

  imageBadge = "Learning with Purpose",

  philosophyTitle = "Every child can learn, grow and make a difference.",

  philosophyText =
    "Our academic philosophy combines strong fundamentals with curiosity, creativity and real-world learning. We create an environment where children are encouraged to ask questions, explore ideas and take ownership of their learning.",

  principles = [
    {
      icon: BookOpen,
      title: "Strong Foundations",
      description:
        "We focus on clear concepts, strong fundamentals and meaningful academic progress.",
      color: "blue",
    },
    {
      icon: Brain,
      title: "Curious Minds",
      description:
        "Students are encouraged to question, explore, experiment and think independently.",
      color: "orange",
    },
    {
      icon: Lightbulb,
      title: "Creative Learning",
      description:
        "We make learning engaging through activities, projects and opportunities to create.",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Learning Together",
      description:
        "Collaboration helps children develop communication, empathy and respect for others.",
      color: "emerald",
    },
  ],

  learningPoints = [
    "Concept-based and practical learning",
    "Individual attention and student support",
    "Encouragement of questions and independent thinking",
    "Balanced focus on academics and life skills",
  ],

  buttonText = "Explore Our Academics",
  buttonHref = "/academics",

  showButton = true,
}) => {
  const iconColor = {
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-500",
    yellow: "bg-yellow-50 text-yellow-600",
    emerald: "bg-emerald-50 text-emerald-600",
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =========================================
          Soft Background Decorations
      ========================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl" />

        <div className="absolute right-[-120px] bottom-20 h-80 w-80 rounded-full bg-orange-50/50 blur-3xl" />

        <div className="absolute left-[8%] top-24 h-2.5 w-2.5 rotate-45 bg-yellow-300" />

        <div className="absolute right-[10%] top-36 h-3 w-3 rounded-full bg-blue-200" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================
            Section Header
        ========================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-orange-500">
            <span className="h-2 w-2 bg-orange-400" />
            {eyebrow}
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}{" "}
            <span className="relative inline-block text-blue-600">
              {highlight}

              <span className="absolute -bottom-1 left-0 h-1 w-2/3 bg-yellow-300" />
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
            {description}
          </p>
        </div>

        {/* =========================================
            Main Philosophy
        ========================================== */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            {/* Single offset frame */}
            <div className="absolute -bottom-4 -left-4 h-full w-full border-2 border-yellow-300" />

            <div className="relative overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src={image}
                alt={imageAlt}
                className="h-[380px] w-full object-cover transition duration-700 hover:scale-[1.02] sm:h-[450px]"
              />

              {/* Image badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <div className="flex h-9 w-9 items-center justify-center bg-blue-600 text-white">
                  <Target size={17} />
                </div>

                <div>
                  <p className="text-xs font-black text-slate-900">
                    {imageBadge}
                  </p>

                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Purpose • Progress • Growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <BookOpen size={14} />
              Our Academic Philosophy
            </div>

            <h3 className="mt-5 max-w-xl text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
              {philosophyTitle}
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              {philosophyText}
            </p>

            {/* Learning Points */}
            <div className="mt-7 space-y-3">
              {learningPoints.map((point, index) => (
                <div
                  key={`${point}-${index}`}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-blue-50 text-blue-600">
                    <Check size={15} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            {showButton && (
              <div className="mt-8">
                <Link
                  to={buttonHref}
                  className="group inline-flex items-center gap-3 bg-blue-600 px-6 py-3.5 text-sm font-black text-white transition duration-300 hover:bg-blue-700"
                >
                  {buttonText}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* =========================================
            Core Principles
        ========================================== */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-blue-600" />

              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                How We Learn
              </p>
            </div>

            <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Principles that shape{" "}
              <span className="text-blue-600">every learner.</span>
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="group relative border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Subtle top accent */}
                  <div
                    className={`absolute left-0 top-0 h-1 w-12 ${
                      item.color === "orange"
                        ? "bg-orange-400"
                        : item.color === "yellow"
                        ? "bg-yellow-400"
                        : item.color === "emerald"
                        ? "bg-emerald-500"
                        : "bg-blue-600"
                    }`}
                  />

                  <div
                    className={`flex h-12 w-12 items-center justify-center ${
                      iconColor[item.color] || iconColor.blue
                    }`}
                  >
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  <h4 className="mt-5 text-base font-black text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  {/* Faint number */}
                  <span className="pointer-events-none absolute bottom-3 right-4 text-4xl font-black text-slate-900/[0.035]">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            Bottom Statement
        ========================================== */}
        <div className="mt-16 border border-blue-100 bg-blue-50/60 px-6 py-8 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-lg font-black leading-7 text-slate-900 sm:text-xl">
                "The goal is not simply to prepare children for the next
                examination, but to prepare them for the next stage of life."
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-yellow-300 text-slate-900">
              <Lightbulb size={21} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPhilosophy;