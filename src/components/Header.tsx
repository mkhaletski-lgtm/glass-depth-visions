import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-white.png';

const navItems = [
  { label: 'О НАС', href: '#about' },
  { label: 'ПРЕИМУЩЕСТВА', href: '#advantages' },
  { label: 'F.A.Q.', href: '#faq' },
  { label: 'ДОХОДНОСТЬ', href: '#profit' },
  { label: 'КОНТАКТЫ', href: '#contacts' },
];

interface HeaderProps {
  onOpenEmailForm: () => void;
}

export default function Header({ onOpenEmailForm }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-panel py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.a href="#" className="relative z-10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={logo} alt="PARFUMEPOINT" className="h-12 md:h-16 w-auto" />
          </motion.a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-foreground/80 hover:text-foreground font-medium text-sm tracking-wider transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-chrome-start via-chrome-mid to-chrome-end transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            onClick={onOpenEmailForm}
            className="hidden md:block btn-3d btn-shine text-sm px-6 py-3"
          >
            Получить бизнес-план
          </motion.button>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden relative z-10 p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm glass-panel rounded-none"
            >
              <nav className="flex flex-col items-center justify-center h-full gap-8 p-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-xl font-display tracking-wider"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => { setIsMobileMenuOpen(false); onOpenEmailForm(); }}
                  className="btn-3d btn-shine mt-4"
                >
                  Получить бизнес-план
                </motion.button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
