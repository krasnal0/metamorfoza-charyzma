import Navbar from '@/components/Navbar';
import PromoBanner from '@/components/PromoBanner';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProblemSection from '@/components/ProblemSection';
import TransformationsSection from '@/components/TransformationsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ServicesSection from '@/components/ServicesSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen bg-background">
    <PromoBanner />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProblemSection />
    <TransformationsSection />
    <CertificatesSection />
    <ServicesSection />
    <BookingSection />
    <Footer />
  </div>
);

export default Index;
