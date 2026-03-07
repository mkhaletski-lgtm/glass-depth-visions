import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Wallet, Home, Shield, MapPin, MessageCircle, Sparkles, Droplets, Zap, PiggyBank } from 'lucide-react';
import advantagesBg from '@/assets/advantages-bg.png';

const businessAdvantages = [
  {
    icon: Clock,
    title: 'Вендинговые аппараты, которые работают 24/7 без вашего участия',
    description: 'Вам не нужно искать и обучать сотрудников для торговых объектов. Всё работает без вас в автоматическом режиме.',
  },
  {
    icon: Wallet,
    title: 'Минимальные временные затраты на обслуживание',
    description: 'Всего один раз в месяц для инкассации выручки.',
  },
  {
    icon: Home,
    title: 'Отсутствие дополнительных затрат',
    description: 'Для ведения бизнеса вам не нужен офис, склад. Можно вести бизнес из дома.',
  },
  {
    icon: Shield,
    title: 'Запатентованное оборудование',
    description: 'Вендинговые аппараты PARFUMEPOINT имеют Евразийский патент № 000983, действующий на территории Азербайджанской Республики, Кыргызской Республики, Республики Армения, Республики Беларусь, Республики Казахстан, Республики Таджикистан, Российской Федерации.',
  },
  {
    icon: MapPin,
    title: '100% свободного рынка',
    description: 'На данный момент в этом сегменте рынок абсолютно свободный. Вы можете выбрать для себя самые лучшие локации для установки аппаратов по распылению духов.',
  },
];

const clientAdvantages = [
  {
    icon: Droplets,
    title: 'Большой объем облака аромата',
    description: 'Диаметр дозаторов составляет 3 мм, благодаря чему облако аромата в 3 раза больше, чем при распылении из обычного флакона.',
  },
  {
    icon: Sparkles,
    title: 'Оригинальные ароматы ведущих брендов',
    description: 'В аппаратах PARFUMEPOINT используются только оригинальные духи известных мировых брендов. Каждый аромат тщательно отобран, чтобы подчеркнуть индивидуальность и красоту наших клиентов.',
  },
  {
    icon: Zap,
    title: 'Мгновенное парфюмирование',
    description: 'Благодаря нашим современным технологиям, мы можем мгновенно окружить клиента облаком любимого аромата. С нашими устройствами клиенты будут ощущать свежесть и изысканность в течение всего дня.',
  },
  {
    icon: PiggyBank,
    title: 'Финансовая выгода',
    description: 'Использование системы распыления аромата оказывается не только удобным, но и экономически выгодным вариантом для клиентов. Вместо покупки целого флакона духов, которым человек может пользоваться редко или который может устареть, разовое распыление позволяет наслаждаться разнообразием ароматов при значительной экономии средств.',
  },
];

interface AdvantagesSectionProps {
  onOpenEmailForm: () => void;
}

export default function AdvantagesSection({ onOpenEmailForm }: AdvantagesSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section id="advantages" ref={ref} className="py-14 lg:py-22 relative overflow-hidden">
      <div className="orb orb-primary w-80 h-80 top-1/4 -left-40 opacity-20" />
      <div className="orb orb-accent w-64 h-64 bottom-1/4 -right-32 opacity-20" />

      <div className="container mx-auto px-4">
        {/* Business advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold section-title leading-tight">
            Почему <span className="chrome-text">PARFUMEPOINT</span> ваш идеальный выбор среди всех вендинговых франшиз
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {businessAdvantages.slice(0, 3).map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
              className="glass-panel p-6 group perspective-1000"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mb-12">
          {businessAdvantages.slice(3).map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.1 }}
              whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
              className="glass-panel p-6 group perspective-1000 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <button onClick={onOpenEmailForm} className="btn-3d btn-shine inline-flex items-center gap-2">
            <MessageCircle size={20} />
            Получить консультацию
          </button>
        </motion.div>

        {/* Client advantages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold section-title">
            Преимущества вендинговых аппаратов <span className="chrome-text">PARFUMEPOINT</span> для клиентов
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {clientAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, rotateY: 5 }}
                className="glass-panel p-5 chrome-border group preserve-3d"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chrome-start/20 via-chrome-mid/20 to-chrome-end/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-display font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image - height matches left container */}
          <motion.div
            style={{ y: imageY, rotate }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="glass-panel p-4 flex items-center justify-center w-1/2 mx-auto">
              <img
                src={advantagesBg}
                alt="вендинговые аппарат PARFUMEPOINT"
                className="w-full object-contain rounded-xl"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -right-8 w-24 h-24 glass-panel rounded-2xl hidden xl:block"
            />
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -left-8 w-20 h-20 glass-panel rounded-full hidden xl:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
