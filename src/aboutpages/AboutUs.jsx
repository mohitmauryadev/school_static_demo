import React from "react";
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

    description = "We are committed to creating a learning environment where children feel valued, supported and inspired to become confident individuals.",

    secondaryDescription = "Our approach combines strong academics with character building, creativity, sports and meaningful experiences that help children prepare for both school and life.",

    image = "/images/school-students.jpg",
    imageAlt = "Students learning together",

    imageBadge = "Our School",
    imageBadgeText = "Learning with purpose",

    foundedYear = "2001",
    foundedLabel = "Established",

    missionTitle = "Our Mission",
    missionText = "To provide every child with a safe, joyful and inspiring environment where curiosity is encouraged, abilities are nurtured and strong values are developed.",

    visionTitle = "Our Vision",
    visionText = "To nurture confident, compassionate and capable young individuals who are ready to make a positive difference in the world.",

    highlights = [
        {
            title: "Child-Centred Learning",
            description: "Every learner receives encouragement, attention and opportunities to discover their strengths.",
            icon: HeartHandshake,
            color: "blue",
        },
        {
            title: "Strong Academics",
            description: "We create meaningful learning experiences that develop curiosity, understanding and independent thinking.",
            icon: BookOpen,
            color: "orange",
        },
        {
            title: "Character & Values",
            description: "Respect, responsibility, kindness and integrity are an important part of everyday school life.",
            icon: Target,
            color: "emerald",
        },
        {
            title: "Beyond Classrooms",
            description: "Sports, arts, activities and experiences help students explore their interests and talents.",
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
        <section
            id="about-us"
            className="relative overflow-hidden bg-white py-20 sm:py-24"
        >

            {/* =====================================================
                BACKGROUND DECORATIONS
            ===================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute -left-32 top-20 h-72 w-72 bg-blue-100/60 blur-3xl" />

                <div className="absolute right-[-100px] top-1/3 h-80 w-80 bg-orange-100/50 blur-3xl" />

                <div className="absolute bottom-[-100px] left-1/3 h-72 w-72 bg-violet-100/50 blur-3xl" />

                <div className="absolute left-[8%] top-24 h-3 w-3 rotate-45 bg-yellow-400" />

                <div className="absolute right-[12%] top-28 h-4 w-4 rounded-full bg-pink-400" />

                <div className="absolute bottom-24 left-[12%] h-3 w-3 bg-emerald-400" />

            </div>


            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <div className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-orange-600">

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


                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                        {description}
                    </p>

                </div>


                {/* =====================================================
                    SCHOOL STORY
                ===================================================== */}

                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div className="relative mx-auto w-full max-w-xl">

                        {/* Yellow Offset */}
                        <div className="absolute -left-3 -top-3 h-full w-full bg-yellow-300" />

                        {/* Pink Offset */}
                        <div className="absolute -bottom-3 -right-3 h-full w-full bg-pink-300" />


                        <div className="relative overflow-hidden border-2 border-slate-900 bg-slate-100">

                            <div className="relative aspect-[4/3] overflow-hidden">

                                <img
                                    src={image}
                                    alt={imageAlt}
                                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                                />


                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />


                                {/* Badge */}
                                <div className="absolute left-5 top-5 flex items-center gap-2 bg-blue-600 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white">

                                    <Sparkles size={14} />

                                    {imageBadge}

                                </div>


                                {/* Bottom Text */}
                                <div className="absolute bottom-5 left-5 right-5">

                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
                                        {imageBadgeText}
                                    </p>

                                    <div className="mt-2 flex items-end justify-between gap-4">

                                        <div>

                                            <p className="text-3xl font-black text-white">
                                                {foundedYear}
                                            </p>

                                            <p className="text-xs font-semibold text-white/70">
                                                {foundedLabel}
                                            </p>

                                        </div>

                                        <div className="flex h-11 w-11 items-center justify-center bg-orange-400 text-slate-950">
                                            <Lightbulb size={21} />
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -left-4 max-w-[260px] border-2 border-slate-900 bg-white p-5 shadow-[7px_7px_0px_#3b82f6] sm:-left-8">

                            <div className="mb-3 flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center bg-emerald-100 text-emerald-600">
                                    <HeartHandshake size={19} />
                                </div>

                                <div>

                                    <p className="text-xs font-black uppercase tracking-wider text-emerald-600">
                                        Our Belief
                                    </p>

                                    <p className="text-sm font-black text-slate-900">
                                        Every Child Matters
                                    </p>

                                </div>

                            </div>

                            <p className="text-xs leading-5 text-slate-500">
                                We create opportunities for every learner to feel confident, capable and valued.
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div>

                        <div className="mb-5 inline-flex items-center gap-2 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-700">

                            <span className="h-2 w-2 bg-blue-500" />

                            Our Story

                        </div>


                        <h3 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">

                            Building a foundation for{" "}

                            <span className="text-orange-500">
                                lifelong learning.
                            </span>

                        </h3>


                        <p className="mt-6 text-base leading-8 text-slate-600">
                            {secondaryDescription}
                        </p>


                        {/* Achievements */}
                        <div className="mt-7 space-y-3">

                            {achievements.map((item, index) => (

                                <div
                                    key={`${item}-${index}`}
                                    className="flex items-start gap-3"
                                >

                                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-emerald-100 text-emerald-600">
                                        <CheckCircle2 size={15} />
                                    </div>

                                    <p className="text-sm font-semibold leading-6 text-slate-700">
                                        {item}
                                    </p>

                                </div>

                            ))}

                        </div>


                        {/* CTA */}
                        {showButton && (

                            <div className="mt-8">

                                <a
                                    href={buttonHref}
                                    className="group inline-flex items-center gap-3 bg-blue-600 px-6 py-3.5 text-sm font-black text-white shadow-[5px_5px_0px_#facc15] transition duration-300 hover:bg-slate-900 hover:shadow-[3px_3px_0px_#facc15]"
                                >

                                    {buttonText}

                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />

                                </a>

                            </div>

                        )}

                    </div>

                </div>


                {/* =====================================================
                    MISSION & VISION
                ===================================================== */}

                <div className="mt-24 grid gap-6 md:grid-cols-2">

                    {/* Mission */}
                    <div className="relative overflow-hidden border-2 border-blue-100 bg-blue-50 p-7 sm:p-8">

                        <div className="absolute right-0 top-0 h-20 w-20 bg-blue-100" />

                        <div className="absolute right-5 top-5 text-blue-200">
                            <Target size={42} />
                        </div>


                        <div className="relative">

                            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-blue-600 text-white">
                                <Target size={22} />
                            </div>

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                                What Drives Us
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-slate-900">
                                {missionTitle}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {missionText}
                            </p>

                        </div>

                    </div>


                    {/* Vision */}
                    <div className="relative overflow-hidden border-2 border-orange-100 bg-orange-50 p-7 sm:p-8">

                        <div className="absolute right-0 top-0 h-20 w-20 bg-orange-100" />

                        <div className="absolute right-5 top-5 text-orange-200">
                            <Sparkles size={42} />
                        </div>


                        <div className="relative">

                            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-orange-500 text-white">
                                <Sparkles size={22} />
                            </div>

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
                                Where We Are Going
                            </p>

                            <h3 className="mt-2 text-2xl font-black text-slate-900">
                                {visionTitle}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {visionText}
                            </p>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    CORE HIGHLIGHTS
                ===================================================== */}

                <div className="mt-24">

                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-600">

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

                        <div className="hidden h-1 w-28 bg-yellow-400 sm:block" />

                    </div>


                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {highlights.map((item, index) => {

                            const Icon = item.icon;

                            const styles =
                                colorStyles[item.color] ||
                                colorStyles.blue;

                            return (

                                <div
                                    key={`${item.title}-${index}`}
                                    className={`group relative overflow-hidden border ${styles.border} ${styles.bg} p-6 transition duration-300 hover:-translate-y-1`}
                                >

                                    {/* Top accent */}
                                    <div
                                        className={`absolute left-0 top-0 h-1 w-16 ${styles.accent}`}
                                    />


                                    {/* Number */}
                                    <span className="absolute right-5 top-3 text-5xl font-black text-slate-900/5">
                                        0{index + 1}
                                    </span>


                                    <div
                                        className={`mb-6 flex h-12 w-12 items-center justify-center ${styles.iconBg} ${styles.icon}`}
                                    >
                                        <Icon size={22} />
                                    </div>


                                    <h4
                                        className={`text-lg font-black ${styles.title}`}
                                    >
                                        {item.title}
                                    </h4>


                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {item.description}
                                    </p>


                                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">

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
                    BOTTOM STATEMENT
                ===================================================== */}

                <div className="mt-16 border-2 border-slate-900 bg-slate-950 p-7 text-white sm:p-9">

                    <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                        <div className="max-w-3xl">

                            <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-400">

                                <Sparkles size={15} />

                                Our Promise

                            </div>

                            <h3 className="text-2xl font-black leading-tight sm:text-3xl">
                                Helping children become confident learners,
                                thoughtful people and responsible citizens.
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