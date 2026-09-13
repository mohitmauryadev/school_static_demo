import React from "react";
import {
    ArrowRight,
    ArrowUpRight,
    Building2,
    Dumbbell,
    FlaskConical,
    Library,
    MonitorPlay,
    Music2,
    ShieldCheck,
    Sparkles,
    Trees,
} from "lucide-react";

const FacilitiesPreview = ({
    // =========================================================
    // SECTION HEADER
    // =========================================================
    eyebrow = "Our Facilities",

    title = "A campus designed for",
    highlight = "learning, play & discovery.",

    description =
        "From modern classrooms to spaces for sports, creativity and exploration, our campus gives students the environment they need to learn confidently and enjoy every part of school life.",

    // =========================================================
    // FEATURED FACILITY
    // =========================================================
    featuredFacility = {
        title: "Smart & Interactive Classrooms",
        description:
            "Modern classrooms designed to make learning engaging, visual and interactive for every student.",
        image: "/images/smart-classroom.jpg",
        imageAlt: "Students learning in a smart classroom",
        icon: MonitorPlay,
        badge: "Learning Space",
    },

    // =========================================================
    // FACILITIES
    // =========================================================
    facilities = [
        {
            title: "Science Laboratory",
            description:
                "Hands-on learning spaces where students explore science through experiments and discovery.",
            icon: FlaskConical,
            color: "blue",
        },
        {
            title: "Library",
            description:
                "A welcoming space filled with books and resources that encourage reading and curiosity.",
            icon: Library,
            color: "orange",
        },
        {
            title: "Sports Ground",
            description:
                "Spacious areas where students develop fitness, teamwork and a healthy competitive spirit.",
            icon: Dumbbell,
            color: "green",
        },
        {
            title: "Creative & Music Room",
            description:
                "Dedicated spaces for music, arts and creative expression beyond the classroom.",
            icon: Music2,
            color: "purple",
        },
        {
            title: "Safe & Secure Campus",
            description:
                "A secure and caring environment designed to keep students comfortable and protected.",
            icon: ShieldCheck,
            color: "pink",
        },
        {
            title: "Green Learning Spaces",
            description:
                "Open and refreshing spaces where children can relax, interact and connect with nature.",
            icon: Trees,
            color: "yellow",
        },
    ],

    // =========================================================
    // CAMPUS IMAGE
    // =========================================================
    campusImage = "/images/school-campus.jpg",
    campusImageAlt = "School campus",

    // =========================================================
    // CAMPUS CARD
    // =========================================================
    campusBadge = "Our Campus",
    campusTitle = "More spaces to explore.",

    // =========================================================
    // CTA
    // =========================================================
    buttonText = "Explore All Facilities",
    buttonHref = "#facilities",
}) => {
    const colorStyles = {
        blue: {
            card: "bg-blue-50 border-blue-100 hover:border-blue-300",
            icon: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
            accent: "bg-blue-500",
            text: "text-blue-600",
        },

        orange: {
            card: "bg-orange-50 border-orange-100 hover:border-orange-300",
            icon: "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
            accent: "bg-orange-500",
            text: "text-orange-600",
        },

        green: {
            card: "bg-emerald-50 border-emerald-100 hover:border-emerald-300",
            icon: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
            accent: "bg-emerald-500",
            text: "text-emerald-600",
        },

        purple: {
            card: "bg-violet-50 border-violet-100 hover:border-violet-300",
            icon: "bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
            accent: "bg-violet-500",
            text: "text-violet-600",
        },

        pink: {
            card: "bg-pink-50 border-pink-100 hover:border-pink-300",
            icon: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
            accent: "bg-pink-500",
            text: "text-pink-600",
        },

        yellow: {
            card: "bg-amber-50 border-amber-100 hover:border-amber-300",
            icon: "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
            accent: "bg-amber-400",
            text: "text-amber-600",
        },
    };

    const FeaturedIcon = featuredFacility.icon;

    return (
        <section
            id="facilities"
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >

            {/* =====================================================
                BACKGROUND DECORATIONS
            ===================================================== */}

            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Blue blob */}
                <div className="absolute top-0 right-[-120px] w-80 h-80 rounded-full bg-blue-50" />

                {/* Yellow blob */}
                <div className="absolute bottom-[-130px] left-[-100px] w-96 h-96 rounded-full bg-yellow-50" />

                {/* Pink dot */}
                <div className="absolute top-[20%] left-[5%] w-3 h-3 rounded-full bg-pink-400 animate-pulse" />

                {/* Orange square */}
                <div className="absolute bottom-[20%] right-[7%] w-5 h-5 border-2 border-orange-300 rotate-12" />

                {/* Green dot */}
                <div className="absolute top-[12%] left-[42%] w-2.5 h-2.5 rounded-full bg-emerald-400" />

            </div>


            {/* =====================================================
                CONTAINER
            ===================================================== */}

            <div className="relative max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">


                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">

                    <div className="max-w-3xl">

                        <div className="flex items-center gap-3 mb-5">

                            <span className="w-9 h-[3px] bg-orange-500" />

                            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold text-orange-600">
                                {eyebrow}
                            </span>

                        </div>


                        <h2 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.04] tracking-[-0.035em] font-extrabold text-slate-950">

                            {title}

                            <br />

                            <span className="relative inline-block text-blue-600">

                                {highlight}

                                <span className="absolute -bottom-2 left-0 w-[65%] h-[4px] bg-yellow-300 -rotate-1" />

                            </span>

                        </h2>

                    </div>


                    <p className="max-w-md text-[14px] sm:text-[15px] leading-6 text-slate-500">
                        {description}
                    </p>

                </div>


                {/* =================================================
                    TOP FEATURED FACILITY
                ================================================= */}

                <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5 mb-5">


                    {/* =================================================
                        FEATURED IMAGE
                    ================================================= */}

                    <div className="relative min-h-[360px] lg:min-h-[430px] overflow-hidden border-4 border-white shadow-xl bg-slate-200 group">

                        <img
                            src={featuredFacility.image}
                            alt={featuredFacility.imageAlt}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                        />

                        {/* Overlay */}

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />


                        {/* Featured badge */}

                        <div className="absolute top-5 left-5 flex items-center gap-2 bg-white px-3 py-2 shadow-lg">

                            <span className="w-2 h-2 bg-orange-500" />

                            <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-700">
                                {featuredFacility.badge}
                            </span>

                        </div>


                        {/* Content */}

                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                            <div className="flex items-center gap-3 mb-4">

                                <div className="w-11 h-11 flex items-center justify-center bg-blue-600 text-white">
                                    <FeaturedIcon
                                        size={21}
                                        strokeWidth={2}
                                    />
                                </div>

                                <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-white/70">
                                    Featured Facility
                                </span>

                            </div>

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                                {featuredFacility.title}
                            </h3>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                                {featuredFacility.description}
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        CAMPUS VISUAL CARD
                    ================================================= */}

                    <div className="relative min-h-[360px] lg:min-h-[430px] overflow-hidden border border-slate-200 bg-slate-100 group">

                        <img
                            src={campusImage}
                            alt={campusImageAlt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />


                        {/* Top icon */}

                        <div className="absolute top-5 right-5 w-11 h-11 bg-yellow-400 text-slate-900 flex items-center justify-center">
                            <Building2 size={21} />
                        </div>


                        {/* Bottom content */}

                        <div className="absolute bottom-0 left-0 right-0 p-6">

                            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-yellow-300">
                                {campusBadge}
                            </span>

                            <h3 className="mt-2 text-2xl font-extrabold text-white">
                                {campusTitle}
                            </h3>

                            <div className="mt-4 flex items-center gap-2">

                                <span className="w-8 h-[2px] bg-yellow-400" />

                                <span className="text-[10px] text-white/70 font-semibold">
                                    Learn • Play • Discover
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    FACILITY CARDS
                ================================================= */}

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                    {facilities.map((facility, index) => {

                        const Icon = facility.icon;

                        const theme =
                            colorStyles[facility.color] ||
                            colorStyles.blue;

                        return (
                            <div
                                key={index}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    border
                                    ${theme.card}
                                    p-5 sm:p-6
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                `}
                            >

                                {/* Decorative circle */}

                                <div
                                    className={`
                                        absolute
                                        -right-10
                                        -top-10
                                        w-28
                                        h-28
                                        rounded-full
                                        ${theme.accent}
                                        opacity-[0.07]
                                        group-hover:scale-150
                                        transition-transform
                                        duration-500
                                    `}
                                />


                                {/* Top */}

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

                                    <span
                                        className={`
                                            text-[10px]
                                            font-extrabold
                                            ${theme.text}
                                            opacity-40
                                        `}
                                    >
                                        0{index + 1}
                                    </span>

                                </div>


                                {/* Content */}

                                <div className="relative mt-6">

                                    <h3 className="text-[15px] sm:text-[16px] font-extrabold text-slate-950">
                                        {facility.title}
                                    </h3>

                                    <p className="mt-2 text-xs sm:text-[13px] leading-5.5 text-slate-500">
                                        {facility.description}
                                    </p>

                                </div>


                                {/* Bottom line */}

                                <div className="relative mt-5 flex items-center gap-2">

                                    <span
                                        className={`w-2 h-2 ${theme.accent}`}
                                    />

                                    <span className="h-px flex-1 bg-slate-200 group-hover:bg-slate-300 transition-colors" />

                                    <ArrowUpRight
                                        size={15}
                                        className={`${theme.text} opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300`}
                                    />

                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* =================================================
                    CTA
                ================================================= */}

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 border border-slate-200 bg-slate-50 px-5 sm:px-7 py-5">

                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600">
                            <Sparkles size={18} />
                        </div>

                        <div>

                            <p className="text-sm font-extrabold text-slate-900">
                                Everything a child needs to grow.
                            </p>

                            <p className="text-[11px] text-slate-500 mt-0.5">
                                Safe spaces • Better learning • Happier childhood
                            </p>

                        </div>

                    </div>


                    <a
                        href={buttonHref}
                        className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-xs sm:text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                    >

                        {buttonText}

                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                        />

                    </a>

                </div>

            </div>

        </section>
    );
};

export default FacilitiesPreview;