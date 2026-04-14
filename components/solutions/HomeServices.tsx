"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare,
  TrendingUp,
  Cpu,
  BarChart2,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertCircle,
  MapPin,
  DollarSign,
  Calendar,
  FileText,
  Bell,
  ChevronRight,
} from "lucide-react";

const GRADIENT = "linear-gradient(to right, #2B60EB, #4655EB, #584DEB, #7341EA, #8B37EA)";
const GRADIENT_TEXT: React.CSSProperties = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const painPoints = [
  {
    icon: Clock,
    title: "Scheduling and dispatch consuming the owner's day",
    description:
      "Coordinating technician schedules, managing project timelines, and handling last-minute changes manually pulls the owner out of growth work and into logistics every single day.",
  },
  {
    icon: AlertCircle,
    title: "Estimates that never convert to booked projects",
    description:
      "Inbound leads get a quote and then go silent. Without a structured follow-up system, a significant portion of your pipeline disappears between estimate and decision — revenue that was already earned but never collected.",
  },
  {
    icon: MapPin,
    title: "No visibility across field operations and back office",
    description:
      "What is happening on site, what has been invoiced, and what is outstanding are three separate conversations. Without a unified operational view, decisions are made on incomplete information and cash flow surprises become routine.",
  },
];

const agents = [
  {
    icon: TrendingUp,
    name: "Sales Agent",
    tagline: "Every estimate followed up. Every lead tracked.",
    description:
      "Inbound project inquiries get an immediate, professional response. Estimates are tracked from delivery to decision. Structured follow-up sequences execute automatically at defined intervals. Your conversion rate improves not because of better salesmanship but because no opportunity is left unattended.",
    automations: [
      "Inbound inquiry response and qualification",
      "Estimate delivery and follow-up sequences",
      "Pipeline tracking and conversion reporting",
      "Seasonal demand campaign coordination",
    ],
    color: "linear-gradient(135deg, #2B60EB, #4655EB)",
  },
  {
    icon: Cpu,
    name: "Operations Agent",
    tagline: "Scheduling, dispatch, and project tracking — governed.",
    description:
      "Technician schedules managed and communicated. Project task assignments tracked from kickoff to completion. SOPs documented and enforced across every project type. Supplier and materials coordination handled without the owner as the single point of contact. Your field operation runs to a consistent standard.",
    automations: [
      "Technician scheduling and dispatch coordination",
      "Project task assignment and progress tracking",
      "SOP governance across project types",
      "Supplier and materials coordination",
    ],
    color: "linear-gradient(135deg, #4655EB, #584DEB)",
  },
  {
    icon: MessageSquare,
    name: "Customer Experience Agent",
    tagline: "Every customer kept informed without manual effort.",
    description:
      "Project confirmation and scheduling communications sent automatically. Status updates delivered at defined milestones. Post-project follow-up and review requests executed on completion. Customer satisfaction tracked across every engagement. Your customers feel attended to whether your team has bandwidth or not.",
    automations: [
      "Project confirmation and scheduling communications",
      "Milestone status updates to customers",
      "Post-project follow-up and review requests",
      "Satisfaction tracking and complaint routing",
    ],
    color: "linear-gradient(135deg, #584DEB, #7341EA)",
  },
  {
    icon: BarChart2,
    name: "Finance Agent",
    tagline: "Invoices out. Payments in. Books current.",
    description:
      "Invoices generated on project completion triggers. Outstanding balances tracked and followed up automatically. Expenses categorised without manual entry. Cash flow position visible in real time. You stop chasing payments and start seeing your financial picture clearly.",
    automations: [
      "Invoice generation on project completion",
      "Outstanding balance tracking and follow-up",
      "Expense categorisation by project",
      "Cash flow and revenue reporting",
    ],
    color: "linear-gradient(135deg, #7341EA, #8B37EA)",
  },
];

const automations = [
  { icon: Bell, text: "Inbound lead response within minutes of inquiry submission" },
  { icon: FileText, text: "Estimate delivery with structured follow-up at 3, 7, and 14 days" },
  { icon: Calendar, text: "Technician scheduling confirmation and day-of reminders" },
  { icon: MapPin, text: "Project milestone status updates delivered to customers automatically" },
  { icon: DollarSign, text: "Invoice generation triggered on project completion sign-off" },
  { icon: Clock, text: "Outstanding payment follow-up at 7, 14, and 30-day intervals" },
  { icon: MessageSquare, text: "Post-project review requests at 48 hours after completion" },
  { icon: BarChart2, text: "Weekly revenue, pipeline, and project performance reporting" },
];

