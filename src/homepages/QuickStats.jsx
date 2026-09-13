import React from "react";
import {
    Users,
    GraduationCap,
    Trophy,
    BookOpen,
    ArrowUpRight,
} from "lucide-react";

const QuickStats = ({
    sectionLabel = "Our School at a Glance",

    stats = [
        {
            value: "2,500+",
            label: "Happy Students",
            description: "Growing every year",
            icon: Users,
            theme: "blue",
        },
        {
            value: "80+",
            label: "Expert Teachers",
            description: "Dedicated educators",
            icon: GraduationCap,
            theme: "orange",
        },
        {
            value: "25+",
            label: "Years of Excellence",
            description: "A legacy of learning",
            icon: Trophy,
            theme: "green",
        },
        {
            value: "40+",
            label: "Academic Programs",
            description: "Learning beyond books",
            icon: BookOpen,
            theme: "purple",
        },
    ],

    bottomText = "Creating confident learners, responsible citizens and future leaders.",
}) => {
    const themeStyles = {
        blue: {
            card: "bg-blue-50 border-blue-100 hover:border-blue-300",
            icon: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
            value: "text-blue-700",
            dot: "bg-blue-500",
        },

        orange: {
            card: "bg-orange-50 border-orange-100 hover:border-orange-300",
            icon: "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
            value: "text-orange-600",
            dot: "bg-orange-500",
        },

        green: {
            card: "bg-emerald-50 border-emerald-100 hover:border-emerald-300",
            icon: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
            value: "text-emerald-700",
            dot: "bg-emerald-500",
        },

        purple: {
            card: "bg-violet-50 border-violet-100 hover:border-violet-300",
            icon: "bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
            value: "text-violet-700",
            dot: "bg-violet-500",
        },

        pink: {
            card: "bg-pink-50 border-pink-100 hover:border-pink-300",
            icon: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
            value: "text-pink-700",
            dot: "bg-pink-500",
        },

        yellow: {
            card: "bg-amber-50 border-amber-100 hover:border-amber-300",
            icon: "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
            value: "text-amber-700",
            dot: "bg-amber-500",
        },
    };

    return (
        <section className="relative bg-white py-16 sm:py-20 overflow-hidden">

            {/* =====================================================
                DECORATIVE BACKGROUND
            ===================================================== */}

            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50/60 pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-44 h-44 bg-orange-50/60 pointer-events-none" />

            {/* Small decorative dots */}
            <div className="absolute top-16 right-[10%] w-3 h-3 rounded-full bg-yellow-300 animate-pulse" />

            <div className="absolute bottom-20 left-[8%] w-2.5 h-2.5 rounded-full bg-pink-300 animate-pulse" />

            {/* =====================================================
                CONTAINER
            ===================================================== */}

            <div className="relative max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">

                {/* =================================================
                    SECTION HEADER
                ================================================= */}

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-9">

                    <div>

                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-8 h-[2px] bg-blue-600" />

                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
                                {sectionLabel}
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">
                            Numbers that tell
                            <span className="text-blue-600"> our story.</span>
                        </h2>

                    </div>

                    <div className="max-w-md">
                        <p className="text-sm leading-6 text-slate-500">
                            A vibrant learning community built around
                            curiosity, creativity, character and continuous
                            growth.
                        </p>
                    </div>

                </div>

                {/* =================================================
                    STATS GRID
                ================================================= */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const theme =
                            themeStyles[stat.theme] ||
                            themeStyles.blue;

                        return (
                            <div
                                key={index}
                                className={`
                                    group relative
                                    ${theme.card}
                                    border
                                    p-6
                                    sm:p-7
                                    overflow-hidden
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                `}
                            >

                                {/* Decorative corner */}
                                <div
                                    className={`
                                        absolute
                                        -right-8
                                        -top-8
                                        w-24
                                        h-24
                                        rounded-full
                                        ${theme.dot}
                                        opacity-[0.08]
                                        group-hover:scale-150
                                        transition-transform
                                        duration-500
                                    `}
                                />

                                {/* Top row */}
                                <div className="relative flex items-start justify-between">

                                    <div
                                        className={`
                                            w-12
                                            h-12
                                            flex
                                            items-center
                                            justify-center
                                            ${theme.icon}
                                            transition-all
                                            duration-300
                                        `}
                                    >
                                        <Icon
                                            size={22}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    <ArrowUpRight
                                        size={18}
                                        className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                                    />

                                </div>

                                {/* Number */}
                                <div className="relative mt-7">

                                    <h3
                                        className={`
                                            text-3xl
                                            sm:text-4xl
                                            font-extrabold
                                            tracking-tight
                                            ${theme.value}
                                        `}
                                    >
                                        {stat.value}
                                    </h3>

                                    <p className="mt-2 text-[15px] font-bold text-slate-900">
                                        {stat.label}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">
                                        {stat.description}
                                    </p>

                                </div>

                                {/* Bottom accent */}
                                <div className="relative mt-6 flex items-center gap-2">

                                    <span
                                        className={`
                                            w-2
                                            h-2
                                            rounded-full
                                            ${theme.dot}
                                        `}
                                    />

                                    <span className="h-px flex-1 bg-slate-200 group-hover:bg-slate-300 transition-colors" />

                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* =================================================
                    BOTTOM MESSAGE
                ================================================= */}

                <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-200 bg-slate-50 px-5 sm:px-7 py-4">

                    <div className="flex items-center gap-3">

                        <div className="flex -space-x-2">
                            <span className="w-7 h-7 rounded-full bg-blue-200 border-2 border-white" />
                            <span className="w-7 h-7 rounded-full bg-orange-200 border-2 border-white" />
                            <span className="w-7 h-7 rounded-full bg-green-200 border-2 border-white" />
                            <span className="w-7 h-7 rounded-full bg-purple-200 border-2 border-white" />
                        </div>

                        <p className="text-xs sm:text-sm font-medium text-slate-600">
                            {bottomText}
                        </p>

                    </div>

                    <a
                        href="#about"
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap"
                    >
                        Know More

                        <ArrowRightIcon />

                    </a>

                </div>

            </div>
        </section>
    );
};


/* =========================================================
   SMALL ARROW COMPONENT
========================================================= */

const ArrowRightIcon = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform duration-300"
        >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
};

export default QuickStats;
