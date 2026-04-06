"use client";

import { motion } from "framer-motion";
import { ChevronRight, Globe, Shield, Zap } from "lucide-react";

export default function GoverningAgent() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#041227", padding: "96px 0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div
            className="inline-flex items-center justify-center px-4 py-1 text-xs font-semibold rounded-full mb-6 tracking-[0.08em] uppercase"
            style={{
              background: "linear-gradient(to right, #2B60EB, #8B37EA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Manrope, sans-serif",
              border: "1px solid rgba(255,255,255,0.08)",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span style={{
              background: "linear-gradient(to right, #2B60EB, #8B37EA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              THE GOVERNING AGENT
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif" }}
          >
            The Intelligence Layer That Makes the Whole System Work
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Manrope, sans-serif" }}
          >
            Most AI deployments are collections of tools that work in isolation. Quanton OS is different. The Governing Agent sits above all seven functional agents, receives structured data and exception flags from every domain, decides within its configured operating boundary, directs agents to act, and escalates what requires human judgment. Every function in your business is visible, coordinated, and governed from one view.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div
            className="rounded-xl p-8 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "2px solid #2B60EB",
              borderRadius: "12px",
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
              <Globe className="text-blue-400" size={24} />
            </div>
            <h3
              className="text-xl mb-4"
              style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
            >
              Coordination
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}
            >
              All seven agents operate from a unified shared state. The Governing Agent detects cross-functional conflicts, resolves coordination gaps, and ensures every domain is working from the same picture of the business.
            </p>
          </div>

          <div
            className="rounded-xl p-8 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "2px solid #584DEB",
              borderRadius: "12px",
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
              <Shield className="text-purple-400" size={24} />
            </div>
            <h3
              className="text-xl mb-4"
              style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
            >
              Decision
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}
            >
              The Governing Agent decides within its configured operating boundary without requiring human input on every action. Decisions that exceed the boundary are escalated immediately, with full context, to the appropriate decision-maker.
            </p>
          </div>

          <div
            className="rounded-xl p-8 transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "2px solid #8B37EA",
              borderRadius: "12px",
            }}
          >
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6">
              <Zap className="text-green-400" size={24} />
            </div>
            <h3
              className="text-xl mb-4"
              style={{ color: "#FFFFFF", fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
            >
              Intelligence
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Manrope, sans-serif" }}
            >
              Every agent action, exception, and resolution is captured and synthesised into the leadership dashboard in real time. The owner sees the full operational picture without assembling it manually.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <button
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200"
            style={{
              background: "linear-gradient(to right, #2B60EB, #8B37EA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              border: "1px solid rgba(43,96,235,0.4)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            <span style={{
              background: "linear-gradient(to right, #2B60EB, #8B37EA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Explore the Governing Agent
            </span>
            <ChevronRight className="ml-2 text-blue-400" size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
