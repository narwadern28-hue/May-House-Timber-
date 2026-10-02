import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Hammer,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  TreePine,
  X,
} from 'lucide-react';

type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

const imageBase = '?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400';

const products: Product[] = [
  {
    name: 'The Liora Sofa',
    category: 'Sofas',
    description: 'Deep, generous seating with a warm oak frame and tailored upholstery.',
    image: `https://images.pexels.com/photos/7005298/pexels-photo-7005298.jpeg${imageBase}`,
    alt: 'Warm modern living room with a comfortable sofa',
  },
  {
    name: 'Kora Platform Bed',
    category: 'Beds',
    description: 'A quiet, grounded silhouette crafted to make the bedroom feel restful.',
    image: `https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg${imageBase}`,
    alt: 'Minimal bedroom with a wooden bed and soft lighting',
  },
  {
    name: 'The Mira Dining Table',
    category: 'Dining Tables',
    description: 'A solid timber centrepiece with a refined profile for everyday hosting.',
    image: `https://images.pexels.com/photos/7546715/pexels-photo-7546715.jpeg${imageBase}`,
    alt: 'Contemporary dining table and chairs in a bright home',
  },
  {
    name: 'Asha Lounge Chair',
    category: 'Chairs',
    description: 'Soft curves, natural grain, and an easy shape for slow afternoons.',
    image: `https://images.pexels.com/photos/7195559/pexels-photo-7195559.jpeg${imageBase}`,
    alt: 'Elegant neutral dining chairs around a table',
  },
  {
    name: 'Nara Wardrobe',
    category: 'Wardrobes',
    description: 'Thoughtful storage with calm proportions and beautifully finished doors.',
    image: `https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg${imageBase}`,
    alt: 'Premium furniture showroom with bedroom furniture',
  },
  {
    name: 'Arlo TV Unit',
    category: 'TV Units',
    description: 'Clean-lined media storage that lets the timber detail take centre stage.',
    image: `https://images.pexels.com/photos/7587311/pexels-photo-7587311.jpeg${imageBase}`,
    alt: 'Light-filled living room and kitchen interior',
  },
  {
    name: 'The Studio Desk',
    category: 'Office Furniture',
    description: 'An understated work surface designed for focus, flow, and long days.',
    image: `https://images.pexels.com/photos/27945011/pexels-photo-27945011.jpeg${imageBase}`,
    alt: 'Minimal apartment interior with a large timber table',
  },
  {
    name: 'Hand-finished Doors',
    category: 'Wooden Doors',
    description: 'Architectural timberwork that makes the first impression feel considered.',
    image: `https://images.pexels.com/photos/5974010/pexels-photo-5974010.jpeg${imageBase}`,
    alt: 'Woodworking tools and timber pieces in a workshop',
  },
  {
    name: 'Made For Your Room',
    category: 'Custom Furniture',
    description: 'A one-off piece developed around your dimensions, routine, and point of view.',
    image: `https://images.pexels.com/photos/7109996/pexels-photo-7109996.jpeg${imageBase}`,
    alt: 'Craftsperson carving a wooden piece by hand',
  },
  {
    name: 'Selected Timber',
    category: 'Timber & Wood Materials',
    description: 'Natural boards and considered finishes for projects with a point of view.',
    image: `https://images.pexels.com/photos/4888860/pexels-photo-4888860.jpeg${imageBase}`,
    alt: 'Close-up of rich wood grain and sawdust',
  },
];

const categories = [
  'All',
  'Sofas',
  'Beds',
  'Dining Tables',
  'Chairs',
  'Wardrobes',
  'TV Units',
  'Office Furniture',
  'Wooden Doors',
  'Custom Furniture',
  'Timber & Wood Materials',
];

