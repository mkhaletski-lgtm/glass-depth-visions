import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail } from 'lucide-react';
import iconMarket from '@/assets/icon-market.png';
import iconEntry from '@/assets/icon-entry.png';
import iconProfit from '@/assets/icon-profit.png';
import iconIncome from '@/assets/icon-income.png';

const profitCards = [
  {
    icon: iconMarket,
    title: 'Рынок СНГ свободен',
  },
  {
    icon: iconEntry,
    title: 'Низкий порог входа в бизнес',
  },
  {
    icon: iconProfit,
    title: 'Прибыль в месяц в сети 10 аппаратов',
  },
  {
    icon: iconIncome,
    title: 'Годовая доходность бизнеса',
  },
];

export default function ProfitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section id="profit" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="orb orb-primary w-96 h-96 -bottom-48 left-1/4 opacity-20" />
      <div className="orb orb-accent w-80 h-80 top-20 -right-40 opacity-15" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold section-title">
            Что мы предлагаем вам
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Начните бизнес с нашей поддержкой, с минимальными инвестициями и высокой доходностью!
          </p>
        </motion.div>

        {/* Profit cards */}
        <motion.div
          style={{ scale, opacity }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {profitCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 30px 60px hsl(var(--primary) / 0.2)',
              }}
              className="glass-panel chrome-border p-6 text-center group perspective-1000 preserve-3d"
            >
              <motion.div
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 mx-auto mb-4"
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <h3 className="font-display font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://t.me/ParfumepointBot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-3d btn-shine flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Send size={20} />
            Получить бизнес-план в Telegram
          </motion.a>
          <motion.a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-3d-secondary flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Mail size={20} />
            Получить бизнес-план на e-mail
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
