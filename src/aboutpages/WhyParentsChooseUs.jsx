import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
    Heart
} from "lucide-react";

const WhyParentsChooseUs = ({
  // =====================================================
  // SECTION HEADER
  // =====================================================

  eyebrow = "Why Parents Choose Us",

  title = "A school parents can",

  highlight = "trust with confidence.",

  description = "",

  // =====================================================
  // MAIN IMAGE
  // =====================================================

  image = "/images/school-parents.jpg",

  imageAlt = "Parents and children at school",

  imageBadge = "Trusted by Families",

  imageBadgeText = "Care • Trust • Growth",

  // =====================================================
  // TRUST CARD
  // =====================================================

  trustNumber = "25+",

  trustTitle = "Years of Building Trust",

  trustText =
    "Families choose us because we care about every child's learning, safety and overall development.",

  // =====================================================
  // REASONS
  // =====================================================

  reasons = [
    {
      title: "Safe & Caring Environment",
      description:
        "Children learn best when they feel safe, respected and genuinely cared for every day.",
      icon: ShieldCheck,
      color: "blue",
    },
    {
      title: "Experienced Teachers",
      description:
        "Our teachers combine knowledge, patience and personal attention to support every learner.",
      icon: Users,
      color: "orange",
    },
    {
      title: "Strong Academic Foundation",
      description:
        "We focus on meaningful learning that builds understanding, curiosity and confidence.",
      icon: BookOpen,
      color: "emerald",
    },
    {
      title: "Holistic Development",
      description:
        "Academics, sports, creativity and life skills come together to help children grow fully.",
      icon: Trophy,
      color: "violet",
    },
    {
      title: "Individual Attention",
      description:
        "We recognise that every child is different and provide encouragement according to their needs.",
      icon: HeartHandshake,
      color: "pink",
    },
    {
      title: "Values for Life",
      description:
        "Respect, responsibility, kindness and integrity are woven into everyday school life.",
      icon: Target,
      color: "yellow",
    },
  ],

  // =====================================================
  // PARENT PROMISE
  // =====================================================

  promiseEyebrow = "Our Commitment",

  promiseTitle = "More than education.",

  promiseHighlight = "A partnership with parents.",

  promiseText =
    "We believe children thrive when schools and families work together. That's why we keep communication open and put the child's growth at the centre of everything we do.",

  promisePoints = [
    "Open communication with parents",
    "Focus on every child's progress",
    "Supportive and inclusive environment",
    "Balanced academic and personal growth",
  ],

  // =====================================================
  // CTA
  // =====================================================

  buttonText = "Discover Our School",

  buttonHref = "/about",

  showButton = true,
}) => {
  const colorStyles = {
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

    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      iconBg: "bg-pink-100",
      icon: "text-pink-600",
      title: "text-pink-700",
      accent: "bg-pink-500",
      number: "text-pink-900/10",
    },

    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      iconBg: "bg-yellow-100",
      icon: "text-yellow-600",
      title: "text-yellow-700",
      accent: "bg-yellow-400",
      number: "text-yellow-900/10",
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-20 h-72 w-72 bg-blue-100/50 blur-3xl" />

        <div className="absolute -right-32 top-1/3 h-80 w-80 bg-orange-100/50 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 bg-emerald-100/40 blur-3xl" />

        <span className="absolute left-[7%] top-28 h-3 w-3 rotate-45 bg-yellow-400" />

        <span className="absolute right-[9%] top-24 h-3 w-3 rounded-full bg-pink-400" />

        <span className="absolute bottom-24 left-[10%] h-3 w-3 bg-emerald-400" />

        <span className="absolute bottom-16 right-[12%] h-3 w-3 rotate-45 bg-violet-400" />

      </div>


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-orange-600">

            <span className="h-2 w-2 bg-orange-500" />

            {eyebrow}

            <span className="h-2 w-2 bg-blue-500" />

          </div>


          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

            {title}{" "}

            <span className="relative inline-block text-blue-600">

              {highlight}

              <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-yellow-400" />

            </span>

          </h2>


          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {description}
            </p>
          )}

        </div>


        {/* =====================================================
            FEATURED TRUST SECTION
        ===================================================== */}

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -left-2 -top-2 h-full w-full bg-yellow-300" />

            <div className="absolute -bottom-2 -right-2 h-full w-full bg-pink-300" />


            <div className="relative overflow-hidden border-2 border-slate-900 bg-slate-100">

              <div className="relative aspect-[4/3] overflow-hidden">

                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />


                {/* Gradient */}

                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950/80 to-transparent" />


                {/* Badge */}

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white">

                  <Sparkles size={14} />

                  {imageBadge}

                </div>


                {/* Bottom image text */}

                <div className="absolute bottom-5 left-5 right-5">

                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-300">
                    {imageBadgeText}
                  </p>

                </div>

              </div>

            </div>


            {/* Floating trust card */}

            <div className="absolute -bottom-7 left-3 border-2 border-slate-900 bg-white p-4 shadow-[5px_5px_0px_#10b981] sm:left-6">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-emerald-100 text-emerald-600">

                  <HeartHandshake size={20} />

                </div>

                <div>

                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600">
                    {trustTitle}
                  </p>

                  <p className="mt-0.5 text-3xl font-black text-slate-900">
                    {trustNumber}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              TRUST CONTENT
          ================================================= */}

          <div className="pt-5 lg:pt-0">

            <div className="mb-4 inline-flex items-center gap-2 bg-blue-50 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700">

              <span className="h-2 w-2 bg-blue-500" />

              Why Families Choose Us

            </div>


            <h3 className="max-w-2xl text-3xl font-black leading-tight text-slate-900 sm:text-4xl">

              A place where children feel

              <span className="text-orange-500">
                {" "}safe, supported & inspired.
              </span>

            </h3>


            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {trustText}
            </p>


            {/* Quick trust points */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "Child-first approach",
                "Experienced educators",
                "Safe school environment",
                "Strong parent partnership",
              ].map((item, index) => (

                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-3 border border-slate-100 bg-slate-50 p-3.5"
                >

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-emerald-100 text-emerald-600">

                    <CheckCircle2 size={15} />

                  </div>

                  <span className="text-xs font-bold leading-5 text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            REASONS GRID
        ===================================================== */}

        <div className="mt-24 sm:mt-28">

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-600">

                <span className="h-2 w-2 bg-emerald-500" />

                What Parents Value

              </div>


              <h3 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">

                Six reasons to choose

                <span className="text-blue-600">
                  {" "}our school.
                </span>

              </h3>

            </div>


            <div className="hidden items-center gap-2 sm:flex">

              <span className="h-2 w-8 bg-blue-500" />

              <span className="h-2 w-5 bg-orange-400" />

              <span className="h-2 w-3 bg-yellow-400" />

            </div>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {reasons.map((item, index) => {

              const Icon = item.icon;

              const styles =
                colorStyles[item.color] || colorStyles.blue;

              return (

                <div
                  key={`${item.title}-${index}`}
                  className={`group relative overflow-hidden border-2 ${styles.border} ${styles.bg} p-5 transition duration-300 hover:-translate-y-1 sm:p-6`}
                >

                  {/* Accent */}

                  <div
                    className={`absolute left-0 top-0 h-1.5 w-16 ${styles.accent}`}
                  />


                  {/* Number */}

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

                    <h4
                      className={`text-lg font-black ${styles.title}`}
                    >
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                  </div>


                  {/* Bottom */}

                  <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">

                    <span
                      className={`h-1.5 w-1.5 ${styles.accent}`}
                    />

                    Parent's Choice

                  </div>

                </div>

              );
            })}

          </div>

        </div>


        {/* =====================================================
            PARENT PARTNERSHIP
        ===================================================== */}

        <div className="mt-20 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Main promise */}

          <div className="relative overflow-hidden border-2 border-blue-100 bg-blue-50 p-6 sm:p-8">

            <div className="absolute right-0 top-0 h-24 w-24 bg-yellow-300" />

            <div className="absolute bottom-0 left-0 h-14 w-28 bg-pink-200" />


            <div className="relative">

              <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">

                <Heart size={14} />

                {promiseEyebrow}

              </div>


              <h3 className="max-w-2xl text-2xl font-black leading-tight text-slate-900 sm:text-3xl">

                {promiseTitle}{" "}

                <span className="text-orange-500">
                  {promiseHighlight}
                </span>

              </h3>


              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                {promiseText}
              </p>


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


          {/* Parent promise points */}

          <div className="border-2 border-orange-100 bg-orange-50 p-6 sm:p-8">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-600">
                  For Every Family
                </p>

                <h4 className="mt-1 text-2xl font-black text-slate-900">
                  What you can expect.
                </h4>

              </div>

              <div className="flex h-11 w-11 items-center justify-center bg-orange-500 text-white">

                <Star size={20} />

              </div>

            </div>


            <div className="mt-6 space-y-3">

              {promisePoints.map((item, index) => (

                <div
                  key={`${item}-${index}`}
                  className="flex items-start gap-3 border border-orange-100 bg-white p-3.5"
                >

                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-orange-100 text-orange-600">

                    <CheckCircle2 size={14} />

                  </div>

                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <div className="mt-14 text-center">

          <div className="inline-flex items-center gap-3">

            <span className="h-2 w-8 bg-blue-500" />

            <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Trusted • Caring • Future Ready
            </span>

            <span className="h-2 w-8 bg-orange-400" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyParentsChooseUs;