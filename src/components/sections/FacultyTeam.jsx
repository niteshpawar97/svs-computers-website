import { motion } from 'framer-motion';
import { faculty } from '@data/faculty';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import Button from '@components/ui/Button';
import { staggerContainer, fadeUp, viewportConfig } from '@lib/animations';
import { ArrowRight, Award, Clock, GraduationCap } from 'lucide-react';

function FacultyTeam() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          label="Our Team"
          title="Meet Our Expert Faculty"
          subtitle="Qualified professionals with years of industry & teaching experience."
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {faculty.slice(0, 3).map((member) => (
            <motion.div key={member.id} variants={fadeUp}>
              <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                {/* Top gradient bar */}
                <div className={`h-24 bg-gradient-to-r ${member.color} relative`}>
                  {/* Initials Avatar */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} border-4 border-white shadow-lg flex items-center justify-center`}>
                      <span className="text-white text-2xl font-bold">{member.initials}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-14 pb-6 px-6 text-center">
                  <h4 className="text-lg font-bold text-primary-900">{member.name}</h4>
                  <p className="text-accent text-sm font-semibold mb-4">{member.designation}</p>

                  {/* Details */}
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

                  {/* Department tag */}
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                    {member.department}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Button to="/faculty" variant="outline" icon={ArrowRight}>
            View All Faculty
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default FacultyTeam;
