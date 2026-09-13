import React from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  BookOpen
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Footer = ({
  schoolName = "Bright Future Academy",
  tagline =
    "Inspiring young minds, nurturing strong values, and building a brighter future.",

  logo = "/logo.png",

  address = "123 School Road, Lucknow, Uttar Pradesh",
  phone = "+91 98765 43210",
  email = "info@brightfutureacademy.com",

  quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],

  importantLinks = [
    { label: "Admissions", href: "#admission" },
    { label: "Principal's Message", href: "#principal" },
    { label: "School Life", href: "#school-life" },
    { label: "Notice Board", href: "#notices" },
    { label: "Downloads", href: "#downloads" },
    { label: "Privacy Policy", href: "#privacy" },
  ],

  socialLinks = {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },

  admissionTitle = "Admissions are open!",
  admissionText =
    "Give your child a joyful learning environment where curiosity, confidence and character grow together.",

  admissionButtonText = "Enquire for Admission",
  copyrightYear = new Date().getFullYear(),
  footerNote = "Designed & Developed by WeboraX",

  showWeboraX = true,
}) => {
  const navigate = useNavigate();
  return (
    <footer className="relative overflow-hidden bg-white text-slate-800">
      {/* =========================================
          Soft Decorative Background
      ========================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute right-[-140px] top-56 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

        <div className="absolute left-[8%] top-28 h-2.5 w-2.5 rotate-45 bg-yellow-300" />
        <div className="absolute right-[12%] top-32 h-3 w-3 rounded-full bg-blue-200" />
        <div className="absolute bottom-28 left-[15%] h-2.5 w-2.5 bg-orange-300" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================================
            Admission CTA
        ========================================== */}
        <div className="relative overflow-hidden border border-blue-200 bg-blue-600 px-6 py-8 shadow-[6px_6px_0px_#facc15] sm:px-8 lg:px-10">
          {/* Small decorative accent */}
          <div className="absolute right-0 top-0 h-14 w-14 bg-yellow-300" />

          <div className="absolute right-5 top-5">
            <Sparkles size={20} className="text-blue-700" />
          </div>

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
                <span className="h-2 w-2 bg-yellow-300" />
                Admissions
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                {admissionTitle}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-blue-50 sm:text-base">
                {admissionText}
              </p>
            </div>

            <div
              onClick={() => navigate("/contact")}
              className="group inline-flex w-fit items-center gap-3 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              {admissionButtonText}

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>

        {/* =========================================
            Main Footer
        ========================================== */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">

          {/* School Info */}
          <div>
            {/* Logo */}
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute left-1.5 top-1.5 h-14 w-14 bg-yellow-300" />

                <div className="relative flex h-14 w-14 items-center justify-center border-2 border-blue-600 bg-white p-2">
                  <img
                    src={logo}
                    alt={`${schoolName} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="max-w-[220px] text-lg font-black leading-tight text-slate-900">
                  {schoolName}
                </h3>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
                  Learn • Grow • Shine
                </p>
              </div>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-slate-500">
              {tagline}
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-500 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FaFacebookF size={17} />
                </a>
              )}

              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-500 transition hover:border-pink-400 hover:bg-pink-500 hover:text-white"
                >
                  <FaInstagram size={18} />
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-500 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  <FaLinkedinIn size={18} />
                </a>
              )}

              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-500 transition hover:border-red-400 hover:bg-red-500 hover:text-white"
                >
                  <FaYoutube size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-blue-600" />

              <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-900">
                Quick Links
              </h4>
            </div>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600"
                  >
                    <span className="h-1.5 w-1.5 bg-blue-400 transition group-hover:bg-yellow-400" />

                    <span className="transition group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-orange-400" />

              <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-900">
                Explore
              </h4>
            </div>

            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600"
                  >
                    <span className="h-1.5 w-1.5 bg-orange-300 transition group-hover:bg-yellow-400" />

                    <span className="transition group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-emerald-500" />

              <h4 className="text-sm font-black uppercase tracking-[0.16em] text-slate-900">
                Get In Touch
              </h4>
            </div>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-blue-50 text-blue-600">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Visit Us
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-orange-50 text-orange-500">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Call Us
                  </p>

                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="mt-1 block text-sm text-slate-600 transition hover:text-blue-600"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-emerald-50 text-emerald-600">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Us
                  </p>

                  <a
                    href={`mailto:${email}`}
                    className="mt-1 block break-all text-sm text-slate-600 transition hover:text-blue-600"
                  >
                    {email}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================
            Subtle Divider
        ========================================== */}
        <div className="flex h-1 w-full">
          <div className="w-1/2 bg-blue-500" />
          <div className="w-1/4 bg-yellow-300" />
          <div className="w-1/4 bg-orange-300" />
        </div>

        {/* =========================================
            Bottom Bar
        ========================================== */}
        <div className="flex flex-col gap-4 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">

          <p className="text-slate-400">
            © {copyrightYear}{" "}
            <span className="font-semibold text-slate-600">
              {schoolName}
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a
              href="#privacy"
              className="transition hover:text-blue-600"
            >
              Privacy
            </a>

            <span className="h-1 w-1 bg-slate-300" />

            <a
              href="#terms"
              className="transition hover:text-blue-600"
            >
              Terms
            </a>

            {showWeboraX && (
              <>
                <span className="h-1 w-1 bg-slate-300" />

                <span className="flex items-center gap-1.5">
                  {footerNote}

                  <Sparkles
                    size={13}
                    className="text-yellow-500"
                  />
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
