import { Suspense, lazy, useState, useCallback } from 'react';
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
import EmailFormModal from '@/components/EmailFormModal';

const Scene3D = lazy(() => import('@/components/Scene3D'));

const Index = () => {
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);
  const openEmailForm = useCallback(() => setIsEmailFormOpen(true), []);
  const closeEmailForm = useCallback(() => setIsEmailFormOpen(false), []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <Header onOpenEmailForm={openEmailForm} />
      <main>
        <HeroSection onOpenEmailForm={openEmailForm} />
        <AboutSection />
        <ReviewsSection />
        <AdvantagesSection onOpenEmailForm={openEmailForm} />
        <FAQSection onOpenEmailForm={openEmailForm} />
        <ProfitSection onOpenEmailForm={openEmailForm} />
        <ContactSection onOpenEmailForm={openEmailForm} />
      </main>
      <Footer />
      <ScrollToTop />
      <EmailFormModal isOpen={isEmailFormOpen} onClose={closeEmailForm} />
    </div>
  );
};

export default Index;