function AgentCard({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const Icon = agent.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        border: hovered ? "1px solid rgba(43,96,235,0.3)" : "1px solid #E5E7EB",
        padding: "32px",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        boxShadow: hovered
          ? "0 12px 40px rgba(43,96,235,0.12)"
          : "0 2px 12px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: agent.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={20} color="white" />
        </div>
        <div>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "17px",
              color: "#1F2937",
              marginBottom: "4px",
            }}
          >
            {agent.name}
          </div>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              ...GRADIENT_TEXT,
            }}
          >
            {agent.tagline}
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: "15px",
          color: "#374151",
          lineHeight: 1.7,
        }}
      >
        {agent.description}
      </div>

      <div style={{ height: "1px", background: "#F3F4F6" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {agent.automations.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "Manrope, sans-serif",
              fontSize: "13px",
              color: "#6B7280",
            }}
          >
            <CheckCircle size={13} color="#2B60EB" style={{ flexShrink: 0 }} />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function HomeServices() {
  const painRef = useRef(null);
  const agentsRef = useRef(null);
  const automationsRef = useRef(null);
  const ctaRef = useRef(null);

  const painInView = useInView(painRef, { once: true, margin: "-80px" });
  const agentsInView = useInView(agentsRef, { once: true, margin: "-80px" });
  const automationsInView = useInView(automationsRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <div style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* ── HERO ── */}
      <section
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(43,96,235,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 0% 50%, rgba(139,55,234,0.05) 0%, transparent 70%),
            radial-gradient(circle, rgba(43,96,235,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 28px 28px",
          paddingTop: "140px",
          paddingBottom: "100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: GRADIENT,
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "100px",
                border: "1px solid rgba(43,96,235,0.2)",
                background: "rgba(43,96,235,0.05)",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  ...GRADIENT_TEXT,
                }}
              >
                Home Services
              </span>
              <ChevronRight size={12} color="#4655EB" />
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#6B7280",
                }}
              >
                Quanton OS
              </span>
            </div>

            <h1
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.15,
                color: "#1F2937",
                marginBottom: "24px",
                letterSpacing: "-0.5px",
              }}
            >
              Your trade is the expertise.{" "}
              <span style={{ ...GRADIENT_TEXT }}>
                The business needs infrastructure.
              </span>
            </h1>

            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                color: "#374151",
                lineHeight: 1.75,
                maxWidth: "640px",
                margin: "0 auto 16px",
              }}
            >
              Home services businesses lose revenue to unconverted estimates, scheduling gaps, and the absence of governed field-to-office processes. Quanton OS deploys eight coordinated AI agents that run the operational layer of your business — so you focus on delivering quality work, not managing the business around it.
            </p>

            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                color: "#1F2937",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              HVAC. Plumbing. Electrical. Roofing. Landscaping. Cleaning. Pest control. Any trade business where the work is skilled and the operations need to match.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/assessment"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  background: GRADIENT,
                  color: "white",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.88";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Assess Your Business
                <ArrowRight size={16} />
              </Link>

              <Link
                href="https://calendly.com/quantonlabs/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  background: "transparent",
                  color: "#1F2937",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  border: "1.5px solid #1F2937",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.7";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Book a Discovery Call
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section
        ref={painRef}
        style={{
          backgroundColor: "#F9FAFB",
          padding: "100px 24px",
          borderTop: "1px solid #E5E7EB",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={painInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "16px",
                ...GRADIENT_TEXT,
              }}
            >
              The operational reality
            </div>
            <h2
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#1F2937",
                lineHeight: 1.25,
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              The problems that keep skilled trade businesses from scaling
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {painPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={painInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "1px solid #E5E7EB",
                    padding: "32px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(43,96,235,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon size={20} color="#2B60EB" />
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      color: "#1F2937",
                      marginBottom: "12px",
                      lineHeight: 1.35,
                    }}
                  >
                    {point.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "15px",
                      color: "#6B7280",
                      lineHeight: 1.7,
                    }}
                  >
                    {point.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AGENTS ── */}
      <section
        ref={agentsRef}
        style={{ backgroundColor: "#ffffff", padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={agentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "16px",
                ...GRADIENT_TEXT,
              }}
            >
              Built for your business
            </div>
            <h2
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#1F2937",
                lineHeight: 1.25,
                maxWidth: "640px",
                margin: "0 auto 16px",
              }}
            >
              Four agents running the back office while your team runs the job
            </h2>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "16px",
                color: "#6B7280",
                lineHeight: 1.7,
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              All eight agents are deployed at every engagement. These four carry the highest operational load for home services businesses.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
              gap: "24px",
            }}
          >
            {agents.map((agent, i) => (
              <AgentCard key={agent.name} agent={agent} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT GETS AUTOMATED ── */}
      <section
        ref={automationsRef}
        style={{ backgroundColor: "#041227", padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={automationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "16px",
                ...GRADIENT_TEXT,
              }}
            >
              What gets automated
            </div>
            <h2
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "#ffffff",
                lineHeight: 1.25,
                maxWidth: "600px",
                margin: "0 auto 16px",
              }}
            >
              Specific workflows that stop falling through the cracks
            </h2>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "16px",
                color: "rgba(255,255,255,0.60)",
                lineHeight: 1.7,
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              These are the workflows Quanton OS configures and governs for home services deployments.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {automations.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={automationsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "20px 24px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "rgba(43,96,235,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={14} color="#60A5FA" />
                  </div>
                  <span
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.55,
                      fontWeight: 500,
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ROI FRAMING ── */}
      <section
        style={{
          backgroundColor: "#F9FAFB",
          padding: "100px 24px",
          borderTop: "1px solid #E5E7EB",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "16px",
                ...GRADIENT_TEXT,
              }}
            >
              The operational shift
            </div>
            <h2
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.5vw, 38px)",
                color: "#1F2937",
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              More estimates closed. Faster payments. Owner time back.
            </h2>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: 1.75,
              }}
            >
              The Phase 1 Discovery produces a Pre-sale ROI Estimate that quantifies value leakage across five categories specific to your business — before any commitment is made.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                label: "Estimate conversion",
                value: "Improved through follow-up",
                sub: "Structured sequences convert quotes that would otherwise go cold",
              },
              {
                label: "Payment collection",
                value: "Accelerated and automated",
                sub: "Invoice generation and follow-up without manual intervention",
              },
              {
                label: "Owner time in logistics",
                value: "Redirected to growth",
                sub: "Scheduling, dispatch, and communications handled by agents",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid #E5E7EB",
                  padding: "20px 24px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    marginBottom: "4px",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    marginBottom: "4px",
                    ...GRADIENT_TEXT,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "13px",
                    color: "#6B7280",
                  }}
                >
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL PLACEHOLDER ── */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              background: "#F9FAFB",
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
              padding: "48px",
            }}
          >
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "20px",
                fontWeight: 500,
                color: "#374151",
                lineHeight: 1.65,
                fontStyle: "italic",
                marginBottom: "28px",
              }}
            >
              "I was spending three hours a day on scheduling, follow-ups, and chasing invoices. Quanton OS handles all of it now. My conversion rate on estimates went up and I am not the bottleneck in my own business anymore."
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                color: "#1F2937",
                marginBottom: "4px",
              }}
            >
              Business Owner
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "13px",
                color: "#9CA3AF",
              }}
            >
              Home Services Business — testimonial forthcoming
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        style={{ backgroundColor: "#ffffff", padding: "80px 24px 120px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center",
            background: "#F9FAFB",
            borderRadius: "24px",
            border: "1px solid #E5E7EB",
            padding: "64px 48px",
            boxShadow: "0 8px 40px rgba(43,96,235,0.08)",
          }}
        >
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "20px",
              ...GRADIENT_TEXT,
            }}
          >
            Start with a diagnostic
          </div>
          <h2
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(26px, 3.5vw, 38px)",
              color: "#1F2937",
              lineHeight: 1.25,
              marginBottom: "16px",
            }}
          >
            See where your business stands before anything else.
          </h2>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "16px",
              color: "#6B7280",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            The assessment identifies your highest-value operational opportunities and quantifies potential impact. No commitment required.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/assessment"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "8px",
                background: GRADIENT,
                color: "white",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = "0.88";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Assess Your Business
              <ArrowRight size={16} />
            </Link>

            <Link
              href="https://calendly.com/quantonlabs/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "8px",
                background: "transparent",
                color: "#1F2937",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: "1.5px solid #1F2937",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = "0.7";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}