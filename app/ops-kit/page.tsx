import {
  ArrowLeft,
  Check,
  ClipboardList,
  Download,
  FileText,
  MessageSquare,
  Phone,
  Users
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FTM Ops Kit | Internal Resources",
  description:
    "Practical internal templates for FTM pilot client operations, outreach and reporting."
};

const intakeFields = [
  "Business name",
  "Owner/manager name",
  "Phone number",
  "Email",
  "Instagram handle",
  "TikTok handle",
  "Website",
  "Business type",
  "Location",
  "Current posting frequency",
  "Biggest challenge right now",
  "Are you currently collecting customer numbers/emails?",
  "Do you actively ask for Google reviews?",
  "What days/times are usually quiet?",
  "What products/items do you most want to push?",
  "Are you open to a 30-day pilot partnership?",
  "Best time to call"
];

const crmColumns = [
  "Business name",
  "Location",
  "Type",
  "Instagram",
  "TikTok",
  "Google rating",
  "Review count",
  "Contact name",
  "Contact method",
  "Stage",
  "Last contacted",
  "Follow-up date",
  "Notes",
  "Potential fit score",
  "Pilot offered?",
  "Outcome"
];

const crmStages = [
  "Not contacted",
  "Contacted",
  "Interested",
  "Meeting booked",
  "Pilot offered",
  "Pilot active",
  "Converted",
  "Not interested"
];

const pilotSections = [
  {
    title: "Purpose",
    items: [
      "Test whether FTM can improve content consistency, review capture and customer follow-up for the venue.",
      "Create enough real work to understand fit before proposing a longer monthly retainer."
    ]
  },
  {
    title: "What FTM provides",
    items: [
      "Planning, shoot direction, content production and posting support.",
      "A simple Google review QR system and basic monthly performance summary.",
      "Clear recommendations for the next month based on what was learned."
    ]
  },
  {
    title: "What the business provides",
    items: [
      "Access to the venue during agreed shoot windows.",
      "Permission to film products, team activity and customer atmosphere where appropriate.",
      "Timely feedback, account access if needed and honest context about quiet days or priority products."
    ]
  },
  {
    title: "Deliverables",
    items: [
      "1-2 shoot days",
      "8-12 short-form videos",
      "TikTok/Instagram posting support",
      "Basic profile/account optimisation",
      "Google review QR system",
      "Simple monthly performance summary",
      "Recommendations for next steps"
    ]
  },
  {
    title: "Timeline",
    items: [
      "Week 1: audit, plan, account checks and shoot planning.",
      "Week 2-3: shoot, edit, post and set up review/customer prompts.",
      "Week 4: review performance, summarise learnings and discuss next steps."
    ]
  },
  {
    title: "Expectations",
    items: [
      "The pilot is designed to test execution, consistency and fit.",
      "FTM does not guarantee revenue, bookings or viral results.",
      "Results depend on product quality, offer strength, local demand, consistency and client cooperation."
    ]
  },
  {
    title: "Permission to use content/results",
    items: [
      "Agree what content FTM can use in its portfolio, social channels and case study materials.",
      "Do not publish private business data without approval."
    ]
  },
  {
    title: "Next-step conversion discussion",
    items: [
      "At the end of the pilot, review what worked, what needs improving and whether a monthly retainer makes sense."
    ]
  }
];

const shootChecklist = [
  "Exterior shots",
  "Interior shots",
  "Food preparation",
  "Best-selling items",
  "Staff interaction",
  "Customer atmosphere, only with permission",
  "Behind-the-scenes",
  "Owner clip if available",
  "Trending format clips",
  "Vertical framing",
  "Lighting checks",
  "Audio checks",
  "Backup footage",
  "File organisation"
];

const reportSections = [
  "Month overview",
  "Content posted",
  "Top-performing posts",
  "Profile growth",
  "Reach/views",
  "Engagement",
  "Google reviews gained",
  "Customer/review feedback",
  "What worked",
  "What needs improving",
  "Recommendations for next month"
];

