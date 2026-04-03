import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { navLinks } from '@data/navigation';
import Container from '@components/ui/Container';
import Button from '@components/ui/Button';
import logo from '@assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  // Determine text/bg colors based on context
  const isTransparent = isHomePage && !scrolled;
  const textColor = isTransparent ? 'text-white' : 'text-gray-700';
  const logoColor = isTransparent ? 'text-white' : 'text-primary-900';
  const activeColor = isTransparent ? 'text-white bg-white/15' : 'text-accent bg-accent/10';
  const hoverColor = isTransparent ? 'hover:text-white hover:bg-white/10' : 'hover:text-primary-900 hover:bg-gray-50';

  return (
    <>
      {/* Fixed Header Container */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top Info Bar - slides up on scroll */}
        <div
          className={`hidden lg:block bg-primary-950 text-white text-sm transition-all duration-300 overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <Container className="flex justify-between items-center py-2">
            <div className="flex items-center gap-6">
              <a href="tel:+919425146970" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>9425146970</span>
              </a>
              <a href="mailto:info@svscomputers.co.in" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>info@svscomputers.co.in</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </Container>
        </div>

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
              : isHomePage
                ? 'bg-transparent'
                : 'bg-white/90 backdrop-blur-md shadow-sm'
          }`}
        >
          <Container>
            <div className="flex justify-between items-center h-16 lg:h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="SVS Computers" className="w-10 h-10 object-contain" />
                <span className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${logoColor}`}>
                  SVS <span className={isTransparent ? 'text-accent-300' : 'text-accent'}>Computers</span>
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive(link.path)
                        ? activeColor
                        : `${textColor} ${hoverColor}`
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Button to="/admissions" variant={isTransparent ? 'outline-white' : 'accent'} size="sm">
                  Apply Now
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </Container>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <span className="text-xl font-bold text-primary-900">
                    SVS <span className="text-accent">Computers</span>
                  </span>
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-1">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                            isActive(link.path)
                              ? 'bg-accent/10 text-accent'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
                <div className="p-6 border-t space-y-4">
                  <Button to="/admissions" variant="accent" size="lg" className="w-full">
                    Apply Now
                  </Button>
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <a href="tel:+919425146970" className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                    <a href="mailto:info@svscomputers.co.in" className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
