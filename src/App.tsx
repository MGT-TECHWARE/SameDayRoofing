import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, Phone, ShieldCheck,
  Zap, ArrowRight,
  BadgeCheck, MapPin, Clock, Star, Mail, Facebook
} from 'lucide-react';

// Before & After images
import roofReplacementBefore from './images/roof-replacement-before.webp';
import roofReplacementAfter from './images/roof-replacement-after.webp';
import shingleRepairBefore from './images/shingle-repair-before.webp';
import shingleRepairAfter from './images/shingle-repair-after.webp';
import ridgeRepairBefore from './images/ridge-repair-before.webp';
import ridgeRepairAfter from './images/ridge-repair-after.webp';
import membraneInstallBefore from './images/membrane-install-before.webp';
import membraneInstallAfter from './images/membrane-install-after.webp';
import ventRepairBefore from './images/vent-repair-before.webp';
import ventRepairAfter from './images/vent-repair-after.webp';
import pipeSealBefore from './images/pipe-seal-before.webp';
import pipeSealAfter from './images/pipe-seal-after.webp';

// Feature images
import workerAction from './images/worker-action.webp';
import logoImage from './images/logo_same_day_roofing.png';
import logoImageBlack from './images/logo_same_day_roofing_black.png';

// Service images
import serviceReplacement from './images/service-replacement.png';
import serviceMaintenance from './images/service-maintenance.png';
import serviceStorm from './images/service-storm.png';
import serviceEmergency from './images/service-emergency.png';
import serviceLeaks from './images/service-leaks.png';
import serviceShingles from './images/service-shingles.png';
import serviceVents from './images/service-vents.png';
import serviceFlashing from './images/service-flashing.png';
import serviceReseal from './images/service-reseal.png';
import serviceWarranty from './images/service-warranty.png';

const OCTAGON_CLIP = 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';

const PHONE = '(832) 444-7725';
const PHONE_TEL = 'tel:8324447725';
const EMAIL = 'samedayroofing7@gmail.com';
const ADDRESS = '9639 Hillcroft 803, Houston, TX 77096';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61588463172888';

