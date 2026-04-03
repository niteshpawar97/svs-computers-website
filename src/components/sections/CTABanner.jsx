import { motion } from 'framer-motion';
import Container from '@components/ui/Container';
import Button from '@components/ui/Button';
import { ArrowRight, Download } from 'lucide-react';
import { fadeUp, viewportConfig } from '@lib/animations';

function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white rounded-full" />
      </div>
      <Container className="relative z-10">
        <motion.div
          className="text-center text-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admissions Open 2026-27</h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Begin your journey in technology. Enroll now and build a successful career with SVS Computers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/admissions" variant="white" size="lg" icon={ArrowRight}>
              Apply Now
            </Button>
            <Button to="/contact" variant="outline-white" size="lg" icon={null}>
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default CTABanner;
