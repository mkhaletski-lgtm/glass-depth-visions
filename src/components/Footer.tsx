import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden border-t border-glass-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={logo}
            alt="PARFUMEPOINT"
            className="h-12 w-auto"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm text-center"
          >
            © {new Date().getFullYear()} ООО «ПАРФЮМПОИНТ». Все права защищены.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://t.me/ParfumepointBot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Telegram
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href="mailto:parfumepoint@mail.ru"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
