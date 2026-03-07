import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Eye, FileCheck, Globe } from 'lucide-react';
import aboutImage from '@/assets/about-image.png';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';

const stats = [
  { icon: Eye, value: '2 000 000+', label: 'просмотров видео' },
  { icon: Award, value: '№000983', label: 'Евразийский патент' },
  { icon: FileCheck, value: '2024', label: 'год основания' },
  { icon: Globe, value: '7+', label: 'стран действия патента' },
];

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section id="about" ref={ref} className="py-14 lg:py-22 relative overflow-hidden">
      <div className="orb orb-accent w-96 h-96 -top-48 right-0 opacity-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold section-title">
            О НАС
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              С 2024 года мы строим свою сеть вендинговых аппаратов по распылению духов в Республике Беларусь.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Вендинговые аппараты торговой марки PARFUMPOINT являются высокотехнологичным, простым в использовании и надежным оборудованием.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Видео с нашими торговыми автоматами уже посмотрели более 2 000 000 человек. О нас пишут в СМИ.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наше оборудование получило Евразийский патент №000983, действующий на территории Азербайджанской Республики, Кыргызской Республики, Республики Армения, Республики Беларусь, Республики Казахстан, Республики Таджикистан, Российской Федерации.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              С 2025 года мы открыли возможность начать бизнес с вендинговыми аппаратами по распылению духов для предпринимателей из Росси и стран СНГ.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <span className="chrome-text text-2xl font-display font-bold">
                НАЧНИТЕ БИЗНЕС ВМЕСТЕ С НАМИ!
              </span>
            </motion.div>
          </motion.div>

          <motion.div style={{ rotate }} className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel chrome-border p-8 relative"
            >
              <img src={aboutImage} alt="вендинговые аппарат PARFUMEPOINT" className="w-80 h-auto relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl" />
            </motion.div>

            <motion.div style={{ x: x1 }} className="absolute -top-8 -left-8 w-16 h-16 glass-panel rounded-xl hidden lg:block" />
            <motion.div style={{ x: x2 }} className="absolute -bottom-8 -right-8 w-20 h-20 glass-panel rounded-full hidden lg:block" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-6 text-center group"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-display font-bold chrome-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative">
          <div className="grid grid-cols-5 gap-3">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <div className="glass-panel p-1.5 chrome-border">
                  <img src={img} alt="вендинговые аппарат PARFUMEPOINT" className="w-full aspect-[3/4] object-cover rounded-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