const galleryItems = [
  {
    title: 'Living in warm neutrals',
    type: 'Living rooms',
    image: `https://images.pexels.com/photos/7005298/pexels-photo-7005298.jpeg${imageBase}`,
    alt: 'Warm modern living room with sofa and dining area',
    className: 'gallery-tall',
  },
  {
    title: 'The beauty of enough',
    type: 'Bedrooms',
    image: `https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg${imageBase}`,
    alt: 'Calm modern bedroom with soft beige bedding',
    className: '',
  },
  {
    title: 'A table to gather around',
    type: 'Dining rooms',
    image: `https://images.pexels.com/photos/7546715/pexels-photo-7546715.jpeg${imageBase}`,
    alt: 'Modern dining room with a large timber table',
    className: 'gallery-wide',
  },
  {
    title: 'Material, up close',
    type: 'Timber work',
    image: `https://images.pexels.com/photos/4888860/pexels-photo-4888860.jpeg${imageBase}`,
    alt: 'Texture of natural wood with fine sawdust',
    className: '',
  },
  {
    title: 'A considered corner',
    type: 'Custom projects',
    image: `https://images.pexels.com/photos/27945011/pexels-photo-27945011.jpeg${imageBase}`,
    alt: 'Refined dining area with timber table and pendant light',
    className: 'gallery-tall',
  },
  {
    title: 'Made by hand',
    type: 'Wooden furniture',
    image: `https://images.pexels.com/photos/5710896/pexels-photo-5710896.jpeg${imageBase}`,
    alt: 'Woodworker shaping a timber piece in a workshop',
    className: '',
  },
];

