import { FormEvent, ReactNode, useEffect, useState } from "react"

type Page = "home" | "about" | "faqs" | "start"
type IconName = "tax" | "business" | "education" | "home" | "person" | "compass" | "layers" | "heart" | "arrow" | "check" | "menu" | "close" | "phone" | "mail" | "pin" | "quote" | "chevron"

const image = {
  hero: "https://images.unsplash.com/photo-1573878414075-be35f08479e5?auto=format&fit=crop&w=1400&q=85",
  business:
    "https://images.unsplash.com/photo-1573879405559-ee7de4aae2d5?auto=format&fit=crop&w=1200&q=85",
  realEstate:
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=85",
  about:
    "https://images.unsplash.com/photo-1573878586940-330328d3cbeb?auto=format&fit=crop&w=1400&q=85",
}

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    tax: (
      <>
        <path d="M7 3h8l4 4v14H7z" />
        <path d="M15 3v5h5M10 13h6M10 17h4" />
      </>
    ),
    business: (
      <>
        <path d="M4 8h16v12H4z" />
        <path d="M9 8V5h6v3M4 13h16M10 12v3h4v-3" />
      </>
    ),
    education: (
      <>
        <path d="m3 10 9-5 9 5-9 5z" />
        <path d="M7 12.5V17c3 2.2 7 2.2 10 0v-4.5M21 10v6" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c.7-4.4 3.4-7 8-7s7.3 2.6 8 7" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z" />
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m5 5 14 14M19 5 5 19" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    quote: (
      <path d="M7 17H3v-4c0-4 2-6.5 6-7l1 2c-2 .7-3 1.8-3 4h3v5zm11 0h-4v-4c0-4 2-6.5 6-7l1 2c-2 .7-3 1.8-3 4h3v5z" />
    ),
    chevron: <path d="m7 10 5 5 5-5" />,
  }
  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  to,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  full = false,
}: {
  children: ReactNode
  to?: string
  variant?: "primary" | "secondary" | "outline" | "light"
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
  full?: boolean
}) {
  const cls = `btn btn-${variant}${full ? " btn-full" : ""}`
  if (to)
    return (
      <a className={cls} href={to}>
        {children}
        <Icon name="arrow" size={18} />
      </a>
    )
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled}>
      {children}
      {!disabled && <Icon name="arrow" size={18} />}
    </button>
  )
}

function Logo({ inFooter = false }: { inFooter?: boolean }) {
  if (inFooter) {
    return (
      <a className="logo footer-logo" href="#home" aria-label="ARock Solutions Pro home">
        <img src="/assets/arock-mark.png" alt="" />
        <span>
          <strong>ARock</strong>
          <small>Solutions Pro</small>
        </span>
      </a>
    )
  }

  return (
    <a className="logo header-logo" href="#home" aria-label="ARock Solutions Pro home">
      <img src="/assets/arock-logo.png" alt="ARock Solutions Pro" />
    </a>
  )
}

function Navbar({ page }: { page: Page }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  const go = () => setOpen(false)
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a className={page === "home" ? "active" : ""} href="#services">
            Services
          </a>
          <a className={page === "about" ? "active" : ""} href="#about">
            About
          </a>
          <a className={page === "faqs" ? "active" : ""} href="#faqs">
            FAQs
          </a>
        </nav>
        <div className="nav-actions">
          <Button to="#start">Get Started</Button>
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        <nav aria-label="Mobile navigation">
          <a onClick={go} href="#services">
            Services <Icon name="arrow" />
          </a>
          <a onClick={go} href="#about">
            About <Icon name="arrow" />
          </a>
          <a onClick={go} href="#faqs">
            FAQs <Icon name="arrow" />
          </a>
          <Button to="#start" full>
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}

const services = [
  {
    icon: "tax" as IconName,
    title: "Tax Services",
    text: "Tax preparation, planning and support for individuals and businesses.",
    id: "tax",
  },
  {
    icon: "business" as IconName,
    title: "Business Services",
    text: "Support for starting, organizing and growing your business.",
    id: "business",
  },
  {
    icon: "education" as IconName,
    title: "Financial Education",
    text: "Practical financial guidance to help you make more informed decisions.",
    id: "education",
  },
  {
    icon: "home" as IconName,
    title: "Real Estate",
    text: "Professional support for your home buying, selling and real estate needs.",
    id: "real-estate",
  },
]

