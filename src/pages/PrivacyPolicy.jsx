import React from "react";

function PrivacyPolicy() {
  return (
    <section className="pt-28 pb-16 px-4 bg-white text-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-primary text-center">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>SVS Computers</strong>, we respect your privacy and are committed to
          protecting any personal information you share with us. This Privacy Policy
          outlines how we collect, use, and protect your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-accent">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information including but not limited to your name, email address,
          phone number, and educational preferences when you:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Fill out our contact form</li>
          <li>Register for a course</li>
          <li>Communicate with us via email or phone</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-accent">2. How We Use Your Information</h2>
        <p className="mb-4">We use your data to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide course-related services</li>
          <li>Respond to your inquiries</li>
          <li>Send important updates and notifications</li>
          <li>Improve our website and services</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-accent">3. Data Protection</h2>
        <p className="mb-4">
          We take appropriate measures to protect your data from unauthorized access, alteration,
          disclosure, or destruction. Your personal information is stored on secure servers.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-accent">4. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell or share your personal information with third parties, except:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>When required by law</li>
          <li>To trusted service providers under strict confidentiality</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-accent">5. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to external websites. We are not responsible for the content
          or privacy practices of those sites.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-accent">6. Cookies</h2>
        <p className="mb-4">
          We may use cookies to enhance your browsing experience. You can disable cookies through
          your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-accent">7. Changes to This Policy</h2>
        <p className="mb-4">
          SVS Computers may update this privacy policy from time to time. Any changes will be posted
          on this page with a revised "Last Updated" date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-accent">8. Contact Us</h2>
        <p>
          If you have any questions about this policy, please contact us at:
        </p>
        <ul className="list-inside mt-2">
          <li>Email: info@svscomputers.co.in</li>
          <li>Phone: 07162-246870 / 9425146970</li>
          <li>Address: Vivekanand Colony, Old Nagpur Naka, Chhindwara (MP) 480001</li>
        </ul>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Last Updated: June 24, 2025
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
