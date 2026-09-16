import React from 'react'
import {
    Lightbulb,
    HeartHandshake,
    ShieldCheck,
    Trophy,
    Users,
    Star,
    BookOpen,
    Target,
    Heart
} from "lucide-react";
import AboutHero from '../aboutpages/AboutHero'
import AboutUs from '../aboutpages/AboutUs'
import PrincipalAndValues from '../aboutpages/PrincipalAndValues'
import WhyParentsChooseUs from '../aboutpages/WhyParentsChooseUs'

const About = () => {
    return (
        <div className="mt-12">
            <AboutHero
                image="https://erocon.in/wp-content/uploads/2025/08/1.png"

                badgeText="Welcome to Our School"

                eyebrow="About Us"

                title="More than a school."

                highlight="A place to belong."

                description="For generations, we have created a safe, joyful and inspiring environment where children learn with curiosity, grow with confidence and develop the values they need for life."

                primaryButtonText="Our School Story"
                primaryButtonHref="/about/story"

                secondaryButtonText="Meet Our Principal"
                secondaryButtonHref="/principal"

                stats={[
                    {
                        value: "25+",
                        label: "Years of Excellence",
                        color: "blue",
                    },
                    {
                        value: "2,000+",
                        label: "Students",
                        color: "orange",
                    },
                    {
                        value: "50+",
                        label: "Expert Teachers",
                        color: "emerald",
                    },
                ]}

                bottomLabel="Learn • Grow • Lead"

                showScrollButton={false}
            />

            <AboutUs
                image="https://cdn-ilcijcj.nitrocdn.com/yiUxXdcCPLgzigtaVJSaAxOLUTJilqsP/assets/images/optimized/rev-75a8a8f/www.morphogenesis.org/wp-content/uploads/2026/02/tile-3.webp"

                foundedYear="2008"
                foundedLabel="Established"

                title="More than a school,"
                highlight="a community that cares."

                description="We create a safe, joyful and inspiring environment where every child can learn, grow and discover their potential."

                secondaryDescription="Our school brings together strong academics, experienced teachers, meaningful activities and a caring environment to help children develop into confident and responsible individuals."

                missionTitle="Our Mission"
                missionText="To provide every child with meaningful learning opportunities while nurturing curiosity, confidence, character and compassion."

                visionTitle="Our Vision"
                visionText="To empower young learners with the knowledge, skills and values they need to create a positive future."

                buttonText="Explore Our Journey"
                buttonHref="/about/journey"
            />

            <PrincipalAndValues
                principalEyebrow="Principal's Message"
                principalTitle="A message from our"
                principalHighlight="school leadership."

                principalDescription="At our school, education is not only about academic achievement. It is about helping every child discover their strengths, build confidence and develop the values that will guide them throughout life."

                principalMessage="Our responsibility is to create a joyful and purposeful environment where every child feels seen, supported and encouraged to become the very best version of themselves. Together with our teachers and parents, we strive to make every day a meaningful step in each child's journey."

                principalName="Dr. Ananya Sharma"
                principalDesignation="Principal"

                principalImage="https://t3.ftcdn.net/jpg/08/34/74/68/360_F_834746847_SsnjLKFJhWxwjzt4kYbc2oBKsVZaur3Q.jpg"

                principalBadge="School Leadership"
                principalBadgeText="Leading • Inspiring • Guiding"

                promiseLabel="Our Promise"
                promiseTitle="Every Child Matters"
                promiseText="Every learner deserves care, encouragement and the opportunity to shine."

                valuesEyebrow="Our Values"
                valuesTitle="The values that"
                valuesHighlight="shape our children."

                valuesDescription="The principles we practice every day help our students grow not only as successful learners, but also as kind, confident and responsible individuals."

                values={[
                    {
                        title: "Curiosity",
                        description:
                            "We encourage children to ask questions, explore ideas and discover the joy of learning.",
                        icon: Lightbulb,
                        color: "yellow",
                    },
                    {
                        title: "Kindness",
                        description:
                            "We nurture empathy, respect and compassion so children learn to care for others.",
                        icon: HeartHandshake,
                        color: "pink",
                    },
                    {
                        title: "Integrity",
                        description:
                            "We help students understand the importance of honesty, responsibility and doing what is right.",
                        icon: ShieldCheck,
                        color: "blue",
                    },
                    {
                        title: "Excellence",
                        description:
                            "We inspire every learner to give their best and take pride in their growth and achievements.",
                        icon: Trophy,
                        color: "orange",
                    },
                    {
                        title: "Confidence",
                        description:
                            "We create opportunities for children to express themselves, take initiative and believe in themselves.",
                        icon: Star,
                        color: "emerald",
                    },
                    {
                        title: "Togetherness",
                        description:
                            "We build a welcoming school community where students, teachers and families grow together.",
                        icon: Users,
                        color: "violet",
                    },
                ]}

                buttonText="Read More About Our School"
                buttonHref="/about"
                showButton={true}
            />

            <WhyParentsChooseUs
                eyebrow="Why Parents Choose Us"
                title="A school parents can"
                highlight="trust with confidence."

                description="Choosing a school is one of the most important decisions a parent makes. We focus on creating a safe, caring and inspiring environment where every child can learn, grow and thrive."

                image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
                imageAlt="Students learning together"

                imageBadge="Trusted by Families"
                imageBadgeText="Care • Trust • Growth"

                trustNumber="25+"
                trustTitle="Years of Building Trust"
                trustText="Parents choose us for our caring environment, experienced teachers, strong academics and commitment to the complete development of every child."

                reasons={[
                    {
                        title: "Safe & Caring Environment",
                        description:
                            "Children learn best when they feel safe, respected and genuinely cared for every day.",
                        icon: ShieldCheck,
                        color: "blue",
                    },
                    {
                        title: "Experienced Teachers",
                        description:
                            "Our teachers combine knowledge, patience and personal attention to support every learner.",
                        icon: Users,
                        color: "orange",
                    },
                    {
                        title: "Strong Academic Foundation",
                        description:
                            "We focus on meaningful learning that builds understanding, curiosity and confidence.",
                        icon: BookOpen,
                        color: "emerald",
                    },
                    {
                        title: "Holistic Development",
                        description:
                            "Academics, sports, creativity and life skills come together to help children grow fully.",
                        icon: Trophy,
                        color: "violet",
                    },
                    {
                        title: "Individual Attention",
                        description:
                            "We recognise that every child is different and provide encouragement according to their needs.",
                        icon: HeartHandshake,
                        color: "pink",
                    },
                    {
                        title: "Values for Life",
                        description:
                            "Respect, responsibility, kindness and integrity are woven into everyday school life.",
                        icon: Target,
                        color: "yellow",
                    },
                ]}

                promiseEyebrow="Our Commitment"
                promiseTitle="More than education."
                promiseHighlight="A partnership with parents."

                promiseText="We believe children thrive when schools and families work together. That's why we keep communication open and put the child's growth at the centre of everything we do."

                promisePoints={[
                    "Open communication with parents",
                    "Focus on every child's progress",
                    "Supportive and inclusive environment",
                    "Balanced academic and personal growth",
                ]}

                buttonText="Discover Our School"
                buttonHref="/about"
                showButton={true}
            />

        </div>
    )
}

export default About
