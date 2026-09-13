
import React from "react";
import {
    ArrowRight,
    ArrowUpRight,
    Play,
    CheckCircle2,
    Sparkles,
    Star,
} from "lucide-react";

const HomeHero = ({
    // =========================================================
    // SCHOOL INFORMATION
    // =========================================================
    eyebrow = "A Tradition of Excellence in Education",

    title = "Inspiring Minds.",
    highlight = "Shaping Futures.",

    description =
        "We provide a nurturing and engaging learning environment where every child is encouraged to discover their potential, build confidence and grow into a responsible individual.",

    // =========================================================
    // CTA
    // =========================================================
    primaryButtonText = "Admission Enquiry",
    primaryButtonHref = "#admission",

    secondaryButtonText = "Explore Our School",
    secondaryButtonHref = "#about",

    // =========================================================
    // HERO IMAGE
    // =========================================================
    heroImage = "/images/school-hero.jpg",
    heroImageAlt = "Students at the school",

    // =========================================================
    // IMAGE CONTENT
    // =========================================================
    imageLabel = "Empowering Young Learners",
    imageSubLabel = "Learn • Grow • Lead",

    // =========================================================
    // TRUST POINTS
    // =========================================================
    trustPoints = [
        "Experienced Faculty",
        "Holistic Development",
        "Safe & Supportive Campus",
    ],

    // =========================================================
    // STATS
    // =========================================================
    stats = [
        {
            value: "25+",
            label: "Years of Excellence",
        },
        {
            value: "2,000+",
            label: "Students",
        },
        {
            value: "50+",
            label: "Faculty Members",
        },
    ],

    // =========================================================
    // BADGE
    // =========================================================
    badgeText = "Admissions Open 2026–27",
    showBadge = true,

    // =========================================================
    // VIDEO
    // =========================================================
    showVideoButton = true,
    videoText = "Take a Virtual Tour",
}) => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-white pt-[76px]"
        >

            {/* =====================================================
                COLORFUL BACKGROUND
            ===================================================== */}

            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Soft blue area */}
                <div className="absolute top-0 right-0 w-[48%] h-full bg-blue-50/60" />

                {/* Yellow blob */}
                <div className="absolute -top-24 right-[7%] w-56 h-56 rounded-full bg-yellow-200/45 blur-[1px]" />

                {/* Pink blob */}
                <div className="absolute bottom-[-90px] left-[28%] w-64 h-64 rounded-full bg-pink-100/70" />

                {/* Green blob */}
                <div className="absolute top-[32%] right-[-80px] w-48 h-48 rounded-full bg-emerald-100/60" />

                {/* Purple blob */}
                <div className="absolute bottom-[8%] right-[35%] w-28 h-28 rounded-full bg-violet-100/70" />

                {/* Decorative circles */}
                <div className="absolute top-28 left-[7%] w-3 h-3 rounded-full bg-orange-400 animate-pulse" />

                <div className="absolute top-[48%] left-[3%] w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

                <div className="absolute bottom-24 left-[48%] w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                {/* Small colorful squares */}
                <div className="absolute top-[22%] right-[42%] w-4 h-4 border-2 border-yellow-400 rotate-12" />

                <div className="absolute bottom-[20%] right-[8%] w-5 h-5 border-2 border-pink-400 rotate-45" />
            </div>


            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

            <div className="relative max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">

                <div className="grid lg:grid-cols-[1fr_0.92fr] gap-12 xl:gap-20 items-center min-h-[calc(100vh-76px)] py-14 lg:py-16">


                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="relative z-10 max-w-2xl">

                        {/* =================================================
                            EYEBROW
                        ================================================= */}

                        <div className="flex items-center gap-3 mb-5">

                            <span className="w-9 h-[3px] bg-blue-600" />

                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
                                {eyebrow}
                            </span>

                        </div>


                        {/* =================================================
                            ADMISSION BADGE
                        ================================================= */}

                        {showBadge && (
                            <div className="inline-flex items-center gap-2 border border-orange-200 bg-orange-50 px-3.5 py-2 mb-6 shadow-sm">

                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />

                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                                </span>

                                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-orange-700">
                                    {badgeText}
                                </span>

                            </div>
                        )}


                        {/* =================================================
                            HEADING
                        ================================================= */}

                        <h1 className="text-[44px] sm:text-[54px] lg:text-[62px] xl:text-[70px] leading-[0.98] tracking-[-0.045em] font-extrabold text-slate-950">

                            {title}

                            <br />

                            <span className="relative inline-block text-blue-600">

                                {highlight}

                                {/* little yellow underline */}
                                <span className="absolute -bottom-2 left-0 w-[72%] h-[5px] bg-yellow-300 -rotate-1" />

                            </span>

                        </h1>


                        {/* =================================================
                            DESCRIPTION
                        ================================================= */}

                        <p className="mt-8 max-w-xl text-[15px] sm:text-[16px] lg:text-[17px] leading-7 text-slate-600">
                            {description}
                        </p>


                        {/* =================================================
                            CTA BUTTONS
                        ================================================= */}

                        <div className="flex flex-wrap items-center gap-3 mt-8">

                            {/* Primary */}
                            <a
                                href={primaryButtonHref}
                                className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/15 transition-all duration-300 hover:-translate-y-1"
                            >
                                {primaryButtonText}

                                <ArrowRight
                                    size={17}
                                    strokeWidth={2.5}
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </a>


                            {/* Secondary */}
                            <a
                                href={secondaryButtonHref}
                                className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-orange-400 text-slate-800 hover:text-orange-600 px-6 sm:px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1"
                            >
                                {secondaryButtonText}

                                <ArrowUpRight
                                    size={17}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                />
                            </a>

                        </div>


                        {/* =================================================
                            TRUST POINTS
                        ================================================= */}

                        <div className="flex flex-wrap gap-x-5 gap-y-3 mt-8">

                            {trustPoints.map((point, index) => {

                                const iconColors = [
                                    "text-blue-600",
                                    "text-emerald-600",
                                    "text-orange-500",
                                ];

                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2"
                                    >

                                        <CheckCircle2
                                            size={15}
                                            strokeWidth={2.4}
                                            className={
                                                iconColors[index % iconColors.length]
                                            }
                                        />

                                        <span className="text-xs sm:text-[13px] font-semibold text-slate-600">
                                            {point}
                                        </span>

                                    </div>
                                );
                            })}

                        </div>


                        {/* =================================================
                            STATS
                        ================================================= */}

                        <div className="mt-10 pt-7 border-t border-slate-200">

                            <div className="grid grid-cols-3 max-w-xl">

                                {stats.map((stat, index) => {

                                    const valueColors = [
                                        "text-blue-600",
                                        "text-orange-500",
                                        "text-emerald-600",
                                    ];

                                    return (
                                        <div
                                            key={index}
                                            className={`
                                                ${
                                                    index > 0
                                                        ? "border-l border-slate-200 pl-4 sm:pl-7"
                                                        : ""
                                                }
                                            `}
                                        >

                                            <div
                                                className={`
                                                    text-xl sm:text-2xl
                                                    font-extrabold
                                                    tracking-tight
                                                    ${
                                                        valueColors[
                                                            index %
                                                                valueColors.length
                                                        ]
                                                    }
                                                `}
                                            >
                                                {stat.value}
                                            </div>

                                            <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] font-bold text-slate-500">
                                                {stat.label}
                                            </div>

                                        </div>
                                    );
                                })}

                            </div>
                        </div>

                    </div>


                    {/* =================================================
                        RIGHT IMAGE
                    ================================================= */}

                    <div className="relative z-10">

                        <div className="relative max-w-[580px] mx-auto lg:ml-auto">


                            {/* =================================================
                                COLORFUL OFFSET FRAMES
                            ================================================= */}

                            <div className="absolute -top-4 -right-4 w-full h-full border-[2px] border-yellow-300" />

                            <div className="absolute -bottom-4 -left-4 w-full h-full border-[2px] border-pink-300" />


                            {/* =================================================
                                MAIN IMAGE
                            ================================================= */}

                            <div className="relative aspect-[4/4.6] overflow-hidden bg-slate-200 border-2 border-white shadow-2xl">

                                <img
                                    src={heroImage}
                                    alt={heroImageAlt}
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />


                                {/* =================================================
                                    IMAGE CONTENT
                                ================================================= */}

                                <div className="absolute left-0 right-0 bottom-0 p-6 sm:p-8">

                                    <div className="flex items-center gap-2 mb-3">

                                        <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 text-slate-900">
                                            <Sparkles size={15} />
                                        </span>

                                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/75 font-bold">
                                            {imageSubLabel}
                                        </span>

                                    </div>

                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
                                        {imageLabel}
                                    </h2>

                                </div>

                            </div>


                            {/* =================================================
                                VIRTUAL TOUR CARD
                            ================================================= */}

                            {showVideoButton && (
                                <button
                                    type="button"
                                    className="absolute top-6 left-4 sm:left-[-28px] group flex items-center gap-3 bg-white border border-blue-100 px-3 py-3 shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
                                >

                                    <span className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white group-hover:bg-purple-600 transition-colors">
                                        <Play
                                            size={15}
                                            fill="currentColor"
                                        />
                                    </span>

                                    <span className="hidden sm:block text-left pr-2">

                                        <span className="block text-[9px] uppercase tracking-[0.16em] text-purple-500 font-bold">
                                            Discover
                                        </span>

                                        <span className="block text-[13px] font-bold text-slate-900 mt-0.5">
                                            {videoText}
                                        </span>

                                    </span>

                                </button>
                            )}


                            {/* =================================================
                                COLORFUL TRUST CARD
                            ================================================= */}

                            <div className="absolute -bottom-8 right-3 sm:right-[-28px] bg-white border border-green-100 shadow-2xl px-5 py-4">

                                <div className="flex items-center gap-3">

                                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-600">
                                        <Star
                                            size={19}
                                            fill="currentColor"
                                        />
                                    </div>

                                    <div>

                                        <p className="text-sm font-bold text-slate-950">
                                            Excellence in Education
                                        </p>

                                        <p className="text-[10px] text-slate-500 mt-0.5">
                                            Nurturing every child's potential
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                                FLOATING COLOR DOTS
                            ================================================= */}

                            <div className="absolute -right-5 top-[28%] w-4 h-4 bg-orange-400 rounded-full animate-bounce" />

                            <div className="absolute -left-5 bottom-[25%] w-5 h-5 bg-blue-400 rounded-full animate-pulse" />

                            <div className="absolute right-[15%] -top-7 w-3 h-3 bg-pink-400 rotate-45" />

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                BOTTOM SCROLL
            ===================================================== */}

            <div className="hidden lg:flex absolute bottom-7 left-8 items-center gap-3">

                <span className="w-10 h-[2px] bg-orange-300" />

                <span className="text-[9px] uppercase tracking-[0.22em] font-bold text-slate-400">
                    Explore
                </span>

            </div>

        </section>
    );
};

export default HomeHero;

