import HeroSlider from '@components/sections/HeroSlider';
import About from '@components/sections/About';
import Stats from '@components/sections/Stats';
import WhyChooseUs from '@components/sections/WhyChooseUs';
import PrincipalMessage from '@components/sections/PrincipalMessage';
import Courses from '@components/sections/Courses';
import Gallery from '@components/sections/Gallery';
import FacultyTeam from '@components/sections/FacultyTeam';
import Facilities from '@components/sections/Facilities';
import Testimonials from '@components/sections/Testimonials';
import CTABanner from '@components/sections/CTABanner';
import ContactForm from '@components/common/ContactForm';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';

function HomePage() {
  return (
    <>
      <HeroSlider />
      <About />
      <Stats />
      <Courses />
      <WhyChooseUs />
      <PrincipalMessage />
      <Gallery />
      <FacultyTeam />
      <Facilities />
      <Testimonials />
      <CTABanner />
      <section id="contact" className="section-padding bg-white">
        <Container size="md">
          <SectionHeading
            label="Get in Touch"
            title="Contact Us"
            subtitle="Have questions? Fill out the form and we'll get back to you."
          />
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-card p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
