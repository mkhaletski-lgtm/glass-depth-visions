import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Send, Mail } from 'lucide-react';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToContacts = () => {
    document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background orbs */}
      <div className="orb orb-primary w-96 h-96 -top-48 -left-48 animate-float" />
      <div className="orb orb-accent w-80 h-80 top-1/4 -right-40 animate-float-delayed" />
      <div className="orb orb-primary w-64 h-64 bottom-20 left-1/4 animate-float-slow" />

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-panel px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">УСПЕЙТЕ СТАТЬ ПЕРВЫМ В СВОЁМ РЕГИОНЕ!</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="block">Бизнес с вендинговыми</span>
            <span className="block">аппаратами по распылению духов</span>
            <span className="chrome-text block mt-2">PARFUMEPOINT</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Оставьте заявку и получите бизнес план для запуска своего бизнеса!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://t.me/ParfumepointBot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Send size={20} />
              Получить бизнес-план в Telegram
            </a>
            <button
              onClick={scrollToContacts}
              className="btn-3d-secondary flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              Получить бизнес-план на e-mail
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground animate-scroll">
            <span className="text-xs tracking-widest">SCROLL</span>
            <ChevronDown size={24} />
          </div>
        </motion.div>
      </motion.div>

      {/* 3D rotating decorative elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute top-1/4 left-10 w-20 h-20 border border-primary/30 rounded-lg animate-rotate-slow hidden lg:block"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute bottom-1/4 right-10 w-16 h-16 border border-accent/30 rounded-full animate-rotate-slow hidden lg:block"
        initial={{ rotate: 45 }}
      />
    </section>
  );
}
