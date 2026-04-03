import { motion } from 'framer-motion';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import ContactForm from '@components/common/ContactForm';
import { courses } from '@data/courses';
import { fadeUp, staggerContainer, viewportConfig } from '@lib/animations';
import { ClipboardList, Upload, CheckCircle, ArrowRight, Phone } from 'lucide-react';

function AdmissionsPage() {
  const steps = [
    { icon: ClipboardList, title: 'Choose Program', description: 'Browse our courses and select the program that fits your goals.' },
    { icon: Upload, title: 'Submit Application', description: 'Fill out the inquiry form with your details and documents.' },
    { icon: CheckCircle, title: 'Get Confirmed', description: 'Our team will review and confirm your admission.' },
  ];

  return (
    <>
      <PageBanner
        title="Admissions 2026-27"
        subtitle="Start your journey in technology. Applications are now open."
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading label="How to Apply" title="Admission Process" subtitle="Simple steps to join SVS Computers." />
          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            {steps.map(({ icon: Icon, title, description }, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="text-center h-full relative" padding="lg">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {i + 1}
                  </div>
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4">
                    <Icon className="w-8 h-8 text-primary-900" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">{title}</h4>
                  <p className="text-gray-600 text-sm">{description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-background">
        <Container>
          <SectionHeading label="Eligibility" title="Course-wise Requirements" />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold">Course</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold">Duration</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold hidden md:table-cell">Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, i) => (
                    <tr key={course.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-6 text-sm font-medium text-gray-800">{course.shortTitle}</td>
                      <td className="py-3 px-6 text-sm text-gray-600">{course.duration}</td>
                      <td className="py-3 px-6 text-sm text-gray-600 hidden md:table-cell">{course.eligibility || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-white">
        <Container size="md">
          <SectionHeading label="Apply Now" title="Send Your Inquiry" subtitle="Fill out the form and our admissions team will contact you." />
          <div className="max-w-2xl mx-auto bg-background rounded-2xl p-8">
            <ContactForm />
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-2">Or call us directly</p>
            <Button href="tel:+919425146970" variant="outline" icon={Phone}>
              9425146970
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AdmissionsPage;
