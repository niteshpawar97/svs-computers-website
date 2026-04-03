import { motion } from 'framer-motion';
import SEO from '@components/seo/SEO';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';
import Card from '@components/ui/Card';
import ContactForm from '@components/common/ContactForm';
import { siteConfig } from '@data/siteConfig';
import { fadeUp, staggerContainer, viewportConfig, slideInLeft, slideInRight } from '@lib/animations';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function ContactPage() {
  const contactCards = [
    { icon: Phone, label: 'Phone', value: siteConfig.phone.join(', '), href: `tel:+91${siteConfig.phone[1]}` },
    { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: 'Address', value: siteConfig.address },
    { icon: Clock, label: 'Office Hours', value: `${siteConfig.officeHours.weekdays}\n${siteConfig.officeHours.weekend}` },
  ];

  return (
    <>
      <SEO
        title="Contact Us - Visit SVS Computers Chhindwara"
        description="Contact SVS Computers Chhindwara. Address: Vivekanand Colony, Old Nagpur Naka, Chhindwara MP 480001. Phone: 9425146970, 07162-246870. Email: info@svscomputers.co.in"
        path="/contact"
      >
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SVS Computers",
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
          "openingHours": "Mo-Sa 09:00-18:00",
          "url": "https://svscomputers.co.in/contact"
        })}</script>
      </SEO>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out anytime."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Contact Cards */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} variants={fadeUp}>
                <Card className="text-center h-full" padding="lg">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary-900 mb-2">{label}</h4>
                  {href ? (
                    <a href={href} className="text-gray-600 text-sm hover:text-accent transition-colors whitespace-pre-line">{value}</a>
                  ) : (
                    <p className="text-gray-600 text-sm whitespace-pre-line">{value}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Send us a Message</h3>
              <ContactForm />
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Find Us</h3>
              <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
                <iframe
                  title="SVS Computers Location"
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ContactPage;
