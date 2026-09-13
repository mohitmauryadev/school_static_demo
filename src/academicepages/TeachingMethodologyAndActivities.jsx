import React from "react";
import {
    Activity,
    ArrowUpRight,
    Award,
    BookOpen,
    Brain,
    Check,
    Dumbbell,
    Laptop,
    Lightbulb,
    Music,
    Palette,
    Target,
    Trophy,
    Users,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const TeachingMethodologyAndActivities = ({
    /* =========================================
        Teaching Methodology
    ========================================== */

    methodologyEyebrow = "How We Teach",

    methodologyTitle = "Learning designed",
    methodologyHighlight = "around every child.",

    methodologyDescription =
    "Our teaching approach combines strong academic foundations with curiosity, practical experiences and individual support to make learning meaningful and engaging.",

    methodologies = [
        {
            icon: Activity,
            title: "Activity Based Learning",
            description:
                "Children learn through activities, projects and experiences that make concepts easier to understand and remember.",
            color: "blue",
        },
        {
            icon: Laptop,
            title: "Digital Learning",
            description:
                "Technology is thoughtfully integrated into classrooms to make learning more interactive, visual and engaging.",
            color: "orange",
        },
        {
            icon: Lightbulb,
            title: "Practical Education",
            description:
                "Students connect classroom concepts with real-world situations through experiments, projects and hands-on learning.",
            color: "emerald",
        },
        {
            icon: Users,
            title: "Individual Attention",
            description:
                "We understand that every child learns differently and provide the guidance and support they need to progress.",
            color: "blue",
        },
    ],

    methodologyPoints = [
        "Learning through experience and exploration",
        "Technology-supported classroom experiences",
        "Focus on understanding rather than memorisation",
        "Support for different learning needs",
    ],

    /* =========================================
        Co-Curricular Activities
    ========================================== */

    activitiesEyebrow = "Beyond Academics",

    activitiesTitle = "Discover interests.",
    activitiesHighlight = "Build confidence.",

    activitiesDescription =
    "Education becomes richer when children have opportunities to explore their talents, express themselves and work together beyond the classroom.",

    activities = [
        {
            icon: Palette,
            title: "Art & Craft",
            description:
                "Encouraging creativity, imagination and self-expression through colours, design and hands-on activities.",
            color: "orange",
        },
        {
            icon: Music,
            title: "Music",
            description:
                "Developing rhythm, listening skills and confidence through singing and musical activities.",
            color: "blue",
        },
        {
            icon: Activity,
            title: "Dance",
            description:
                "A joyful way for students to express themselves while developing coordination and confidence.",
            color: "orange",
        },
        {
            icon: Dumbbell,
            title: "Sports",
            description:
                "Building fitness, teamwork, discipline and a healthy competitive spirit through sports.",
            color: "emerald",
        },
        {
            icon: Brain,
            title: "Debate",
            description:
                "Helping students develop communication skills, confidence and the ability to express their ideas.",
            color: "blue",
        },
        {
            icon: Target,
            title: "Quiz",
            description:
                "Making learning exciting while encouraging curiosity, knowledge and quick thinking.",
            color: "yellow",
        },
    ],

    activityStatement =
    "Every child deserves an opportunity to discover something they love.",

    buttonText = "Explore Our Academics",
    buttonHref = "/academics",

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
          Soft Background Decorations
      ========================================== */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl" />

                <div className="absolute right-[-140px] top-[45%] h-80 w-80 rounded-full bg-orange-50/50 blur-3xl" />

                <div className="absolute left-[8%] top-24 h-2.5 w-2.5 rotate-45 bg-yellow-300" />

                <div className="absolute right-[10%] top-32 h-3 w-3 rounded-full bg-blue-200" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* =========================================
            TEACHING METHODOLOGY
        ========================================== */}

                <div>
                    {/* Header */}
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-orange-500">
                            <span className="h-2 w-2 bg-orange-400" />
                            {methodologyEyebrow}
                        </div>

                        <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            {methodologyTitle}{" "}
                            <span className="relative inline-block text-blue-600">
                                {methodologyHighlight}

                                <span className="absolute -bottom-1 left-0 h-1 w-2/3 bg-yellow-300" />
                            </span>
                        </h2>

                        <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
                            {methodologyDescription}
                        </p>
                    </div>

                    {/* Methodology Cards */}
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {methodologies.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={`${item.title}-${index}`}
                                    className="group relative overflow-hidden border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    {/* Top Accent */}
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

                                    <h3 className="mt-6 text-lg font-black text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-500">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Methodology Bottom */}
                    <div className="mt-10 grid gap-8 border border-slate-200 bg-slate-50/70 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:p-10">

                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-2.5 w-2.5 bg-blue-600" />

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                                    Our Classroom Approach
                                </p>
                            </div>

                            <h3 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                                Teaching that helps children{" "}
                                <span className="text-blue-600">
                                    understand, explore and grow.
                                </span>
                            </h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {methodologyPoints.map((point, index) => (
                                <div
                                    key={`${point}-${index}`}
                                    className="flex items-start gap-3 bg-white p-4"
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-blue-50 text-blue-600">
                                        <Check size={15} strokeWidth={3} />
                                    </span>

                                    <span className="text-sm font-semibold leading-6 text-slate-700">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* =========================================
            SEPARATOR
        ========================================== */}
                <div className="my-20 flex items-center gap-4 sm:my-24">
                    <div className="h-px flex-1 bg-slate-100" />

                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-blue-600" />
                        <span className="h-2 w-2 bg-yellow-300" />
                        <span className="h-2 w-2 bg-orange-300" />
                    </div>

                    <div className="h-px flex-1 bg-slate-100" />
                </div>

                {/* =========================================
            CO-CURRICULAR ACTIVITIES
        ========================================== */}

                <div>
                    {/* Header */}
                    <div className="max-w-3xl">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-2.5 w-2.5 bg-blue-600" />

                            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                                {activitiesEyebrow}
                            </p>
                        </div>

                        <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            {activitiesTitle}{" "}
                            <span className="relative inline-block text-orange-500">
                                {activitiesHighlight}

                                <span className="absolute -bottom-1 left-0 h-1 w-2/3 bg-yellow-300" />
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                            {activitiesDescription}
                        </p>
                    </div>

                    {/* Activities Grid */}
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {activities.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={`${item.title}-${index}`}
                                    className="group relative flex gap-5 border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    {/* Icon */}
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center ${iconStyles[item.color] || iconStyles.blue
                                            }`}
                                    >
                                        <Icon size={21} strokeWidth={2} />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-black text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Tiny accent */}
                                    <div
                                        className={`absolute bottom-0 left-0 h-0.5 w-10 transition-all duration-300 group-hover:w-16 ${accentStyles[item.color] || accentStyles.blue
                                            }`}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* =========================================
              Activity Statement + CTA
          ========================================== */}
                    <div className="mt-12 flex flex-col gap-6 border border-blue-100 bg-blue-50/60 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-blue-600 shadow-sm">
                                <Trophy size={21} />
                            </div>

                            <div>
                                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                                    More Than Academics
                                </p>

                                <p className="mt-2 max-w-2xl text-lg font-black leading-7 text-slate-900">
                                    {activityStatement}
                                </p>
                            </div>
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

export default TeachingMethodologyAndActivities;