const reviewSystem = [
  {
    title: "Create the Google review link",
    items: [
      "Open the business Google profile.",
      "Use the 'Ask for reviews' or review link option.",
      "Save the direct review URL in the client folder and CRM."
    ]
  },
  {
    title: "Turn it into a QR code",
    items: [
      "Use a simple QR tool or the client's existing QR provider.",
      "Test the QR code on iPhone and Android before printing.",
      "Label it clearly: 'Enjoyed your visit? Leave us a Google review.'"
    ]
  },
  {
    title: "Where to place QR codes",
    items: [
      "Receipts, counter display, table card, takeaway bag sticker, menu insert or follow-up message.",
      "Keep placement visible but not pushy."
    ]
  },
  {
    title: "Staff prompt examples",
    items: [
      "If you enjoyed today, a quick Google review really helps local customers find us.",
      "Thanks for coming in. If everything was good, the QR code takes you straight to our review page.",
      "No pressure, but reviews help a small business a lot."
    ]
  },
  {
    title: "Review response examples",
    items: [
      "Positive: Thanks for visiting. Glad you enjoyed it and hope to see you again soon.",
      "Neutral: Thanks for the feedback. We appreciate you coming in and will share this with the team.",
      "Negative: Sorry your visit was not right. Please contact us directly so we can understand what happened and improve."
    ]
  },
  {
    title: "Important warning",
    items: [
      "Do not buy fake reviews.",
      "Do not pressure customers to leave only 5-star reviews.",
      "Ask honestly, respond professionally and use feedback to improve."
    ]
  }
];

const retentionWorkflow = [
  {
    title: "QR opt-in idea",
    items: [
      "Place a QR code in-store or on takeaway packaging.",
      "Offer a simple reason to join: first look at specials, birthday treat, quiet-day offer or loyalty update.",
      "Make it clear that customers are opting in to messages from the business."
    ]
  },
  {
    title: "Offer examples",
    items: [
      "Free dessert with a main order on Tuesday.",
      "10 percent off collection orders before 6pm.",
      "Buy 5 coffees, get the next one free.",
      "New menu item preview for WhatsApp customers."
    ]
  },
  {
    title: "Customer list fields",
    items: [
      "Name",
      "Phone number",
      "Opt-in source",
      "Date joined",
      "Favourite item or category",
      "Last campaign sent",
      "Notes"
    ]
  },
  {
    title: "Message examples",
    items: [
      "Hi [Name], thanks for visiting [Business]. We are testing a small customer list for offers and updates. Reply STOP anytime.",
      "Quiet day offer: show this message before 5pm today for [offer]. Available at [location].",
      "New this week: [item]. We are giving our regulars first look before posting publicly."
    ]
  },
  {
    title: "Frequency guidance",
    items: [
      "Start with 1-2 useful messages per month.",
      "Avoid sending messages just to fill a schedule.",
      "Track replies, redemptions and opt-outs."
    ]
  },
  {
    title: "Permission warning",
    items: [
      "Only message people who have clearly opted in.",
      "Always give customers an easy way to stop messages.",
      "This is a starter system, not advanced CRM software."
    ]
  }
];

const scripts = [
  {
    title: "Phone call: asking when the owner is in",
    icon: Phone,
    copy: "Hi, is the owner or manager usually in today? My name is [Name] from FTM. We work with local restaurants and cafes on content, reviews and customer follow-up. I do not want to interrupt service, I just wanted to know the best time to briefly introduce ourselves."
  },
  {
    title: "Instagram DM",
    icon: MessageSquare,
    copy: "Hi [Business], I am [Name] from FTM, a London hospitality growth studio. We help restaurants and cafes improve content consistency, Google reviews and customer follow-up. Your venue looks like a strong fit visually. Would it be worth sending over a simple 30-day pilot idea?"
  },
  {
    title: "In-person intro",
    icon: Users,
    copy: "Hi, I am [Name] from FTM. We are working with hospitality businesses in London on content, reviews and simple repeat-customer systems. I like what you are doing here and wanted to quickly introduce myself. Is the owner around, or is there a better time to come back?"
  },
  {
    title: "Follow-up after meeting",
    icon: FileText,
    copy: "Hi [Name], good speaking with you today. Based on what you said, the clearest opportunities look like content consistency, review capture and a simple follow-up system for customers. I can send over a short 30-day pilot structure if helpful."
  },
  {
    title: "Follow-up after pilot",
    icon: ClipboardList,
    copy: "Hi [Name], thanks again for running the 30-day pilot with us. I have pulled together the content, review and engagement summary, plus what we think should happen next. If it makes sense, we can discuss a monthly setup built around consistency, reviews and repeat customers."
  }
];

