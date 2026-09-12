import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import "./App.css";

const packages = [
  {
    name: "Starter",
    price: "₹7,000–₹12,000",
    note: "A polished first step for local businesses.",
    features: [
      "3–5 responsive pages",
      "WhatsApp + call buttons",
      "Contact form + Google Maps",
      "Basic SEO + social links",
    ],
  },
  {
    name: "Business",
    price: "₹15,000–₹25,000",
    note: "The sweet spot for growing businesses.",
    features: [
      "5–8 custom-designed pages",
      "Product or service catalogue",
      "Gallery + enquiry form",
      "SEO, deployment + integrations",
    ],
    popular: true,
  },
  {
    name: "Professional",
    price: "₹25,000–₹40,000",
    note: "A premium digital presence built to scale.",
    features: [
      "8–12 premium pages",
      "Advanced responsive design",
      "Animations + dynamic enquiries",
      "Analytics + Google Business setup",
    ],
  },
  {
    name: "Advanced App",
    price: "₹40,000–₹70,000+",
    note: "Custom workflows for serious operations.",
    features: [
      "Custom frontend + backend API",
      "Database + authentication",
      "Admin dashboard + CRUD",
      "User and enquiry management",
    ],
  },
];
const examples = [
  ["Restaurant", "Business Website", "₹10,000–₹20,000"],
  ["Cement Dealer", "Business Website", "₹12,000–₹20,000"],
  ["Wholesaler", "Business Website", "₹15,000–₹30,000"],
  ["YouTube News Channel", "Professional Website", "₹10,000–₹18,000"],
];
const addOns = [
  ["Extra Page", "₹500–₹1,500"],
  ["Product Catalogue", "₹2,000–₹5,000"],
  ["Basic SEO", "₹2,000–₹5,000"],
  ["Admin Panel", "₹8,000–₹20,000+"],
  ["Payment Integration", "₹3,000–₹7,000"],
  ["Website Maintenance", "₹1,500–₹5,000/mo"],
];
const recentProjects = [
  {
    title: "Homely",
    category: "Travel Platform",
    result: "Live project",
    summary:
      "A welcoming stay-discovery platform for browsing homes, cabins, villas, and unique places around the world.",
    stack: ["React", "Tailwind", "Listings UX"],
    accent: "blue",
    liveUrl: "https://homely-syhy.onrender.com/",
    image: "/assets/projects_imgs/Homely.png",
  },
  {
    title: "Northstar Studio",
    category: "Landing Page",
    // result: "",
    summary:
      "A premium service website built to attract leads, explain offers clearly, and turn visits into booked conversations.",
    stack: ["Design System", "SEO", "Conversion"],
    accent: "orange",
    // liveUrl: "",

    image: "/assets/projects_imgs/LandingPage.png",
  },
  {
    title: "BuyNest",
    category: "E-commerce",
    result: "Live project",
    summary:
      "A modern shopping experience for discovering premium fashion, electronics, and lifestyle products with a smooth customer journey.",
    stack: ["React", "E-commerce", "Shopping UX"],
    accent: "teal",
    liveUrl: "https://buynest-ecommerce-psi.vercel.app/",
    image: "/assets/projects_imgs/buynest.png",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell min-h-screen antialiased">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DRD devOps home">
          <img
            className="brand-logo"
            src="/assets/projects_imgs/logo.png"
            alt=""
          />
        </a>
        <button
          className="menu-toggle transition-colors duration-200 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>
            Our approach
          </a>
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Start a project <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Websites that work as hard as you
              do
            </div>
            <h1>
              Turn your business
              <br />
              <em>into a destination.</em>
            </h1>
            <p className="hero-lede">
              We design fast, thoughtful digital experiences for the businesses
              shaping their local communities and beyond.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary transition-transform duration-200 hover:-translate-y-0.5"
                href="#pricing"
              >
                Explore packages <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#contact">
                <MessageCircle size={17} /> Talk to our team
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <Check size={15} /> Clear pricing
              </span>
              <span>
                <Check size={15} /> Local support
              </span>
              <span>
                <Check size={15} /> Built to grow
              </span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Abstract illustration of a website dashboard"
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="dashboard-card">
              <div className="dash-top">
                <span className="mini-logo">
                  <Code2 size={12} />
                </span>
                <span className="dash-line short" />
                <span className="dash-menu">•••</span>
              </div>
              <div className="dash-body">
                <div className="dash-heading" />
                <div className="dash-heading small" />
                <div className="dash-row">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="dash-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="float-label label-a">
              <Globe2 size={16} />
              <span>Reach further</span>
            </div>
            <div className="float-label label-b">
              <Sparkles size={15} />
              <span>Make an impression</span>
            </div>
            <div className="float-label label-c">
              <Search size={15} />
              <span>SEO ready</span>
            </div>
          </div>
        </section>
        <section className="intro-strip" id="services">
          <div className="section-kicker">What we do</div>
          <div className="intro-grid">
            <h2>
              Digital clarity for
              <br />
              <em>ambitious businesses.</em>
            </h2>
            <p>
              From your first landing page to a full business platform, DRD
              devOps brings strategy, design and engineering into one steady
              partnership.
            </p>
            <div className="service-list">
              <span>Websites</span>
              <span>Web applications</span>
              <span>Growth systems</span>
            </div>
          </div>
        </section>
        <section className="recent-section" id="work">
          <div className="recent-header">
            <div>
              <div className="section-kicker">Recent work</div>
              <h2>
                Built for businesses that want
                <br />
                <em>more traction online.</em>
              </h2>
            </div>
            <a className="text-link" href="#contact">
              View more projects <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="recent-grid">
            {recentProjects.map(
              ({
                title,
                category,
                result,
                summary,
                stack,
                accent,
                liveUrl,
                image,
              }) => (
                <article className={`project-card ${accent}`} key={title}>
                  <div className="project-badge">{category}</div>
                  <div className="project-visual" aria-hidden={!image}>
                    {image ? (
                      <img
                        className="project-image"
                        src={image}
                        alt={`${title} project preview`}
                      />
                    ) : (
                      <>
                        <div className="visual-topbar">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="visual-hero" />
                        <div className="visual-row row-one" />
                        <div className="visual-row row-two" />
                        <div className="visual-grid">
                          <span />
                          <span />
                          <span />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="project-copy">
                    <div className="project-result">{result}</div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                    <div className="project-tags">
                      {stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {liveUrl ? (
                      <a
                        className="project-link "
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View live project <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="project-link cursor-pointer project-soon-link "
                      >
                        Live link coming soon
                      </a>
                    )}
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Choose your starting point</div>
              <h2>
                Simple packages.
                <br />
                <em>Serious potential.</em>
              </h2>
            </div>
            <p>
              Every project is tailored to your goals, but these packages make
              the first conversation easy.
            </p>
          </div>
          <div className="package-grid">
            {packages.map((item, index) => (
              <article
                className={
                  item.popular ? "package-card featured" : "package-card"
                }
                key={item.name}
              >
                {item.popular && (
                  <div className="popular-tag">
                    Most chosen <Sparkles size={13} />
                  </div>
                )}
                <div className="package-number">0{index + 1}</div>
                <h3>{item.name}</h3>
                <p className="package-note">{item.note}</p>
                <div className="package-price">{item.price}</div>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="package-link">
                  Discuss this package <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
          <div className="custom-banner">
            <div className="custom-icon">
              <Layers3 size={22} />
            </div>
            <div>
              <h3>Need something more custom?</h3>
              <p>
                CRM, inventory, booking, SaaS and multi-user systems start at
                ₹70,000.
              </p>
            </div>
            <a className="button button-dark" href="#contact">
              Let’s talk <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="split-section" id="approach">
          <div className="split-copy">
            <div className="section-kicker">Built around your reality</div>
            <h2>
              Small details.
              <br />
              <em>Big difference.</em>
            </h2>
            <p>
              Good design should make your customers feel confident and make
              your team’s work easier. We build both into every project.
            </p>
            <div className="stat-row">
              <div>
                <strong>01</strong>
                <span>
                  Understand
                  <br />
                  your business
                </span>
              </div>
              <div>
                <strong>02</strong>
                <span>
                  Design with
                  <br />
                  purpose
                </span>
              </div>
              <div>
                <strong>03</strong>
                <span>
                  Build to
                  <br />
                  perform
                </span>
              </div>
            </div>
          </div>
          <div className="examples-panel">
            <div className="panel-heading">
              <span>Popular starting points</span>
              <ChevronDown size={17} />
            </div>
            {examples.map(([type, pack, price]) => (
              <div className="example-row" key={type}>
                <div>
                  <strong>{type}</strong>
                  <span>{pack}</span>
                </div>
                <b>{price}</b>
                <ArrowUpRight size={16} />
              </div>
            ))}
            <p className="panel-footnote">
              Domain and hosting are quoted separately or clearly included in
              your proposal.
            </p>
          </div>
        </section>
        <section className="addons-section">
          <div className="section-kicker">Add as you grow</div>
          <div className="addons-head">
            <h2>Make it yours.</h2>
            <p>Useful extras, transparently priced.</p>
          </div>
          <div className="addons-grid">
            {addOns.map(([name, price]) => (
              <div className="addon-row" key={name}>
                <span>{name}</span>
                <b>{price}</b>
                <ArrowUpRight size={15} />
              </div>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <div className="section-kicker light">Have a project in mind?</div>
            <h2>
              Let’s make
              <br />
              <em>something useful.</em>
            </h2>
            <p>
              Tell us a little about what you’re building. We’ll get back to you
              within one business day.
            </p>
            <div className="contact-details">
              <a href="tel:+917003508338">
                <Phone size={16} /> ++91 70035 08338
              </a>
              <a href="mailto:hello@drddevops.in">
                <Send size={16} /> hello@drddevops.in
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">
                  <Check size={22} />
                </div>
                <h3>Message received.</h3>
                <p>
                  We’ll be in touch shortly to hear more about your project.
                </p>
                <button
                  type="button"
                  className="button button-light transition-transform duration-200 hover:-translate-y-0.5"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <label>
                  Your name
                  <input required type="text" placeholder="Rahul Gupta" />
                </label>
                <label>
                  What are you building?
                  <select defaultValue="">
                    <option value="" disabled>
                      Select a package
                    </option>
                    <option>Starter Website</option>
                    <option>Business Website</option>
                    <option>Professional Website</option>
                    <option>Custom Web Application</option>
                  </select>
                </label>
                <label>
                  Tell us a little more
                  <textarea
                    required
                    rows="3"
                    placeholder="A few words about your business and what you need..."
                  />
                </label>
                <button
                  className="button button-light submit-button transition-transform duration-200 hover:-translate-y-0.5"
                  type="submit"
                >
                  Send enquiry <ArrowUpRight size={17} />
                </button>
              </>
            )}
          </form>
        </section>
      </main>
      <footer>
        <span className="brand">
          <img
            className="brand-logo"
            src="/assets/projects_imgs/logo.png"
            alt=""
          />
        </span>
        <span>Software development & digital solutions</span>
        <span>© 2024 DRD devOps</span>
      </footer>
    </div>
  );
}

export default App;
