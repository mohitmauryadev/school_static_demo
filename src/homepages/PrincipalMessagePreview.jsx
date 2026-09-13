import React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const PrincipalMessagePreview = ({
  eyebrow = "Principal's Message",

  title = "A message from our",
  highlight = "school leadership.",

  description = "Education is not only about academic success. It is about helping every child discover their strengths, build confidence, develop strong values, and become a responsible member of society.",

  principalMessage = `At our school, we believe that every child is unique and has the potential to achieve something meaningful. Our responsibility is to provide the right environment, guidance, opportunities, and encouragement so that every learner can grow with confidence.

We are committed to creating a learning community where children feel safe, respected, curious, and inspired to explore the world around them.

Together with our dedicated teachers, supportive parents, and wonderful students, we continue to build a school culture where learning goes beyond classrooms and prepares children for life.`,

  principalName = "Dr. Ananya Sharma",
  principalDesignation = "Principal",

  principalImage = "/images/principal.jpg",
  principalImageAlt = "Principal of the school",

  imageBadge = "School Leadership",
  imageSubLabel = "Leading • Inspiring • Guiding",

  promiseTitle = "Our Promise",
  promiseText = "Every child deserves the opportunity to learn, grow and shine.",

  values = [
    {
      title: "Learn",
      description: "Build curiosity and a love for learning.",
      icon: GraduationCap,
      color: "blue",
    },
    {
      title: "Grow",
      description: "Develop confidence, character and skills.",
      icon: HeartHandshake,
      color: "green",
    },
    {
      title: "Shine",
      description: "Discover strengths and achieve potential.",
      icon: Star,
      color: "orange",
    },
  ],

  buttonText = "Read Principal's Message",
  buttonHref = "#principal-message",

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

    green: {
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      iconBg: "bg-emerald-100",
      icon: "text-emerald-600",
      title: "text-emerald-700",
      accent: "bg-emerald-500",
    },

    orange: {
      bg: "bg-orange-50",
      border: "border-orange-100",
      iconBg: "bg-orange-100",
      icon: "text-orange-600",
      title: "text-orange-700",
      accent: "bg-orange-500",
    },

    purple: {
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
    <section
      id="principal"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-64 w-64 bg-blue-100/60 blur-3xl" />
        <div className="absolute right-[-100px] top-10 h-72 w-72 bg-orange-100/60 blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/3 h-72 w-72 bg-pink-100/50 blur-3xl" />

        <div className="absolute left-[8%] top-20 h-3 w-3 rotate-45 bg-yellow-400" />
        <div className="absolute right-[12%] top-32 h-4 w-4 rounded-full bg-pink-400" />
        <div className="absolute bottom-28 left-[14%] h-4 w-4 bg-emerald-400" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
            <span className="h-2 w-2 bg-orange-500" />
            {eyebrow}
            <span className="h-2 w-2 bg-blue-500" />
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {title}{" "}
            <span className="relative inline-block text-blue-600">
              {highlight}

              <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-yellow-400" />
            </span>
          </h2>

          {description && (
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT - Principal Image */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Yellow Offset Frame */}
            <div className="absolute -left-3 -top-3 h-full w-full bg-yellow-300" />

            {/* Pink Offset Frame */}
            <div className="absolute -bottom-3 -right-3 h-full w-full bg-pink-300" />

            <div className="relative overflow-hidden border-2 border-slate-900 bg-slate-100">
              <div className="relative aspect-[4/4.5] overflow-hidden">
                <img
                  src={principalImage}
                  alt={principalImageAlt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                {/* Image Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/80 to-transparent" />

                {/* Image Badge */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  <Sparkles size={14} />
                  {imageBadge}
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
                    {imageSubLabel}
                  </p>

                  <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                    {principalName}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-white/80">
                    {principalDesignation}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute right-0 top-0 h-16 w-16 bg-orange-400">
                <div className="absolute bottom-2 left-2">
                  <Sparkles size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Floating Promise Card */}
            <div className="absolute -bottom-8 -left-4 max-w-[260px] border-2 border-slate-900 bg-white p-5 shadow-[8px_8px_0px_#facc15] sm:-left-8">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center bg-orange-100 text-orange-600">
                  <HeartHandshake size={18} />
                </div>

                <span className="text-xs font-black uppercase tracking-wider text-orange-600">
                  {promiseTitle}
                </span>
              </div>

              <p className="text-sm font-bold leading-6 text-slate-800">
                {promiseText}
              </p>
            </div>
          </div>

          {/* RIGHT - Message */}
          <div className="relative">
            {/* Quote Decoration */}
            <div className="absolute -right-2 -top-8 hidden text-blue-100 sm:block">
              <Quote size={90} strokeWidth={1.5} />
            </div>

            <div className="relative">
              {/* Small Label */}
              <div className="mb-5 inline-flex items-center gap-2 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <span className="h-2 w-2 bg-blue-500" />
                From the Principal's Desk
              </div>

              {/* Message */}
              <div className="relative">
                <Quote
                  size={38}
                  className="mb-5 text-orange-500"
                  fill="currentColor"
                />

                <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {principalMessage
                    .split("\n")
                    .filter((paragraph) => paragraph.trim())
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>
              </div>

              {/* Signature Area */}
              <div className="mt-8 flex flex-col gap-5 border-t-2 border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xl font-black text-slate-900">
                    {principalName}
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 bg-orange-500" />
                    <p className="text-sm font-semibold text-slate-500">
                      {principalDesignation}
                    </p>
                  </div>
                </div>

                {showButton && (
                  <a
                    href={buttonHref}
                    className="group inline-flex w-fit items-center gap-3 bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-900"
                  >
                    {buttonText}

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;
            const styles =
              colorStyles[item.color] || colorStyles.blue;

            return (
              <div
                key={`${item.title}-${index}`}
                className={`group relative overflow-hidden border ${styles.border} ${styles.bg} p-6 transition duration-300 hover:-translate-y-1`}
              >
                {/* Top Accent */}
                <div
                  className={`absolute left-0 top-0 h-1 w-20 ${styles.accent}`}
                />

                {/* Number */}
                <span className="absolute right-5 top-4 text-5xl font-black text-slate-900/5">
                  0{index + 1}
                </span>

                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center ${styles.iconBg} ${styles.icon}`}
                >
                  <Icon size={23} />
                </div>

                <h4
                  className={`text-xl font-black ${styles.title}`}
                >
                  {item.title}
                </h4>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <CheckCircle2 size={15} className={styles.icon} />
                  Part of our school culture
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t-2 border-slate-100 pt-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="h-8 w-8 border-2 border-white bg-blue-500" />
              <span className="h-8 w-8 border-2 border-white bg-orange-400" />
              <span className="h-8 w-8 border-2 border-white bg-emerald-400" />
              <span className="h-8 w-8 border-2 border-white bg-violet-500" />
            </div>

            <p className="text-sm font-semibold text-slate-600">
              Building confident learners, one child at a time.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
            <Sparkles size={17} />
            Learn • Grow • Shine
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessagePreview;