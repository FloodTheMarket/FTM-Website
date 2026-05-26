"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDot,
  ClipboardList,
  Instagram,
  LineChart,
  Mail,
  Menu,
  MessageCircle,
  Music2,
  PanelsTopLeft,
  Repeat2,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Target,
  Users,
  X
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const instagramUrl = "https://www.instagram.com/floodthemarket_";
const tiktokUrl = "https://www.tiktok.com/@floodthemarket_";
const emailUrl = "mailto:enquiries@floodthemarket.co.uk";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const painPoints = [
  "Inconsistent content",
  "Weak TikTok and Instagram presence",
  "Poor review generation",
  "No customer retention system",
  "No WhatsApp/customer database",
  "No monthly performance tracking",
  "No clear growth system",
  "Underused attention",
  "Lack of operational organisation"
];

const idealClients = [
  "Strong product",
  "Visually marketable venue",
  "Existing foot traffic",
  "Ambitious owner",
  "Under-optimised online"
];

const services = [
  {
    title: "Visibility",
    icon: PanelsTopLeft,
    body: "Consistent TikTok and Instagram content that helps strong hospitality businesses get seen, remembered and chosen.",
    points: [
      "TikTok and Instagram short-form content",
      "Shoot days",
      "Editing",
      "Content strategy",
      "Posting support",
      "Brand positioning",
      "Hospitality storytelling"
    ]
  },
  {
    title: "Retention",
    icon: Repeat2,
    body: "Simple follow-up systems that help turn one visit, one scan or one offer into another customer interaction.",
    points: [
      "WhatsApp customer retention systems",
      "QR code customer capture",
      "Loyalty campaigns",
      "Slow-day promotions",
      "Customer re-engagement",
      "Repeat customer systems",
      "Customer database building"
    ]
  },
  {
    title: "Operations",
    icon: BarChart3,
    body: "Simple monthly reporting that helps owners see what is working, what needs improving and what to focus on next.",
    points: [
      "Monthly KPI reporting",
      "Google review systems",
      "Review response support",
      "Analytics summaries",
      "Content performance insights",
      "Customer engagement insights",
      "Monthly growth recommendations"
    ]
  }
];

const packages = [
  {
    name: "Starter Visibility",
    label: "Built around your business",
    bestFor: "Small hospitality brands needing online consistency.",
    icon: CalendarDays,
    features: [
      "1 monthly shoot day",
      "8-12 short-form videos",
      "TikTok/Instagram content plan",
      "Captions and posting support",
      "Basic content calendar",
      "Basic monthly analytics summary"
    ]
  },
  {
    name: "Growth System",
    label: "Recommended",
    bestFor: "Hospitality brands wanting content plus customer retention.",
    icon: LineChart,
    featured: true,
    features: [
      "1-2 monthly shoot days",
      "12-20 short-form videos",
      "Social media management",
      "Google review system",
      "WhatsApp/customer retention setup",
      "QR code funnel",
      "Monthly KPI report",
      "Offer/campaign ideas"
    ]
  },
  {
    name: "Full Growth Partner",
    label: "Custom monthly retainer",
    bestFor: "Businesses wanting deeper growth support.",
    icon: ShieldCheck,
    features: [
      "Ongoing content production",
      "Full social media management",
      "Google review optimisation",
      "WhatsApp retention campaigns",
      "KPI dashboard/reporting",
      "Customer engagement strategy",
      "Monthly growth recommendations",
      "Monthly strategy call"
    ]
  }
];

const process = [
  {
    title: "Audit",
    detail:
      "We look at the venue, socials, reviews, content consistency, customer journey and missed opportunities."
  },
  {
    title: "Strategy",
    detail: "We build a clear plan for content, reviews, customer follow-up and repeat visits."
  },
  {
    title: "Shoot Day",
    detail:
      "We capture high-quality hospitality content in one efficient production session."
  },
  {
    title: "Growth Systems",
    detail: "We set up practical review, retention and customer follow-up systems."
  },
  {
    title: "Monthly Reporting",
    detail:
      "We track content, reviews, customer engagement and what to improve next."
  }
];

const caseStudyPlaceholders = [
  "Review growth",
  "Engagement growth",
  "Reach increase",
  "Repeat customer campaigns",
  "Before/after content performance",
  "Customer retention improvements"
];