const Logo = ({ size = 'default', dark = false }: { size?: 'default' | 'large'; dark?: boolean }) => (
  <a href="#" className="flex items-center group">
    <img
      src={dark ? logoImageBlack : logoImage}
      alt="Same Day Emergency Roofing Service — Houston, TX"
      className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
        size === 'large' ? 'h-20' : 'h-12 md:h-14'
      }`}
    />
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

  const navLinks = ['Services', 'Gallery', 'About', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-cream/97 backdrop-blur-xl py-2 shadow-[0_2px_40px_rgba(0,0,0,0.08)]'
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Logo dark={scrolled} />

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`relative transition-colors duration-300 text-sm font-semibold uppercase tracking-[0.15em] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? 'text-dark/60 hover:text-dark'
                    : 'text-cream/70 hover:text-cream'
                }`}
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href={PHONE_TEL}
            className="group flex items-center gap-2.5 bg-accent hover:bg-accent-deep text-white px-7 py-3.5 transition-all duration-300 text-sm font-bold uppercase tracking-wider hover:shadow-[0_4px_20px_rgba(181,69,27,0.3)]"
          >
            <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
            {PHONE}
          </a>
        </div>

        <button
          className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
            scrolled ? 'text-dark' : 'text-cream'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-cream/98 backdrop-blur-xl border-t border-dark/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-dark/80 hover:text-accent text-2xl font-display font-bold tracking-wider py-3 border-b border-dark/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href={PHONE_TEL}
                className="flex items-center justify-center gap-2.5 bg-accent text-white px-5 py-4 text-sm font-bold uppercase tracking-wider mt-6"
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden bg-dark">
    <div className="absolute inset-0 z-0">
      <img
        src="/hero.jpg"
        alt="Professional roofing service in Houston, TX"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
    </div>

    {/* Decorative geometric accents */}
    <div
      className="absolute right-[5%] top-[15%] w-[300px] h-[300px] border border-gold/10 hidden lg:block"
      style={{ clipPath: OCTAGON_CLIP }}
    />
    <div
      className="absolute right-[8%] top-[18%] w-[250px] h-[250px] border border-gold/5 hidden lg:block"
      style={{ clipPath: OCTAGON_CLIP }}
    />

    <div className="relative z-10 container mx-auto px-6 lg:px-10 flex flex-col md:items-center justify-center h-full">
      <div className="md:text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold leading-[0.85] mb-6"
        >
          <span className="text-5xl md:text-7xl lg:text-[8rem] block text-cream">SAME DAY</span>
          <span className="text-5xl md:text-7xl lg:text-[8rem] block text-accent">ROOFING</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xl md:text-2xl font-display text-cream/40 font-bold mb-3 tracking-wide">
            YOUR ROOF, OUR PRIORITY — FIXED TODAY, NOT TOMORROW
          </p>
          <p className="text-stone text-base md:text-base max-w-md md:mx-auto mb-8 md:mb-10 leading-relaxed">
            New roof installations, repairs, leaks & storm damage — handled same day.
            Serving Houston, TX and surrounding areas. Call now for immediate service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-3 md:justify-center"
        >
          <a
            href={PHONE_TEL}
            className="group flex items-center justify-center gap-3 bg-accent hover:bg-accent-deep text-white px-8 py-4 md:px-8 md:py-4 transition-all duration-300 text-base md:text-base font-display font-bold uppercase tracking-wider hover:shadow-[0_8px_30px_rgba(198,40,40,0.35)]"
          >
            <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
            Call Now
          </a>
          <a
            href="#services"
            className="group flex items-center justify-center gap-3 border-2 border-cream/20 text-cream hover:border-gold hover:text-gold px-8 py-4 md:px-8 md:py-4 transition-all duration-300 text-base md:text-base font-display font-bold uppercase tracking-wider"
          >
            Our Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </div>

    {/* Bottom trust bar */}
    <div className="absolute bottom-0 left-0 w-full z-20 bg-dark/60 backdrop-blur-sm border-t border-cream/5">
      <div className="container mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-14 text-cream/40 text-xs font-semibold tracking-[0.2em] uppercase">
        <span className="flex items-center gap-2.5">
          <Clock className="w-3.5 h-3.5 text-gold" /> Same-Day Service
        </span>
        <span className="hidden md:block w-1 h-1 rounded-full bg-cream/15" />
        <span className="flex items-center gap-2.5">
          <Star className="w-3.5 h-3.5 text-gold" /> Angie Leads & HomeAdvisor
        </span>
        <span className="hidden md:block w-1 h-1 rounded-full bg-cream/15" />
        <span className="flex items-center gap-2.5">
          <Zap className="w-3.5 h-3.5 text-gold" /> New Roof Installation
        </span>
      </div>
    </div>
  </section>
);

const services = [
  { image: serviceReplacement, title: 'Replacement Roofs', desc: 'Complete roof replacement with quality materials and expert craftsmanship for Houston homes.' },
  { image: serviceMaintenance, title: 'Roof Maintenance', desc: "Regular maintenance to extend your roof's lifespan and prevent costly repairs." },
  { image: serviceStorm, title: 'Storm Damage Repair', desc: 'Fast response for hail, wind, and storm damage. We work with your insurance.' },
  { image: serviceEmergency, title: 'Same-Day Emergency Service', desc: "We're there the same day you call. No waiting around for Houston's urgent roofing issues." },
  { image: serviceLeaks, title: 'We Stop Roof Leaks', desc: 'Expert leak detection and repair to keep your Houston home dry and protected.' },
  { image: serviceShingles, title: 'Missing Shingles', desc: 'Fast replacement of missing or damaged shingles to restore your roof.' },
  { image: serviceVents, title: 'Seal All Vents & Roof Jacks', desc: 'Professional sealing around all roof penetrations to prevent water entry.' },
  { image: serviceFlashing, title: 'Seal Metal Flashing & Nails', desc: 'Secure and seal all metal flashing and exposed nails for a watertight roof.' },
  { image: serviceReseal, title: 'Reseal Popped Up Shingles', desc: 'Re-secure and seal shingles that have lifted or popped up from wind damage.' },
  { image: serviceWarranty, title: 'Warranty on Work', desc: 'All our repairs and installations are backed by our quality workmanship warranty.', highlight: true },
];

const Services = () => (
  <section id="services" className="py-28 bg-cream noise-overlay">
    <div className="container mx-auto px-6 lg:px-10 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-10 bg-accent" />
            <span className="text-accent font-semibold tracking-[0.3em] uppercase text-xs">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-dark leading-none">
            OUR SERVICES
          </h2>
        </div>
        <p className="text-muted text-base max-w-sm leading-relaxed md:pb-1">
          From emergency leak repairs to full roof replacements, Houston homeowners trust us for fast, professional-grade quality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`group overflow-hidden transition-all duration-500 ${
              service.highlight ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              {service.highlight && (
                <div className="absolute top-3 right-3 bg-gold text-dark text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">
                  Guaranteed
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-lg font-display font-bold text-cream mb-1.5 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────────
   We Stop Roof Leaks — simple, direct
   ────────────────────────────────────────────── */
const StopLeaks = () => (
  <section className="bg-slate text-cream">
    {/* Top half: worker image */}
    <div className="relative h-[280px] md:h-[360px] overflow-hidden">
      <img
        src={workerAction}
        alt="Professional roofer at work in Houston"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-dark/40" />
    </div>

    {/* Bottom half: content */}
    <div className="container mx-auto px-6 lg:px-10 py-16 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-5 leading-tight">
          WE STOP <span className="text-accent">ROOF LEAKS</span>
        </h2>

        <p className="text-cream/50 text-base mb-8 leading-relaxed max-w-lg">
          Don't let a small leak turn into a big problem. Our Houston-based team identifies and fixes
          leaks fast — often the same day you call.
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
          {['Missing Shingles', 'Vent Sealing', 'Flashing Repair', 'Storm Damage'].map(
            (item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-cream/60">
                <span className="w-1 h-1 bg-gold rounded-full" />
                {item}
              </li>
            )
          )}
        </ul>

        <a
          href={PHONE_TEL}
          className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-deep text-white px-8 py-4 transition-colors text-sm font-bold uppercase tracking-wider"
        >
          <Phone className="w-4 h-4" />
          Get It Fixed Today
        </a>
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────────
   Before & After Gallery
   ────────────────────────────────────────────── */
const beforeAfterProjects = [
  { name: 'Roof Replacement', before: roofReplacementBefore, after: roofReplacementAfter },
  { name: 'Shingle Repair', before: shingleRepairBefore, after: shingleRepairAfter },
  { name: 'Ridge Repair', before: ridgeRepairBefore, after: ridgeRepairAfter },
  { name: 'Membrane Install', before: membraneInstallBefore, after: membraneInstallAfter },
  { name: 'Vent Repair', before: ventRepairBefore, after: ventRepairAfter },
  { name: 'Pipe Seal', before: pipeSealBefore, after: pipeSealAfter },
];

const BeforeAfter = () => (
  <section id="gallery" className="py-28 bg-warm noise-overlay">
    <div className="container mx-auto px-6 lg:px-10 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[2px] w-10 bg-accent" />
            <span className="text-accent font-semibold tracking-[0.3em] uppercase text-xs">Our Results</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-dark leading-none">
            BEFORE & AFTER
          </h2>
        </div>
        <p className="text-muted text-base max-w-sm leading-relaxed md:pb-1">
          See the difference our professional repairs make. Real Houston projects, real results.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {beforeAfterProjects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <div className="grid grid-cols-2 gap-1">
              {/* Before */}
              <div className="relative aspect-[3/2] overflow-hidden bg-stone/20">
                <img
                  src={project.before}
                  alt={`${project.name} — before`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-dark/70 backdrop-blur-sm text-cream text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">
                  Before
                </span>
              </div>
              {/* After */}
              <div className="relative aspect-[3/2] overflow-hidden bg-stone/20">
                <img
                  src={project.after}
                  alt={`${project.name} — after`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-accent/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">
                  After
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-[2px] w-4 bg-accent/40" />
              <h3 className="font-display font-bold text-dark text-sm tracking-wider uppercase">
                {project.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────────
   Why Choose Us
   ────────────────────────────────────────────── */
const reasons = [
  {
    icon: Zap,
    title: 'Same-Day Emergency Service',
    desc: "Roofing emergencies can't wait — especially in Houston weather. Call us and we'll be there the same day to assess and repair your roof.",
    stat: 'SAME',
    statSub: 'DAY',
  },
  {
    icon: BadgeCheck,
    title: 'Warranty on Work',
    desc: 'Every repair and installation comes with our workmanship warranty. We stand behind the quality of our work, every time.',
    stat: '100%',
    statSub: 'GUARANTEED',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & Verified',
    desc: 'Powered by Angie Leads, HomeAdvisor & Yelp. Experienced roofers using professional-grade materials.',
    stat: 'PRO',
    statSub: 'GRADE',
  },
];

const WhyChooseUs = () => (
  <section id="about" className="py-28 bg-cream noise-overlay">
    <div className="container mx-auto px-6 lg:px-10 relative z-10">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-[1px] w-12 bg-stone" />
          <span className="text-accent font-semibold tracking-[0.3em] uppercase text-xs">
            Why Choose Us
          </span>
          <div className="h-[1px] w-12 bg-stone" />
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-extrabold text-dark leading-none">
          THE SAME DAY<br className="hidden md:block" /> DIFFERENCE
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-warm p-10 text-center transition-all duration-500 hover:bg-slate hover:text-cream"
          >
            <div className="mb-8 relative">
              <span className="text-7xl md:text-8xl font-display font-extrabold text-dark/[0.06] leading-none block transition-colors duration-500 group-hover:text-cream/[0.06]">
                {reason.stat}
              </span>
              <span className="text-[11px] font-display font-bold text-gold tracking-[0.4em] block mt-1">
                {reason.statSub}
              </span>
            </div>
            <div
              className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-accent/10 transition-colors duration-500 group-hover:bg-accent/20"
              style={{ clipPath: OCTAGON_CLIP }}
            >
              <reason.icon className="w-6 h-6 text-accent transition-colors duration-500 group-hover:text-gold" />
            </div>
            <h3 className="text-xl font-display font-bold text-dark mb-3 tracking-wide transition-colors duration-500 group-hover:text-cream">
              {reason.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed transition-colors duration-500 group-hover:text-cream/50">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────────────────────────────────────
   Contact CTA — with showcase background
   ────────────────────────────────────────────── */
const ContactCTA = () => (
  <section id="contact" className="relative overflow-hidden">
    <div className="relative py-24 md:py-28 noise-overlay">
      {/* Background showcase image */}
      <div className="absolute inset-0">
        <img
          src="/home-showcase.webp"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-accent/90" />
      </div>

      {/* Geometric accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-20 -top-20 w-[400px] h-[400px] border-2 border-white/[0.07]"
          style={{ clipPath: OCTAGON_CLIP }}
        />
        <div
          className="absolute -left-10 -bottom-10 w-[300px] h-[300px] border-2 border-white/[0.05]"
          style={{ clipPath: OCTAGON_CLIP }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="text-white/40 font-semibold tracking-[0.3em] uppercase text-xs">
              Serving Houston, TX
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 leading-[0.9]"
          >
            NEED EMERGENCY<br />ROOF REPAIR?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-12 max-w-md mx-auto leading-relaxed"
          >
            Call us now for same-day emergency service. We'll get your roof fixed fast.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={PHONE_TEL}
              className="group inline-flex items-center justify-center gap-3 bg-white text-accent hover:bg-dark hover:text-cream px-10 py-5 transition-all duration-300 text-xl font-display font-bold uppercase tracking-wider hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
              <Phone className="w-6 h-6 transition-transform group-hover:rotate-12" />
              {PHONE}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-dark text-cream/80 noise-overlay">
    {/* Top accent stripe */}
    <div className="h-1 bg-gradient-to-r from-accent via-gold to-accent" />

    <div className="container mx-auto px-6 lg:px-10 relative z-10">
      <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand column */}
        <div className="md:col-span-5">
          <Logo size="large" />
          <p className="text-cream/30 text-sm leading-relaxed mt-6 mb-8 max-w-xs">
            Same Day Emergency Roofing Service in Houston, TX. Fast, reliable roof repairs
            for leaks, storm damage & urgent issues. Powered by Angie Leads, HomeAdvisor & Yelp.
          </p>
          <div className="space-y-4">
            <a
              href={PHONE_TEL}
              className="group flex items-center gap-3 text-gold font-display font-bold text-2xl tracking-wide hover:text-gold-light transition-colors"
            >
              <div
                className="w-10 h-10 bg-gold/10 flex items-center justify-center transition-colors group-hover:bg-gold/20"
                style={{ clipPath: OCTAGON_CLIP }}
              >
                <Phone className="w-4 h-4 text-gold" />
              </div>
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-cream/30 hover:text-cream/50 transition-colors text-sm"
            >
              <div
                className="w-10 h-10 bg-cream/5 flex items-center justify-center"
                style={{ clipPath: OCTAGON_CLIP }}
              >
                <Mail className="w-4 h-4 text-cream/30" />
              </div>
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Services column */}
        <div className="md:col-span-3">
          <h4 className="font-display font-bold text-sm mb-6 tracking-[0.2em] text-cream/50">
            SERVICES
          </h4>
          <ul className="space-y-3">
            {['Replacement Roofs', 'Roof Maintenance', 'Storm Damage Repair', 'Emergency Leak Repair', 'Missing Shingles', 'Vent & Flashing Sealing'].map((s) => (
              <li key={s} className="text-sm text-cream/25 hover:text-cream/50 transition-colors cursor-default">{s}</li>
            ))}
          </ul>
        </div>

        {/* Why Us column */}
        <div className="md:col-span-4">
          <h4 className="font-display font-bold text-sm mb-6 tracking-[0.2em] text-cream/50">
            WHY US
          </h4>
          <ul className="space-y-4">
            {[
              { icon: Clock, text: 'Same-Day Emergency Service' },
              { icon: ShieldCheck, text: 'Warranty on All Work' },
              { icon: Zap, text: 'New Roof Installation' },
              { icon: Star, text: 'Angie Leads, HomeAdvisor & Yelp' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-cream/25">
                <Icon className="w-3.5 h-3.5 text-gold/40 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-8 border-t border-cream/5 space-y-3">
            <div className="flex items-start gap-3 text-cream/20 text-xs">
              <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
              <span>{ADDRESS}</span>
            </div>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream/20 hover:text-cream/50 transition-colors text-xs"
            >
              <Facebook className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Follow us on Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-cream/15 tracking-wider">
          &copy; {new Date().getFullYear()} Same Day Emergency Roofing Service. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-[11px] text-cream/15 tracking-wider">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Services />
      <StopLeaks />
      <BeforeAfter />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
    </div>
  );
}
