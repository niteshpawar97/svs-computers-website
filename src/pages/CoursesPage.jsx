import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';
import Card from '@components/ui/Card';
import Badge from '@components/ui/Badge';
import Button from '@components/ui/Button';
import { courses } from '@data/courses';
import { fadeUp, staggerContainer, viewportConfig } from '@lib/animations';
import { Clock, ArrowRight, Users } from 'lucide-react';

function CoursesPage() {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'degree', 'diploma', 'certificate'];

  const filtered = filter === 'all' ? courses : courses.filter(c => c.category === filter);

  return (
    <>
      <PageBanner
        title="Our Programs"
        subtitle="Industry-aligned courses designed to build your career in technology."
        breadcrumbs={[{ label: 'Courses' }]}
      />

      <section className="section-padding bg-white">
        <Container>
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  filter === cat
                    ? 'bg-primary-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((course) => {
                const Icon = course.icon;
                return (
                  <motion.div
                    key={course.id}
                    variants={fadeUp}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full flex flex-col" padding="lg">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary-900" />
                        </div>
                        <Badge variant={course.category === 'degree' ? 'primary' : course.category === 'diploma' ? 'accent' : 'neutral'}>
                          {course.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-primary-900 mb-2">{course.title}</h3>
                      <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{course.duration}</span>
                        {course.eligibility && <span className="flex items-center gap-1"><Users className="w-4 h-4" />{course.eligibility}</span>}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{course.description}</p>
                      {course.university && <p className="text-xs text-gray-400 mb-4">Affiliated: {course.university}</p>}
                      <Button to="/admissions" variant="accent" size="sm" icon={ArrowRight} className="w-full">
                        Apply Now
                      </Button>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default CoursesPage;