function SectionHead({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow?: string
  title: string
  text?: string
  centered?: boolean
}) {
  return (
    <div className={`section-head reveal ${centered ? "centered" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  )
}

function HomePage() {
  const [testimonial, setTestimonial] = useState(0)
  const testimonials = [
    {
      quote:
        "ARock made the entire tax process feel manageable. Every question was answered clearly, and I always knew what came next.",
      name: "Monica R.",
      type: "Tax Client",
    },
    {
      quote:
        "I walked in with an idea and left with a real plan. The guidance was practical, personal and exactly what my business needed.",
      name: "James T.",
      type: "Business Client",
    },
    {
      quote:
        "I never felt rushed or overwhelmed. ARock helped me understand each step and move toward homeownership with confidence.",
      name: "Danielle C.",
      type: "Home Buyer",
    },
  ]
  return (
    <main>
      <section className="hero">
        <div className="hero-shape shape-one" />
        <div className="hero-shape shape-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-step step-1">
              Clarity for your next move
            </p>
            <h1 className="hero-step step-2">
              Financial &amp; business support, <span>made simple.</span>
            </h1>
            <p className="hero-text hero-step step-3">
              Practical support for individuals, families and small businesses
              across taxes, business services, financial education and real
              estate.
            </p>
            <div className="hero-actions hero-step step-4">
              <Button to="#start">Get Started</Button>
              <Button to="#services" variant="outline">
                Explore Services
              </Button>
            </div>
            <div className="trust-row hero-step step-5">
              <span>
                <Icon name="check" size={16} /> Personalized guidance
              </span>
              <span>
                <Icon name="check" size={16} /> Clear next steps
              </span>
            </div>
          </div>
          <div className="hero-visual hero-step step-visual">
            <div className="image-frame">
              <img
                src={image.hero}
                alt="A professional advisor working with a client"
              />
            </div>
            <div className="floating-card">
              <span className="floating-icon">
                <Icon name="compass" />
              </span>
              <div>
                <strong>Start with confidence</strong>
                <small>We'll help you find the right path.</small>
              </div>
            </div>
            <div className="gold-dot-grid" />
          </div>
        </div>
      </section>

      <section className="section services-discovery" id="services">
        <div className="container">
          <SectionHead
            eyebrow="Our services"
            title="What can we help you with?"
            text="Choose the service that best matches what you need."
            centered
          />
          <div className="service-grid stagger">
            {services.map((s, i) => (
              <a
                href={`#${s.id}`}
                className="service-card reveal"
                style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}
                key={s.title}
              >
                <span className="service-icon">
                  <Icon name={s.icon} size={28} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="card-link">
                  Explore {s.title} <Icon name="arrow" size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section how">
        <div className="container">
          <SectionHead
            eyebrow="A clear path forward"
            title="Getting started is simple."
            text="No jargon. No guesswork. Just a straightforward process designed around you."
          />
          <div className="steps">
            {[
              [
                "01",
                "Tell us what you need",
                "Choose the service you're looking for and tell us a little about your situation.",
              ],
              [
                "02",
                "Get personalized guidance",
                "We'll help you understand the appropriate options and next steps.",
              ],
              [
                "03",
                "Move forward with confidence",
                "Get the professional support you need.",
              ],
            ].map((s, i) => (
              <div
                className="step reveal"
                style={{ "--delay": `${i * 120}ms` } as React.CSSProperties}
                key={s[0]}
              >
                <span className="step-number">{s[0]}</span>
                <div className="step-line" />
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container why-grid">
          <div className="why-copy">
            <SectionHead
              eyebrow="Why ARock"
              title="Support built around you."
              text="Real expertise should feel approachable. We meet you where you are, make the complex clear, and help you take your next step."
            />
            <Button to="#about" variant="outline">
              About ARock
            </Button>
          </div>
          <div className="value-grid">
            {[
              [
                "person",
                "Personalized Support",
                "Guidance tailored to your situation.",
              ],
              [
                "compass",
                "Practical Guidance",
                "Clear information without unnecessary complexity.",
              ],
              [
                "layers",
                "Multiple Areas of Support",
                "Financial, business and real estate help in one place.",
              ],
              [
                "heart",
                "Client Focused",
                "Your options, understanding and next steps come first.",
              ],
            ].map((v, i) => (
              <div
                className="value reveal"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
                key={v[1]}
              >
                <Icon name={v[0] as IconName} />
                <h3>{v[1]}</h3>
                <p>{v[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-details">
        <ServiceFeature
          id="tax"
          label="Tax services"
          title="Need help with your taxes?"
          text="Get practical support with tax preparation, planning and related questions."
          items={[
            "Tax preparation",
            "Tax planning",
            "Filing support",
            "Business tax support",
            "Tax questions",
          ]}
          imageSrc="/assets/founder.jpg"
          imageAlt="Tax professional preparing a digital return"
          cta="Get Tax Help"
        />
        <ServiceFeature
          id="business"
          label="Business services"
          title="Build your business on a stronger foundation."
          text="From your first idea to your next phase of growth, get organized support that helps you move forward."
          items={[
            "Business formation support",
            "Bookkeeping guidance",
            "Operational organization",
            "Growth planning",
          ]}
          imageSrc={image.business}
          imageAlt="Business owners collaborating in a bright office"
          cta="Explore Business Support"
          reverse
        />
        <ServiceFeature
          id="education"
          label="Financial education"
          title="Make informed money decisions."
          text="Build practical knowledge and habits that put you in greater control of your financial future."
          items={[
            "One-to-one coaching",
            "Credit education",
            "Budgeting fundamentals",
            "Workshops and webinars",
          ]}
          visual
          cta="Start Learning"
        />
        <ServiceFeature
          id="real-estate"
          label="Real estate"
          title="A clear path to your next home."
          text="Work with licensed professionals who can guide your buying or selling journey from first conversation to closing."
          items={[
            "Buyer representation",
            "Seller support",
            "Home search guidance",
            "Transaction support",
          ]}
          imageSrc={image.realEstate}
          imageAlt="Warm and welcoming modern home interior"
          cta="Talk to a Realtor"
          reverse
        />
      </section>

      <section className="section testimonials">
        <div className="container">
          <SectionHead
            eyebrow="Client experiences"
            title="What our clients say"
            centered
          />
          <div className="testimonial-stage reveal">
            <button
              className="carousel-arrow prev"
              onClick={() => setTestimonial((testimonial + 2) % 3)}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <article className="testimonial-card">
              <Icon name="quote" size={36} />
              <blockquote>“{testimonials[testimonial].quote}”</blockquote>
              <div>
                <strong>{testimonials[testimonial].name}</strong>
                <span>{testimonials[testimonial].type}</span>
              </div>
            </article>
            <button
              className="carousel-arrow next"
              onClick={() => setTestimonial((testimonial + 1) % 3)}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
          <div className="dots">
            {testimonials.map((_, i) => (
              <button
                aria-label={`Show testimonial ${i + 1}`}
                className={i === testimonial ? "active" : ""}
                onClick={() => setTestimonial(i)}
                key={i}
              />
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </main>
  )
}

function ServiceFeature({
  id,
  label,
  title,
  text,
  items,
  imageSrc,
  imageAlt,
  cta,
  reverse = false,
  visual = false,
}: {
  id: string
  label: string
  title: string
  text: string
  items: string[]
  imageSrc?: string
  imageAlt?: string
  cta: string
  reverse?: boolean
  visual?: boolean
}) {
  return (
    <section className={`section feature ${reverse ? "reverse" : ""}`} id={id}>
      <div className="container feature-grid">
        <div className="feature-copy reveal">
          <p className="eyebrow">{label}</p>
          <h2>{title}</h2>
          <p className="feature-text">{text}</p>
          <ul>
            {items.map((item) => (
              <li key={item}>
                <span>
                  <Icon name="check" size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button to="#start">{cta}</Button>
        </div>
        <div className="feature-media reveal">
          {visual ? (
            <div className="education-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <span className="book-icon">
                <Icon name="education" size={56} />
              </span>
              <div className="lesson-card">
                <small>Financial foundations</small>
                <strong>Knowledge that moves with you.</strong>
                <div className="progress">
                  <span />
                </div>
              </div>
            </div>
          ) : (
            <img src={imageSrc} alt={imageAlt} />
          )}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container cta-inner reveal">
        <div>
          <p className="eyebrow light">Your next step</p>
          <h2>Not sure where to start?</h2>
          <p>
            Tell us what you need help with and we'll help you determine the
            right next step.
          </p>
        </div>
        <div className="cta-actions">
          <Button to="#start" variant="light">
            Schedule a Free Consultation
          </Button>
          <Button to="mailto:arock-solutions@arock.pro" variant="secondary">
            Contact ARock
          </Button>
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal">
            <p className="eyebrow">About ARock</p>
            <h1>Helping people move forward with confidence.</h1>
            <p>
              ARock Solutions Pro brings financial, business and real estate
              support together in one approachable place—so you can spend less
              time navigating complexity and more time making progress.
            </p>
            <Button to="#start">Let's Talk</Button>
          </div>
          <div className="page-image reveal">
            <img
              src={image.about}
              alt="An ARock professional working thoughtfully at a desk"
            />
          </div>
        </div>
      </section>
      <section className="section about-story">
        <div className="container split-content">
          <SectionHead
            eyebrow="Who we serve"
            title="Professional guidance. Human conversations."
          />
          <div className="rich-copy reveal">
            <p>
              We support individuals, families and small business owners who
              want clear answers and a practical plan. Whether you're preparing
              taxes, organizing a new business, strengthening your financial
              knowledge or navigating a real estate decision, we start by
              listening.
            </p>
            <p>
              Our work is built on a simple belief: good guidance should make
              you feel more informed—not more overwhelmed.
            </p>
          </div>
        </div>
      </section>
      <section className="section approach">
        <div className="container">
          <SectionHead
            eyebrow="Our approach"
            title="Clarity at every step."
            centered
          />
          <div className="approach-grid">
            {[
              [
                "01",
                "Listen first",
                "We take time to understand your situation, goals and questions.",
              ],
              [
                "02",
                "Make it clear",
                "We turn complex information into useful, understandable guidance.",
              ],
              [
                "03",
                "Move with purpose",
                "We help you identify the next best step and support you along the way.",
              ],
            ].map((x) => (
              <div className="approach-card reveal" key={x[0]}>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </main>
  )
}

const faqs = [
  [
    "General",
    "What does ARock Solutions Pro do?",
    "ARock provides practical support across tax services, business services, financial education and real estate. We help you understand your options and identify a clear next step.",
  ],
  [
    "General",
    "How do I know which service I need?",
    "Start with our short inquiry form. Share what you are working through, and our team will help route you to the appropriate service.",
  ],
  [
    "Tax Services",
    "Do you work with individuals and businesses?",
    "Yes. We support both individual and business tax needs, including preparation, planning and general filing guidance.",
  ],
  [
    "Tax Services",
    "What should I bring to a tax consultation?",
    "The specific documents vary, but typically include identification, prior returns, income documents, expense records and any tax notices you have received.",
  ],
  [
    "Business Services",
    "Can you help me start a new business?",
    "Yes. We can help you think through formation, organization, bookkeeping foundations and the practical next steps involved in getting established.",
  ],
  [
    "Financial Education",
    "Is financial coaching personalized?",
    "Yes. Guidance is shaped around your current knowledge, priorities and goals, with a focus on practical actions you can use.",
  ],
  [
    "Real Estate",
    "Do you help both buyers and sellers?",
    "Yes. Licensed real estate professionals are available to support both buying and selling needs.",
  ],
]

function FAQPage() {
  const [category, setCategory] = useState("General")
  const [open, setOpen] = useState(0)
  const cats = [
    "General",
    "Tax Services",
    "Business Services",
    "Financial Education",
    "Real Estate",
  ]
  const filtered = faqs.filter((f) => f[0] === category)
  return (
    <main>
      <section className="simple-hero">
        <div className="container">
          <p className="eyebrow">FAQs</p>
          <h1>Answers, without the complexity.</h1>
          <p>
            Find quick answers about our services and what to expect when
            working with ARock.
          </p>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-layout">
          <aside className="faq-tabs" aria-label="FAQ categories">
            {cats.map((c) => (
              <button
                className={c === category ? "active" : ""}
                onClick={() => {
                  setCategory(c)
                  setOpen(0)
                }}
                key={c}
              >
                {c}
                <Icon name="arrow" size={16} />
              </button>
            ))}
          </aside>
          <div className="accordion">
            {filtered.map((f, i) => (
              <div
                className={`faq-item ${open === i ? "open" : ""}`}
                key={f[1]}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{f[1]}</span>
                  <Icon name="chevron" />
                </button>
                <div className="faq-answer">
                  <p>{f[2]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </main>
  )
}

function GetStartedPage() {
  const [step, setStep] = useState(1)
  const [service, setService] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }
  if (submitted)
    return (
      <main className="form-page">
        <div className="form-success">
          <span>
            <Icon name="check" size={34} />
          </span>
          <p className="eyebrow">Request received</p>
          <h1>Thank you. We'll be in touch.</h1>
          <p>
            Your request has been received. An ARock team member will review
            your information and reach out about the next step.
          </p>
          <Button to="#home">Return Home</Button>
        </div>
      </main>
    )
  return (
    <main className="form-page">
      <div className="container form-shell">
        <div className="form-intro">
          <p className="eyebrow">Get started</p>
          <h1>Let's figure out what you need.</h1>
          <p>
            Answer a few simple questions. It usually takes less than two
            minutes.
          </p>
          <div className="form-help">
            <Icon name="phone" />
            <div>
              <small>Prefer to talk?</small>
              <a href="tel:4707584215">470-758-4215</a>
            </div>
          </div>
        </div>
        <form className="multi-form" onSubmit={submit}>
          <div className="form-progress">
            <span>Step {step} of 4</span>
            <div>
              {[1, 2, 3, 4].map((n) => (
                <i className={n <= step ? "active" : ""} key={n} />
              ))}
            </div>
          </div>
          {step === 1 && (
            <fieldset>
              <legend>What can we help you with?</legend>
              <p>
                Choose the option that feels closest. It's okay if you're not
                certain.
              </p>
              <div className="choice-grid">
                {[
                  ...services.map((s) => [s.icon, s.title]),
                  ["compass", "Other"],
                ].map((c) => (
                  <label
                    className={service === c[1] ? "selected" : ""}
                    key={c[1]}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={c[1]}
                      checked={service === c[1]}
                      onChange={() => setService(c[1])}
                    />
                    <Icon name={c[0] as IconName} />
                    <span>{c[1]}</span>
                    <i>
                      <Icon name="check" size={14} />
                    </i>
                  </label>
                ))}
              </div>
            </fieldset>
          )}
          {step === 2 && (
            <fieldset>
              <legend>Tell us a little about what you need.</legend>
              <p>
                A brief description helps us understand how to best support you.
              </p>
              <label className="field">
                <span>How can we help?</span>
                <textarea
                  required
                  rows={6}
                  placeholder="Share a few details about your situation or goal..."
                />
              </label>
            </fieldset>
          )}
          {step === 3 && (
            <fieldset>
              <legend>How can we reach you?</legend>
              <p>
                We'll only use this information to follow up on your request.
              </p>
              <div className="fields-two">
                <label className="field">
                  <span>First name</span>
                  <input required placeholder="First name" />
                </label>
                <label className="field">
                  <span>Last name</span>
                  <input required placeholder="Last name" />
                </label>
              </div>
              <label className="field">
                <span>Email address</span>
                <input required type="email" placeholder="you@example.com" />
              </label>
              <label className="field">
                <span>Phone number</span>
                <input required type="tel" placeholder="(000) 000-0000" />
              </label>
            </fieldset>
          )}
          {step === 4 && (
            <fieldset>
              <legend>How would you prefer we contact you?</legend>
              <p>Choose the method that works best for you.</p>
              <div className="contact-choices">
                <label>
                  <input required type="radio" name="contact" />
                  <Icon name="phone" />
                  <span>
                    <strong>Phone call</strong>
                    <small>We'll call the number you provided.</small>
                  </span>
                </label>
                <label>
                  <input required type="radio" name="contact" />
                  <Icon name="mail" />
                  <span>
                    <strong>Email</strong>
                    <small>We'll send next steps to your inbox.</small>
                  </span>
                </label>
              </div>
            </fieldset>
          )}
          <div className="form-nav">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            ) : (
              <span />
            )}
            {step < 4 ? (
              <Button
                disabled={step === 1 && !service}
                onClick={() => setStep(step + 1)}
              >
                Continue
              </Button>
            ) : (
              <Button type="submit">Submit Request</Button>
            )}
          </div>
        </form>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo inFooter />
          <p>Financial and business support designed around your needs.</p>
          <div className="socials">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              ig
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#tax">Tax Services</a>
          <a href="#business">Business Services</a>
          <a href="#education">Financial Education</a>
          <a href="#real-estate">Real Estate</a>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#faqs">FAQs</a>
          <a href="#start">Contact</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a className="contact-link" href="tel:4707584215">
            <Icon name="phone" size={17} />
            470-758-4215
          </a>
          <a className="contact-link" href="mailto:arock-solutions@arock.pro">
            <Icon name="mail" size={17} />
            arock-solutions@arock.pro
          </a>
          <span className="contact-link">
            <Icon name="pin" size={17} />
            Serving clients nationwide
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} ARock Solutions Pro. All rights reserved.
        </span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("home")
  useEffect(() => {
    const route = () => {
      const hash = location.hash.slice(1)
      const next: Page =
        hash === "about"
          ? "about"
          : hash === "faqs"
            ? "faqs"
            : hash === "start"
              ? "start"
              : "home"
      setPage(next)
      window.setTimeout(() => {
        if (next === "home" && hash && !["home"].includes(hash))
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
        else window.scrollTo({ top: 0, behavior: "smooth" })
      }, 30)
    }
    route()
    addEventListener("hashchange", route)
    return () => removeEventListener("hashchange", route)
  }, [])
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible")
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [page])
  return (
    <>
      <Navbar page={page} />
      {page === "home" ? (
        <HomePage />
      ) : page === "about" ? (
        <AboutPage />
      ) : page === "faqs" ? (
        <FAQPage />
      ) : (
        <GetStartedPage />
      )}
      <Footer />
    </>
  )
}
