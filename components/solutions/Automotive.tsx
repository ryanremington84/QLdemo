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
  Package,
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
    title: "Service bay scheduling running on memory and whiteboards",
    description:
      "Coordinating technician assignments, tracking job progress, and communicating vehicle status manually creates constant interruptions for service advisors and leaves customers without timely updates.",
  },
  {
    icon: Package,
    title: "Parts delays and inventory gaps stalling jobs",
    description:
      "Without governed inventory monitoring and supplier coordination, parts shortages surface at the worst possible moment — when the vehicle is already on the lift and the customer is waiting on a commitment.",
  },
  {
    icon: AlertCircle,
    title: "Approved estimates sitting idle while bays sit empty",
    description:
      "Customers who approved work and never heard back. Follow-up that fell through because the service advisor was pulled onto something else. Revenue that was ready to be collected but was never scheduled.",
  },
];

const agents = [
  {
    icon: MessageSquare,
    name: "Customer Experience Agent",
    tagline: "Every customer kept informed without manual effort.",
    description:
      "Appointment confirmations and reminders sent automatically. Vehicle status updates delivered at defined milestones — drop-off acknowledged, diagnosis complete, work approved, ready for pickup. Post-service follow-up executed on completion. Your customers never have to call to find out what is happening with their vehicle.",
    automations: [
      "Appointment confirmation and reminders",
      "Vehicle status updates at job milestones",
      "Estimate approval follow-up sequences",
      "Post-service follow-up and review requests",
    ],
    color: "linear-gradient(135deg, #2B60EB, #4655EB)",
  },
  {
    icon: Cpu,
    name: "Operations Agent",
    tagline: "Bay scheduling, job tracking, and technician coordination — governed.",
    description:
      "Service bay assignments managed and communicated. Job progress tracked from vehicle intake to delivery. Technician task assignments updated as priorities shift. SOPs documented and enforced across job types. Supplier communications handled without the service advisor as the single point of contact.",
    automations: [
      "Service bay assignment and scheduling",
      "Job progress tracking from intake to delivery",
      "Technician task assignment and updates",
      "SOP governance across job types",
    ],
    color: "linear-gradient(135deg, #4655EB, #584DEB)",
  },
  {
    icon: Package,
    name: "Inventory and Supply Chain Agent",
    tagline: "Parts available when the job needs them.",
    description:
      "Stock levels monitored against configured thresholds. Reorder triggers executed automatically before shortages occur. Supplier communications managed and delivery timelines tracked. Parts cost trends surfaced for margin analysis. Your service bays stay productive because the parts are there when the technician needs them.",
    automations: [
      "Parts inventory monitoring and reorder triggers",
      "Supplier communication and delivery tracking",
      "Stockout risk flagging before jobs are affected",
      "Parts cost trend analysis and reporting",
    ],
    color: "linear-gradient(135deg, #584DEB, #7341EA)",
  },
  {
    icon: BarChart2,
    name: "Finance Agent",
    tagline: "Jobs invoiced. Revenue collected. Books current.",
    description:
      "Invoices generated on job completion. Outstanding balances tracked and followed up automatically. Repair order revenue categorised by job type and technician. Financial reports produced on schedule. You see your shop's financial performance in real time without waiting for month-end reconciliation.",
    automations: [
      "Invoice generation on job completion",
      "Outstanding balance tracking and follow-up",
      "Revenue categorisation by job type",
      "Shop performance and margin reporting",
    ],
    color: "linear-gradient(135deg, #7341EA, #8B37EA)",
  },
];

const automations = [
  { icon: Bell, text: "Appointment confirmation and multi-touch reminder sequences" },
  { icon: Calendar, text: "Vehicle status updates at intake, diagnosis, approval, and pickup" },
  { icon: FileText, text: "Estimate approval follow-up at 24, 48, and 72-hour intervals" },
  { icon: Package, text: "Parts reorder triggers before inventory reaches critical threshold" },
  { icon: DollarSign, text: "Invoice generation triggered on job completion sign-off" },
  { icon: Clock, text: "Outstanding payment follow-up at 7, 14, and 30-day intervals" },
  { icon: MessageSquare, text: "Post-service review requests at 48 hours after vehicle delivery" },
  { icon: BarChart2, text: "Weekly bay utilisation, revenue, and technician performance reporting" },
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

export default function Automotive() {
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
                Automotive
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
              Your shop runs on skill.{" "}
              <span style={{ ...GRADIENT_TEXT }}>
                The business should run on systems.
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
              Automotive businesses lose revenue to idle bays, parts delays, unconverted estimates, and customers who never heard back. Quanton OS deploys eight coordinated AI agents that govern the operational layer of your shop — so your service advisors and technicians focus on vehicles, not administrative volume.
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
              Independent repair shops. Body shops. Detailing operations. Tint, PPF, and audio install. Any automotive business where technical skill is the product and operational efficiency determines the margin.
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
              The problems that keep independent automotive shops from scaling
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
              Built for your shop
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
              Four agents running operations while your team runs the jobs
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
              All eight agents are deployed at every engagement. These four carry the highest operational load for automotive businesses.
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
              Specific workflows that keep bays productive and customers informed
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
              These are the workflows Quanton OS configures and governs for automotive business deployments.
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
              Bays busier. Estimates converting. Cash flow visible.
            </h2>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: 1.75,
              }}
            >
              The Phase 1 Discovery produces a Pre-sale ROI Estimate that quantifies value leakage across five categories specific to your shop — before any commitment is made.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                label: "Bay utilisation",
                value: "Improved through scheduling governance",
                sub: "Fewer idle slots from better job coordination and customer follow-up",
              },
              {
                label: "Estimate conversion",
                value: "Lifted through structured follow-up",
                sub: "Approved work that was never scheduled becomes booked revenue",
              },
              {
                label: "Parts-related delays",
                value: "Reduced through inventory automation",
                sub: "Reorder triggers before shortages stall jobs already in progress",
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
              "We were losing jobs to parts delays and customers who approved estimates and never heard back. Quanton OS fixed both. Our bays are more productive and our service advisors spend their time on vehicles, not phone calls and follow-ups."
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
              Shop Owner
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "13px",
                color: "#9CA3AF",
              }}
            >
              Automotive Business — testimonial forthcoming
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
            See where your shop stands before anything else.
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