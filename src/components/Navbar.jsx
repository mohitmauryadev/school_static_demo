import React, { useState } from "react";
import {
    Menu,
    X,
    ArrowUpRight,
    Sparkles
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
    schoolName = "Bright Future Academy",
    logo = "/logo.png",

    navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Academics", href: "/academics" },
        { label: "Facilities", href: "/facilities" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/contact" },
    ],

    admissionText = "Admission Enquiry",
    admissionHref = "/contact#admission",

    tagline = "Excellence • Values • Future",

    showAnnouncement = true,
    announcementText = "Admissions Open 2026–27",
    announcementHref = "/contact",
}) => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const handleNavClick = () => {
        navigate("/contact#admission");
        setMobileOpen(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">

            {/* =====================================================
                TOP COLORFUL ANNOUNCEMENT BAR
            ===================================================== */}

            {showAnnouncement && (
                <div className="relative bg-blue-600 text-white overflow-hidden">

                    {/* Decorative colors */}
                    <div className="absolute left-[10%] top-0 w-20 h-full bg-yellow-400/20 skew-x-[-20deg]" />

                    <div className="absolute right-[15%] top-0 w-16 h-full bg-pink-400/20 skew-x-[-20deg]" />

                    <div className="relative max-w-7xl mx-auto px-5 lg:px-8">

                        <Link
                            to={announcementHref}
                            onClick={handleNavClick}
                            className="group h-8 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-wide"
                        >
                            <Sparkles
                                size={12}
                                className="text-yellow-300"
                            />

                            <span>
                                {announcementText}
                            </span>

                            <ArrowUpRight
                                size={12}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </Link>

                    </div>
                </div>
            )}

            {/* =====================================================
                MAIN NAVBAR
            ===================================================== */}

            <div className="bg-white/95 backdrop-blur-xl border-b border-slate-200">

                <div className="max-w-7xl mx-auto px-5 lg:px-8">

                    <nav className="h-[76px] flex items-center justify-between">

                        {/* =================================================
                            LOGO
                        ================================================= */}

                        <Link
                            to="/"
                            onClick={handleNavClick}
                            className="flex items-center gap-3 group min-w-0"
                        >

                            {/* Colorful Logo Frame */}
                            <div className="relative shrink-0">

                                {/* Yellow offset */}
                                <div className="absolute -top-1 -right-1 w-full h-full border-2 border-yellow-300" />

                                {/* Main logo box */}
                                <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden group-hover:border-blue-400 transition-colors duration-300">

                                    <img
                                        src={logo}
                                        alt={`${schoolName} Logo`}
                                        className="w-full h-full object-contain p-1"
                                    />

                                </div>

                            </div>

                            {/* School Name */}
                            <div className="leading-tight min-w-0">

                                <h1 className="text-[16px] sm:text-[18px] font-extrabold tracking-tight text-slate-950 truncate max-w-[190px] sm:max-w-none">
                                    {schoolName}
                                </h1>

                                <div className="flex items-center gap-1.5 mt-1">

                                    <span className="w-2 h-2 bg-orange-400" />

                                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-blue-600 font-bold">
                                        {tagline}
                                    </p>

                                </div>

                            </div>

                        </Link>


                        {/* =================================================
                            DESKTOP NAVIGATION
                        ================================================= */}

                        <div className="hidden lg:flex items-center">

                            {navItems.map((item, index) => {

                                const accentColors = [
                                    "group-hover:text-blue-600",
                                    "group-hover:text-orange-500",
                                    "group-hover:text-emerald-600",
                                    "group-hover:text-violet-600",
                                    "group-hover:text-pink-600",
                                    "group-hover:text-blue-600",
                                ];

                                const lineColors = [
                                    "bg-blue-600",
                                    "bg-orange-500",
                                    "bg-emerald-500",
                                    "bg-violet-500",
                                    "bg-pink-500",
                                    "bg-blue-600",
                                ];

                                return (
                                    <Link
                                        key={index}
                                        to={item.href}
                                        onClick={handleNavClick}
                                        className={`relative group px-3.5 xl:px-4 py-3 text-[13px] font-bold text-slate-600 transition-colors duration-200 ${accentColors[index % accentColors.length]}`}
                                    >

                                        {item.label}

                                        {/* Colorful animated underline */}
                                        <span
                                            className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] ${lineColors[index % lineColors.length]} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                                        />

                                    </Link>
                                );
                            })}

                        </div>


                        {/* =================================================
                            ADMISSION CTA
                        ================================================= */}

                        <div className="hidden lg:flex items-center">

                            <Link
                                to={'/contact'}
                                onClick={handleNavClick}
                                className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 xl:px-6 py-3 text-[12px] font-bold tracking-wide shadow-md shadow-blue-600/15 transition-all duration-300 hover:-translate-y-0.5"
                            >

                                {/* Tiny colorful accent */}
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400" />

                                <span>
                                    {admissionText}
                                </span>

                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={2.4}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                                />

                            </Link>

                        </div>


                        {/* =================================================
                            MOBILE MENU BUTTON
                        ================================================= */}

                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden relative w-11 h-11 bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                            aria-label="Toggle navigation"
                            aria-expanded={mobileOpen}
                        >

                            {mobileOpen ? (
                                <X size={21} />
                            ) : (
                                <Menu size={21} />
                            )}

                            {/* Color accent */}
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-400" />

                        </button>

                    </nav>


                    {/* =====================================================
                        MOBILE MENU
                    ===================================================== */}

                    <div
                        className={`
        lg:hidden
        relative
        left-1/2
        -ml-[50vw]
        w-screen
        overflow-hidden
        border-t
        border-slate-100
        bg-white
        transition-all
        duration-300
        ${mobileOpen
                                ? "max-h-[520px] opacity-100"
                                : "max-h-0 opacity-0"
                            }
    `}
                    >

                        <div className="px-5 pt-3 h-[100vh]">
                            {navItems.map((item, index) => {

                                const colors = [
                                    "text-blue-600",
                                    "text-orange-500",
                                    "text-emerald-600",
                                    "text-violet-600",
                                    "text-pink-600",
                                    "text-blue-600",
                                ];

                                return (
                                    <Link
                                        key={index}
                                        to={item.href}
                                        onClick={handleNavClick}
                                        className="group flex items-center justify-between px-3 py-3.5 hover:bg-slate-50 transition-colors"
                                    >

                                        <div className="flex items-center gap-3">

                                            <span
                                                className={`w-1.5 h-1.5 ${colors[index % colors.length]} bg-current`}
                                            />

                                            <span className="text-sm font-bold text-slate-700 group-hover:text-slate-950">
                                                {item.label}
                                            </span>

                                        </div>

                                        <ArrowUpRight
                                            size={15}
                                            className="text-slate-300 group-hover:text-slate-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                        />

                                    </Link>
                                );
                            })}


                            {/* =================================================
                                MOBILE ADMISSION
                            ================================================= */}

                            <Link
                                to={admissionHref}
                                onClick={handleNavClick}
                                className="relative mt-3 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 text-sm font-bold transition-colors"
                            >

                                <span className="absolute top-0 right-0 w-3 h-3 bg-yellow-400" />

                                {admissionText}

                                <ArrowUpRight size={17} />

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </header>
    );
};

export default Navbar;