const founderSplit = [
  {
    title: "Founder A",
    items: [
      "Outreach",
      "Client communication",
      "Review system",
      "CRM",
      "Monthly performance summary",
      "Finance/admin",
      "Recommendations"
    ]
  },
  {
    title: "Founder B",
    items: [
      "Shoot planning",
      "Creative direction",
      "Editing oversight",
      "Posting support",
      "Account optimisation",
      "Production workflow"
    ]
  },
  {
    title: "Shared",
    items: [
      "Strategy",
      "Meetings",
      "Client relationships",
      "Learning operations",
      "Scaling decisions"
    ]
  }
];

const intakeCopy = intakeFields.map((field) => `- ${field}:`).join("\n");
const crmCopy = `Columns:\n${crmColumns.map((column) => `- ${column}`).join("\n")}\n\nStages:\n${crmStages.map((stage) => `- ${stage}`).join("\n")}`;
const shootCopy = shootChecklist.map((item) => `- [ ] ${item}`).join("\n");
const reportCopy = reportSections
  .map((section) => `## ${section}\n- Notes:\n- Numbers:\n- Next action:`)
  .join("\n\n");

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
      <span className="h-2 w-2 rounded-full bg-brass" />
      {children}
    </div>
  );
}

function CopyBlock({ value }: { value: string }) {
  return (
    <textarea
      readOnly
      value={value}
      className="min-h-56 w-full resize-y border hairline bg-black/24 p-4 font-mono text-sm leading-6 text-paper/78 outline-none"
      aria-label="Copyable template text"
    />
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-paper/76">
          <Check className="mt-1 shrink-0 text-sage" size={15} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TemplateCard({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border hairline bg-graphite p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function OpsKitPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ink text-paper">
      <div className="noise" />

      <header className="border-b hairline bg-ink/86">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-paper/76 transition hover:text-paper"
          >
            <ArrowLeft size={16} />
            Back to FTM
          </a>
          <a
            href="/ops-kit/ftm-operations-kit.md"
            download
            className="inline-flex items-center justify-center gap-2 border hairline px-4 py-3 text-sm font-semibold text-paper transition hover:border-paper/45 hover:bg-white/10"
          >
            <Download size={16} />
            Download kit
          </a>
        </div>
      </header>

      <section className="border-b hairline bg-carbon py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Internal resources</SectionLabel>
          <h1 className="max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.95] text-white sm:text-7xl">
            FTM Operations Kit
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-paper/70">
            Lightweight templates for pilot outreach, client intake, shoot days,
            review systems, retention tests and monthly reporting. Built for
            early execution, not a complicated dashboard.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 sm:py-24">
        <TemplateCard title="Client Intake Form Template">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="leading-7 text-paper/68">
                Copy this into Tally, Google Forms or a client onboarding doc.
                Keep the answers short enough to review before a call.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {intakeFields.map((field) => (
                  <div key={field} className="border hairline bg-white/[0.035] p-3 text-sm text-paper/78">
                    {field}
                  </div>
                ))}
              </div>
            </div>
            <CopyBlock value={intakeCopy} />
          </div>
        </TemplateCard>

        <TemplateCard title="Lead CRM Template">
          <div className="grid gap-6">
            <p className="max-w-3xl leading-7 text-paper/68">
              A simple outreach tracker for Notion, Google Sheets or Airtable.
              Score fit based on product quality, visual appeal, owner ambition
              and clear gaps in content, reviews or retention.
            </p>
            <div className="overflow-x-auto border hairline">
              <table className="min-w-[980px] w-full border-collapse text-left text-sm">
                <thead className="bg-white/[0.045] text-paper">
                  <tr>
                    {crmColumns.map((column) => (
                      <th key={column} className="border-r hairline px-4 py-3 font-medium">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-paper/58">
                    {crmColumns.map((column) => (
                      <td key={column} className="border-r hairline px-4 py-4">
                        {column === "Stage" ? "Not contacted" : "-"}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {crmStages.map((stage) => (
                <div key={stage} className="border hairline bg-white/[0.035] p-4 text-sm text-paper/78">
                  {stage}
                </div>
              ))}
            </div>
            <CopyBlock value={crmCopy} />
          </div>
        </TemplateCard>

        <TemplateCard title="30-Day Hospitality Growth Pilot">
          <div className="grid gap-5 lg:grid-cols-2">
            {pilotSections.map((section) => (
              <div key={section.title} className="border hairline bg-white/[0.035] p-5">
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <div className="mt-4">
                  <BulletList items={section.items} />
                </div>
              </div>
            ))}
          </div>
        </TemplateCard>

        <TemplateCard title="Shoot Day Checklist">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {shootChecklist.map((item) => (
                <label key={item} className="flex items-start gap-3 border hairline bg-white/[0.035] p-4 text-sm text-paper/78">
                  <input type="checkbox" className="mt-1 accent-[#b4a06b]" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <CopyBlock value={shootCopy} />
          </div>
        </TemplateCard>

        <TemplateCard title="Monthly Performance Summary Template">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {reportSections.map((section) => (
                <div key={section} className="border hairline bg-white/[0.035] p-4">
                  <p className="text-lg font-semibold text-white">{section}</p>
                  <p className="mt-2 text-sm leading-6 text-paper/58">
                    Add numbers, context and one clear next action.
                  </p>
                </div>
              ))}
            </div>
            <CopyBlock value={reportCopy} />
          </div>
        </TemplateCard>

        <TemplateCard title="Review System Template">
          <div className="grid gap-5 lg:grid-cols-2">
            {reviewSystem.map((section) => (
              <div key={section.title} className="border hairline bg-white/[0.035] p-5">
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <div className="mt-4">
                  <BulletList items={section.items} />
                </div>
              </div>
            ))}
          </div>
        </TemplateCard>

        <TemplateCard title="WhatsApp / Customer Retention Starter Template">
          <p className="mb-6 max-w-3xl leading-7 text-paper/68">
            This is a starter workflow for basic opt-in, customer follow-up and
            quiet-day offers. It is not advanced CRM software.
          </p>
          <div className="grid gap-5 lg:grid-cols-2">
            {retentionWorkflow.map((section) => (
              <div key={section.title} className="border hairline bg-white/[0.035] p-5">
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <div className="mt-4">
                  <BulletList items={section.items} />
                </div>
              </div>
            ))}
          </div>
        </TemplateCard>

        <TemplateCard title="Outreach Script Bank">
          <div className="grid gap-5 lg:grid-cols-2">
            {scripts.map((script) => {
              const Icon = script.icon;
              return (
                <div key={script.title} className="border hairline bg-white/[0.035] p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center border hairline text-sage">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{script.title}</h3>
                  </div>
                  <textarea
                    readOnly
                    value={script.copy}
                    className="mt-5 min-h-36 w-full resize-y border hairline bg-black/24 p-4 text-sm leading-6 text-paper/78 outline-none"
                    aria-label={`${script.title} copy`}
                  />
                </div>
              );
            })}
          </div>
        </TemplateCard>

        <TemplateCard title="Founder Task Split">
          <div className="grid gap-5 lg:grid-cols-3">
            {founderSplit.map((group) => (
              <div key={group.title} className="border hairline bg-white/[0.035] p-5">
                <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5">
                  <BulletList items={group.items} />
                </div>
              </div>
            ))}
          </div>
        </TemplateCard>

        <section className="border hairline bg-paper p-6 text-ink sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/52">
                Download
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Use the full kit offline</h2>
              <p className="mt-3 max-w-2xl leading-7 text-black/62">
                The Markdown export can be edited in Notion, Google Docs,
                Apple Notes or any simple text editor.
              </p>
            </div>
            <a
              href="/ops-kit/ftm-operations-kit.md"
              download
              className="inline-flex items-center justify-center gap-2 bg-ink px-5 py-4 text-sm font-semibold text-paper transition hover:bg-black"
            >
              <Download size={17} />
              Download Markdown
            </a>
          </div>
        </section>
      </div>

      <footer className="border-t hairline px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>FTM. Internal operations resources.</p>
          <a href="/" className="hover:text-paper">
            Back to website
          </a>
        </div>
      </footer>
    </main>
  );
}
