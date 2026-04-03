import { motion } from 'framer-motion';
import { Lightbulb, Target } from 'lucide-react';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import { fadeUp, staggerContainer, viewportConfig } from '@lib/animations';
import collegeFront from '@assets/images/collage-front.jpeg';

function About() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative">
              <img
                src={collegeFront}
                alt="SVS Computers Campus"
                className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-2xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                label="About Us"
                title="A Legacy of Excellence in Computer Education"
                center={false}
              />
            </motion.div>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed mb-6">
              SVS Computers is an ISO 9001:2008 certified institution in Chhindwara, MP. We specialize in high-quality computer education, offering diverse programs to equip students with the latest industry skills and knowledge.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Lightbulb, label: 'Our Vision', text: 'Foster innovation and professional growth.' },
                { icon: Target, label: 'Our Mission', text: 'Quality education for successful IT careers.' },
              ].map(({ icon: Icon, label, text }) => (
                <Card key={label} className="flex-1 min-w-[200px]" padding="sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-primary-900">{label}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{text}</p>
                </Card>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <Button to="/about" variant="outline" icon={null}>
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;
