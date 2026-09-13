import React from "react";
import {
    ShieldCheck,
    BookOpen,
    HeartHandshake,
    Trophy,
    Palette,
    Users,
    ArrowRight,
    ArrowUpRight,
    Sparkles,
} from "lucide-react";

const WhyChooseUs = ({
    // =========================================================
    // SECTION HEADER
    // =========================================================
    eyebrow = "Why Choose Us",

    title = "A place where every child",
    highlight = "gets the chance to shine.",

    description =
        "We believe great education goes beyond textbooks. Our approach brings together academic learning, creativity, character, confidence and care to help every child discover their potential.",

    // =========================================================
    // FEATURES
    // =========================================================
    features = [
        {
            title: "Safe & Caring Environment",
            description:
                "A secure and welcoming campus where children feel respected, supported and confident.",
            icon: ShieldCheck,
            color: "blue",
        },
        {
            title: "Engaging Learning",
            description:
                "Interactive and meaningful learning experiences that encourage curiosity and understanding.",
            icon: BookOpen,
            color: "orange",
        },
        {
            title: "Holistic Development",
            description:
                "Equal importance to academics, sports, creativity, communication and personal growth.",
            icon: HeartHandshake,
            color: "green",
        },
        {
            title: "Sports & Activities",
            description:
                "Opportunities to participate, compete and develop teamwork, discipline and confidence.",
            icon: Trophy,
            color: "yellow",
        },
        {
            title: "Creative Expression",
            description:
                "Arts, culture and creative activities that help students explore their imagination.",
            icon: Palette,
            color: "purple",
        },
        {
            title: "Individual Attention",
            description:
                "Teachers who understand every child's learning needs and encourage their unique strengths.",
            icon: Users,
            color: "pink",
        },
    ],

    // =========================================================
    // SIDE VISUAL
    // =========================================================
    image = "/images/school-campus.jpg",
    imageAlt = "School campus",

    imageLabel = "More Than Education",
    imageSubLabel = "A Community • A Journey • A Future",

    // =========================================================
    // FLOATING CARD
    // =========================================================
    floatingNumber = "360°",
    floatingTitle = "Holistic Growth",
    floatingText = "Academics, character, creativity & confidence.",

    // =========================================================
    // CTA
    // =========================================================
    buttonText = "Discover Our Approach",
    buttonHref = "#academics",
}) => {
    const colorStyles = {
        blue: {
            card: "bg-blue-50 border-blue-100 hover:border-blue-300",
            icon: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
            accent: "bg-blue-500",
            number: "text-blue-600",
        },

        orange: {
            card: "bg-orange-50 border-orange-100 hover:border-orange-300",
            icon: "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
            accent: "bg-orange-500",
            number: "text-orange-600",
        },

        green: {
            card: "bg-emerald-50 border-emerald-100 hover:border-emerald-300",
            icon: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
            accent: "bg-emerald-500",
            number: "text-emerald-600",
        },

        yellow: {
            card: "bg-amber-50 border-amber-100 hover:border-amber-300",
            icon: "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
            accent: "bg-amber-400",
            number: "text-amber-600",
        },

        purple: {
            card: "bg-violet-50 border-violet-100 hover:border-violet-300",
            icon: "bg-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
            accent: "bg-violet-500",
            number: "text-violet-600",
        },

        pink: {
            card: "bg-pink-50 border-pink-100 hover:border-pink-300",
            icon: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
            accent: "bg-pink-500",
            number: "text-pink-600",
        },
    };

    return (
        <section
            id="why-us"
            className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
        >

            {/* =====================================================
                BACKGROUND DECORATIONS
            ===================================================== */}

            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Blue */}
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-100/60" />

                {/* Yellow */}
                <div className="absolute top-[30%] right-[-80px] w-64 h-64 rounded-full bg-yellow-100/70" />

                {/* Pink */}
                <div className="absolute bottom-[-100px] left-[38%] w-72 h-72 rounded-full bg-pink-100/60" />

                {/* Decorative dots */}
                <div className="absolute top-[20%] right-[8%] w-3 h-3 rounded-full bg-orange-400 animate-pulse" />

                <div className="absolute bottom-[18%] left-[7%] w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

                <div className="absolute top-[12%] left-[45%] w-4 h-4 border-2 border-violet-300 rotate-12" />

            </div>


            {/* =====================================================
                CONTAINER
            ===================================================== */}

            <div className="relative max-w-7xl mx-auto px-5 sm:px-7 lg:px-8">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="max-w-3xl mb-12">

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


                    <p className="mt-6 max-w-2xl text-[15px] sm:text-[16px] leading-7 text-slate-600">
                        {description}
                    </p>

                </div>


                {/* =================================================
                    MAIN GRID
                ================================================= */}

                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-16 items-start">


                    {/* =================================================
                        FEATURES
                    ================================================= */}

                    <div className="grid sm:grid-cols-2 gap-4">

                        {features.map((feature, index) => {

                            const Icon = feature.icon;

                            const theme =
                                colorStyles[feature.color] ||
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
                                        p-5
                                        sm:p-6
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:shadow-xl
                                    `}
                                >

                                    {/* Decorative corner circle */}

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


                                    {/* Icon + Number */}

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
                                                text-[11px]
                                                font-extrabold
                                                ${theme.number}
                                                opacity-50
                                            `}
                                        >
                                            0{index + 1}
                                        </span>

                                    </div>


                                    {/* Content */}

                                    <div className="relative mt-6">

                                        <h3 className="text-[15px] sm:text-[16px] font-extrabold text-slate-950">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-2 text-xs sm:text-[13px] leading-5.5 text-slate-500">
                                            {feature.description}
                                        </p>

                                    </div>


                                    {/* Bottom accent */}

                                    <div className="relative mt-5 flex items-center gap-2">

                                        <span
                                            className={`
                                                w-2
                                                h-2
                                                ${theme.accent}
                                            `}
                                        />

                                        <span className="h-px flex-1 bg-slate-200 group-hover:bg-slate-300 transition-colors" />

                                    </div>

                                </div>
                            );
                        })}

                    </div>


                    {/* =================================================
                        RIGHT VISUAL
                    ================================================= */}

                    <div className="relative lg:sticky lg:top-28">

                        <div className="relative max-w-[500px] mx-auto lg:ml-auto">

                            {/* Color frames */}

                            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-yellow-300" />

                            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-purple-300" />


                            {/* Image */}

                            <div className="relative aspect-[4/4.7] overflow-hidden border-4 border-white bg-slate-200 shadow-2xl">

                                <img
                                    src={image}
                                    alt={imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                />


                                {/* Overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />


                                {/* Image content */}

                                <div className="absolute left-0 right-0 bottom-0 p-6 sm:p-7">

                                    <div className="flex items-center gap-2 mb-3">

                                        <span className="flex items-center justify-center w-8 h-8 bg-yellow-400 text-slate-900">
                                            <Sparkles size={15} />
                                        </span>

                                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-white/75">
                                            {imageSubLabel}
                                        </span>

                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                        {imageLabel}
                                    </h3>

                                </div>

                            </div>


                            {/* =================================================
                                FLOATING GROWTH CARD
                            ================================================= */}

                            <div className="absolute top-7 -left-3 sm:-left-7 bg-white border border-blue-100 shadow-2xl px-4 py-4">

                                <div className="flex items-center gap-3">

                                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600">
                                        <span className="text-lg font-extrabold">
                                            {floatingNumber}
                                        </span>
                                    </div>

                                    <div>

                                        <p className="text-sm font-extrabold text-slate-950">
                                            {floatingTitle}
                                        </p>

                                        <p className="mt-0.5 max-w-[170px] text-[10px] leading-4 text-slate-500">
                                            {floatingText}
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                                CTA CARD
                            ================================================= */}

                            <div className="relative mt-7 bg-white border border-slate-200 p-5 shadow-sm">

                                <div className="flex items-center justify-between gap-5">

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-orange-500">
                                            Our Promise
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-slate-800">
                                            Helping every child move forward.
                                        </p>

                                    </div>


                                    <a
                                        href={buttonHref}
                                        className="group shrink-0 w-11 h-11 flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                        aria-label={buttonText}
                                        title={buttonText}
                                    >
                                        <ArrowRight
                                            size={18}
                                            className="group-hover:translate-x-1 transition-transform duration-300"
                                        />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM STATEMENT
                ================================================= */}

                <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">

                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500" />
                        <span className="text-xs font-semibold text-slate-500">
                            Learn with curiosity
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500" />
                        <span className="text-xs font-semibold text-slate-500">
                            Grow with confidence
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500" />
                        <span className="text-xs font-semibold text-slate-500">
                            Lead with values
                        </span>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhyChooseUs;