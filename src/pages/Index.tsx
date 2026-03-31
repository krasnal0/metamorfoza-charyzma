import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import TransformationsSection from '@/components/TransformationsSection';
import ServicesSection from '@/components/ServicesSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <TransformationsSection />
    <ServicesSection />
    <BookingSection />
    <Footer />
  </div>
);

export default Index;
