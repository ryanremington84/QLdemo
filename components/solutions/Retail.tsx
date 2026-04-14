"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare,
  TrendingUp,
  Package,
  BarChart2,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  DollarSign,
  Calendar,
  FileText,
  Bell,
  ShoppingBag,
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
    icon: Package,
    title: "Inventory decisions made on instinct rather than data",
    description:
      "Without real-time stock visibility across channels, overstock and stockout happen simultaneously. Products sit unsold while bestsellers run dry, and purchasing decisions are made on gut feel rather than performance data.",
  },
  {
    icon: RefreshCw,
    title: "Customer retention left to chance",
    description:
      "Customers who had a great experience in-store or online simply never return because no one followed up. Lapsed customers, abandoned carts, and missed loyalty touchpoints quietly erode the repeat revenue that independent retail depends on.",
  },
  {
    icon: AlertCircle,
    title: "Marketing execution inconsistent without dedicated staff",
    description:
      "Content falls behind when operations get busy. Promotions go out late or not at all. Social presence goes quiet during peak periods when visibility matters most. Marketing is always the first thing to drop when the store gets busy.",
  },
];

const agents = [
  {
    icon: Package,
    name: "Inventory and Supply Chain Agent",
    tagline: "The right products, in stock, before you run out.",
    description:
      "Stock levels monitored in real time across your store and online channels. Reorder triggers executed automatically before stockouts occur. Supplier communications managed and delivery timelines tracked. Slow-moving inventory flagged for markdown decisions. Your purchasing reflects what is actually selling, not what you remember was selling.",
    automations: [
      "Real-time stock monitoring across channels",
      "Automated reorder triggers before stockout",
      "Supplier communication and delivery tracking",
      "Slow-moving inventory flagging and markdown alerts",
    ],
    color: "linear-gradient(135deg, #2B60EB, #4655EB)",
  },
  {
    icon: MessageSquare,
    name: "Customer Experience Agent",
    tagline: "Every customer relationship maintained beyond the transaction.",
    description:
      "Post-purchase follow-up sequences executed automatically. Abandoned cart recovery triggered at defined intervals. Loyalty touchpoints delivered at configured milestones. Complaint routing and resolution tracking handled without manual intervention. Your customers feel attended to whether your team has bandwidth or not.",
    automations: [
      "Post-purchase follow-up and review requests",
      "Abandoned cart recovery sequences",
      "Loyalty milestone communications",
      "Complaint routing and satisfaction tracking",
    ],
    color: "linear-gradient(135deg, #4655EB, #584DEB)",
  },
  {
    icon: TrendingUp,
    name: "Marketing and Content Agent",
    tagline: "Consistent brand presence whether the store is quiet or slammed.",
    description:
      "Editorial calendar planned and executed across your active channels. Product content drafted and queued for review. Promotional campaigns coordinated with inventory data so you are not marketing products that are out of stock. Performance tracked and underperforming content flagged. Your brand shows up consistently regardless of how busy the floor is.",
    automations: [
      "Editorial calendar management across channels",
      "Product content generation and scheduling",
      "Promotional campaign coordination with inventory",
      "Content performance tracking and reporting",
    ],
    color: "linear-gradient(135deg, #584DEB, #7341EA)",
  },
  {
    icon: BarChart2,
    name: "Finance Agent",
    tagline: "Sales tracked. Margins visible. Cash flow clear.",
    description:
      "Revenue categorised by product, channel, and period automatically. Margin analysis surfaced without manual spreadsheet work. Supplier invoices processed and outstanding balances tracked. Financial reports produced on schedule. You see the financial performance of your store in real time without waiting for your accountant.",
    automations: [
      "Revenue categorisation by product and channel",
      "Margin analysis and low-margin product flagging",
      "Supplier invoice processing and tracking",
      "Cash flow and sales performance reporting",
    ],
    color: "linear-gradient(135deg, #7341EA, #8B37EA)",
  },
];

const automations = [
  { icon: Bell, text: "Inventory reorder triggers before products reach critical stock levels" },
  { icon: ShoppingBag, text: "Abandoned cart recovery sequences at 1, 24, and 72-hour intervals" },
  { icon: MessageSquare, text: "Post-purchase follow-up and review requests at 48 hours" },
  { icon: RefreshCw, text: "Lapsed customer re-engagement at 30, 60, and 90-day thresholds" },
  { icon: Calendar, text: "Promotional content scheduled in advance across active channels" },
  { icon: Package, text: "Slow-moving inventory flagged for markdown or supplier return" },
  { icon: FileText, text: "Supplier communication and purchase order management" },
  { icon: BarChart2, text: "Weekly sales, margin, and inventory performance reporting" },
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

export default function Retail() {
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
                Retail
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
              Your store is the experience.{" "}
              <span style={{ ...GRADIENT_TEXT }}>
                The operation needs to match it.
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
              Independent retailers lose margin to inventory decisions made without data, customers who never return, and marketing that goes quiet when the store gets busy. Quanton OS deploys eight coordinated AI agents that govern the operational layer of your store — so your team focuses on the customer in front of them, not the systems behind them.
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
              Boutiques. Specialty stores. Multi-location retail. Product-based businesses with physical and online presence. Any independent retailer where product curation and customer experience define the brand.
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
              The problems that keep independent retailers from growing profitably
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
              Built for your store
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
              Four agents running what your team cannot keep up with manually
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
              All eight agents are deployed at every engagement. These four carry the highest operational load for independent retailers.
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
              Specific workflows that protect margin and drive repeat revenue
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
              These are the workflows Quanton OS configures and governs for retail deployments.
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
              Better inventory decisions. More repeat customers. Margin protected.
            </h2>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "15px",
                color: "#6B7280",
                lineHeight: 1.75,
              }}
            >
              The Phase 1 Discovery produces a Pre-sale ROI Estimate that quantifies value leakage across five categories specific to your store — before any commitment is made.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                label: "Inventory margin",
                value: "Protected through data-driven purchasing",
                sub: "Reorder decisions based on actual sell-through rather than instinct",
              },
              {
                label: "Repeat customer revenue",
                value: "Recovered through retention automation",
                sub: "Lapsed customers and abandoned carts converted at scale",
              },
              {
                label: "Marketing consistency",
                value: "Maintained regardless of floor traffic",
                sub: "Content and promotions execute on schedule without manual effort",
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
              "We were constantly running out of our best sellers while sitting on inventory that would not move. Quanton OS fixed the purchasing side and brought back customers we had completely lost touch with. Our repeat purchase rate has improved significantly."
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
              Store Owner
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "13px",
                color: "#9CA3AF",
              }}
            >
              Independent Retail — testimonial forthcoming
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
            See where your store stands before anything else.
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