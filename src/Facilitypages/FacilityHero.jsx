import React from "react";
import {
    ArrowUpRight,
    BookOpen,
    Bus,
    CheckCircle2,
    Computer,
    FlaskConical,
    HeartPulse,
    Library,
    LockKeyhole,
    Monitor,
    ShieldCheck,
    Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

const FacilityHero = ({
    /* =========================================
        Hero Content
    ========================================== */

    eyebrow = "Our Facilities",

    title = "A campus designed",
    highlight = "for learning, growth & joy.",

    description =
    "Our school provides a safe, modern and welcoming environment where children have the facilities they need to learn confidently, explore their interests and grow every day.",

    heroImage =
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85",

    heroImageAlt = "School campus",

    heroBadge = "A Better Learning Environment",

    /* =========================================
        Facilities
    ========================================== */

    facilities = [
        {
            icon: Monitor,
            title: "Smart Classrooms",
            description:
                "Technology-enabled classrooms that make lessons more visual, interactive and engaging.",
            image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
            imageAlt: "Students learning in a smart classroom",
            color: "blue",
        },
        {
            icon: FlaskConical,
            title: "Science Laboratory",
            description:
                "Well-equipped spaces where students explore scientific concepts through experiments and observation.",
            image:
                "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
            imageAlt: "Science laboratory",
            color: "orange",
        },
        {
            icon: Computer,
            title: "Computer Lab",
            description:
                "A modern learning space helping students develop digital skills and technology awareness.",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
            imageAlt: "Students using computers",
            color: "blue",
        },
        {
            icon: Library,
            title: "Library",
            description:
                "A quiet and welcoming space with books and resources that encourage reading and discovery.",
            image:
                "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
            imageAlt: "School library",
            color: "emerald",
        },
        {
            icon: Trophy,
            title: "Sports Ground",
            description:
                "Open spaces where students stay active, build teamwork and develop a healthy competitive spirit.",
            image:
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
            imageAlt: "Students playing sports",
            color: "orange",
        },
        {
            icon: Bus,
            title: "Transport Facility",
            description:
                "A convenient school transport facility designed to support safe and comfortable daily travel.",
            image:
                "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=85",
            imageAlt: "School bus",
            color: "yellow",
        },
        {
            icon: HeartPulse,
            title: "First Aid / Medical Care",
            description:
                "Basic medical support and first-aid assistance available to respond to students' immediate needs.",
            image:
                "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85",
            imageAlt: "Medical care facility",
            color: "emerald",
        },
        {
            icon: LockKeyhole,
            title: "Safe & Secure Campus",
            description:
                "A secure school environment with safety practices designed to provide peace of mind to families.",
            image:
                "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=85",
            imageAlt: "Safe school campus",
            color: "blue",
        },
    ],

    /* =========================================
        Bottom CTA
    ========================================== */

    ctaTitle = "Everything children need to learn and grow.",

    ctaText =
    "From classrooms and laboratories to sports and student safety, every part of our campus is designed with children's learning and wellbeing in mind.",

    buttonText = "Contact Our School",
    buttonHref = "/contact",

    showButton = true,
}) => {
    const iconStyles = {
        blue: "bg-blue-50 text-blue-600",
        orange: "bg-orange-50 text-orange-500",
        emerald: "bg-emerald-50 text-emerald-600",
        yellow: "bg-yellow-50 text-yellow-600",
    };

    const accentStyles = {
        blue: "bg-blue-600",
        orange: "bg-orange-400",
        emerald: "bg-emerald-500",
        yellow: "bg-yellow-400",
    };

    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
            {/* =========================================
          Soft Background
      ========================================== */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-50/70 blur-3xl" />

                <div className="absolute right-[-140px] top-[35%] h-80 w-80 rounded-full bg-orange-50/50 blur-3xl" />

                <div className="absolute left-[9%] top-24 h-2.5 w-2.5 rotate-45 bg-yellow-300" />

                <div className="absolute right-[10%] top-32 h-3 w-3 rounded-full bg-blue-200" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* =========================================
            HERO
        ========================================== */}
                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

                    {/* Hero Content */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                            <span className="h-2 w-2 bg-blue-500" />
                            {eyebrow}
                        </div>

                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            {title}{" "}
                            <span className="relative inline-block text-blue-600">
                                {highlight}

                                <span className="absolute -bottom-1 left-0 h-1 w-2/3 bg-yellow-300" />
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                            {description}
                        </p>

                        {/* Small trust points */}
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {[
                                "Modern learning spaces",
                                "Student-friendly environment",
                                "Sports & activity spaces",
                                "Focus on safety",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                                >
                                    <CheckCircle2
                                        size={17}
                                        className="shrink-0 text-blue-600"
                                    />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                        {/* Offset frame */}
                        <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-yellow-300" />

                        <div className="relative overflow-hidden border border-slate-200 bg-slate-100">
                            <img
                                src={heroImage}
                                alt={heroImageAlt}
                                className="h-[360px] w-full object-cover transition duration-700 hover:scale-[1.02] sm:h-[440px] lg:h-[500px]"
                            />

                            {/* Image Badge */}
                            <div className="absolute bottom-5 left-5 flex items-center gap-3 border border-white/70 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                                <div className="flex h-10 w-10 items-center justify-center bg-blue-600 text-white">
                                    <ShieldCheck size={19} />
                                </div>

                                <div>
                                    <p className="text-xs font-black text-slate-900">
                                        {heroBadge}
                                    </p>

                                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                        Safe • Modern • Welcoming
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========================================
            FACILITIES HEADER
        ========================================== */}
                <div className="mt-24 max-w-3xl lg:mt-28">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-2.5 w-2.5 bg-orange-400" />

                        <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">
                            Campus Facilities
                        </p>
                    </div>

                    <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
                        Spaces that make{" "}
                        <span className="text-blue-600">school life better.</span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                        Every facility has a purpose—to support learning, encourage
                        exploration, promote wellbeing and help students make the most of
                        their school experience.
                    </p>
                </div>

                {/* =========================================
            FACILITY CARDS
        ========================================== */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {facilities.map((facility, index) => {
                        const Icon = facility.icon;

                        return (
                            <article
                                key={`${facility.title}-${index}`}
                                className="group relative overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden bg-slate-100">
                                    <img
                                        src={facility.image}
                                        alt={facility.imageAlt || facility.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    {/* Light image overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />

                                    {/* Number */}
                                    <span className="absolute right-4 top-4 text-4xl font-black text-white/80">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="relative p-6">
                                    {/* Accent */}
                                    <div
                                        className={`absolute left-0 top-0 h-1 w-14 ${accentStyles[facility.color] || accentStyles.blue
                                            }`}
                                    />

                                    <div className="flex items-start justify-between gap-4">
                                        <div
                                            className={`flex h-11 w-11 shrink-0 items-center justify-center ${iconStyles[facility.color] || iconStyles.blue
                                                }`}
                                        >
                                            <Icon size={20} strokeWidth={2} />
                                        </div>

                                        <ArrowUpRight
                                            size={18}
                                            className="mt-1 text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                                        />
                                    </div>

                                    <h3 className="mt-5 text-lg font-black text-slate-900">
                                        {facility.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-500">
                                        {facility.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* =========================================
            BOTTOM CTA
        ========================================== */}
                <div className="relative mt-16 overflow-hidden border border-blue-100 bg-blue-50/70 px-6 py-8 sm:px-8 lg:mt-20 lg:px-10 lg:py-10">
                    {/* Small decorative block */}
                    <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300/80" />

                    <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-3xl">
                            <div className="mb-3 flex items-center gap-3">
                                <span className="h-2.5 w-2.5 bg-blue-600" />

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                                    Our Campus
                                </p>
                            </div>

                            <h3 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                                {ctaTitle}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                                {ctaText}
                            </p>
                        </div>

                        {showButton && (
                            <Link
                                to={buttonHref}
                                className="group inline-flex w-fit shrink-0 items-center gap-3 bg-blue-600 px-6 py-3.5 text-sm font-black text-white transition duration-300 hover:bg-blue-700"
                            >
                                {buttonText}

                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacilityHero;
