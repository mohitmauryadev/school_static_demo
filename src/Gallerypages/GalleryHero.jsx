import React, { useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Image as ImageIcon,
    Maximize2,
    X,
} from "lucide-react";

const GalleryHero = ({
    eyebrow = "School Gallery",

    title = "Moments that",
    highlight = "tell our story.",

    description =
    "Take a glimpse into everyday school life, memorable celebrations, exciting events and the many moments that make our campus special.",

    categories = [
        "All",
        "Campus",
        "Events",
        "Sports",
        "Activities",
        "Celebrations",
    ],

    images = [
        {
            src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
            title: "Our School Campus",
            category: "Campus",
        },
        {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
            title: "Interactive Classroom",
            category: "Campus",
        },
        {
            src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85",
            title: "Students Together",
            category: "Activities",
        },
        {
            src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
            title: "Sports Day",
            category: "Sports",
        },
        {
            src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=85",
            title: "Basketball Practice",
            category: "Sports",
        },
        {
            src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85",
            title: "Team Activity",
            category: "Activities",
        },
        {
            src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
            title: "Annual Celebration",
            category: "Celebrations",
        },
        {
            src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
            title: "School Event",
            category: "Events",
        },
        {
            src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=85",
            title: "Cultural Programme",
            category: "Celebrations",
        },
        {
            src: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1200&q=85",
            title: "Creative Activities",
            category: "Activities",
        },
        {
            src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85",
            title: "Campus Life",
            category: "Campus",
        },
        {
            src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
            title: "School Function",
            category: "Events",
        },
        {
            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85",
            title: "Group Learning",
            category: "Activities",
        },
        {
            src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85",
            title: "Student Presentation",
            category: "Events",
        },
        {
            src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=85",
            title: "Outdoor Activities",
            category: "Sports",
        },
    ],

    showHeader = true,
}) => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedIndex, setSelectedIndex] = useState(null);

    const filteredImages =
        activeCategory === "All"
            ? images
            : images.filter((image) => image.category === activeCategory);

    const selectedImage =
        selectedIndex !== null ? filteredImages[selectedIndex] : null;

    /* =========================================
        Lightbox Controls
    ========================================== */

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const showPrevious = () => {
        if (!filteredImages.length) return;

        setSelectedIndex((current) =>
            current === 0 ? filteredImages.length - 1 : current - 1
        );
    };

    const showNext = () => {
        if (!filteredImages.length) return;

        setSelectedIndex((current) =>
            current === filteredImages.length - 1 ? 0 : current + 1
        );
    };

    /* =========================================
        Keyboard Controls
    ========================================== */

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (selectedIndex === null) return;

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                showPrevious();
            }

            if (event.key === "ArrowRight") {
                showNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex, filteredImages.length]);

    /* Prevent background scrolling */
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedIndex]);

    return (
        <>
            <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
                {/* =========================================
            Background Decorations
        ========================================== */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-50/70 blur-3xl" />

                    <div className="absolute right-[-140px] top-[45%] h-80 w-80 rounded-full bg-orange-50/50 blur-3xl" />

                    <div className="absolute left-[8%] top-24 h-2.5 w-2.5 rotate-45 bg-yellow-300" />

                    <div className="absolute right-[10%] top-32 h-3 w-3 rounded-full bg-blue-200" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* =========================================
              Header
          ========================================== */}
                    {showHeader && (
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-orange-500">
                                <span className="h-2 w-2 bg-orange-400" />
                                {eyebrow}
                            </div>

                            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                {title}{" "}
                                <span className="relative inline-block text-blue-600">
                                    {highlight}

                                    <span className="absolute -bottom-1 left-0 h-1 w-2/3 bg-yellow-300" />
                                </span>
                            </h2>

                            <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
                                {description}
                            </p>
                        </div>
                    )}

                    {/* =========================================
              Category Filter
          ========================================== */}
                    <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
                        {categories.map((category) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setSelectedIndex(null);
                                    }}
                                    className={`border px-4 py-2.5 text-xs font-black uppercase tracking-wider transition duration-300 sm:px-5 ${isActive
                                        ? "border-blue-600 bg-blue-600 text-white"
                                        : "border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    {/* =========================================
              Gallery
          ========================================== */}
                    <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
                        {filteredImages.map((image, index) => (
                            <button
                                key={`${image.title}-${index}`}
                                type="button"
                                onClick={() => setSelectedIndex(index)}
                                className="group relative mb-5 block w-full overflow-hidden border border-slate-200 bg-slate-100 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Image */}
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    loading="lazy"
                                    className="block h-auto w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/45" />

                                {/* Expand Icon */}
                                <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-white/95 text-slate-800 opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <Maximize2 size={17} />
                                </div>

                                {/* Bottom Info */}
                                <div className="absolute bottom-0 left-0 right-0 translate-y-3 bg-gradient-to-t from-slate-950/80 to-transparent px-5 pb-5 pt-12 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-yellow-300">
                                        {image.category}
                                    </p>

                                    <h3 className="mt-1 text-sm font-black text-white">
                                        {image.title}
                                    </h3>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredImages.length === 0 && (
                        <div className="mt-12 border border-slate-200 bg-slate-50 py-16 text-center">
                            <ImageIcon
                                size={32}
                                className="mx-auto text-slate-300"
                            />

                            <p className="mt-4 text-sm font-semibold text-slate-500">
                                No images available in this category.
                            </p>
                        </div>
                    )}

                    {/* =========================================
              Gallery Footer
          ========================================== */}
                    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-7 sm:flex-row">
                        <p className="text-sm text-slate-400">
                            Showing{" "}
                            <span className="font-black text-slate-700">
                                {filteredImages.length}
                            </span>{" "}
                            {filteredImages.length === 1 ? "moment" : "moments"}
                        </p>

                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                            <ImageIcon size={15} />
                            Click any image to view
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
          LIGHTBOX
      ========================================== */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
                    onClick={closeLightbox}
                >
                    {/* Close */}
                    <button
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close gallery"
                        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-slate-900 sm:right-7 sm:top-7"
                    >
                        <X size={21} />
                    </button>

                    {/* Previous */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-slate-900 shadow-lg transition hover:bg-blue-600 hover:text-white sm:left-7"
                    >
                        <ChevronLeft size={23} />
                    </button>

                    {/* Next */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white text-slate-900 shadow-lg transition hover:bg-blue-600 hover:text-white sm:right-7"
                    >
                        <ChevronRight size={23} />
                    </button>

                    {/* Lightbox Content */}
                    <div
                        className="relative flex max-h-[90vh] max-w-6xl flex-col"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-h-[72vh] w-auto max-w-[90vw] object-contain sm:max-h-[76vh]"
                            />
                        </div>

                        {/* Caption */}
                        <div className="mt-4 flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-300">
                                    {selectedImage.category}
                                </p>

                                <h3 className="mt-1 text-base font-black text-white sm:text-lg">
                                    {selectedImage.title}
                                </h3>
                            </div>

                            <p className="text-xs font-semibold text-slate-400">
                                {selectedIndex + 1} / {filteredImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryHero;