import { motion } from 'framer-motion';
import SEO from '@components/seo/SEO';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import Card from '@components/ui/Card';
import { fadeUp, staggerContainer, viewportConfig, slideInLeft, slideInRight } from '@lib/animations';
import { siteConfig } from '@data/siteConfig';
import { Lightbulb, Target, Award, Users, Building, GraduationCap, CheckCircle } from 'lucide-react';
import principalImage from '@assets/images/principal.jpg';
import collegeFront from '@assets/images/collage-front.jpeg';

function AboutPage() {
  const achievements = [
    { icon: Users, text: 'Over 5000+ students trained since 2008' },
    { icon: Award, text: '100+ students placed in top IT companies' },
    { icon: Building, text: 'Recognized as a top AICPE-affiliated center' },
    { icon: GraduationCap, text: 'Host to multiple government certification programs' },
  ];

  const whyChoose = [
    'Industry-relevant courses & certifications',
    'Modern lab infrastructure & fast systems',
    'Experienced and supportive faculty',
    'Practical training + real-world projects',
    'Affordable fees and EMI options',
  ];

  return (
    <>
      <SEO
        title="About Us - Best Computer Institute Since 2008"
        description="Learn about SVS Computers Chhindwara - ISO 9001:2008 certified computer education institute. 15+ years of excellence, 5000+ students trained. AICPE affiliated center in Chhindwara, MP."
        path="/about"
      />
      <PageBanner
        title="About SVS Computers"
        subtitle="A premier computer education institute committed to excellence since 2008."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <img src={collegeFront} alt="SVS Computers Campus" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" loading="lazy" />
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Welcome to SVS Computers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SVS Computers, established in 2008, has been a pillar of computer education in Chhindwara. With modern infrastructure and industry-expert faculty, we aim to equip students with cutting-edge skills in the fields of IT, programming, and digital technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As an ISO 9001:2008 certified institution affiliated with AICPE, our courses are recognized by educational and professional bodies, making them valuable for both higher studies and career placements.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <Container>
          <SectionHeading label="Our Purpose" title="Vision & Mission" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Lightbulb, label: 'Our Vision', text: 'To create a learning environment that fosters innovation and professional growth in the field of technology.' },
              { icon: Target, label: 'Our Mission', text: 'To offer quality education and help students build successful careers in technology through practical, industry-aligned training.' },
            ].map(({ icon: Icon, label, text }) => (
              <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
                <Card glass padding="lg" className="h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">{label}</h3>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Director Message */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading label="Leadership" title="Message from the Director" />
          <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              <img src={principalImage} alt={siteConfig.director.name} className="w-full h-56 md:h-auto object-cover rounded-xl shadow-card" loading="lazy" />
              <div>
                <blockquote className="text-gray-700 leading-relaxed text-lg italic mb-6">
                  "At SVS Computers, we are committed to shaping the future of IT professionals. We continuously upgrade our curriculum, labs, and teaching methods to meet the growing demands of the industry. Our students' success is our greatest achievement."
                </blockquote>
                <p className="font-bold text-primary-900">{siteConfig.director.name}</p>
                <p className="text-accent text-sm">{siteConfig.director.title}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-background">
        <Container>
          <SectionHeading label="Milestones" title="Our Achievements" />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            {achievements.map(({ icon: Icon, text }, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="text-center h-full" padding="lg">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-gray-700 font-medium">{text}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading label="Advantages" title="Why Choose SVS Computers?" />
          <div className="max-w-2xl mx-auto">
            <motion.ul className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              {whyChoose.map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-center gap-3 bg-background rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;
