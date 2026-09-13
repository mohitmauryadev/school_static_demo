
import React from "react";
import GalleryHero from "../Gallerypages/GalleryHero";

const Gallery = () => {
    // =========================
    // Gallery Categories
    // =========================
    const galleryCategories = [
        "All",
        "Campus",
        "Events",
        "Sports",
        "Activities",
        "Celebrations",
    ];

    // =========================
    // Gallery Images
    // =========================
    const galleryImages = [
        {
            id: "campus-01",
            src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
            title: "Our School Campus",
            category: "Campus",
            alt: "School campus",
        },
        {
            id: "campus-02",
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
            title: "Interactive Classroom",
            category: "Campus",
            alt: "Students in an interactive classroom",
        },
        {
            id: "activities-01",
            src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85",
            title: "Students Together",
            category: "Activities",
            alt: "Students learning and spending time together",
        },
        {
            id: "sports-01",
            src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
            title: "Sports Day",
            category: "Sports",
            alt: "Students participating in sports activities",
        },
        {
            id: "sports-02",
            src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=85",
            title: "Basketball Practice",
            category: "Sports",
            alt: "Students playing basketball",
        },
        {
            id: "activities-02",
            src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85",
            title: "Team Activity",
            category: "Activities",
            alt: "Students participating in a team activity",
        },
        {
            id: "celebration-01",
            src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
            title: "Annual Celebration",
            category: "Celebrations",
            alt: "Students enjoying an annual celebration",
        },
        {
            id: "events-01",
            src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
            title: "School Event",
            category: "Events",
            alt: "School event gathering",
        },
        {
            id: "celebration-02",
            src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=85",
            title: "Cultural Programme",
            category: "Celebrations",
            alt: "Students participating in a cultural programme",
        },
        {
            id: "activities-03",
            src: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1200&q=85",
            title: "Creative Activities",
            category: "Activities",
            alt: "Students involved in creative activities",
        },
        {
            id: "campus-03",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUYWeqFXUWV1JBF17t-zGx9thMarPBb1vNIGJqvD-_Jdt87tz3RVsecFo&s=10",
            title: "Campus Life",
            category: "Campus",
            alt: "Students enjoying campus life",
        },
        {
            id: "events-02",
            src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
            title: "School Function",
            category: "Events",
            alt: "School function",
        },
        {
            id: "activities-04",
            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85",
            title: "Group Learning",
            category: "Activities",
            alt: "Students engaged in group learning",
        },
        {
            id: "events-03",
            src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85",
            title: "Student Presentation",
            category: "Events",
            alt: "Student giving a presentation",
        },
        {
            id: "sports-03",
            src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=85",
            title: "Outdoor Activities",
            category: "Sports",
            alt: "Students participating in outdoor activities",
        },
    ];

    return (
        <div className="mt-12">
            <GalleryHero
                eyebrow="School Gallery"
                title="Moments that"
                highlight="tell our story."
                description="Take a glimpse into everyday school life, memorable celebrations, exciting events and the many moments that make our campus special."
                categories={galleryCategories}
                images={galleryImages}
            />
        </div>
    );
};

export default Gallery;