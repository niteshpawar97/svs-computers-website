import { motion } from 'framer-motion';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import { fadeUp, slideInLeft, slideInRight, viewportConfig } from '@lib/animations';
import { siteConfig } from '@data/siteConfig';
import principalImage from '@assets/images/principal.jpg';

function PrincipalMessage() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading label="Leadership" title="Message from the Director" />
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <img
              src={principalImage}
              alt={siteConfig.director.name}
              className="w-64 h-80 object-cover rounded-2xl shadow-elevated mx-auto lg:mx-0"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative">
              <span className="text-6xl text-accent/20 font-serif absolute -top-6 -left-4">"</span>
              <p className="text-gray-700 leading-relaxed text-lg italic pl-6">
                {siteConfig.director.message}
              </p>
            </div>
            <div className="mt-6 pl-6">
              <p className="font-bold text-primary-900 text-lg">{siteConfig.director.name}</p>
              <p className="text-accent text-sm font-medium">{siteConfig.director.title}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default PrincipalMessage;