const trustPoints = [
  { label: 'Quality Timber', icon: TreePine },
  { label: 'Expert Craftsmanship', icon: Hammer },
  { label: 'Custom Designs', icon: Ruler },
  { label: 'Long-Lasting Furniture', icon: ShieldCheck },
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Custom Furniture', href: '#custom' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [activeCategory]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || selectedProduct ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, selectedProduct]);

  const visibleProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollTo = (id: string) => {
    closeMenu();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('success');
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="hero" id="home">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand-lockup" href="#home" onClick={closeMenu} aria-label="May Timber home">
            <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-wordmark"><strong>May Timber</strong><small>Furniture &amp; Timber</small></span>
          </a>

          <div className={`desktop-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <button className="nav-enquiry" type="button" onClick={() => scrollTo('#contact')}>
              Enquire <ArrowUpRight size={15} strokeWidth={1.8} />
            </button>
          </div>

          <button className="menu-toggle" type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        <div className="hero-content section-wrap">
          <p className="hero-brand reveal-on-load">May Timber</p>
          <h1 className="reveal-on-load reveal-delay-1">Furniture that brings <em>your space</em> to life.</h1>
          <p className="hero-description reveal-on-load reveal-delay-2">Premium timber and beautifully crafted furniture made for homes, offices, and commercial spaces.</p>
          <div className="hero-actions reveal-on-load reveal-delay-3">
            <button className="button button-light" type="button" onClick={() => scrollTo('#products')}>Explore Our Furniture <ArrowRight size={17} /></button>
            <button className="text-button text-button-light" type="button" onClick={() => scrollTo('#contact')}>Contact Us <ArrowUpRight size={17} /></button>
          </div>
        </div>

        <button className="hero-scroll" type="button" onClick={() => scrollTo('#about')}><span>Scroll to explore</span><span className="scroll-line" /></button>
      </header>

      <section className="trust-bar" aria-label="Why choose May Timber">
        <div className="section-wrap trust-grid">
          {trustPoints.map(({ label, icon: Icon }, index) => (
            <div className="trust-point reveal" key={label} style={{ transitionDelay: `${index * 80}ms` }} data-reveal><Icon size={18} strokeWidth={1.5} /><span>{label}</span></div>
          ))}
        </div>
      </section>

      <main>
        <section className="about-section section-wrap" id="about">
          <div className="about-copy reveal" data-reveal>
            <p className="eyebrow">The May Timber approach</p>
            <h2>Good spaces begin with <em>good materials.</em></h2>
            <p className="section-lede">May Timber is a furniture and timber studio focused on the quiet confidence of well-made things. We bring together considered materials, skilled hands, and designs that feel right in the room today and years from now.</p>
            <p className="section-lede section-lede-small">From a single statement piece to a complete commercial fit-out, every detail starts with listening to how you want to live and work.</p>
            <button className="text-button text-button-dark" type="button" onClick={() => scrollTo('#custom')}>Discover our craft <ArrowUpRight size={17} /></button>
          </div>
          <div className="about-visual reveal reveal-delay-1" data-reveal>
            <div className="image-frame image-frame-large"><img src="https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1000" alt="Warm, elegant furniture showroom with bedroom and living furniture" loading="lazy" /></div>
            <div className="image-caption"><span>01</span><span>Thoughtful design, naturally.</span></div>
          </div>
        </section>

        <section className="products-section section-wrap" id="products">
          <div className="section-heading reveal" data-reveal>
            <div><p className="eyebrow">The collection</p><h2>Pieces with a sense of <em>place.</em></h2></div>
            <p className="section-intro">Explore furniture made to feel at home in the way you live.</p>
          </div>

          <div className="category-scroller reveal reveal-delay-1" data-reveal aria-label="Product categories">
            {categories.map((category) => <button className={`category-button ${activeCategory === category ? 'is-active' : ''}`} type="button" key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>

          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article className="product-card reveal" data-reveal key={product.name} style={{ transitionDelay: `${Math.min(index, 5) * 70}ms` }}>
                <button className="product-image" type="button" onClick={() => setSelectedProduct(product)} aria-label={`View details for ${product.name}`}><img src={product.image} alt={product.alt} loading="lazy" /><span className="image-arrow"><ArrowUpRight size={17} /></span></button>
                <div className="product-info"><p className="product-category">{product.category}</p><h3>{product.name}</h3><p>{product.description}</p><button className="product-link" type="button" onClick={() => setSelectedProduct(product)}>View details <ArrowRight size={15} /></button></div>
              </article>
            ))}
          </div>
        </section>

        <section className="custom-section" id="custom">
          <div className="custom-visual reveal" data-reveal><img src="https://images.pexels.com/photos/7109996/pexels-photo-7109996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1200" alt="Craftsperson shaping a wooden furniture part by hand" loading="lazy" /><span className="custom-number">02 / custom work</span></div>
          <div className="custom-copy reveal reveal-delay-1" data-reveal><p className="eyebrow eyebrow-light">Made around you</p><h2>Your idea. <em>Our craftsmanship.</em></h2><p>The best furniture fits more than a room. Tell us about your dimensions, your style, the material you love, and the way you need the piece to work. We will help shape the details from there.</p><button className="button button-outline-light" type="button" onClick={() => scrollTo('#contact')}>Request a Custom Design <ArrowUpRight size={17} /></button></div>
        </section>

        <section className="gallery-section section-wrap" id="gallery">
          <div className="section-heading gallery-heading reveal" data-reveal><div><p className="eyebrow">In the room</p><h2>Made to be <em>lived with.</em></h2></div><p className="section-intro">A glimpse of timber, texture, and the spaces they make warmer.</p></div>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => <figure className={`gallery-item reveal ${item.className}`} data-reveal key={item.title} style={{ transitionDelay: `${index * 70}ms` }}><img src={item.image} alt={item.alt} loading="lazy" /><figcaption><span>{item.type}</span><strong>{item.title}</strong></figcaption></figure>)}
          </div>
        </section>

        <section className="why-section section-wrap">
          <div className="why-intro reveal" data-reveal><p className="eyebrow">Why May Timber</p><h2>Furniture with <em>staying power.</em></h2><p>Material-led, detail-minded, and made for the rhythm of real life.</p></div>
          <div className="why-grid">
            {[
              { icon: TreePine, number: '01', title: 'Premium Materials', text: 'We start with timber and finishes chosen for their character, feel, and ability to age beautifully.' },
              { icon: Hammer, number: '02', title: 'Skilled Craftsmanship', text: 'Every edge, joint, and surface is treated as part of the experience of the piece.' },
              { icon: Layers3, number: '03', title: 'Custom Designs', text: 'Your space and your way of living lead the brief, not the other way around.' },
              { icon: ShieldCheck, number: '04', title: 'Durable & Reliable', text: 'We design with daily use in mind, so beautiful furniture can be thoroughly lived with.' },
            ].map(({ icon: Icon, number, title, text }, index) => <article className="why-item reveal" data-reveal key={title} style={{ transitionDelay: `${index * 90}ms` }}><div className="why-topline"><span>{number}</span><Icon size={21} strokeWidth={1.4} /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-intro reveal" data-reveal><p className="eyebrow">Start a conversation</p><h2>Let&apos;s make room for <em>something good.</em></h2><p className="section-lede">Have a piece in mind, a space to furnish, or timber to source? Share a few details and the May Timber team can take it from there.</p><div className="contact-details"><div className="contact-detail"><MapPin size={18} /><div><span>Address</span><strong>Address placeholder</strong></div></div><div className="contact-detail"><Phone size={18} /><div><span>Phone</span><strong>Phone number placeholder</strong></div></div><div className="contact-detail"><Mail size={18} /><div><span>Email</span><strong>Email placeholder</strong></div></div><div className="contact-detail"><Clock3 size={18} /><div><span>Business hours</span><strong>Business hours placeholder</strong></div></div></div></div>

          <div className="contact-form-wrap reveal reveal-delay-1" data-reveal>
            <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><p className="eyebrow">Enquiry form</p><span>We&apos;ll get back to you.</span></div><div className="form-grid"><label><span>Name</span><input type="text" name="name" placeholder="Your name" required /></label><label><span>Phone Number</span><input type="tel" name="phone" placeholder="Your phone number" required /></label><label><span>Email</span><input type="email" name="email" placeholder="Your email address" required /></label><label><span>Furniture Requirement</span><input type="text" name="requirement" placeholder="e.g. dining table, custom storage" required /></label><label className="full-field"><span>Message</span><textarea name="message" placeholder="Tell us a little about your space or project" rows={4} required /></label></div><button className="button button-dark form-submit" type="submit">Send Enquiry <Send size={16} /></button>{formStatus === 'success' && <p className="form-success"><Check size={16} /> Your enquiry has been noted. Connect the form to your inbox to receive submissions.</p>}</form>
            <div className="contact-actions"><button className="contact-action" type="button" onClick={() => window.alert('Phone number placeholder. Add your number to connect this button.')}><Phone size={17} /><span>Call May Timber</span><ArrowUpRight size={15} /></button><button className="contact-action" type="button" onClick={() => window.alert('WhatsApp number placeholder. Add your number to connect this button.')}><MessageCircle size={17} /><span>WhatsApp Us</span><ArrowUpRight size={15} /></button></div>
          </div>
        </section>

        <section className="map-section section-wrap reveal" data-reveal aria-label="Google Maps location placeholder"><div className="map-placeholder"><div className="map-grid-lines" aria-hidden="true" /><div className="map-pin"><MapPin size={19} fill="currentColor" /></div><div className="map-label"><span>Find the showroom</span><strong>Google Maps location placeholder</strong></div><span className="map-compass">N</span></div></section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-top"><div className="footer-brand"><a className="brand-lockup brand-lockup-footer" href="#home"><span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span><span className="brand-wordmark"><strong>May Timber</strong><small>Furniture &amp; Timber</small></span></a><p>Crafted from Wood.<br />Built to Last.</p></div><div className="footer-column"><p className="footer-label">Explore</p>{navItems.slice(0, 5).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div><div className="footer-column"><p className="footer-label">Categories</p>{['Sofas', 'Dining Tables', 'Beds', 'Custom Furniture', 'Timber & Wood'].map((item) => <a href="#products" key={item}>{item}</a>)}</div><div className="footer-column footer-contact"><p className="footer-label">Contact</p><span>Address placeholder</span><span>Phone number placeholder</span><span>Email placeholder</span><span>Business hours placeholder</span></div></div>
        <div className="section-wrap footer-bottom"><span>Copyright © 2026 May Timber</span><span>Information placeholders are ready to be updated.</span><div className="social-links"><a href="#contact" aria-label="May Timber social message"><MessageCircle size={17} /></a><a href="#contact" aria-label="May Timber direct message"><Send size={17} /></a><a href="#contact" aria-label="May Timber email"><Mail size={17} /></a></div></div>
      </footer>

      {selectedProduct && <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedProduct(null)}><div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setSelectedProduct(null)} aria-label="Close product details"><X size={20} /></button><img src={selectedProduct.image} alt={selectedProduct.alt} /><div className="modal-copy"><p className="product-category">{selectedProduct.category}</p><h2 id="product-modal-title">{selectedProduct.name}</h2><p>{selectedProduct.description}</p><p className="modal-note">Product details, dimensions, material options, and pricing can be added here when available.</p><button className="button button-dark" type="button" onClick={() => { setSelectedProduct(null); scrollTo('#contact'); }}>Ask about this piece <ArrowUpRight size={16} /></button></div></div></div>}
    </div>
  );
}

export default App;
