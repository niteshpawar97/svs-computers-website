import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { footerQuickLinks } from '@data/navigation';
import { courses } from '@data/courses';
import { siteConfig } from '@data/siteConfig';
import Container from '@components/ui/Container';
import logo from '@assets/logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-accent via-primary-500 to-accent" />

      <Container className="pt-16 pb-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div>
            <img src={logo} alt="SVS Computers" className="w-28 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Excellence in Computer Education Since 2008. ISO 9001:2008 certified institution providing quality IT education.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, href: siteConfig.social.facebook, label: 'Facebook' },
                { icon: FaInstagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { icon: FaWhatsapp, href: siteConfig.social.whatsapp, label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-accent hover:border-accent hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Programs</h4>
            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link to="/courses" className="text-gray-400 text-sm hover:text-accent transition-colors">
                    {course.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{siteConfig.phone.join(', ')}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {currentYear} SVS Computers. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed by</span>
            <a href="https://niketgroup.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center gap-1">
              Niket Group <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
