import React from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock3,
    MessageCircle,
    ExternalLink,
    Navigation,
} from "lucide-react";

const ContactInformation = ({
    // =========================
    // Contact Information
    // =========================
    address = "School Road, Near Main Market, Your City, Uttar Pradesh",
    phone = "+91 98765 43210",
    email = "info@yourschool.com",

    // =========================
    // Office Hours
    // =========================
    officeHours = [
        {
            day: "Monday - Friday",
            time: "08:00 AM - 04:00 PM",
        },
        {
            day: "Saturday",
            time: "08:00 AM - 01:00 PM",
        },
        {
            day: "Sunday",
            time: "Closed",
        },
    ],

    // =========================
    // WhatsApp
    // =========================
    whatsappNumber = "919876543210",
    whatsappMessage = "Hello, I would like to know more about the school.",

    // =========================
    // Section Content
    // =========================
    eyebrow = "Get In Touch",
    title = "We're here to",
    highlight = "help you.",
    description = "Have a question about admissions, academics or school facilities? Get in touch with our team and we will be happy to assist you.",
}) => {
    // ==========================================
    // Automatically create Google Maps URLs
    // from the simple address
    // ==========================================
    const encodedAddress = encodeURIComponent(address);

    const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    // ==========================================
    // WhatsApp
    // ==========================================
    const handleWhatsApp = () => {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section
            id="admission"
            className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 scroll-mt-24"
        >
            {/* =========================
          Decorative Elements
      ========================= */}
            <div className="pointer-events-none absolute left-0 top-24 h-40 w-40 bg-blue-50" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 bg-yellow-50" />

            <div className="pointer-events-none absolute right-[18%] top-16 h-3 w-3 bg-orange-400" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* =========================
            Header
        ========================= */}
                <div className="mx-auto mb-12 max-w-3xl text-center">

                    <div className="mb-5 inline-flex items-center gap-2 border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                        <MessageCircle className="h-4 w-4" />
                        {eyebrow}
                    </div>

                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        {title}{" "}
                        <span className="relative inline-block text-blue-600">
                            {highlight}

                            <span className="absolute -bottom-1 left-0 h-1 w-full bg-yellow-400" />
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        {description}
                    </p>
                </div>

                {/* =========================
            Contact Information
        ========================= */}
                <div className="grid gap-5 md:grid-cols-3">

                    {/* Address */}
                    <div className="border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

                        <div className="mb-5 flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-600">
                            <MapPin className="h-6 w-6" />
                        </div>

                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                            Address
                        </p>

                        <h3 className="mb-3 text-xl font-black text-slate-900">
                            Visit Our School
                        </h3>

                        <p className="text-sm leading-6 text-slate-600">
                            {address}
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">

                        <div className="mb-5 flex h-12 w-12 items-center justify-center bg-orange-50 text-orange-500">
                            <Phone className="h-6 w-6" />
                        </div>

                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                            Phone
                        </p>

                        <h3 className="mb-3 text-xl font-black text-slate-900">
                            Talk To Us
                        </h3>

                        <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
                        >
                            {phone}
                        </a>
                    </div>

                    {/* Email */}
                    <div className="border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">

                        <div className="mb-5 flex h-12 w-12 items-center justify-center bg-emerald-50 text-emerald-600">
                            <Mail className="h-6 w-6" />
                        </div>

                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                            Email
                        </p>

                        <h3 className="mb-3 text-xl font-black text-slate-900">
                            Write To Us
                        </h3>

                        <a
                            href={`mailto:${email}`}
                            className="break-all text-sm font-semibold text-slate-600 transition hover:text-blue-600"
                        >
                            {email}
                        </a>
                    </div>

                </div>

                {/* =========================
            Google Map + Office Hours
        ========================= */}
                <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">

                    {/* =========================
              Google Map
          ========================= */}
                    <div className="border border-slate-200 bg-white">

                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">
                                    <Navigation className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                                        Location
                                    </p>

                                    <h3 className="text-lg font-black text-slate-900">
                                        Find Our School
                                    </h3>
                                </div>

                            </div>

                            <a
                                href={mapLink}
                                target="_blank"
                                rel="noreferrer"
                                className="hidden items-center gap-2 border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-blue-200 hover:text-blue-600 sm:flex"
                            >
                                Open Map
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>

                        </div>

                        {/* Map */}
                        <div className="h-[320px] bg-slate-100 sm:h-[380px]">

                            <iframe
                                src={mapEmbedUrl}
                                title="School Location"
                                className="h-full w-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />

                        </div>

                    </div>

                    {/* =========================
              Office Hours
          ========================= */}
                    <div className="border border-slate-200 bg-white">

                        <div className="border-b border-slate-100 px-6 py-5">

                            <div className="mb-4 flex h-11 w-11 items-center justify-center bg-yellow-50 text-yellow-600">
                                <Clock3 className="h-5 w-5" />
                            </div>

                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-600">
                                Office Hours
                            </p>

                            <h3 className="mt-1 text-2xl font-black text-slate-900">
                                When We're Open
                            </h3>

                        </div>

                        <div className="divide-y divide-slate-100">

                            {officeHours.map((item, index) => (
                                <div
                                    key={`${item.day}-${index}`}
                                    className="flex items-start justify-between gap-4 px-6 py-5"
                                >
                                    <span className="text-sm font-semibold text-slate-700">
                                        {item.day}
                                    </span>

                                    <span
                                        className={`text-right text-sm font-bold ${item.time.toLowerCase().includes("closed")
                                            ? "text-slate-400"
                                            : "text-blue-600"
                                            }`}
                                    >
                                        {item.time}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <div className="border-t border-slate-100 bg-slate-50 px-6 py-5">
                            <p className="text-xs leading-5 text-slate-500">
                                For admission-related queries, you can also reach us directly
                                on WhatsApp.
                            </p>
                        </div>

                    </div>

                </div>

                {/* =========================
            WhatsApp CTA
        ========================= */}
                <div className="relative mt-8 overflow-hidden bg-blue-600">

                    <div className="absolute right-0 top-0 h-full w-2 bg-yellow-400" />

                    <div className="relative flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-9">

                        <div className="flex items-start gap-4">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white/10 text-white">
                                <MessageCircle className="h-6 w-6" />
                            </div>

                            <div>

                                <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
                                    WhatsApp
                                </p>

                                <h3 className="text-2xl font-black text-white sm:text-3xl">
                                    Have a question?
                                </h3>

                                <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
                                    Chat with our school team directly on WhatsApp for quick
                                    assistance regarding admissions and other queries.
                                </p>

                            </div>

                        </div>

                        <button
                            type="button"
                            onClick={handleWhatsApp}
                            className="group inline-flex shrink-0 items-center justify-center gap-3 bg-white px-6 py-3.5 text-sm font-black text-blue-600 transition hover:bg-yellow-400 hover:text-slate-900"
                        >
                            <MessageCircle className="h-5 w-5" />

                            Chat On WhatsApp

                            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactInformation;