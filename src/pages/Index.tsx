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
import ScrollToTop from '@/components/ScrollToTop';

const Scene3D = lazy(() => import('@/components/Scene3D'));

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
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
      <ScrollToTop />
    </div>
  );
};

export default Index;
