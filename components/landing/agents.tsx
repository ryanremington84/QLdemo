"use client";

import { motion } from "framer-motion";

export default function GoverningAgent() {
  return (
    <section
      id="what-gets-deployed"
      style={{ backgroundColor: "#041227", padding: "96px 0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex flex-col items-center justify-center text-center"
        >
          <div
            className="inline-flex items-center justify-center px-4 py-1 text-xs font-semibold rounded-full mb-6 tracking-[0.08em] uppercase"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <span style={{
              background: "linear-gradient(to right, #2B60EB, #8B37EA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Manrope, sans-serif",
            }}>
              THE GOVERNING AGENT
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif" }}
          >
            The Coordination, Decision, and Intelligence Layer
          </h2>
          <p
            className="text-sm md:text-lg leading-relaxed max-w-3xl"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Manrope, sans-serif" }}
          >
            Without the Governing Agent, the other seven agents execute tasks in isolation. The Governing Agent receives structured data and exception flags from every functional agent, decides within its configured operating boundary, directs agents to act, escalates what requires human judgment, and feeds the leadership dashboard in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 text-center"
        >
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Manrope, sans-serif" }}
          >
            Seven functional agents cover every operational domain of your business. Each agent operates within its configured scope, reports activity and exceptions to the Governing Agent, and integrates directly with your existing platforms via API.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="rounded-xl p-8 transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
            <h3 className="text-xl mb-2" style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>Marketing and Content Agent</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Growth System</p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Plans, creates, and distributes content across every active channel. Manages the editorial calendar, enforces brand voice across all agent-generated output, tracks content performance, and delivers campaign context and lead signals to the Sales Agent.</p>
          </div>
          <div className="rounded-xl p-8 transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
            <h3 className="text-xl mb-2" style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>Sales Agent</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Growth System</p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Manages the full lead lifecycle from first contact through close. Handles lead intake and response, qualification scoring, proposal generation, multi-step follow-up sequences, pipeline reporting, and CRM hygiene.</p>
          </div>
          <div className="rounded-xl p-8 transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
            <h3 className="text-xl mb-2" style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>Customer Experience Agent</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Operations and Growth Systems</p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Manages the post-conversion client relationship. Handles client onboarding sequences, inbound inquiry classification and routing, scheduling, complaint escalation, post-service follow-up, and client satisfaction tracking.</p>
          </div>
          <div className="rounded-xl p-8 transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
            <h3 className="text-xl mb-2" style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>People and Team Agent</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Operations System</p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Manages the full talent and team lifecycle. Covers job posting, candidate screening and scoring, interview scheduling, new hire onboarding, performance review preparation, certification tracking, and compliance deadline monitoring.</p>
          </div>
          <div className="rounded-xl p-8 transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
            <h3 className="text-xl mb-2" style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>Operations Agent</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Operations and Platform Systems</p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Governs day-to-day operational execution. Assigns and tracks tasks across the team and agent domains, creates and maintains versioned SOPs, monitors process compliance, coordinates vendor communications, and surfaces operational dependencies and blockers to the Governing Agent.</p>
          </div>
          <div className="rounded-xl p-8 transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
            <h3 className="text-xl mb-2" style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>Inventory and Supply Chain Agent</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Operations System</p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Monitors stock levels against configured thresholds, triggers reorder events, generates purchase orders, manages supplier communications, tracks inbound shipments, and flags delivery delays and stockout risks to the Governing Agent.</p>
          </div>
          <div className="rounded-xl p-8 transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
            <h3 className="text-xl mb-2" style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}>Finance Agent</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Operations System</p>
            <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}>Manages the financial operations layer. Generates invoices on trigger from Sales and Customer Experience agents, tracks receivables, categorises expenses against the chart of accounts, produces financial reports on a configured schedule, and flags budget variances to the Governing Agent.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
