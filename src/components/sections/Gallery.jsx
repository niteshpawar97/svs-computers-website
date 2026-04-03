import { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '@data/galleryImages';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import Modal from '@components/ui/Modal';
import Button from '@components/ui/Button';
import { staggerContainer, fadeUp, viewportConfig } from '@lib/animations';
import { Expand, ArrowRight } from 'lucide-react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const displayImages = galleryImages.slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeading
          label="Campus Life"
          title="Campus Gallery"
          subtitle="Take a glimpse into our world-class facilities."
        />
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {displayImages.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300 flex items-center justify-center">
                <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Button to="/gallery" variant="outline" icon={ArrowRight}>
            View Full Gallery
          </Button>
        </div>
      </Container>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} size="full">
        {selectedImage && (
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl mx-auto"
          />
        )}
      </Modal>
    </section>
  );
}

export default Gallery;
