import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { id: 'o6nYg1a65mM', thumbnail: 'https://i.ytimg.com/vi/o6nYg1a65mM/hq2.jpg' },
  { id: '889Zuo2QwV8', thumbnail: 'https://i.ytimg.com/vi/889Zuo2QwV8/hq2.jpg' },
  { id: 'JI_aqNyQS8Q', thumbnail: 'https://i.ytimg.com/vi/JI_aqNyQS8Q/hq2.jpg' },
  { id: 'aIzctLtoYoQ', thumbnail: 'https://i.ytimg.com/vi/aIzctLtoYoQ/hq2.jpg' },
  { id: 'sj9uwwH9FEM', thumbnail: 'https://i.ytimg.com/vi/sj9uwwH9FEM/hq2.jpg' },
  { id: 'KlbcQgHiZA0', thumbnail: 'https://i.ytimg.com/vi/KlbcQgHiZA0/hq2.jpg' },
  { id: 'GJzEstEMxZk', thumbnail: 'https://i.ytimg.com/vi/GJzEstEMxZk/hq2.jpg' },
];

export default function ReviewsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCount = 3;

  const canScrollLeft = scrollIndex > 0;
  const canScrollRight = scrollIndex < videos.length - visibleCount;

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

        {/* Video Gallery */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation arrows */}
          {canScrollLeft && (
            <button
              onClick={() => setScrollIndex(Math.max(0, scrollIndex - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 glass-panel flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => setScrollIndex(Math.min(videos.length - visibleCount, scrollIndex + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 glass-panel flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${scrollIndex * (100 / visibleCount)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="glass-panel chrome-border overflow-hidden cursor-pointer group relative"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <div className="aspect-[9/16] relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt="Отзыв клиента PARFUMEPOINT"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-background/30 flex items-center justify-center group-hover:bg-background/10 transition-colors">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm"
                        >
                          <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-md aspect-[9/16]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:scale-110 transition-transform z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&controls=1&rel=0`}
              className="w-full h-full rounded-2xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
