import HeroBanner from "@/components/Hero";
import ContactStrip from "@/components/ContactForm";
import AboutMak from "@/components/AboutSection";
import StepsSection from "@/components/StepsSection";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import DirectorMessage from "@/components/DirectorMessage";
import Testimonials from "@/components/Testimonials";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

import SIAApprovalBadge from "@/components/SIAApprovalBadge";
import SIAExplanation from "@/components/SIAExplanation";
import ReviewSection from "@/components/ReviewSection";
import Accreditations from "@/components/Accreditations";
import BlogSection from "@/components/logSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <SIAApprovalBadge />

            <ContactStrip />
            <AboutMak />
            <StepsSection />
            <Benefits />
            <Services />
            <SIAExplanation />
            <BlogSection />

            <DirectorMessage />
            <ReviewSection />
            <FaqSection />
            <Accreditations />
            <Testimonials />
            <SocialMedia />
        </>
    );
}
