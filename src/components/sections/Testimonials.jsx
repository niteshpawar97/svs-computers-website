import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@data/testimonials';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import { Quote } from 'lucide-react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-primary">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What Our Students Say"
          subtitle="Hear from our alumni about their experience at SVS Computers."
          light
        />
        <div className="max-w-2xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/10"
            >
              <Quote className="w-10 h-10 text-accent/50 mx-auto mb-6" />
              <p className="text-white text-lg md:text-xl italic leading-relaxed mb-8">
                "{testimonials[currentIndex].feedback}"
              </p>
              <div>
                <p className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-accent-300 text-sm">{testimonials[currentIndex].program}</p>
                <p className="text-gray-400 text-xs mt-1">{testimonials[currentIndex].year}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-accent w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
