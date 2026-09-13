import React from 'react'
import {
    BookOpen,
    Brain,
    Lightbulb,
    Users,
    Baby,
    GraduationCap,
    Sparkles,
    Activity,
    Dumbbell,
    Laptop,
    Music,
    Palette,
    Target,
} from 'lucide-react'
import AcademicPhilosophy from '../academicepages/AcademicPhilosophy'
import ClassesOffered from '../academicepages/ClassesOffered'
import TeachingMethodologyAndActivities from '../academicepages/TeachingMethodologyAndActivities'

const Academics = () => {
    return (
        <div className="mt-12">
            <AcademicPhilosophy
                eyebrow="Our Academic Approach"
                title="Learning that goes"
                highlight="beyond the classroom."
                description="We believe education should inspire curiosity, strengthen character and help every child discover the confidence to succeed."

                image="https://www.dsbschool.net/uploads/images/slides/img_42796_slider-assambly.jpg"
                imageAlt="Students learning together"
                imageBadge="Learning with Purpose"

                philosophyTitle="Building confident learners for a changing world."
                philosophyText="Our approach combines strong academic foundations with curiosity, creativity, collaboration and real-world learning."

                learningPoints={[
                    "Concept-based and practical learning",
                    "Individual attention and student support",
                    "Encouragement of questions and independent thinking",
                    "Balanced focus on academics and life skills",
                ]}

                principles={[
                    {
                        icon: BookOpen,
                        title: "Strong Foundations",
                        description: "Clear concepts and strong academic fundamentals.",
                        color: "blue",
                    },
                    {
                        icon: Brain,
                        title: "Curious Minds",
                        description: "Encouraging students to question, explore and think.",
                        color: "orange",
                    },
                    {
                        icon: Lightbulb,
                        title: "Creative Learning",
                        description: "Making learning meaningful through creativity and activities.",
                        color: "yellow",
                    },
                    {
                        icon: Users,
                        title: "Learning Together",
                        description: "Building collaboration, communication and empathy.",
                        color: "emerald",
                    },
                ]}

                buttonText="Explore Our Academics"
                buttonHref="/academics"
            />

            <ClassesOffered
                eyebrow="Classes Offered"
                title="A strong beginning."
                highlight="A bright future."

                description="Our classes are designed around the changing needs of children at every stage of their academic journey."

                classes={[
                    {
                        icon: Baby,
                        level: "Early Years",
                        title: "Pre-Primary",
                        classes: "Playgroup • Nursery • LKG • UKG",
                        description:
                            "A joyful beginning focused on curiosity, creativity and early learning.",
                        age: "Ages 2.5 – 5 Years",
                        color: "orange",
                    },
                    {
                        icon: Sparkles,
                        level: "Primary School",
                        title: "Primary Classes",
                        classes: "Class I – V",
                        description:
                            "Strong foundations in academics, communication and essential life skills.",
                        age: "Ages 5 – 10 Years",
                        color: "blue",
                    },
                    {
                        icon: BookOpen,
                        level: "Middle School",
                        title: "Middle Classes",
                        classes: "Class VI – VIII",
                        description:
                            "Developing deeper understanding, independent thinking and problem-solving.",
                        age: "Ages 10 – 13 Years",
                        color: "emerald",
                    },
                    {
                        icon: GraduationCap,
                        level: "Senior School",
                        title: "Senior Classes",
                        classes: "Class IX – XII",
                        description:
                            "Focused learning and guidance to prepare students for higher education.",
                        age: "Ages 13 – 18 Years",
                        color: "blue",
                    },
                ]}

                buttonText="Explore Our Academics"
                buttonHref="/academics"
            />

            <TeachingMethodologyAndActivities
                methodologyEyebrow="Teaching Methodology"
                methodologyTitle="Learning designed"
                methodologyHighlight="around every child."
                methodologyDescription="We combine engaging teaching methods with practical experiences and individual support to make learning meaningful for every student."

                methodologies={[
                    {
                        icon: Activity,
                        title: "Activity Based Learning",
                        description:
                            "Children learn through activities, projects and experiences that make concepts easier to understand.",
                        color: "blue",
                    },
                    {
                        icon: Laptop,
                        title: "Digital Learning",
                        description:
                            "Technology is thoughtfully integrated into classrooms to make learning interactive and engaging.",
                        color: "orange",
                    },
                    {
                        icon: Lightbulb,
                        title: "Practical Education",
                        description:
                            "Students connect classroom concepts with real-world situations through experiments and projects.",
                        color: "emerald",
                    },
                    {
                        icon: Users,
                        title: "Individual Attention",
                        description:
                            "Every child learns differently, so we provide the guidance and support they need to progress.",
                        color: "blue",
                    },
                ]}

                activitiesEyebrow="Co-Curricular Activities"
                activitiesTitle="Discover interests."
                activitiesHighlight="Build confidence."
                activitiesDescription="Beyond academics, students get opportunities to explore their talents, express themselves and develop teamwork and confidence."

                activities={[
                    {
                        icon: Palette,
                        title: "Art & Craft",
                        description:
                            "Encouraging creativity and self-expression through colours and hands-on activities.",
                        color: "orange",
                    },
                    {
                        icon: Music,
                        title: "Music",
                        description:
                            "Developing rhythm, listening skills and confidence through musical activities.",
                        color: "blue",
                    },
                    {
                        icon: Activity,
                        title: "Dance",
                        description:
                            "A joyful way to express themselves while developing coordination and confidence.",
                        color: "orange",
                    },
                    {
                        icon: Dumbbell,
                        title: "Sports",
                        description:
                            "Building fitness, teamwork, discipline and a healthy competitive spirit.",
                        color: "emerald",
                    },
                    {
                        icon: Brain,
                        title: "Debate",
                        description:
                            "Developing communication skills, confidence and the ability to express ideas.",
                        color: "blue",
                    },
                    {
                        icon: Target,
                        title: "Quiz",
                        description:
                            "Making learning exciting while encouraging curiosity, knowledge and quick thinking.",
                        color: "yellow",
                    },
                ]}

                buttonText="Explore Our Academics"
                buttonHref="/academics"
            />

        </div>
    )
}

export default Academics
