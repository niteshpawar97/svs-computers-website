import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { heroSlides } from '@data/heroSlides';
import Button from '@components/ui/Button';
import Container from '@components/ui/Container';
import { ArrowRight, ChevronDown, Users, BookOpen, Trophy, TrendingUp } from 'lucide-react';

const trustStats = [
  { icon: Trophy, value: '15+', label: 'Years' },
  { icon: Users, value: '5000+', label: 'Alumni' },
  { icon: BookOpen, value: '20+', label: 'Courses' },
  { icon: TrendingUp, value: '95%', label: 'Placement' },
];

function HeroSlider() {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        effect="fade"
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Multi-layer overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/60 to-primary-900/90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,25,47,0.4)_100%)]" />

              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />

              <Container className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <motion.div
                  className="max-w-4xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Badge */}
                  <motion.span
                    className="inline-flex items-center gap-2 bg-white/10 text-accent-200 px-5 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-md border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    ISO 9001:2008 Certified Institution
                  </motion.span>

                  {/* Heading with gradient accent */}
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    {slide.heading.split(' ').map((word, i, arr) => (
                      i >= arr.length - 2 ? (
                        <span key={i} className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                          {word}{' '}
                        </span>
                      ) : (
                        <span key={i}>{word} </span>
                      )
                    ))}
                  </motion.h1>

                  {/* Subheading */}
                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {slide.subheading}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button to="/courses" variant="accent" size="lg" icon={ArrowRight}>
                      Explore Programs
                    </Button>
                    <Button to="/admissions" variant="outline-white" size="lg">
                      Apply Now
                    </Button>
                  </motion.div>

                  {/* Trust Stats Bar */}
                  <motion.div
                    className="hidden sm:flex items-center justify-center gap-8 md:gap-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    {trustStats.map(({ icon: Icon, value, label }, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/70">
                        <Icon className="w-4 h-4 text-accent-400" />
                        <span className="font-bold text-white">{value}</span>
                        <span className="text-sm">{label}</span>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSlider;
