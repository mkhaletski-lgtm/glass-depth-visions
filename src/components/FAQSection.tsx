import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import faqBg from '@/assets/faq-bg.png';

const faqs = [
  {
    question: 'Что такое бизнес с вендинговыми аппаратами по распылению духов PARFUMPOINT?',
    answer: 'PARFUMPOINT - это первая в Республике Беларусь сеть вендинговых аппаратов по распылению духов. Мы не теоретики, а практики. У нас своя работающая сеть парфюматов. Вы можете начать такой же бизнес в своём регионе с нашей поддержкой.',
  },
  {
    question: 'Какие преимущества предоставляет бизнес с вендинговыми аппаратами по распылению духов PARFUMPOINT?',
    answer: 'PARFUMPOINT предоставляет доступ к готовому бизнесу, узнаваемому бренду, оборудованию, обучению и бизнес поддержке. Это снижает риски и увеличивает шансы на ваш успех.',
  },
  {
    question: 'Каков процесс запуска бизнеса?',
    answer: 'Процесс включает в себя контакт с нами, ознакомление с условиями сотрудничества, подписание соглашения, поставка оборудования и запуск торгового объекта.',
  },
  {
    question: 'Могу ли я начать бизнес, если у меня нет опыта в этой сфере?',
    answer: 'Конечно, этот бизнес подходит как для опытных предпринимателей, так и для новичков. Мы предоставим всю необходимую поддержку и обучение.',
  },
  {
    question: 'Как долго обычно занимает открытие торгового объекта?',
    answer: 'Время зависит от множества факторов, включая поставку оборудования и подписание договора аренды с собственником торгового объекта. Обычно от двух до трех месяцев.',
  },
  {
    question: 'Что включено в стартовый пакет?',
    answer: 'Начальный пакет включает в себя доступ к бренду, оборудованию, обучению персонала, бизнес поддержке и помощь в выборе местоположения.',
  },
];

interface FAQSectionProps {
  onOpenEmailForm: () => void;
}

export default function FAQSection({ onOpenEmailForm }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 lg:py-22 relative overflow-hidden">
      <div className="orb orb-accent w-96 h-96 top-0 right-0 opacity-15" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold section-title">F.A.Q.</h2>
          <p className="text-xl text-muted-foreground mt-4">Частые вопросы</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="glass-panel p-4 chrome-border preserve-3d"
            >
              <img src={faqBg} alt="вендинговые аппарат PARFUMEPOINT" className="w-full h-auto rounded-xl" />
            </motion.div>

            <motion.button
              onClick={onOpenEmailForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-3d btn-shine mt-6 w-full flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Получить презентацию
            </motion.button>
          </motion.div>

          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full glass-panel p-5 text-left group"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display font-semibold text-base md:text-lg group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
