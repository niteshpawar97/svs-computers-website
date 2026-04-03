import { motion } from 'framer-motion';
import { facilities } from '@data/facilities';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import Card from '@components/ui/Card';
import { staggerContainer, fadeUp, viewportConfig } from '@lib/animations';

function Facilities() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeading
          label="Infrastructure"
          title="Our Facilities"
          subtitle="Modern infrastructure designed for effective learning."
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div key={index} variants={fadeUp}>
                <Card className="flex gap-4" padding="lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-2">{facility.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default Facilities;
