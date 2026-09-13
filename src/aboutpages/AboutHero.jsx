import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

const AboutUs = ({
  eyebrow = "Who We Are",

  title = "More than a school,",
  highlight = "a community that cares.",

  description =
  "We believe every child deserves an environment where they feel safe, valued and inspired to learn.",

  secondaryDescription =
  "Our school brings together strong academics, experienced teachers, creative opportunities and a caring environment to help children develop into confident and responsible individuals.",

  image = "https://www.shutterstock.com/shutterstock/photos/326638589/display_1500/stock-photo-education-elementary-school-learning-and-people-concept-group-of-school-kids-with-teacher-326638589.jpg",
  imageAlt = "Students learning together",

  imageBadge = "Our School",
  imageBadgeText = "Learn • Grow • Shine",

  foundedYear = "2001",
  foundedLabel = "Established",

  missionTitle = "Our Mission",
  missionText =
  "To provide every child with meaningful learning opportunities while nurturing curiosity, confidence, character and compassion.",

  visionTitle = "Our Vision",
  visionText =
  "To empower young learners with the knowledge, skills and values they need to create a positive future.",

  highlights = [
    {
      title: "Child-Centred Learning",
      description:
        "Every learner receives encouragement, attention and opportunities to discover their strengths.",
      icon: HeartHandshake,
      color: "blue",
    },
    {
      title: "Strong Academics",
      description:
        "Meaningful learning experiences develop curiosity, understanding and independent thinking.",
      icon: BookOpen,
      color: "orange",
    },
    {
      title: "Character & Values",
      description:
        "Respect, responsibility, kindness and integrity are part of everyday school life.",
      icon: Target,
      color: "emerald",
    },
    {
      title: "Beyond Classrooms",
      description:
        "Sports, arts and activities help students explore their interests and talents.",
      icon: Trophy,
      color: "violet",
    },
  ],

  achievements = [
    "Experienced and dedicated faculty",
    "Safe and welcoming learning environment",
    "Balanced academic and co-curricular development",
    "Strong partnership with parents",
  ],

  buttonText = "Discover Our Journey",
  buttonHref = "/about/journey",

  showButton = true,
}) => {
  const colorStyles = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-100",
      iconBg: "bg-blue-100",
      icon: "text-blue-600",
      title: "text-blue-700",
      accent: "bg-blue-500",
    },

    orange: {
      bg: "bg-orange-50",
      border: "border-orange-100",
      iconBg: "bg-orange-100",
      icon: "text-orange-600",
      title: "text-orange-700",
      accent: "bg-orange-500",
    },

    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      iconBg: "bg-emerald-100",
      icon: "text-emerald-600",
      title: "text-emerald-700",
      accent: "bg-emerald-500",
    },

    violet: {
      bg: "bg-violet-50",
      border: "border-violet-100",
      iconBg: "bg-violet-100",
      icon: "text-violet-600",
      title: "text-violet-700",
      accent: "bg-violet-500",
    },

    pink: {
      bg: "bg-pink-50",
      border: "border-pink-100",
      iconBg: "bg-pink-100",
      icon: "text-pink-600",
      title: "text-pink-700",
      accent: "bg-pink-500",
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* =====================================================
                BACKGROUND DECORATION
            ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-20 h-72 w-72 bg-blue-100/50 blur-3xl" />

        <div className="absolute -right-32 top-1/3 h-72 w-72 bg-orange-100/50 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-64 w-64 bg-violet-100/40 blur-3xl" />

        {/* Decorative dots */}
        <span className="absolute left-[7%] top-24 h-3 w-3 rotate-45 bg-yellow-400" />

        <span className="absolute right-[10%] top-28 h-3 w-3 rounded-full bg-pink-400" />

        <span className="absolute bottom-28 left-[10%] h-3 w-3 bg-emerald-400" />

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


          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {description}
          </p>

        </div>


        {/* =====================================================
                    STORY SECTION
                ===================================================== */}

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
                        IMAGE
                    ================================================= */}

          <div className="relative mx-auto w-full max-w-xl">

            {/* Offset decorations */}
            <div className="absolute -left-2 -top-2 h-full w-full bg-yellow-300" />

            <div className="absolute -bottom-2 -right-2 h-full w-full bg-pink-300" />


            <div className="relative overflow-hidden border-2 border-slate-900 bg-slate-100">

              <div className="relative aspect-[4/3] overflow-hidden">

                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                {/* Image gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/70 to-transparent" />


                {/* Image badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-blue-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white">

                  <Sparkles size={14} />

                  {imageBadge}

                </div>


                {/* Bottom image info */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300">
                      {imageBadgeText}
                    </p>

                    <p className="mt-1 text-3xl font-black text-white">
                      {foundedYear}
                    </p>

                    <p className="text-xs font-medium text-white/70">
                      {foundedLabel}
                    </p>

                  </div>


                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-orange-400 text-slate-950">
                    <Lightbulb size={20} />
                  </div>

                </div>

              </div>

            </div>


            {/* Small floating card */}
            <div className="absolute -bottom-6 left-3 max-w-[230px] border-2 border-slate-900 bg-white p-4 shadow-[5px_5px_0px_#3b82f6] sm:left-6">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-emerald-100 text-emerald-600">
                  <HeartHandshake size={18} />
                </div>

                <div>

                  <p className="text-[10px] font-black uppercase tracking-wider text-emerald-600">
                    Our Belief
                  </p>

                  <p className="text-sm font-black text-slate-900">
                    Every Child Matters
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
                        STORY CONTENT
                    ================================================= */}

          <div className="pt-4 lg:pt-0">

            <div className="mb-4 inline-flex items-center gap-2 bg-blue-50 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-blue-700">

              <span className="h-2 w-2 bg-blue-500" />

              Our Story

            </div>


            <h3 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">

              Building a foundation for{" "}

              <span className="text-orange-500">
                lifelong learning.
              </span>

            </h3>


            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              {secondaryDescription}
            </p>


            {/* Achievement list */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {achievements.map((item, index) => (

                <div
                  key={`${item}-${index}`}
                  className="flex items-start gap-3 border border-slate-100 bg-slate-50 p-3.5"
                >

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-emerald-100 text-emerald-600">

                    <CheckCircle2 size={15} />

                  </div>

                  <span className="text-xs font-semibold leading-5 text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>


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
                    MISSION / VISION
                ===================================================== */}

        <div className="mt-20 grid gap-5 md:grid-cols-2">

          {/* Mission */}
          <div className="relative overflow-hidden border-2 border-blue-100 bg-blue-50 p-6 sm:p-7">

            <div className="absolute right-0 top-0 h-20 w-20 bg-blue-100" />

            <div className="relative">

              <div className="mb-5 flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center bg-blue-600 text-white">
                  <Target size={21} />
                </div>

                <Target
                  size={42}
                  className="text-blue-200"
                />

              </div>


              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">
                What Drives Us
              </p>

              <h3 className="mt-1.5 text-2xl font-black text-slate-900">
                {missionTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {missionText}
              </p>

            </div>

          </div>


          {/* Vision */}
          <div className="relative overflow-hidden border-2 border-orange-100 bg-orange-50 p-6 sm:p-7">

            <div className="absolute right-0 top-0 h-20 w-20 bg-orange-100" />

            <div className="relative">

              <div className="mb-5 flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center bg-orange-500 text-white">
                  <Sparkles size={21} />
                </div>

                <Sparkles
                  size={42}
                  className="text-orange-200"
                />

              </div>


              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-600">
                Where We Are Going
              </p>

              <h3 className="mt-1.5 text-2xl font-black text-slate-900">
                {visionTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {visionText}
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
                    CORE VALUES
                ===================================================== */}

        <div className="mt-20">

          <div className="mb-8">

            <div className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-600">

              <span className="h-2 w-2 bg-emerald-500" />

              What Matters To Us

            </div>


            <h3 className="text-3xl font-black text-slate-900 sm:text-4xl">

              The values behind{" "}

              <span className="text-blue-600">
                our approach.
              </span>

            </h3>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item, index) => {

              const Icon = item.icon;

              const styles =
                colorStyles[item.color] ||
                colorStyles.blue;

              return (

                <div
                  key={`${item.title}-${index}`}
                  className={`group relative overflow-hidden border ${styles.border} ${styles.bg} p-5 transition duration-300 hover:-translate-y-1`}
                >

                  {/* Accent */}
                  <div
                    className={`absolute left-0 top-0 h-1 w-14 ${styles.accent}`}
                  />


                  {/* Number */}
                  <span className="absolute right-4 top-3 text-4xl font-black text-slate-900/5">
                    0{index + 1}
                  </span>


                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center ${styles.iconBg} ${styles.icon}`}
                  >
                    <Icon size={21} />
                  </div>


                  <h4
                    className={`text-base font-black ${styles.title}`}
                  >
                    {item.title}
                  </h4>


                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    {item.description}
                  </p>


                  <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-400">

                    <span
                      className={`h-1.5 w-1.5 ${styles.accent}`}
                    />

                    Our Commitment

                  </div>

                </div>

              );

            })}

          </div>

        </div>


        {/* =====================================================
                    FINAL LIGHT CTA
                ===================================================== */}

        <div className="relative mt-14 overflow-hidden border-2 border-blue-100 bg-blue-50 px-6 py-7 sm:px-8">

          {/* Color blocks */}
          <div className="absolute right-0 top-0 h-20 w-20 bg-yellow-300" />

          <div className="absolute bottom-0 left-0 h-12 w-24 bg-pink-200" />


          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="max-w-2xl">

              <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">

                <Sparkles size={14} />

                Our Promise

              </div>

              <h3 className="text-xl font-black leading-tight text-slate-900 sm:text-2xl">
                Helping children learn with curiosity,
                grow with confidence and lead with values.
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

export default AboutUs;