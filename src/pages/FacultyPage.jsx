import { motion } from 'framer-motion';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import { faculty } from '@data/faculty';
import { siteConfig } from '@data/siteConfig';
import { fadeUp, staggerContainer, viewportConfig } from '@lib/animations';
import { Award, Clock, GraduationCap } from 'lucide-react';
import principalImage from '@assets/images/principal.jpg';

function FacultyPage() {
  return (
    <>
      <PageBanner
        title="Our Faculty & Staff"
        subtitle="Meet the dedicated professionals behind your education."
        breadcrumbs={[{ label: 'Faculty' }]}
      />

      {/* Director */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              <img
                src={principalImage}
                alt={siteConfig.director.name}
                className="w-48 h-48 object-cover rounded-2xl shadow-card mx-auto md:mx-0"
                loading="lazy"
              />
              <div>
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3">
                  Director & Principal
                </span>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">{siteConfig.director.name}</h3>
                <p className="text-gray-600 leading-relaxed">{siteConfig.director.message}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Faculty Grid */}
      <section className="section-padding bg-background">
        <Container>
          <SectionHeading label="Teaching Staff" title="Our Faculty Members" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {faculty.map((member) => (
              <motion.div key={member.id} variants={fadeUp}>
                <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
                  <div className={`h-24 bg-gradient-to-r ${member.color} relative`}>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} border-4 border-white shadow-lg flex items-center justify-center`}>
                        <span className="text-white text-2xl font-bold">{member.initials}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-14 pb-6 px-6 text-center">
                    <h4 className="text-lg font-bold text-primary-900">{member.name}</h4>
                    <p className="text-accent text-sm font-semibold mb-4">{member.designation}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <GraduationCap className="w-4 h-4 text-gray-400" />
                        <span>{member.qualification}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <Award className="w-4 h-4 text-gray-400" />
                        <span>{member.subject}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{member.experience} Experience</span>
                      </div>
                    </div>
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                      {member.department}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default FacultyPage;
