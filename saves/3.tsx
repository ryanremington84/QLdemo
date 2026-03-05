"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Grid,
  Zap,
  Users,
  Database,
  TrendingUp,
  Shield,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  BarChart3,
  Target,
  Cpu,
  Globe,
  Settings,
  MessageSquare,
  Brain,
  Mail,
  Share2,
  FileText,
  DollarSign,
  Sparkles
} from "lucide-react";

const agents = [
  { name: "Email Automation", icon: Mail },
  { name: "Social Media", icon: Share2 },
  { name: "Employee Management", icon: Users },
  { name: "Content Management", icon: FileText },
  { name: "Revenue Optimization", icon: DollarSign },
  { name: "AI Systems", icon: Sparkles },
  { name: "Sales Execution", icon: TrendingUp }
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F1A]">
    {/* Animated background grid */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Operating System for Intelligent Businesses
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Quanton OS deploys 8 coordinated AI agents across your entire operation — marketing, sales, service, finance, operations, inventory, people, and governance — unified under one governing intelligence layer.
      </motion.p>

      <motion.p
        className="text-lg text-slate-400 mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Not automation. Not tools. A governed AI architecture embedded into your business.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className="px-8 py-4 bg-white text-[#0B0F1A] rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all duration-300 group">
          Request Strategic Assessment
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
          View Architecture
        </button>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-20 bg-[#0B0F1A]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">Most Businesses Run on Disconnected Systems</h2>

          <ul className="space-y-6">
            {[
              "Marketing tools don’t know what sales is doing",
              "Sales promises delivery operations can’t support",
              "Finance reacts after the fact",
              "Leadership sees lagging indicators, not live intelligence",
              "Automation exists — but orchestration does not"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 text-slate-300 text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="mt-10 text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Disconnected tools create operational drag.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`h-24 rounded-lg flex items-center justify-center ${i % 3 === 0 ? 'bg-blue-500/20' :
                      i % 3 === 1 ? 'bg-green-500/20' : 'bg-purple-500/20'
                    }`}
                >
                  <div className="text-white text-xs font-mono">Tool {i + 1}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="h-24 rounded-lg bg-red-500/20 flex items-center justify-center">
                <div className="text-white text-xs font-mono">Data</div>
              </div>
              <div className="h-24 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <div className="text-white text-xs font-mono">Flow</div>
              </div>
              <div className="h-24 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <div className="text-white text-xs font-mono">Sync</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-24 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Introducing Quanton OS
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Quanton OS embeds eight coordinated AI agents across your business.
          Each agent governs a functional domain.
          One Governing Agent orchestrates the system.
        </p>
        <p className="text-lg text-slate-400 mt-6">
          This is AI as infrastructure — not assistance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative flex justify-center"
      >
        <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse"></div>

          {/* Governing Agent */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute w-24 h-24 rounded-full bg-red-400 flex items-center justify-center z-10 shadow-lg"
          >
            <Brain className="w-10 h-10 text-white" />
          </motion.div>

          {/* Functional Agents */}
          {agents.map((agent, i) => {
            const angle = (i / agents.length) * Math.PI * 2;
            const radius = 110;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const Icon = agent.icon;

            return (
              <motion.div
                key={agent.name}
                initial={{ scale: 0, x: x / 3, y: y / 3 }}
                whileInView={{ scale: 1, x, y }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

const AgentsSection = () => (
  <section className="py-20 bg-[#0B0F1A]">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-white mb-6">The 8 Agents</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Each agent governs a functional domain. Together, they form a unified system.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Marketing & Content Agent",
            description: "Plans, creates, distributes, and optimizes content with brand governance and competitive intelligence.",
            icon: MessageSquare,
            color: "blue"
          },
          {
            title: "Sales Agent",
            description: "Manages pipeline, proposals, forecasting, and outbound strategy with human approval at key decision points.",
            icon: Target,
            color: "blue"
          },
          {
            title: "Customer Experience Agent",
            description: "Handles service, retention, reviews, onboarding, and real-time website engagement.",
            icon: Users,
            color: "green"
          },
          {
            title: "People & Team Agent",
            description: "Manages hiring, onboarding, performance prep, certifications, and team scheduling.",
            icon: Cpu,
            color: "purple"
          },
          {
            title: "Operations Agent",
            description: "Controls SOPs, task management, vendor coordination, meetings, and quality monitoring.",
            icon: Settings,
            color: "yellow"
          },
          {
            title: "Inventory & Supply Chain Agent",
            description: "Tracks stock, triggers reorders, monitors suppliers, and analyzes cost compression.",
            icon: Database,
            color: "green"
          },
          {
            title: "Finance Agent",
            description: "Handles invoicing, reconciliation, reporting, contracts, compliance, and compensation tracking.",
            icon: BarChart3,
            color: "green"
          },
          {
            title: "Governing Agent",
            description: "Orchestrates all other agents. Manages exceptions. Resolves conflicts. Provides unified leadership visibility.",
            icon: Shield,
            color: "red"
          }
        ].map((agent, index) => (
          <motion.div
            key={index}
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${agent.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                agent.color === 'green' ? 'bg-green-500/20 text-green-400' :
                  agent.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                    agent.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
              }`}>
              <agent.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{agent.title}</h3>
            <p className="text-slate-300">{agent.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DifferentiationSection = () => (
  <section className="py-20 bg-gradient-to-br from-[#0B0F1A] to-[rgba(191,219,254,0.03)]">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Without the Governing Agent, AI is Just Automation</h2>
      </motion.div>

      <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Automation Agencies",
              description: "Deploy workflows"
            },
            {
              title: "AI Tools",
              description: "Generate outputs"
            },
            {
              title: "Fractional Operators",
              description: "Provide oversight"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-[rgba(255,255,255,0.03)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-white">
            Seven agents execute. The eighth ensures they operate as a system.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="py-20 bg-[#0B0F1A]">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {[
          {
            title: "Assessment",
            description: "We analyze your operational architecture across 8 domains.",
            icon: Eye
          },
          {
            title: "Deployment",
            description: "Agents integrate directly into your CRM, finance, project management, and communication platforms.",
            icon: Settings
          },
          {
            title: "Orchestration",
            description: "Shared state architecture enables cross-agent awareness.",
            icon: Grid
          },
          {
            title: "Governance",
            description: "Human approval gates remain in place. AI handles throughput. You retain control.",
            icon: Shield
          },
          {
            title: "Dashboard",
            description: "One leadership view across marketing, pipeline, service, finance, operations, and risk.",
            icon: BarChart3
          }
        ].map((step, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-20 h-20 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center mx-auto mb-6">
              <step.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-slate-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HybridExecutionSection = () => (
  <section className="py-20 bg-gradient-to-br from-[#0B0F1A] to-[rgba(191,219,254,0.03)]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">AI Executes. Humans Decide.</h2>

          <ul className="space-y-6">
            {[
              "AI drafts",
              "AI monitors",
              "AI detects patterns",
              "AI flags exceptions"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 text-slate-300 text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="text-xl font-bold text-white mb-4">But:</p>
            <ul className="space-y-4">
              {[
                "Humans approve proposals",
                "Humans resolve escalations",
                "Humans validate financial reporting",
                "Humans make final decisions"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4 text-slate-300 text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.p
            className="mt-10 text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Control remains with leadership.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-white font-medium">AI Execution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-white font-medium">Human Oversight</span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Content Creation",
                "Lead Scoring",
                "Financial Forecasting",
                "Scheduling",
                "Risk Analysis"
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-[rgba(255,255,255,0.03)]">
                  <span className="text-slate-300">{item}</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const DashboardPreviewSection = () => (
  <section className="py-20 bg-[#0B0F1A]">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-white mb-6">One View. Total Visibility.</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Real-time KPIs, pipeline health, cash position, operational bottlenecks, complaint volume, inventory risk, compliance status, exception alerts — all synthesized by the Governing Agent.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-2xl p-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "KPIs", "Pipeline", "Cash Flow", "Bottlenecks",
            "Complaints", "Inventory", "Compliance", "Alerts"
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-[rgba(255,255,255,0.03)] text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-white font-bold mb-2">{item}</div>
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-full"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const TargetBusinessesSection = () => (
  <section className="py-20 bg-gradient-to-br from-[#0B0F1A] to-[rgba(191,219,254,0.03)]">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Built for Operationally Complex Businesses</h2>

        <ul className="space-y-4 max-w-3xl mx-auto">
          {[
            "Professional service firms",
            "Multi-location operators",
            "Healthcare and regulated industries",
            "Manufacturing and supply chain-driven businesses",
            "Agencies scaling beyond founder-dependence"
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center justify-center gap-4 text-slate-300 text-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="mt-12 text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          If your business complexity exceeds your visibility, Quanton OS is designed for you.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

const PositioningSection = () => (
  <section className="py-20 bg-[#0B0F1A]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">This Is Not Software. It Is Operating Architecture.</h2>

          <p className="text-xl text-slate-300 mb-10">
            Quanton OS replaces fragmented automation stacks with a unified intelligence layer embedded into your execution structure.
          </p>

          <motion.p
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            You do not “use” Quanton OS. Your business runs on it.
          </motion.p>
        </motion.div>
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="py-20 bg-gradient-to-br from-[#0B0F1A] to-[rgba(191,219,254,0.03)]">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-white mb-6">See Your Business as a System.</h2>

        <p className="text-xl text-slate-300 mb-12">
          Request a Quanton Strategic Assessment and receive a diagnostic of your operational architecture across all 8 domains.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-8 py-4 bg-white text-[#0B0F1A] rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all duration-300 group">
            Request Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
            Download Architecture Overview
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-[#0B0F1A] border-t border-[rgba(255,255,255,0.05)]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Quanton Labs</h3>
          <p className="text-slate-400">The Architecture of Intelligent Business</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {["Architecture", "Assessment", "Security", "Privacy", "Contact"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="text-slate-500">© 2026 Quanton Labs</p>
      </div>
    </div>
  </footer>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AgentsSection />
      <DifferentiationSection />
      <HowItWorksSection />
      <HybridExecutionSection />
      <DashboardPreviewSection />
      <TargetBusinessesSection />
      <PositioningSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
