import SEO from '@components/seo/SEO';
import PageBanner from '@components/ui/PageBanner';
import Container from '@components/ui/Container';

function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy of SVS Computers Chhindwara. Learn how we collect, use and protect your personal information."
        path="/privacy-policy"
        noindex
      />
      <PageBanner
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="section-padding bg-white">
        <Container size="md">
          <div className="prose prose-gray max-w-none">
            <p>
              At <strong>SVS Computers</strong>, we respect your privacy and are committed to
              protecting any personal information you share with us. This Privacy Policy
              outlines how we collect, use, and protect your data.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-primary-900">1. Information We Collect</h2>
            <p>We may collect personal information including but not limited to your name, email address, phone number, and educational preferences when you:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Fill out our contact form</li>
              <li>Register for a course</li>
              <li>Communicate with us via email or phone</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-primary-900">2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Provide course-related services</li>
              <li>Respond to your inquiries</li>
              <li>Send important updates and notifications</li>
              <li>Improve our website and services</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-primary-900">3. Data Protection</h2>
            <p>We take appropriate measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Your personal information is stored on secure servers.</p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-primary-900">4. Sharing of Information</h2>
            <p>We do not sell or share your personal information with third parties, except:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>When required by law</li>
              <li>To trusted service providers under strict confidentiality</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-primary-900">5. Third-Party Links</h2>
            <p>Our website may contain links to external websites. We are not responsible for the content or privacy practices of those sites.</p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-primary-900">6. Cookies</h2>
            <p>We may use cookies to enhance your browsing experience. You can disable cookies through your browser settings.</p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-primary-900">7. Changes to This Policy</h2>
            <p>SVS Computers may update this privacy policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date.</p>

            <h2 className="text-xl font-semibold mt-8 mb-3 text-primary-900">8. Contact Us</h2>
            <p>If you have any questions about this policy, please contact us at:</p>
            <ul className="list-none space-y-1 text-gray-600 mt-2">
              <li>Email: info@svscomputers.co.in</li>
              <li>Phone: 07162-246870 / 9425146970</li>
              <li>Address: Vivekanand Colony, Old Nagpur Naka, Chhindwara (MP) 480001</li>
            </ul>

            <p className="mt-8 text-sm text-gray-400 text-center">Last Updated: June 24, 2025</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default PrivacyPolicyPage;
