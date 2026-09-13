import React from "react";
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Sparkles,
    Quote,
} from "lucide-react";

const AboutPreview = ({
    // =========================================================
    // SECTION LABEL
    // =========================================================
    eyebrow = "About Our School",

    // =========================================================
    // HEADING
    // =========================================================
    title = "Growing curious minds with",
    highlight = "purpose, care & confidence.",

    // =========================================================
    // CONTENT
    // =========================================================
    description = "Our school is more than a place to study. It is a nurturing community where children are encouraged to ask questions, discover their strengths and develop the confidence to face tomorrow.",

    secondaryDescription = "With dedicated educators, engaging learning experiences and a strong focus on values, we help every child grow academically, socially and personally.",

    // =========================================================
    // IMAGE
    // =========================================================
    image = "/images/school-about.jpg",
    imageAlt = "Students learning at the school",

    // =========================================================
    // IMAGE LABEL
    // =========================================================
    imageBadge = "Learning Today",
    imageBadgeText = "Leading Tomorrow",

    // =========================================================
    // HIGHLIGHTS
    // =========================================================
    highlights = [
        "Child-centered learning environment",
        "Focus on academics & character",
        "Safe, caring and inclusive campus",
        "Opportunities beyond the classroom",
    ],

    // =========================================================
    // SMALL HIGHLIGHT CARD
    // =========================================================
    cardNumber = "01",
    cardTitle = "Every Child Matters",
    cardDescription = "We believe every child has a unique potential waiting to be discovered.",

    // =========================================================
    // BUTTON
    // =========================================================
    buttonText = "Discover Our Story",
    buttonHref = "#about",

    // =========================================================
    // PRINCIPAL / SCHOOL MESSAGE
    // =========================================================
    showMessage = true,
    messageLabel = "Our Philosophy",
    message = "Education is not just about preparing children for examinations. It is about preparing them for life.",
}) => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >

            {/* =====================================================
                COLORFUL BACKGROUND DECORATIONS
            ===================================================== */}

            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Soft blue */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full translate-x-1/3 -translate-y-1/3" />

                {/* Soft yellow */}
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-50 rounded-full -translate-x-1/3 translate-y-1/3" />

                {/* Small pink circle */}
                <div className="absolute top-[30%] left-[4%] w-4 h-4 bg-pink-300 rounded-full animate-pulse" />

                {/* Small orange square */}
                <div className="absolute top-[18%] right-[8%] w-5 h-5 border-2 border-orange-300 rotate-12" />

                {/* Green dot */}
                <div className="absolute bottom-[20%] right-[5%] w-3 h-3 bg-emerald-400 rounded-full" />

            </div>


            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

            <div className="relative max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">

                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-center">


                    {/* =================================================
                        LEFT — IMAGE
                    ================================================= */}

                    <div className="relative">

                        <div className="relative max-w-[570px] mx-auto lg:mx-0">

                            {/* Colorful offset frames */}

                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-yellow-300" />

                            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-pink-300" />


                            {/* Main image */}

                            <div className="relative aspect-[4/4.5] overflow-hidden border-4 border-white bg-slate-100 shadow-2xl">

                                <img
                                    src={image}
                                    alt={imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                />

                                {/* Image overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />


                                {/* Image bottom content */}

                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                                    <div className="flex items-center gap-2 mb-3">

                                        <span className="flex items-center justify-center w-8 h-8 bg-yellow-400 text-slate-900">
                                            <Sparkles size={15} />
                                        </span>

                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/75">
                                            {imageBadge}
                                        </span>

                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                        {imageBadgeText}
                                    </h3>

                                </div>

                            </div>


                            {/* =================================================
                                FLOATING CARD
                            ================================================= */}

                            <div className="absolute -bottom-8 -left-3 sm:-left-7 bg-white border border-blue-100 shadow-xl p-4 sm:p-5 max-w-[260px]">

                                <div className="flex gap-3">

                                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 font-extrabold text-sm">
                                        {cardNumber}
                                    </div>

                                    <div>

                                        <h4 className="text-sm font-bold text-slate-950">
                                            {cardTitle}
                                        </h4>

                                        <p className="mt-1 text-[11px] leading-4 text-slate-500">
                                            {cardDescription}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT — CONTENT
                    ================================================= */}

                    <div className="relative z-10">

                        {/* Eyebrow */}

                        <div className="flex items-center gap-3 mb-5">

                            <span className="w-9 h-[3px] bg-orange-500" />

                            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold text-orange-600">
                                {eyebrow}
                            </span>

                        </div>


                        {/* Heading */}

                        <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[54px] leading-[1.05] tracking-[-0.035em] font-extrabold text-slate-950">

                            {title}

                            <br />

                            <span className="relative inline-block text-blue-600">

                                {highlight}

                                <span className="absolute -bottom-2 left-0 w-[65%] h-[4px] bg-yellow-300 -rotate-1" />

                            </span>

                        </h2>


                        {/* Description */}

                        <p className="mt-7 text-[15px] sm:text-[16px] leading-7 text-slate-600 max-w-xl">
                            {description}
                        </p>

                        <p className="mt-4 text-[14px] sm:text-[15px] leading-6 text-slate-500 max-w-xl">
                            {secondaryDescription}
                        </p>


                        {/* =================================================
                            HIGHLIGHTS
                        ================================================= */}

                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mt-7">

                            {highlights.map((item, index) => {

                                const colors = [
                                    "text-blue-600",
                                    "text-orange-500",
                                    "text-emerald-600",
                                    "text-violet-600",
                                ];

                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2.5"
                                    >

                                        <CheckCircle2
                                            size={17}
                                            strokeWidth={2.4}
                                            className={`shrink-0 mt-0.5 ${
                                                colors[
                                                    index %
                                                        colors.length
                                                ]
                                            }`}
                                        />

                                        <span className="text-[13px] font-semibold leading-5 text-slate-700">
                                            {item}
                                        </span>

                                    </div>
                                );
                            })}

                        </div>


                        {/* =================================================
                            PHILOSOPHY MESSAGE
                        ================================================= */}

                        {showMessage && (
                            <div className="relative mt-8 border-l-4 border-yellow-400 bg-yellow-50/70 px-5 py-4">

                                <Quote
                                    size={20}
                                    className="absolute top-3 right-4 text-yellow-300"
                                />

                                <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-yellow-700 mb-2">
                                    {messageLabel}
                                </p>

                                <p className="text-sm sm:text-[15px] leading-6 font-semibold italic text-slate-700 max-w-lg">
                                    “{message}”
                                </p>

                            </div>
                        )}


                        {/* =================================================
                            BUTTON
                        ================================================= */}

                        <div className="mt-8">

                            <a
                                href={buttonHref}
                                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/10 hover:-translate-y-0.5 transition-all duration-300"
                            >

                                {buttonText}

                                <ArrowRight
                                    size={17}
                                    strokeWidth={2.4}
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                />

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutPreview;