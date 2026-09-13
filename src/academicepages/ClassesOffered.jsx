import React from "react";
import {
    ArrowUpRight,
    Baby,
    BookOpen,
    GraduationCap,
    Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const ClassesOffered = ({
    eyebrow = "Academic Journey",

    title = "Classes designed for",
    highlight = "every stage of growth.",

    description =
    "From the early years to the senior classes, our academic journey is designed to help children learn with confidence, develop strong foundations and prepare for the future.",

    classes = [
        {
            icon: Baby,
            level: "Early Years",
            title: "Pre-Primary",
            classes: "Playgroup • Nursery • LKG • UKG",
            description:
                "A joyful beginning where children develop curiosity, communication, creativity and essential early learning skills.",
            age: "Ages 2.5 – 5 Years",
            color: "orange",
        },
        {
            icon: Sparkles,
            level: "Primary School",
            title: "Primary Classes",
            classes: "Class I – V",
            description:
                "Building strong academic foundations while encouraging curiosity, confidence, good habits and a love for learning.",
            age: "Ages 5 – 10 Years",
            color: "blue",
        },
        {
            icon: BookOpen,
            level: "Middle School",
            title: "Middle Classes",
            classes: "Class VI – VIII",
            description:
                "Students develop deeper subject understanding, independent thinking, collaboration and problem-solving skills.",
            age: "Ages 10 – 13 Years",
            color: "emerald",
        },
        {
            icon: GraduationCap,
            level: "Senior School",
            title: "Senior Classes",
            classes: "Class IX – XII",
            description:
                "Focused academic preparation combined with guidance that helps students make confident decisions about their future.",
            age: "Ages 13 – 18 Years",
            color: "blue",
        },
    ],

    learningLabel = "A Complete Learning Journey",

    learningTitle = "From first steps to future goals.",

    learningText =
    "Every stage of schooling brings new opportunities to explore, learn and grow. Our curriculum and learning environment evolve with the changing needs of every age group.",

    highlights = [
        "Age-appropriate curriculum",
        "Experienced and caring teachers",
        "Activity-based learning",
        "Continuous academic support",
    ],

    buttonText = "Explore Academics",
    buttonHref = "/academics",

    showButton = true,
}) => {
    const iconStyles = {
        blue: "bg-blue-50 text-blue-600",
        orange: "bg-orange-50 text-orange-500",
        emerald: "bg-emerald-50 text-emerald-600",
    };

    const accentStyles = {
        blue: "bg-blue-600",
        orange: "bg-orange-400",
        emerald: "bg-emerald-500",
    };

    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
            {/* =========================================
          Soft Background Decorations
      ========================================== */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl" />

                <div className="absolute right-[-140px] bottom-10 h-80 w-80 rounded-full bg-orange-50/50 blur-3xl" />

                <div className="absolute left-[10%] top-20 h-2.5 w-2.5 rotate-45 bg-yellow-300" />

                <div className="absolute right-[12%] top-32 h-3 w-3 rounded-full bg-blue-200" />
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
            Classes Grid
        ========================================== */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {classes.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={`${item.title}-${index}`}
                                className="group relative overflow-hidden border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Small top accent */}
                                <div
                                    className={`absolute left-0 top-0 h-1 w-14 ${accentStyles[item.color] || accentStyles.blue
                                        }`}
                                />

                                {/* Number */}
                                <span className="pointer-events-none absolute right-4 top-3 text-5xl font-black text-slate-900/[0.035]">
                                    0{index + 1}
                                </span>

                                {/* Icon */}
                                <div
                                    className={`flex h-12 w-12 items-center justify-center ${iconStyles[item.color] || iconStyles.blue
                                        }`}
                                >
                                    <Icon size={22} strokeWidth={2} />
                                </div>

                                {/* Content */}
                                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                                    {item.level}
                                </p>

                                <h3 className="mt-2 text-xl font-black text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm font-bold text-blue-600">
                                    {item.classes}
                                </p>

                                <p className="mt-4 text-sm leading-6 text-slate-500">
                                    {item.description}
                                </p>

                                {/* Age */}
                                <div className="mt-6 border-t border-slate-100 pt-4">
                                    <span className="text-xs font-bold text-slate-400">
                                        {item.age}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* =========================================
            Learning Journey
        ========================================== */}
                <div className="mt-16 grid items-center gap-10 border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">

                    {/* Left Content */}
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-2.5 w-2.5 bg-blue-600" />

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                                {learningLabel}
                            </p>
                        </div>

                        <h3 className="max-w-xl text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                            {learningTitle}
                        </h3>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                            {learningText}
                        </p>

                        {/* Highlights */}
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {highlights.map((item, index) => (
                                <div
                                    key={`${item}-${index}`}
                                    className="flex items-center gap-3"
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-white text-blue-600 shadow-sm">
                                        <span className="h-2 w-2 bg-blue-500" />
                                    </span>

                                    <span className="text-sm font-semibold text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

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

                    {/* Right Visual */}
                    <div className="relative">
                        {/* Yellow offset block */}
                        <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-yellow-300" />

                        <div className="relative border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                            <div className="flex h-14 w-14 items-center justify-center bg-blue-50 text-blue-600">
                                <GraduationCap size={27} />
                            </div>

                            <p className="mt-7 text-xs font-black uppercase tracking-[0.16em] text-orange-500">
                                Growing Every Year
                            </p>

                            <h4 className="mt-3 text-2xl font-black leading-tight text-slate-900">
                                A learning environment built around the child.
                            </h4>

                            <p className="mt-4 text-sm leading-6 text-slate-500">
                                As students move from one stage to the next, we help them
                                develop stronger knowledge, greater independence and the
                                confidence to take on new challenges.
                            </p>

                            {/* Simple progression */}
                            <div className="mt-7 flex items-center">
                                <div className="h-2 flex-1 bg-blue-600" />
                                <div className="h-2 w-8 bg-yellow-300" />
                                <div className="h-2 w-8 bg-orange-300" />
                                <div className="h-2 w-8 bg-emerald-300" />
                            </div>

                            <div className="mt-3 flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                <span>Discover</span>
                                <span>Develop</span>
                                <span>Achieve</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========================================
            Bottom Statement
        ========================================== */}
                <div className="mt-12 text-center">
                    <p className="text-sm font-semibold text-slate-400">
                        Every class is another step toward{" "}
                        <span className="font-black text-blue-600">
                            confidence, character and achievement.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ClassesOffered;