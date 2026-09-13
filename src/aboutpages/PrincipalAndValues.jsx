import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  Heart,
  HeartHandshake,
  Lightbulb,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const PrincipalAndValues = ({
  // =====================================================
  // PRINCIPAL MESSAGE
  // =====================================================

  principalEyebrow = "Principal's Message",

  principalTitle = "A message from our",

  principalHighlight = "school leadership.",

  principalDescription = "",

  principalMessage = "",

  principalName = "Dr. Ananya Sharma",

  principalDesignation = "Principal",

  principalImage = "/images/principal.jpg",

  principalImageAlt = "School Principal",

  principalBadge = "School Leadership",

  principalBadgeText = "Leading • Inspiring • Guiding",

  // =====================================================
  // PRINCIPAL PROMISE CARD
  // =====================================================

  promiseLabel = "Our Promise",

  promiseTitle = "Every Child Matters",

  promiseText =
    "We are committed to creating a learning environment where every child feels valued, supported and confident to discover their potential.",

  // =====================================================
  // VALUES
  // =====================================================

  valuesEyebrow = "Our Values",

  valuesTitle = "The values that",

  valuesHighlight = "shape our children.",

  valuesDescription = "",

  values = [
    {
      title: "Curiosity",
      description:
        "We encourage children to ask questions, explore ideas and discover the joy of learning.",
      icon: Lightbulb,
      color: "yellow",
    },
    {
      title: "Kindness",
      description:
        "We nurture empathy, respect and compassion so children learn to care for others.",
      icon: HeartHandshake,
      color: "pink",
    },
    {
      title: "Integrity",
      description:
        "We help students understand the importance of honesty, responsibility and doing what is right.",
      icon: ShieldCheck,
      color: "blue",
    },
    {
      title: "Excellence",
      description:
        "We inspire every learner to give their best and take pride in their growth and achievements.",
      icon: Trophy,
      color: "orange",
    },
    {
      title: "Confidence",
      description:
        "We create opportunities for children to express themselves, take initiative and believe in themselves.",
      icon: Star,
      color: "emerald",
    },
    {
      title: "Togetherness",
      description:
        "We build a welcoming school community where students, teachers and families grow together.",
      icon: Users,
      color: "violet",
    },
  ],

  // =====================================================
  // CTA
  // =====================================================

  buttonText = "Read More About Our School",

  buttonHref = "/about",

  showButton = true,
}) => {
  const colorStyles = {
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      iconBg: "bg-yellow-100",
      icon: "text-yellow-600",
      title: "text-yellow-700",
      accent: "bg-yellow-400",
      number: "text-yellow-900/10",
    },

    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      iconBg: "bg-pink-100",
      icon: "text-pink-600",
      title: "text-pink-700",
      accent: "bg-pink-400",
      number: "text-pink-900/10",
    },

    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
      icon: "text-blue-600",
      title: "text-blue-700",
      accent: "bg-blue-500",
      number: "text-blue-900/10",
    },

    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      iconBg: "bg-orange-100",
      icon: "text-orange-600",
      title: "text-orange-700",
      accent: "bg-orange-500",
      number: "text-orange-900/10",
    },

    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      iconBg: "bg-emerald-100",
      icon: "text-emerald-600",
      title: "text-emerald-700",
      accent: "bg-emerald-500",
      number: "text-emerald-900/10",
    },

    violet: {
      bg: "bg-violet-50",
      border: "border-violet-200",
      iconBg: "bg-violet-100",
      icon: "text-violet-600",
      title: "text-violet-700",
      accent: "bg-violet-500",
      number: "text-violet-900/10",
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-20 h-72 w-72 bg-blue-100/50 blur-3xl" />

        <div className="absolute -right-32 top-[38%] h-80 w-80 bg-pink-100/50 blur-3xl" />

        <div className="absolute bottom-20 left-[35%] h-72 w-72 bg-yellow-100/50 blur-3xl" />

        <span className="absolute left-[6%] top-28 h-3 w-3 rotate-45 bg-yellow-400" />

        <span className="absolute right-[8%] top-[25%] h-3 w-3 rounded-full bg-orange-400" />

        <span className="absolute bottom-[15%] left-[8%] h-3 w-3 bg-emerald-400" />

        <span className="absolute bottom-[8%] right-[12%] h-3 w-3 rotate-45 bg-violet-400" />

      </div>


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            PRINCIPAL MESSAGE
        ===================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* =================================================
              PRINCIPAL IMAGE
          ================================================= */}

          <div className="relative mx-auto w-full max-w-xl">

            {/* Color offset frames */}

            <div className="absolute -left-2 -top-2 h-full w-full bg-yellow-300" />

            <div className="absolute -bottom-2 -right-2 h-full w-full bg-pink-300" />


            {/* Main image */}

            <div className="relative overflow-hidden border-2 border-slate-900 bg-slate-100">

              <div className="relative aspect-[4/5] overflow-hidden">

                <img
                  src={principalImage}
                  alt={principalImageAlt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />


                {/* Image gradient */}

                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950/85 to-transparent" />


                {/* Top badge */}

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white">

                  <Sparkles size={14} />

                  {principalBadge}

                </div>


                {/* Principal information */}

                <div className="absolute bottom-5 left-5 right-5">

                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-300">
                    {principalBadgeText}
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                    {principalName}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-white/70">
                    {principalDesignation}
                  </p>

                </div>

              </div>

            </div>


            {/* Floating promise card */}

            <div className="absolute -bottom-7 left-3 max-w-[270px] border-2 border-slate-900 bg-white p-4 shadow-[5px_5px_0px_#3b82f6] sm:left-6">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-emerald-100 text-emerald-600">

                  <HeartHandshake size={19} />

                </div>

                <div>

                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600">
                    {promiseLabel}
                  </p>

                  <p className="mt-0.5 text-sm font-black text-slate-900">
                    {promiseTitle}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    {promiseText}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              MESSAGE CONTENT
          ================================================= */}

          <div className="pt-5 lg:pt-0">

            {/* Eyebrow */}

            <div className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-orange-600">

              <span className="h-2 w-2 bg-orange-500" />

              {principalEyebrow}

              <span className="h-2 w-2 bg-blue-500" />

            </div>


            {/* Heading */}

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

              {principalTitle}{" "}

              <span className="relative inline-block text-blue-600">

                {principalHighlight}

                <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-yellow-400" />

              </span>

            </h2>


            {/* Description */}

            {principalDescription && (
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                {principalDescription}
              </p>
            )}


            {/* Quote box */}

            <div className="relative mt-7 border-2 border-blue-100 bg-blue-50 p-6 sm:p-7">

              <Quote
                size={42}
                className="absolute right-5 top-5 text-blue-200"
              />

              <div className="relative">

                <div className="mb-4 flex h-10 w-10 items-center justify-center bg-blue-600 text-white">

                  <Quote size={18} />

                </div>

                <p className="text-base font-semibold leading-7 text-slate-700 sm:text-lg sm:leading-8">
                  {principalMessage}
                </p>

              </div>

            </div>


            {/* Signature */}

            <div className="mt-6 flex items-center gap-4">

              <div className="h-px w-12 bg-orange-400" />

              <div>

                <p className="text-sm font-black text-slate-900">
                  {principalName}
                </p>

                <p className="text-xs font-medium text-slate-500">
                  {principalDesignation}
                </p>

              </div>

            </div>


            {/* Button */}

            {showButton && (
              <div className="mt-7">

                <Link
                  to={buttonHref}
                  className="group inline-flex items-center gap-3 bg-blue-600 px-6 py-3.5 text-sm font-black text-white shadow-[5px_5px_0px_#facc15] transition duration-300 hover:bg-slate-900 hover:shadow-[3px_3px_0px_#facc15]"
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


        {/* =====================================================
            OUR VALUES
        ===================================================== */}

        <div className="mt-24 sm:mt-28">

          {/* Values heading */}

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-600">

              <span className="h-2 w-2 bg-emerald-500" />

              {valuesEyebrow}

              <span className="h-2 w-2 bg-violet-500" />

            </div>


            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

              {valuesTitle}{" "}

              <span className="relative inline-block text-orange-500">

                {valuesHighlight}

                <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-yellow-400" />

              </span>

            </h2>


            {valuesDescription && (
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                {valuesDescription}
              </p>
            )}

          </div>


          {/* Values grid */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {values.map((item, index) => {

              const Icon = item.icon;

              const styles =
                colorStyles[item.color] || colorStyles.blue;

              return (

                <div
                  key={`${item.title}-${index}`}
                  className={`group relative overflow-hidden border-2 ${styles.border} ${styles.bg} p-5 transition duration-300 hover:-translate-y-1 sm:p-6`}
                >

                  {/* Top accent */}

                  <div
                    className={`absolute left-0 top-0 h-1.5 w-16 ${styles.accent}`}
                  />


                  {/* Background number */}

                  <span
                    className={`absolute right-4 top-1 text-6xl font-black ${styles.number}`}
                  >
                    0{index + 1}
                  </span>


                  {/* Icon */}

                  <div
                    className={`relative mb-5 flex h-12 w-12 items-center justify-center ${styles.iconBg} ${styles.icon}`}
                  >
                    <Icon size={22} />
                  </div>


                  {/* Content */}

                  <div className="relative">

                    <h3
                      className={`text-xl font-black ${styles.title}`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                  </div>


                  {/* Bottom label */}

                  <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">

                    <span
                      className={`h-1.5 w-1.5 ${styles.accent}`}
                    />

                    A Value We Live By

                  </div>

                </div>

              );
            })}

          </div>

        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="relative mt-14 overflow-hidden border-2 border-orange-100 bg-orange-50 px-6 py-7 sm:px-8 sm:py-8">

          <div className="absolute right-0 top-0 h-20 w-20 bg-yellow-300" />

          <div className="absolute bottom-0 left-0 h-12 w-28 bg-pink-200" />


          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="max-w-3xl">

              <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-orange-600">

                <Sparkles size={14} />

                Growing Together

              </div>

              <h3 className="text-xl font-black leading-tight text-slate-900 sm:text-2xl">

                We don't just prepare children for school.

                <span className="text-blue-600">
                  {" "}We prepare them for life.
                </span>

              </h3>

            </div>


            <div className="flex shrink-0 items-center gap-2">

              <span className="h-3 w-3 bg-blue-500" />

              <span className="h-3 w-3 bg-orange-400" />

              <span className="h-3 w-3 bg-yellow-400" />

              <span className="h-3 w-3 bg-emerald-400" />

              <span className="h-3 w-3 bg-violet-500" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PrincipalAndValues;