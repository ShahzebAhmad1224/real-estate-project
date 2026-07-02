import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Bath,
  BedDouble,
  ChevronDown,
  Download,
  ExternalLink,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  Star,
  X
} from 'lucide-react';
import {
  amenities,
  apartments,
  contactActions,
  faqs,
  features,
  floorPlans,
  gallery,
  heroStats,
  investmentStats,
  navItems,
  nearby,
  progress,
  testimonials,
  timeline,
  trustBadges,
  values
} from './data/siteData';

const phoneNumber = '+92 300 0000000';
const whatsappUrl = 'https://wa.me/923000000000?text=I%20want%20details%20about%20Danish%20Heights%20apartments';

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-header ${align === 'left' ? 'text-left mx-0' : 'text-center mx-auto'}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Button({ children, href = '#contact', variant = 'primary', className = '', ...props }) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} {...props}>
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}

function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-shell ${solid ? 'nav-solid' : ''}`}>
      <nav className="container nav-bar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Danish Heights home">
          <span className="brand-mark">DH</span>
          <span>
            Danish Heights
            <small>Peshawar</small>
          </span>
        </a>

        <div className="nav-links" aria-label="Primary links">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="nav-call" href={`tel:${phoneNumber.replaceAll(' ', '')}`}>
            <Phone size={16} aria-hidden="true" />
            Call Now
          </a>
          <Button href="#contact" className="nav-visit">
            Book Visit
          </Button>
          <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="mobile-close">
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
          <Button href="#contact" onClick={() => setOpen(false)}>
            Book Visit
          </Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="hero-kicker">
            <MapPin size={18} aria-hidden="true" />
            Amjid Shaheed Road, opposite Islamia College
          </span>
          <h1>Luxury Living in the Heart of Peshawar</h1>
          <p>
            Danish Heights brings secure, elevated apartment living to Danish Abad with premium 1, 2,
            and 3 bedroom residences designed for families, overseas Pakistanis, and serious investors.
          </p>
          <div className="hero-buttons">
            <Button href="#contact">Book Site Visit</Button>
            <Button href="#apartments" variant="ghost">
              View Apartments
            </Button>
          </div>
          <div className="trust-row" aria-label="Trust highlights">
            {trustBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>

        <aside className="hero-card reveal delay-1" aria-label="Project snapshot">
          <div>
            <span className="eyebrow">Project Snapshot</span>
            <h2>Bookings now open</h2>
          </div>
          <div className="stat-list">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="price-chip">
            Request current availability <ArrowDown size={16} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section id="about" className="section intro-section">
      <div className="container intro-grid">
        <div className="intro-image reveal">
          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury apartment lounge with warm natural light"
            loading="lazy"
          />
          <div className="floating-note">
            <strong>Premium residential planning</strong>
            <span>Designed for secure family living and reliable rental value.</span>
          </div>
        </div>
        <div className="reveal delay-1">
          <SectionHeader
            align="left"
            eyebrow="Company Introduction"
            title="A refined residential address for modern Peshawar."
            text="Danish Heights is planned as a high-trust apartment community in one of Peshawar’s most recognizable education and lifestyle corridors."
          />
          <div className="value-grid">
            {values.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.year}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section feature-section">
      <div className="container">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Premium details that turn a building into an address."
          text="Every feature is selected to improve daily comfort, resident confidence, and long-term investment quality."
        />
        <div className="feature-grid">
          {features.map(([title, text, Icon], index) => (
            <article className="feature-card reveal" style={{ '--delay': `${index * 35}ms` }} key={title}>
              <div className="icon-box">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Apartments() {
  return (
    <section id="apartments" className="section apartments-section">
      <div className="container">
        <SectionHeader
          eyebrow="Apartment Showcase"
          title="Choose the residence that fits your life and portfolio."
          text="Explore refined layouts with practical family flow, privacy, and high rental appeal."
        />
        <div className="apartment-grid">
          {apartments.map((apartment) => (
            <article className="apartment-card reveal" key={apartment.name}>
              <img src={apartment.image} alt={`${apartment.name} interior`} loading="lazy" />
              <div className="apartment-body">
                <div>
                  <span className="eyebrow">{apartment.price} starting</span>
                  <h3>{apartment.name}</h3>
                  <p>{apartment.plan}</p>
                </div>
                <div className="meta-grid">
                  <span><BedDouble size={17} /> {apartment.beds} Bed</span>
                  <span><Bath size={17} /> {apartment.baths} Bath</span>
                  <span><Ruler size={17} /> {apartment.area}</span>
                </div>
                <div className="card-actions">
                  <a href="#floor-plans"><Download size={16} /> Floor Plan</a>
                  <a href="#contact">Book Visit</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="section amenities-section">
      <div className="container">
        <SectionHeader
          eyebrow="Amenities"
          title="Everything expected from a premium family residence."
          text="A carefully planned mix of wellness, convenience, safety, worship, retail, and connectivity."
        />
        <div className="amenity-grid">
          {amenities.map(([title, Icon]) => (
            <div className="amenity-tile reveal" key={title}>
              <Icon size={24} aria-hidden="true" />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="section location-section">
      <div className="container location-grid">
        <div className="reveal">
          <SectionHeader
            align="left"
            eyebrow="Location"
            title="Connected to Peshawar’s education, healthcare, and business routes."
            text="Danish Heights sits near Islamia College with excellent access for families, professionals, and tenants."
          />
          <div className="nearby-grid">
            {nearby.map(([place, time]) => (
              <span key={place}>
                <strong>{place}</strong>
                {time}
              </span>
            ))}
          </div>
        </div>
        <div className="map-frame reveal delay-1">
          <iframe
            title="Danish Heights location map"
            src="https://www.google.com/maps?q=Islamia%20College%20Peshawar%20Danish%20Abad&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function FloorPlans() {
  return (
    <section id="floor-plans" className="section floor-section">
      <div className="container">
        <SectionHeader
          eyebrow="Floor Plans"
          title="Practical layouts with a premium sense of arrival."
          text="Each plan balances privacy, daylight, circulation, and rentable efficiency."
        />
        <div className="floor-grid">
          {floorPlans.map(([title, area, text]) => (
            <article className="floor-card reveal" key={title}>
              <div className="floor-diagram" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div>
                <h3>{title}</h3>
                <strong>{area}</strong>
                <p>{text}</p>
              </div>
              <a href="#contact"><Download size={16} /> Download PDF</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConstructionProgress() {
  return (
    <section className="section progress-section">
      <div className="container progress-grid">
        <div className="reveal">
          <SectionHeader
            align="left"
            eyebrow="Construction Progress"
            title="Transparent progress for confident buyers."
            text="Track key development milestones and request the latest site visit schedule from the sales team."
          />
          <div className="progress-list">
            {progress.map(([label, value]) => (
              <div key={label}>
                <div className="progress-label">
                  <span>{label}</span>
                  <strong>{value}%</strong>
                </div>
                <div className="progress-bar">
                  <span style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="progress-gallery reveal delay-1">
          {gallery.slice(0, 3).map((image, index) => (
            <img key={image} src={image} alt={`Construction and interior progress ${index + 1}`} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [preview, setPreview] = useState(null);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <SectionHeader
          eyebrow="Image Gallery"
          title="A visual sense of refined residential living."
          text="Browse premium interiors, exterior inspiration, and lifestyle spaces for Danish Heights."
        />
        <div className="masonry-gallery">
          {gallery.map((image, index) => (
            <button key={image} className="gallery-item reveal" onClick={() => setPreview(image)}>
              <img src={image} alt={`Danish Heights gallery view ${index + 1}`} loading="lazy" />
              <span><ExternalLink size={17} /> Preview</span>
            </button>
          ))}
        </div>
      </div>
      {preview && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery preview" onClick={() => setPreview(null)}>
          <button aria-label="Close preview"><X size={28} /></button>
          <img src={preview} alt="Expanded Danish Heights gallery preview" />
        </div>
      )}
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by buyers who value location and clarity."
          text="Real estate decisions need confidence. Danish Heights is built around transparent guidance and a premium resident promise."
        />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card reveal" key={item.name}>
              <div className="rating"><Star size={16} fill="currentColor" /> {item.rating}</div>
              <p>“{item.text}”</p>
              <div className="person">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span>
                  <strong>{item.name}</strong>
                  {item.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestmentBenefits() {
  const chartBars = useMemo(() => [68, 82, 74, 91, 87, 96], []);

  return (
    <section className="section investment-section">
      <div className="container investment-grid">
        <div className="reveal">
          <SectionHeader
            align="left"
            eyebrow="Investment Benefits"
            title="A high-demand address with everyday utility."
            text="Prime connectivity, family-focused amenities, and nearby institutions create durable demand for rentals and resale."
          />
          <div className="investment-stats">
            {investmentStats.map(([value, label, text]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="chart-card reveal delay-1" aria-label="Market trend chart">
          <div className="chart-header">
            <span>Market trend index</span>
            <strong>+31%</strong>
          </div>
          <div className="chart-bars">
            {chartBars.map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <p>Indicative growth pattern based on location demand, tenant depth, and infrastructure access.</p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <SectionHeader
          align="left"
          eyebrow="FAQ"
          title="Answers before you speak to sales."
          text="A quick guide for families, overseas buyers, and investors comparing premium apartments in Peshawar."
        />
        <div className="accordion">
          {faqs.map(([question, answer], index) => (
            <article className={active === index ? 'open' : ''} key={question}>
              <button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}>
                {question}
                <ChevronDown size={20} aria-hidden="true" />
              </button>
              <div className="answer">
                <p>{answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function submitInquiry(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <SectionHeader
            align="left"
            eyebrow="Contact"
            title="Request pricing, availability, and a private site visit."
            text="Share your preferred apartment type and the Danish Heights team will guide you through availability, payment plan, and visit scheduling."
          />
          <div className="contact-actions">
            {contactActions.slice(0, 3).map(([label, Icon]) => (
              <a key={label} href={label === 'WhatsApp' ? whatsappUrl : label === 'Call Now' ? `tel:${phoneNumber.replaceAll(' ', '')}` : '#contact'}>
                <Icon size={19} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
          <address>
            <MapPin size={18} aria-hidden="true" />
            Amjid Shaheed Road, Opposite Islamia College, Danish Abad, Peshawar
          </address>
        </div>
        <form className="inquiry-form reveal delay-1" onSubmit={submitInquiry}>
          <label>
            Name
            <input required name="name" autoComplete="name" placeholder="Your full name" />
          </label>
          <label>
            Phone
            <input required name="phone" type="tel" autoComplete="tel" placeholder="+92 300 0000000" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" placeholder="name@example.com" />
          </label>
          <label>
            Apartment Type
            <select required name="apartmentType" defaultValue="">
              <option value="" disabled>Select apartment type</option>
              <option>1 Bedroom</option>
              <option>2 Bedroom</option>
              <option>3 Bedroom</option>
            </select>
          </label>
          <label className="full">
            Message
            <textarea name="message" rows="4" placeholder="I want current pricing and available floors." />
          </label>
          <button type="submit" className="btn btn-primary form-submit">
            <span>Book Visit</span>
            <Mail size={18} aria-hidden="true" />
          </button>
          {sent && <p className="form-success" role="status">Thank you. Your inquiry is ready for the sales team follow-up.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#home">
            <span className="brand-mark">DH</span>
            <span>
              Danish Heights
              <small>Luxury Apartments</small>
            </span>
          </a>
          <p>Premium 1, 2, and 3 bedroom apartments near Islamia College, Danish Abad, Peshawar.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:${phoneNumber.replaceAll(' ', '')}`}>{phoneNumber}</a>
          <a href={whatsappUrl}>WhatsApp Sales</a>
          <a href="mailto:sales@danishheights.pk">sales@danishheights.pk</a>
        </div>
        <div className="mini-map">
          <iframe
            title="Danish Heights mini map"
            src="https://www.google.com/maps?q=Islamia%20College%20Peshawar%20Danish%20Abad&output=embed"
            loading="lazy"
          />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Danish Heights. All rights reserved.</span>
        <span><a href="#home">Privacy Policy</a> · <a href="#home">Terms</a></span>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.14 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <WhyChooseUs />
        <Apartments />
        <Amenities />
        <Location />
        <FloorPlans />
        <ConstructionProgress />
        <Gallery />
        <Testimonials />
        <InvestmentBenefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
