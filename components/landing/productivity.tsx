"use client";

import { motion } from "framer-motion";
import { ChevronRight, Globe, Shield, Zap } from "lucide-react";

export default function GoverningAgent() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1 text-sm font-medium rounded-full bg-black/3 backdrop-blur-sm border border-white/20 text-slate-600 mb-6">
            THE GOVERNING AGENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent mb-6">
            The Intelligence Layer That Makes the Whole System Work
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
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
          <div className="glass rounded-2xl p-8 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl hover:bg-white/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
              <Globe className="text-blue-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Coordination</h3>
            <p className="text-slate-600 leading-relaxed">
              All seven agents operate from a unified shared state. The Governing Agent detects cross-functional conflicts, resolves coordination gaps, and ensures every domain is working from the same picture of the business.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl hover:bg-white/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
              <Shield className="text-purple-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Decision</h3>
            <p className="text-slate-600 leading-relaxed">
              The Governing Agent decides within its configured operating boundary without requiring human input on every action. Decisions that exceed the boundary are escalated immediately, with full context, to the appropriate decision-maker.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl hover:bg-white/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6">
              <Zap className="text-green-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Intelligence</h3>
            <p className="text-slate-600 leading-relaxed">
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
          <button className="hidden items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Explore the Governing Agent
            <ChevronRight className="ml-2" size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
