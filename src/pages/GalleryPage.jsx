import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@components/seo/SEO';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';
import Modal from '@components/ui/Modal';
import { galleryImages } from '@data/galleryImages';
import { fadeUp, staggerContainer, viewportConfig } from '@lib/animations';
import { Expand, ChevronLeft, ChevronRight } from 'lucide-react';

function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  const filtered = filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter);

  const goNext = () => setSelectedIndex(prev => (prev + 1) % filtered.length);
  const goPrev = () => setSelectedIndex(prev => (prev - 1 + filtered.length) % filtered.length);

  return (
    <>
      <SEO
        title="Campus Gallery - Photos of SVS Computers Chhindwara"
        description="View photos of SVS Computers campus in Chhindwara. Modern computer labs, classrooms, student activities, and campus facilities. See our infrastructure."
        path="/gallery"
      />
      <PageBanner
        title="Campus Gallery"
        subtitle="A glimpse into our facilities, events, and campus life."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setSelectedIndex(null); }}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  filter === cat ? 'bg-primary-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  variants={fadeUp}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
                  onClick={() => setSelectedIndex(i)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300 flex items-center justify-center">
                    <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <Modal isOpen={selectedIndex !== null} onClose={() => setSelectedIndex(null)} size="full">
        {selectedIndex !== null && filtered[selectedIndex] && (
          <div className="relative flex items-center justify-center">
            <button onClick={goPrev} className="absolute left-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img src={filtered[selectedIndex].src} alt={filtered[selectedIndex].alt} className="max-w-full max-h-[85vh] rounded-lg shadow-2xl" />
            <button onClick={goNext} className="absolute right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </Modal>
    </>
  );
}

export default GalleryPage;
