import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, Phone, Wrench, ShieldCheck,
  Droplets, Layers, Zap,
  ArrowRight, CheckCircle2, Home, Hammer,
  BadgeCheck, Shield
} from 'lucide-react';

const OCTAGON_CLIP = 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';

const Logo = () => (
  <a href="#" className="flex items-center gap-3">
    <div
      className="w-10 h-10 bg-accent flex items-center justify-center"
      style={{ clipPath: OCTAGON_CLIP }}
    >
      <Home className="text-white w-5 h-5" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-black font-display font-bold text-xl tracking-wider">SAME DAY</span>
      <span className="text-gold text-xs font-display font-semibold tracking-[0.3em]">ROOFING</span>
    </div>
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Services', 'About', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-black/70 hover:text-gold transition-colors text-sm font-bold uppercase tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="tel:5555555555"
            className="flex items-center gap-2 bg-accent hover:bg-white hover:text-dark text-white px-6 py-3 transition-colors text-sm font-bold uppercase tracking-wider"
          >
            <Phone className="w-4 h-4" />
            (555) 555-5555
          </a>
        </div>

        <button className="lg:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t border-dark/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-black/80 hover:text-gold text-lg font-display font-bold tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="tel:5555555555"
                className="flex items-center justify-center gap-2 bg-accent text-white px-5 py-3 text-sm font-bold uppercase tracking-wider mt-4"
              >
                <Phone className="w-4 h-4" />
                (555) 555-5555
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
    {/* Hero background image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/hero.jpg"
        alt="Beautiful home with pristine roof"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-cream/70" />
    </div>

    <div className="relative z-10 container mx-auto px-6 pt-32 pb-32">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-[2px] w-12 bg-accent" />
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">
            Same-Day Service Available
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-black leading-[0.85] mb-6"
        >
          <span className="text-7xl md:text-[9rem] lg:text-[11rem] block">SAME DAY</span>
          <span className="text-7xl md:text-[9rem] lg:text-[11rem] block text-gold">ROOFING</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-2xl md:text-3xl font-display text-black/60 font-bold mb-3 tracking-wide">
            WE STOP ROOF LEAKS
          </p>
          <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
            Professional roof repairs, maintenance, and replacements. Fast, reliable service with a warranty you can count on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:5555555555"
            className="group flex items-center justify-center gap-3 bg-accent hover:bg-dark text-white hover:text-white px-8 py-5 transition-all text-lg font-display font-bold uppercase tracking-wider"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="#services"
            className="flex items-center justify-center gap-3 border-2 border-black/20 text-black hover:border-gold hover:text-gold px-8 py-5 transition-all text-lg font-display font-bold uppercase tracking-wider"
          >
            Our Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>

    {/* Bottom trust bar */}
    <div className="absolute bottom-0 left-0 w-full z-20 bg-stone/30 border-t border-dark/5">
      <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-black/50 text-sm font-bold tracking-wider uppercase">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold" /> Same-Day Service
        </span>
        <span className="hidden md:block text-black/10">|</span>
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold" /> Warranty on All Work
        </span>
        <span className="hidden md:block text-black/10">|</span>
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold" /> Licensed & Insured
        </span>
      </div>
    </div>
  </section>
);

const services = [
  { icon: Home, title: 'Replacement Roofs', desc: 'Complete roof replacement with quality materials and expert craftsmanship.' },
  { icon: Wrench, title: 'Roof Maintenance', desc: "Regular maintenance to extend your roof's lifespan and prevent costly repairs." },
  { icon: Hammer, title: 'Small Repairs', desc: 'Quick fixes for minor damage before it becomes a major problem.' },
  { icon: Zap, title: 'Same-Day Service', desc: 'We come out the same day you call. No waiting around, no delays.' },
  { icon: Droplets, title: 'We Stop Roof Leaks', desc: 'Expert leak detection and repair to keep your home dry and protected.' },
  { icon: Layers, title: 'Missing Shingles', desc: 'Fast replacement of missing or damaged shingles to restore your roof.' },
  { icon: ShieldCheck, title: 'Seal All Vents & Roof Jacks', desc: 'Professional sealing around all roof penetrations to prevent water entry.' },
  { icon: Shield, title: 'Seal Metal Flashing & Nails', desc: 'Secure and seal all metal flashing and exposed nails for a watertight roof.' },
  { icon: Layers, title: 'Reseal Popped Up Shingles', desc: 'Re-secure and seal shingles that have lifted or popped up from wind damage.' },
  { icon: BadgeCheck, title: 'Warranty on Work', desc: 'All our repairs and installations are backed by our quality workmanship warranty.', highlight: true },
];

