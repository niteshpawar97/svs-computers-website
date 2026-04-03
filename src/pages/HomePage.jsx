import SEO from '@components/seo/SEO';
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
      <SEO
        title={null}
        description="SVS Computers - Best computer education institute in Chhindwara, MP. ISO 9001:2008 certified. Courses: BCA, M.Sc CS, PGDCA, DCA, Tally, CPCT. 5000+ alumni, 95% placement. Call 9425146970."
        path="/"
      >
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "SVS Computers",
          "description": "Best computer education institute in Chhindwara offering BCA, PGDCA, DCA, Tally and other IT courses since 2008.",
          "url": "https://svscomputers.co.in",
          "telephone": "+919425146970",
          "email": "info@svscomputers.co.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vivekanand Colony, Old Nagpur Naka",
            "addressLocality": "Chhindwara",
            "addressRegion": "Madhya Pradesh",
            "postalCode": "480001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "22.0436",
            "longitude": "78.9278"
          },
          "foundingDate": "2008",
          "sameAs": ["https://facebook.com", "https://instagram.com"],
          "hasCredential": "ISO 9001:2008"
        })}</script>
      </SEO>
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
