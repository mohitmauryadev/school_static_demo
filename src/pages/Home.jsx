import React from 'react'
import {
    Users,
    GraduationCap,
    Trophy,
    BookOpen,
    ShieldCheck,
    HeartHandshake,
    Palette,
    MonitorPlay,
    FlaskConical,
    Library,
    Dumbbell,
    Music2,
    Trees,
    Star,

} from "lucide-react";
import HomeHero from '../homepages/HomeHero'
import QuickStats from '../homepages/QuickStats'
import AboutPreview from '../homepages/AboutPreview'
import WhyChooseUs from '../homepages/WhyChooseUs'
import FacilitiesPreview from '../homepages/FacilitiesPreview'
import PrincipalMessagePreview from '../homepages/PrincipalMessagePreview'

const Home = () => {
    return (
        <div>

            <HomeHero
                eyebrow="CBSE Affiliated • Since 2001"
                badgeText="Admissions Open 2026–27"

                title="Inspiring Minds."
                highlight="Shaping Futures."

                description="A progressive learning environment where academic excellence, strong values and holistic development come together to prepare every child for a confident future."

                heroImage="https://umeed.org.in/wp-content/uploads/2025/05/School-building.jpg"

                imageLabel="Where Every Child Matters"
                imageSubLabel="LEARN • GROW • LEAD"

                stats={[
                    { value: "25+", label: "Years of Excellence" },
                    { value: "2,500+", label: "Students" },
                    { value: "80+", label: "Faculty Members" },
                ]}

                trustPoints={[
                    "Experienced Faculty",
                    "Smart Classrooms",
                    "Safe Campus",
                ]}
            />

            <QuickStats
                stats={[
                    {
                        value: "1,800+",
                        label: "Happy Students",
                        description: "A growing learning community",
                        icon: Users,
                        theme: "blue",
                    },
                    {
                        value: "65+",
                        label: "Dedicated Teachers",
                        description: "Experienced & caring faculty",
                        icon: GraduationCap,
                        theme: "orange",
                    },
                    {
                        value: "20+",
                        label: "Years of Excellence",
                        description: "A trusted educational journey",
                        icon: Trophy,
                        theme: "green",
                    },
                    {
                        value: "30+",
                        label: "Activities & Programs",
                        description: "Learning beyond classrooms",
                        icon: BookOpen,
                        theme: "purple",
                    },
                ]}
            />

            <AboutPreview
                eyebrow="About St. Mary's Academy"

                title="Where learning becomes"
                highlight="a journey of discovery."

                description="St. Mary's Academy is committed to providing a stimulating and caring environment where students develop strong academic foundations while discovering their talents and interests."

                secondaryDescription="Our approach combines academic excellence with sports, creativity, leadership and strong moral values."

                image="https://cdn.pixabay.com/photo/2024/08/23/11/55/building-8991569_1280.jpg"
                imageAlt="Students participating in school activities"

                imageBadge="Learning • Growing"
                imageBadgeText="Building Confident Futures"

                highlights={[
                    "Experienced and caring faculty",
                    "Modern learning environment",
                    "Strong focus on character building",
                    "Sports, arts & co-curricular activities",
                ]}

                cardNumber="01"
                cardTitle="Every Child Matters"
                cardDescription="We create opportunities for every student to discover their unique strengths."

                messageLabel="Our Belief"
                message="Every child is capable of achieving more when given the right environment, encouragement and opportunity."

                buttonText="Know More About Us"
                buttonHref="#about"
            />

            <WhyChooseUs
                eyebrow="Why Parents Choose Us"
                title="A school where every child"
                highlight="has room to shine."

                description="We combine strong academics with creativity, sports, values and individual attention to create an environment where children enjoy learning and grow with confidence."

                image="https://st.depositphotos.com/1594308/2420/i/450/depositphotos_24205837-stock-photo-diligent-beginner.jpg"
                imageAlt="Students enjoying school activities"

                features={[
                    {
                        title: "Safe & Caring Campus",
                        description:
                            "A secure environment where every child feels comfortable, respected and supported.",
                        icon: ShieldCheck,
                        color: "blue",
                    },
                    {
                        title: "Smart Learning",
                        description:
                            "Interactive classrooms and engaging teaching methods that make learning meaningful.",
                        icon: BookOpen,
                        color: "orange",
                    },
                    {
                        title: "Holistic Development",
                        description:
                            "Academics, sports, arts and life skills work together for complete development.",
                        icon: HeartHandshake,
                        color: "green",
                    },
                    {
                        title: "Sports & Activities",
                        description:
                            "Regular opportunities to build teamwork, discipline and confidence through activities.",
                        icon: Trophy,
                        color: "yellow",
                    },
                    {
                        title: "Creative Learning",
                        description:
                            "Encouraging children to imagine, create and express themselves with confidence.",
                        icon: Palette,
                        color: "purple",
                    },
                    {
                        title: "Personal Attention",
                        description:
                            "Teachers understand individual learning needs and help every child progress.",
                        icon: Users,
                        color: "pink",
                    },
                ]}

                floatingNumber="360°"
                floatingTitle="Holistic Growth"
                floatingText="Academics, sports, creativity & character."

                buttonText="Explore Academics"
                buttonHref="#academics"
            />

            <FacilitiesPreview
                eyebrow="Life Beyond the Classroom"
                title="Spaces made for"
                highlight="curiosity & creativity."

                description="Our thoughtfully designed campus gives students the freedom to learn, play, experiment and express themselves in a safe and inspiring environment."

                featuredFacility={{
                    title: "Smart Learning Classrooms",
                    description:
                        "Technology-enabled classrooms that turn everyday lessons into engaging learning experiences.",
                    image: "https://static.toiimg.com/thumb/msid-122328501,imgsize-166455,width-400,resizemode-4/122328501.jpg",
                    imageAlt: "Students in a smart classroom",
                    icon: MonitorPlay,
                    badge: "Modern Learning",
                }}

                campusImage="https://okplay.in/cdn/shop/articles/why_outdoor_play_is_important_for_student_in_schools_aac52659-9f92-4c95-b5a4-cb6cdd7bece1.jpg?v=1768300759"
                campusImageAlt="Beautiful school campus"
                campusBadge="Our Campus"
                campusTitle="A place to learn, play & belong."

                facilities={[
                    {
                        title: "Science Laboratory",
                        description:
                            "Experiment, discover and understand through practical learning.",
                        icon: FlaskConical,
                        color: "blue",
                    },
                    {
                        title: "Digital Library",
                        description:
                            "A vibrant reading space that encourages curiosity and imagination.",
                        icon: Library,
                        color: "orange",
                    },
                    {
                        title: "Sports & Games",
                        description:
                            "Develop fitness, teamwork and confidence through sports.",
                        icon: Dumbbell,
                        color: "green",
                    },
                    {
                        title: "Music & Arts",
                        description:
                            "Discover creativity through music, art and cultural activities.",
                        icon: Music2,
                        color: "purple",
                    },
                    {
                        title: "Safe Campus",
                        description:
                            "A secure and supportive environment for every student.",
                        icon: ShieldCheck,
                        color: "pink",
                    },
                    {
                        title: "Green Spaces",
                        description:
                            "Fresh, open spaces where students can relax and connect with nature.",
                        icon: Trees,
                        color: "yellow",
                    },
                ]}

                buttonText="View All Facilities"
                buttonHref="#facilities"
            />

            <PrincipalMessagePreview
                principalName="Mrs. Priya Singh"
                principalDesignation="Principal, Bright Future Academy"
                principalImage="https://t3.ftcdn.net/jpg/08/34/74/68/360_F_834746847_SsnjLKFJhWxwjzt4kYbc2oBKsVZaur3Q.jpg"
                imageBadge="Our Principal"
                imageSubLabel="Leading • Inspiring • Guiding"

                title="A message from our"
                highlight="school leadership."

                description="Our school is committed to nurturing confident, curious and compassionate learners."

                principalMessage={`Education is the foundation upon which children build their future. At Bright Future Academy, we believe every child deserves a safe, joyful and inspiring environment to discover their potential.

Our dedicated teachers work closely with students and parents to make learning meaningful, engaging and purposeful.

We invite every family to become a part of our journey as we help children learn with curiosity, grow with confidence and lead with values.`}

                promiseTitle="Our Promise"
                promiseText="Every child matters. Every dream deserves an opportunity."

                values={[
                    {
                        title: "Learn",
                        description: "Encouraging curiosity, creativity and a love for learning.",
                        icon: GraduationCap,
                        color: "blue",
                    },
                    {
                        title: "Grow",
                        description: "Building confidence, character and essential life skills.",
                        icon: HeartHandshake,
                        color: "green",
                    },
                    {
                        title: "Shine",
                        description: "Helping every child discover their strengths and talents.",
                        icon: Star,
                        color: "orange",
                    },
                ]}

                buttonText="Read Full Message"
                buttonHref="#principal-message"
            />


        </div>
    )
}

export default Home
