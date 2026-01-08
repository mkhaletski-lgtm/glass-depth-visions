import { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import FAQSection from '@/components/FAQSection';
import ProfitSection from '@/components/ProfitSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Lazy load 3D scene for performance
const Scene3D = lazy(() => import('@/components/Scene3D'));

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Main content */}
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ReviewsSection />
        <AdvantagesSection />
        <FAQSection />
        <ProfitSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
