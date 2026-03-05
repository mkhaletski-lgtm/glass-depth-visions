import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, MapPin, Phone, Mail as MailIcon, Building } from 'lucide-react';
import questionsBg from '@/assets/questions-bg.png';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
      setAgreed(false);
    }, 3000);
  };

  return (
    <section id="contacts" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="orb orb-primary w-80 h-80 top-0 left-0 opacity-15" />
      <div className="orb orb-accent w-96 h-96 bottom-0 right-0 opacity-20" />

      <div className="container mx-auto px-4">
        {/* Questions banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel chrome-border p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Остались вопросы?
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Свяжитесь с нами
              </p>
              <motion.a
                href="https://t.me/ParfumepointBot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-3d btn-shine inline-flex items-center gap-2"
              >
                <Send size={20} />
                Связаться
              </motion.a>
            </div>
            <div className="relative hidden lg:block">
              <motion.img
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                src={questionsBg}
                alt="PARFUMEPOINT"
                className="w-full max-w-md ml-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Main contact section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold section-title">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground mt-4">
            Закажите бесплатную консультацию!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 chrome-border">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Имя <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    E-mail <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-glass-border bg-secondary/50 text-primary focus:ring-primary/20"
                  />
                  <label htmlFor="agree" className="text-sm text-muted-foreground">
                    Нажимая кнопку «Отправить», я принимаю условия пользовательского соглашения и даю согласие на обработку моих персональных данных на условиях и для целей, определенных в Согласии на обработку персональных данных.
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={!agreed || isSubmitted}
                  whileHover={{ scale: agreed ? 1.02 : 1 }}
                  whileTap={{ scale: agreed ? 0.98 : 1 }}
                  className={`w-full btn-3d flex items-center justify-center gap-2 ${
                    !agreed ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Отправлено!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Отправить
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="glass-panel p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">Компания</h3>
                <p className="text-muted-foreground">ООО «ПАРФЮМПОИНТ»</p>
                <p className="text-muted-foreground text-sm">УНП: 193793000</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="glass-panel p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">Адрес</h3>
                <p className="text-muted-foreground">
                  220062, г. Минск, пр-т Победителей, 135, пом. 732.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="glass-panel p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">Телефон (Telegram)</h3>
                <a
                  href="tel:+375445020201"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +375 (44) 502-02-01
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="glass-panel p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <MailIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">E-mail</h3>
                <a
                  href="mailto:parfumepoint@mail.ru"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  parfumepoint@mail.ru
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
