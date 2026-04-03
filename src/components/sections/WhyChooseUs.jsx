import { motion } from 'framer-motion';
import { whyChooseUsItems } from '@data/whyChooseUs';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import Card from '@components/ui/Card';
import { staggerContainer, fadeUp, viewportConfig } from '@lib/animations';

function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeading
          label="Why Choose Us"
          title="What Makes SVS Computers Different"
          subtitle="We provide a comprehensive learning experience with modern facilities and expert guidance."
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full" padding="lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