const Services = () => (
  <section id="services" className="py-24 bg-cream">
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-accent" />
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">What We Do</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-display font-bold text-dark leading-tight">
          OUR SERVICES
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`group bg-white p-8 border-l-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              service.highlight
                ? 'border-gold bg-gold/5 hover:border-gold'
                : 'border-stone hover:border-accent'
            }`}
          >
            <service.icon
              className={`w-8 h-8 mb-5 transition-colors ${
                service.highlight
                  ? 'text-gold group-hover:text-accent'
                  : 'text-muted group-hover:text-accent'
              }`}
            />
            <h3 className="text-xl font-display font-bold text-dark mb-2 tracking-wide">
              {service.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const StopLeaks = () => (
  <section className="py-24 bg-cream text-dark relative overflow-hidden">
    {/* Large decorative octagon */}
    <div
      className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5"
      style={{ clipPath: OCTAGON_CLIP }}
    >
      <div className="w-full h-full bg-accent" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        {/* Stop badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-28 h-28 bg-accent mb-10"
          style={{ clipPath: OCTAGON_CLIP }}
        >
          <span className="text-white font-display font-bold text-2xl tracking-wider">STOP</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
        >
          WE STOP
          <br />
          <span className="text-gold">ROOF LEAKS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-black/50 text-lg font-bold max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Don't let a small leak turn into a big problem. Our expert team identifies and fixes
          leaks fast — often the same day you call.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {['Missing Shingles', 'Vent Sealing', 'Flashing Repair', 'Shingle Reseal'].map(
            (item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-gold" />
                <span className="text-sm font-bold text-black/70 text-center">{item}</span>
              </div>
            )
          )}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="tel:5555555555"
          className="inline-flex items-center gap-3 bg-accent hover:bg-gold text-white px-10 py-5 transition-all text-lg font-display font-bold uppercase tracking-wider"
        >
          <Phone className="w-5 h-5" />
          Get It Fixed Today
        </motion.a>
      </div>
    </div>
  </section>
);

const reasons = [
  {
    icon: Zap,
    title: 'Same-Day Service',
    desc: "We understand roofing emergencies can't wait. Call us and we'll be there the same day to assess and repair your roof.",
    stat: 'SAME',
    statSub: 'DAY',
  },
  {
    icon: BadgeCheck,
    title: 'Warranty on Work',
    desc: 'Every repair and installation comes with our workmanship warranty. We stand behind the quality of our work.',
    stat: '100%',
    statSub: 'GUARANTEED',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Quality',
    desc: 'Experienced roofers using professional-grade materials. We do the job right the first time.',
    stat: 'PRO',
    statSub: 'GRADE',
  },
];

const WhyChooseUs = () => (
  <section id="about" className="py-24 bg-cream">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[2px] w-12 bg-accent" />
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm">
            Why Choose Us
          </span>
          <div className="h-[2px] w-12 bg-accent" />
        </div>
        <h2 className="text-5xl md:text-6xl font-display font-bold text-dark">
          THE SAME DAY DIFFERENCE
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="text-7xl md:text-8xl font-display font-bold text-dark/10 leading-none block">
                {reason.stat}
              </span>
              <span className="text-sm font-display font-bold text-gold tracking-[0.3em] -mt-2 block">
                {reason.statSub}
              </span>
            </div>
            <reason.icon className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-dark mb-3 tracking-wide">
              {reason.title}
            </h3>
            <p className="text-muted leading-relaxed">{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ContactCTA = () => (
  <section id="contact" className="py-20 bg-accent relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          'linear-gradient(45deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,.1) 50%, rgba(0,0,0,.1) 75%, transparent 75%, transparent)',
        backgroundSize: '20px 20px',
      }}
    />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-display font-bold text-black mb-6"
      >
        NEED A ROOF REPAIR?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-black/80 text-xl font-bold mb-10 max-w-xl mx-auto"
      >
        Call us now for same-day service. We'll get your roof fixed fast.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        href="tel:5555555555"
        className="inline-flex items-center gap-3 bg-white text-accent hover:bg-dark hover:text-white px-10 py-5 transition-all text-xl font-display font-bold uppercase tracking-wider"
      >
        <Phone className="w-6 h-6" />
        (555) 555-5555
      </motion.a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-cream text-dark pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 bg-accent flex items-center justify-center"
              style={{ clipPath: OCTAGON_CLIP }}
            >
              <Home className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-black font-display font-bold text-xl tracking-wider">
                SAME DAY
              </span>
              <span className="text-gold text-xs font-display font-semibold tracking-[0.3em]">
                ROOFING
              </span>
            </div>
          </div>
          <p className="text-black/40 text-sm font-bold leading-relaxed mb-6">
            Professional roofing services with same-day availability. We stop roof leaks and keep
            your home protected.
          </p>
          <a
            href="tel:5555555555"
            className="flex items-center gap-3 text-gold font-display font-bold text-xl"
          >
            <Phone className="w-5 h-5" />
            (555) 555-5555
          </a>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 tracking-wider text-gold">
            SERVICES
          </h4>
          <ul className="space-y-3 text-sm text-black/40 font-bold">
            <li>Replacement Roofs</li>
            <li>Roof Maintenance</li>
            <li>Small Repairs</li>
            <li>Leak Repair</li>
            <li>Missing Shingles</li>
            <li>Vent & Flashing Sealing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6 tracking-wider text-gold">WHY US</h4>
          <ul className="space-y-3 text-sm text-black/40 font-bold">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold/60" /> Same-Day Service
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold/60" /> Warranty on All Work
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold/60" /> Licensed & Insured
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold/60" /> Professional Quality
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dark/10 pt-8 text-center text-xs text-black/30 font-bold">
        <p>&copy; {new Date().getFullYear()} Same Day Roofing. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <StopLeaks />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
}
