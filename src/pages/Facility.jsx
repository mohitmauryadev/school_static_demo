import React from 'react'
import {
    Activity,
    Bus,
    Computer,
    FlaskConical,
    HeartPulse,
    Library,
    LockKeyhole,
    Monitor,
    Target,
    Trophy,
} from "lucide-react";
import FacilityHero from '../Facilitypages/FacilityHero'

const Facility = () => {
    return (
        <div className="mt-12">
            <FacilityHero
                eyebrow="Our Facilities"
                title="A campus designed"
                highlight="for learning, growth & joy."

                description="Our school provides a safe, modern and welcoming environment where children have the facilities they need to learn confidently, explore their interests and grow every day."

                heroImage="https://erocon.in/wp-content/uploads/2025/08/1.png"
                heroImageAlt="Our school campus"
                heroBadge="A Better Learning Environment"

                facilities={[
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
                            "A quiet and welcoming space that encourages reading, discovery and independent learning.",
                        image:
                            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
                        imageAlt: "School library",
                        color: "emerald",
                    },
                    {
                        icon: Trophy,
                        title: "Sports Ground",
                        description:
                            "Open spaces where students stay active, build teamwork and develop discipline.",
                        image:
                            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
                        imageAlt: "Sports ground",
                        color: "orange",
                    },
                    {
                        icon: Bus,
                        title: "Transport Facility",
                        description:
                            "A convenient transport facility designed to support safe and comfortable daily travel.",
                        image:
                            "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=85",
                        imageAlt: "School transport",
                        color: "yellow",
                    },
                    {
                        icon: HeartPulse,
                        title: "First Aid / Medical Care",
                        description:
                            "Basic medical support and first-aid assistance available for students when needed.",
                        image:
                            "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85",
                        imageAlt: "Medical care",
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
                ]}

                ctaTitle="Everything children need to learn and grow."
                ctaText="From classrooms and laboratories to sports and student safety, every part of our campus is designed with children's learning and wellbeing in mind."

                buttonText="Contact Our School"
                buttonHref="/contact"
            />

        </div>
    )
}

export default Facility
