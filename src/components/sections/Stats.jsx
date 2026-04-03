import { motion } from 'framer-motion';
import { stats } from '@data/stats';
import Container from '@components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@lib/animations';

function Stats() {
  return (
    <section className="bg-gradient-primary py-16 md:py-20">
      <Container>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} variants={fadeUp} className="text-white">
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-4xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default Stats;
