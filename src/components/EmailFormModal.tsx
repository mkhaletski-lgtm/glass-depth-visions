import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Mail, CheckCircle } from 'lucide-react';

interface EmailFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailFormContent({ className = '' }: { className?: string }) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    try {
      await fetch('https://formsubmit.co/ajax/parfumepoint@mail.ru', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: 'Новая заявка с сайта PARFUMEPOINT',
        }),
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
        setAgreed(false);
      }, 3000);
    } catch {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`glass-panel p-8 chrome-border ${className}`}>
      <h3 className="text-xl font-display font-bold mb-6 text-center">
        Получить бизнес-план на e-mail
      </h3>
      <div className="space-y-5">
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
            maxLength={100}
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
            maxLength={255}
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
            maxLength={20}
          />
        </div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agree-modal"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-glass-border bg-secondary/50 text-primary focus:ring-primary/20"
          />
          <label htmlFor="agree-modal" className="text-sm text-muted-foreground">
            Нажимая кнопку «Отправить», я принимаю условия пользовательского соглашения и даю согласие на обработку моих персональных данных.
          </label>
        </div>
        <motion.button
          type="submit"
          disabled={!agreed || isSubmitted}
          whileHover={{ scale: agreed ? 1.02 : 1 }}
          whileTap={{ scale: agreed ? 0.98 : 1 }}
          className={`w-full btn-3d btn-shine flex items-center justify-center gap-2 ${
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
              <Mail size={20} />
              Отправить
            </>
          )}
        </motion.button>
      </div>
    </form>
  );
}

export default function EmailFormModal({ isOpen, onClose }: EmailFormModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:scale-110 transition-transform z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <EmailFormContent />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
