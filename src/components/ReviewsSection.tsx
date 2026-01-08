import { motion } from 'framer-motion';
import reviewsBg from '@/assets/reviews-bg.png';

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="orb orb-primary w-80 h-80 -top-40 right-1/4 opacity-15" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold section-title">
            Отзывы наших клиентов
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-panel p-4 chrome-border"
          >
            <img
              src={reviewsBg}
              alt="Отзывы клиентов PARFUMEPOINT"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