const pilotAreas = [
  {
    title: "Content examples",
    copy: "Short-form videos, shoot days and hospitality storytelling."
  },
  {
    title: "Review growth",
    copy: "Google review systems and customer feedback loops."
  },
  {
    title: "Retention tests",
    copy: "QR capture, WhatsApp follow-up and repeat-customer campaigns."
  }
];

const systemCards = [
  { label: "Content", value: "Reach", detail: "short-form performance" },
  { label: "Retention", value: "QR", detail: "customer capture" },
  { label: "Reviews", value: "4.8", detail: "reputation signal" },
  { label: "Reporting", value: "KPI", detail: "monthly tracking" }
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.22 },
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1], delay }
  };
}

function ExternalLink({
  href,
  label,
  children,
  className = ""
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
      <CircleDot size={13} />
      {children}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="absolute inset-0">
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=86"
        alt="Premium restaurant interior"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="image-cover opacity-[0.42]"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b hairline bg-ink/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="FTM home">
          <span className="relative block h-12 w-12 overflow-hidden bg-white sm:h-14 sm:w-14">
            <Image
              src="/ftm-favicon-original.png"
              alt=""
              fill
              sizes="56px"
              className="object-contain p-1.5"
              priority
            />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-semibold tracking-[0.18em] text-paper">
              FTM
            </span>
            <span className="mt-1 block text-xs text-muted">Flood The Market</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ExternalLink
            href={instagramUrl}
            label="Open FTM Instagram"
            className="grid h-10 w-10 place-items-center border hairline text-paper/76 transition hover:border-paper/45 hover:text-paper"
          >
            <Instagram size={17} />
          </ExternalLink>
          <ExternalLink
            href={tiktokUrl}
            label="Open FTM TikTok"
            className="grid h-10 w-10 place-items-center border hairline text-paper/76 transition hover:border-paper/45 hover:text-paper"
          >
            <Music2 size={17} />
          </ExternalLink>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border hairline px-4 py-2.5 text-sm font-medium text-paper transition hover:border-paper/45 hover:bg-white hover:text-ink"
          >
            Book Growth Audit
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center border hairline text-paper lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t hairline bg-ink lg:hidden"
          >
            <div className="space-y-1 px-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-base text-paper"
                >
                  {item.label}
                  <ChevronRight size={18} className="text-muted" />
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-3">
                <ExternalLink
                  href={instagramUrl}
                  label="Open FTM Instagram"
                  className="inline-flex items-center justify-center gap-2 border hairline px-4 py-3 text-sm font-medium text-paper"
                >
                  <Instagram size={17} />
                  Instagram
                </ExternalLink>
                <ExternalLink
                  href={tiktokUrl}
                  label="Open FTM TikTok"
                  className="inline-flex items-center justify-center gap-2 border hairline px-4 py-3 text-sm font-medium text-paper"
                >
                  <Music2 size={17} />
                  TikTok
                </ExternalLink>
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-paper px-4 py-4 text-sm font-semibold text-ink"
              >
                Book Growth Audit
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function SystemPanel() {
  return (
    <div className="border hairline bg-black/44 p-5 shadow-soft backdrop-blur-md">
      <div className="flex items-start justify-between gap-6 border-b hairline pb-5">
        <div>
          <p className="text-sm text-muted">Growth systems</p>
          <p className="mt-2 max-w-sm text-2xl font-semibold text-white">
            Content, reviews, follow-up and reporting in one monthly growth
            system.
          </p>
        </div>
        <ShieldCheck className="mt-1 shrink-0 text-sage" size={26} />
      </div>
      <div className="grid grid-cols-2 gap-3 pt-5">
        {systemCards.map((item) => (
          <div key={item.label} className="border hairline bg-white/[0.045] p-4">
            <p className="text-xs text-muted">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-paper">{item.value}</p>
            <p className="mt-1 text-xs text-paper/50">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialButtons({ dark = false }: { dark?: boolean }) {
  const base = dark
    ? "border border-black/14 text-ink hover:border-black"
    : "border hairline text-paper hover:border-paper/45 hover:bg-white/10";

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <ExternalLink
        href={instagramUrl}
        label="Message FTM on Instagram"
        className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold transition ${base}`}
      >
        <Instagram size={17} />
        Instagram
      </ExternalLink>
      <ExternalLink
        href={tiktokUrl}
        label="Message FTM on TikTok"
        className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold transition ${base}`}
      >
        <Music2 size={17} />
        TikTok
      </ExternalLink>
      <ExternalLink
        href={emailUrl}
        label="Email FTM"
        className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold transition ${base}`}
      >
        <Mail size={17} />
        Email
      </ExternalLink>
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-x-hidden bg-ink text-paper">
      <div className="noise" />
      <Navigation />

      <section className="relative flex min-h-[94svh] items-end overflow-hidden pt-28">
        <HeroVisual />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-5 pb-14 pt-24 sm:px-8 lg:grid-cols-[1.02fr_0.82fr] lg:items-end lg:pb-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 34 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.86, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-7 inline-flex max-w-full items-center gap-3 border hairline bg-black/35 px-3.5 py-2 text-xs uppercase tracking-[0.18em] text-paper/80 backdrop-blur">
              <Star size={14} className="shrink-0 text-brass" />
              <span>Hospitality growth and operations</span>
            </div>
            <h1 className="max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl 2xl:text-8xl">
              Modern growth systems for hospitality brands.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/76 sm:text-xl">
              FTM helps restaurants, cafes and takeaways turn content, reviews
              and customer follow-up into more consistent attention and repeat
              customers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-paper px-6 py-4 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Book Growth Audit
                <ArrowRight size={17} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border hairline bg-black/20 px-6 py-4 text-sm font-semibold text-paper transition hover:border-paper/50 hover:bg-white/10"
              >
                View Services
                <ChevronRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.86, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          >
            <SystemPanel />
          </motion.div>
        </div>
      </section>

      <section className="border-y hairline bg-carbon py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <motion.div {...fadeUp()}>
            <SectionLabel>Who FTM is built for</SectionLabel>
            <h2 className="max-w-xl text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
              London hospitality SMEs with a strong product and untapped online
              upside.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-paper/64">
              Restaurants, cafes, dessert shops, takeaways and aesthetic
              hospitality brands that already have something worth marketing.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp(0.08)}
            className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5"
          >
            {idealClients.map((item) => (
              <div key={item} className="border hairline bg-white/[0.035] p-4">
                <Store className="text-sage" size={18} />
                <p className="mt-8 text-sm font-medium leading-6 text-paper/82">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <motion.div {...fadeUp()}>
            <SectionLabel>The gap</SectionLabel>
            <h2 className="max-w-xl text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Most hospitality businesses do not have a clear growth system.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-paper/64">
              Good venues lose bookings, reviews and repeat customers when
              content, follow-up and reporting are treated as separate tasks.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp(0.08)}
            className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
          >
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex min-h-24 items-start gap-3 border hairline bg-white/[0.035] p-4"
              >
                <Check className="mt-0.5 shrink-0 text-sage" size={17} />
                <p className="text-sm leading-6 text-paper/78">{point}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="border-y hairline bg-carbon py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div {...fadeUp()} className="max-w-3xl">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Content gets people interested. Systems bring them back.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/68">
              FTM connects content, reviews, customer follow-up and simple
              reporting so owners can see what is actually helping the business.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  {...fadeUp(index * 0.08)}
                  className="group border hairline bg-graphite p-7 transition hover:border-paper/28 hover:bg-[#191a1a]"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center border hairline bg-white/[0.04] text-sage">
                      <Icon size={22} />
                    </div>
                    <ArrowRight
                      size={19}
                      className="text-muted transition group-hover:translate-x-1 group-hover:text-paper"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 min-h-28 text-base leading-7 text-paper/70">
                    {service.body}
                  </p>
                  <div className="mt-8 space-y-3 border-t hairline pt-6">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brass" />
                        <span className="text-sm leading-6 text-paper/80">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-paper py-24 text-ink sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div {...fadeUp()} className="relative min-h-[520px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1500&q=84"
              alt="Hospitality team preparing a service"
              fill
              unoptimized
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="image-cover"
            />
            <div className="absolute inset-0 bg-black/24" />
            <div className="absolute bottom-5 left-5 right-5 border border-white/18 bg-black/64 p-5 text-paper backdrop-blur">
              <p className="text-sm uppercase tracking-[0.18em] text-paper/62">
                Owner problems
              </p>
              <p className="mt-3 text-2xl font-semibold">
                Great food and service still need consistent content, reviews
                and customer follow-up.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <SectionLabel>Customer journey</SectionLabel>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight sm:text-6xl">
              Helping more customers find you, trust you and come back.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-black/66">
              FTM focuses on the practical journey most venues need: discovery,
              visit, review, follow-up and repeat purchase.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Store, title: "Content consistency", detail: "Regular posts built around the food, service and atmosphere." },
                { icon: Users, title: "Customer follow-up", detail: "QR capture, reviews and re-engagement after the visit." },
                { icon: ClipboardList, title: "Monthly tracking", detail: "Clear reports, observations and growth recommendations." },
                { icon: Sparkles, title: "Stronger online presence", detail: "Sharper content without generic agency noise." }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="border border-black/12 p-5">
                    <Icon size={22} />
                    <p className="mt-5 text-xl font-semibold">{item.title}</p>
                    <p className="mt-2 text-base leading-7 text-black/58">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="packages" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div {...fadeUp()} className="grid gap-7 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <SectionLabel>Packages</SectionLabel>
              <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Built around what your venue needs next.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-paper/68">
              Start with consistent content, add review and retention systems,
              then build a clearer monthly routine for improving performance.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {packages.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.article
                  key={plan.name}
                  {...fadeUp(index * 0.08)}
                  className={`relative flex min-h-full flex-col border p-7 ${
                    plan.featured
                      ? "border-paper/36 bg-paper text-ink"
                      : "hairline bg-white/[0.035] text-paper"
                  }`}
                >
                  {plan.featured ? (
                    <div className="absolute right-5 top-5 bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-paper">
                      Recommended
                    </div>
                  ) : null}
                  <div className="mb-8 flex items-start justify-between gap-5 pr-12">
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                          plan.featured ? "text-black/52" : "text-brass"
                        }`}
                      >
                        {plan.label}
                      </p>
                      <h3 className="mt-4 text-3xl font-semibold">{plan.name}</h3>
                    </div>
                    <div
                      className={`grid h-12 w-12 shrink-0 place-items-center border ${
                        plan.featured
                          ? "border-black/14 bg-black text-paper"
                          : "hairline bg-white/[0.04] text-sage"
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                  </div>
                  <p
                    className={`min-h-20 text-base leading-7 ${
                      plan.featured ? "text-black/62" : "text-paper/68"
                    }`}
                  >
                    Best for {plan.bestFor}
                  </p>
                  <div
                    className={`mt-8 space-y-3 border-t pt-6 ${
                      plan.featured ? "border-black/12" : "hairline"
                    }`}
                  >
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check
                          className={`mt-0.5 shrink-0 ${
                            plan.featured ? "text-black" : "text-sage"
                          }`}
                          size={17}
                        />
                        <span
                          className={`text-sm leading-6 ${
                            plan.featured ? "text-black/72" : "text-paper/78"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold transition ${
                      plan.featured
                        ? "bg-ink text-paper hover:bg-black"
                        : "border hairline text-paper hover:border-paper/45 hover:bg-white/10"
                    }`}
                  >
                    Discuss fit
                    <ArrowRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="border-y hairline bg-carbon py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div {...fadeUp()} className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <SectionLabel>Process</SectionLabel>
              <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
                A clear monthly process, without overcomplicating it.
              </h2>
            </div>
            <div className="grid gap-3">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  {...fadeUp(index * 0.06)}
                  className="grid items-start gap-5 border-b hairline py-6 sm:grid-cols-[72px_1fr_auto]"
                >
                  <span className="text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-2xl font-semibold text-paper sm:text-3xl">
                      {step.title}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-paper/58">
                      {step.detail}
                    </p>
                  </div>
                  <Target className="hidden text-brass sm:block" size={20} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div {...fadeUp()}>
            <SectionLabel>About FTM</SectionLabel>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Two co-founders building a serious hospitality growth partner.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/70">
              FTM is led by two co-founders and co-CEOs, combining operational
              discipline with creative execution. Both founders are involved in
              strategy, client work and growth, keeping the service practical
              and tied to what venues actually need.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="grid gap-4">
            {[
              {
                title: "Operations, systems and growth",
                copy: "Client management, reporting, customer follow-up, review systems and monthly growth recommendations."
              },
              {
                title: "Creative direction and production",
                copy: "Branding, shoot direction, editing oversight, visual storytelling and content quality control."
              }
            ].map((founder) => (
              <div key={founder.title} className="border hairline bg-white/[0.035] p-6">
                <p className="text-2xl font-semibold text-white">{founder.title}</p>
                <p className="mt-4 leading-7 text-paper/68">{founder.copy}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="results" className="border-y hairline bg-carbon py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div {...fadeUp()} className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <SectionLabel>Future proof</SectionLabel>
              <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Case studies will show what changed for real venues.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-paper/68">
              This section is ready for real client proof as results are added:
              content examples, review improvements and customer follow-up
              activity without inflated marketing claims.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudyPlaceholders.map((item, index) => (
              <motion.div
                key={item}
                {...fadeUp(index * 0.05)}
                className="border hairline bg-graphite p-5"
              >
                <p className="text-sm text-muted">Measure</p>
                <p className="mt-10 text-xl font-semibold leading-tight text-white">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div {...fadeUp()}>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">
              Book a growth audit or message FTM directly.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/64">
              Share the venue, current gaps and what you want to improve:
              content consistency, reviews, repeat customers, follow-up or
              monthly tracking.
            </p>
            <div className="mt-8">
              <SocialButtons dark />
            </div>
          </motion.div>
          <motion.form
            {...fadeUp(0.1)}
            action="https://formspree.io/f/xbdbzkqr"
            method="POST"
            className="grid gap-4"
          >
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Business name", name: "business_name", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Instagram/TikTok handle", name: "social_handle", type: "text" },
              { label: "Type of business", name: "business_type", type: "text" }
            ].map((field) => (
              <label key={field.label} className="grid gap-2">
                <span className="text-sm font-medium text-black/64">{field.label}</span>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.name === "name" || field.name === "email"}
                  className="h-14 border border-black/14 bg-transparent px-4 text-base outline-none transition placeholder:text-black/35 focus:border-black"
                  placeholder={field.label}
                />
              </label>
            ))}
            <label className="grid gap-2">
              <span className="text-sm font-medium text-black/64">
                What do you need help with?
              </span>
              <textarea
                name="help_needed"
                rows={5}
                required
                className="resize-none border border-black/14 bg-transparent p-4 text-base outline-none transition placeholder:text-black/35 focus:border-black"
                placeholder="Content consistency, reviews, customer follow-up, repeat visits..."
              />
            </label>
            <input type="hidden" name="_subject" value="New FTM Growth Audit Request" />
            <button
              type="submit"
              className="mt-2 inline-flex h-14 items-center justify-center gap-2 bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-black"
            >
              Submit Growth Audit Request
              <ArrowRight size={17} />
            </button>
          </motion.form>
        </div>
      </section>

      <section className="border-y hairline bg-carbon py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div {...fadeUp()} className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <SectionLabel>Pilot projects</SectionLabel>
              <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Built to prove value before scaling.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-paper/68">
              We start with focused hospitality partners, clear deliverables and
              simple performance tracking. As client results come in, this
              section will show real growth data, content examples and
              review/customer engagement improvements.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pilotAreas.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp(index * 0.06)}
                className="border hairline bg-graphite p-6"
              >
                <p className="text-sm text-muted">Early partner work</p>
                <p className="mt-10 text-2xl font-semibold leading-tight text-white">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-6 text-paper/68">
                  {item.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2200&q=84"
          alt="Restaurant table service"
          fill
          unoptimized
          sizes="100vw"
          className="image-cover opacity-[0.26]"
        />
        <div className="absolute inset-0 bg-ink/82" />
        <motion.div
          {...fadeUp()}
          className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8"
        >
          <div className="flex justify-center">
            <SectionLabel>Free growth audit</SectionLabel>
          </div>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-7xl">
            Ready to turn attention into repeat customers?
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-paper/72">
            Book a free hospitality growth audit and see where your venue could
            improve content, reviews, follow-up and repeat customer activity.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-paper px-7 py-4 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Book Growth Audit
              <ArrowRight size={17} />
            </a>
            <ExternalLink
              href={instagramUrl}
              label="Message FTM on Instagram"
              className="inline-flex items-center justify-center gap-2 border hairline bg-black/20 px-7 py-4 text-sm font-semibold text-paper transition hover:border-paper/50 hover:bg-white/10"
            >
              <Instagram size={17} />
              Message us on Instagram
            </ExternalLink>
          </div>
        </motion.div>
      </section>

      <footer className="border-t hairline bg-ink px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">
          <p>FTM. Flood The Market. Hospitality growth systems.</p>
          <div className="flex flex-wrap gap-4">
            <ExternalLink href={instagramUrl} label="Open FTM Instagram" className="hover:text-paper">
              Instagram
            </ExternalLink>
            <ExternalLink href={tiktokUrl} label="Open FTM TikTok" className="hover:text-paper">
              TikTok
            </ExternalLink>
            <ExternalLink href={emailUrl} label="Email FTM" className="hover:text-paper">
              enquiries@floodthemarket.co.uk
            </ExternalLink>
          </div>
        </div>
      </footer>
    </main>
  );
}
