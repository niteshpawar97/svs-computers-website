import { motion } from 'framer-motion';
import { courses } from '@data/courses';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import Card from '@components/ui/Card';
import Badge from '@components/ui/Badge';
import Button from '@components/ui/Button';
import { staggerContainer, fadeUp, viewportConfig } from '@lib/animations';
import { ArrowRight, Clock } from 'lucide-react';

function Courses() {
  return (
    <section id="courses" className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="Our Programs"
          title="Courses Designed for Your Future"
          subtitle="Industry-aligned programs to build skills that matter."
        />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <motion.div key={course.id} variants={fadeUp}>
                <Card className="h-full flex flex-col" padding="lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-900" />
                    </div>
                    <Badge variant={course.category === 'degree' ? 'primary' : course.category === 'diploma' ? 'accent' : 'neutral'}>
                      {course.category}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">{course.title}</h4>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{course.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button to="/admissions" variant="ghost" size="sm" icon={ArrowRight} className="text-accent hover:text-accent-700 px-0">
                      Apply Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="text-center mt-10">
          <Button to="/courses" variant="outline" icon={ArrowRight}>
            View All Programs
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Courses;
