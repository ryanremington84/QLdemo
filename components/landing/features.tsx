import { Workflow, TrendingUp, PenTool, BarChart3, AlertTriangle, Users, UserPlus, BookOpen, ClipboardList, LineChart, DollarSign, Boxes, Truck, Megaphone, FileSignature, UserCheck, Bell, PieChart, Brain, Calendar, Mail, Clock, Target, CheckCircle2, Gauge, Receipt, FileText, ShieldCheck, Settings, CreditCard, Scale, Package, Sparkles, Network, Activity, Map } from "lucide-react";
import { motion } from "framer-motion";

export const features = [
  // Strategy — Intelligence
  { title: "Unified Multi-Agent Orchestration", icon: Workflow },
  { title: "Cross-Department Workflow Automation", icon: Network },
  { title: "Autonomous Revenue Pipeline Management", icon: TrendingUp },
  { title: "Intelligent Content Engine", icon: PenTool },
  { title: "Executive KPI Command Center", icon: BarChart3 },
  { title: "Exception & Risk Detection", icon: AlertTriangle },
  { title: "Full Customer Lifecycle Management", icon: Users },
  { title: "Automated Hiring Infrastructure", icon: UserPlus },

  // Platform — Architecture
  { title: "SOP & Knowledge Base Automation", icon: BookOpen },
  { title: "Intelligent Task Delegation", icon: ClipboardList },
  { title: "Predictive Revenue Forecasting", icon: LineChart },
  { title: "Financial Execution Engine", icon: DollarSign },
  { title: "Inventory & Demand Forecasting", icon: Boxes },
  { title: "Supplier Coordination Layer", icon: Truck },
  { title: "Brand Voice Governance", icon: Megaphone },
  { title: "Proposal & Contract Generation", icon: FileSignature },

  // Operations — Precision
  { title: "Retention & Segmentation Intelligence", icon: UserCheck },
  { title: "Escalation & Conflict Routing", icon: Bell },
  { title: "Performance Attribution Analytics", icon: PieChart },
  { title: "Leadership-Level Business Synthesis", icon: Brain },
  { title: "Social Content Scheduling", icon: Calendar },
  { title: "Email Campaign Automation", icon: Mail },
  { title: "Competitive Monitoring", icon: Activity },
  { title: "Editorial Calendar Management", icon: Clock },

  // Growth — Momentum
  { title: "Outbound Prospecting Engine", icon: Target },
  { title: "Lead Qualification Logic", icon: CheckCircle2 },
  { title: "Win/Loss Analysis", icon: Gauge },
  { title: "Team Scheduling", icon: Users },
  { title: "Performance Review Preparation", icon: ClipboardList },
  { title: "Vendor Cost Analysis", icon: Receipt },
  { title: "Meeting Intelligence Capture", icon: FileText },
  { title: "Process Compliance Monitoring", icon: ShieldCheck },
];

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-2xl md:text-5xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
          One Operating System. Four Coordinated Systems. Eight AI Agents.
        </h1>
        <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Quanton OS organises every business function into four interconnected operating systems. 
          Eight AI agents operate within this structure, covering the complete operational surface area of a growth-stage business. 
          Everything is coordinated. Nothing works in isolation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Strategy — Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl"
        >
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            Strategy — Intelligence
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Defines business objectives, growth metrics, and strategic priorities. Establishes clarity between vision and execution through diagnostic analysis, KPI frameworks, and performance reviews.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {features.slice(0, 8).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="group flex items-start gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-md hover:bg-white/70 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-white/50 backdrop-blur-md">
                    <Icon size={16} className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 leading-tight">{feature.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Platform — Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl"
        >
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
            Platform — Architecture
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Builds the intelligent infrastructure that powers execution. Connects digital systems, brand assets, data pipelines, and intelligence layers into a unified operational foundation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {features.slice(8, 16).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="group flex items-start gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-md hover:bg-white/70 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-white/50 backdrop-blur-md">
                    <Icon size={16} className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 leading-tight">{feature.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Operations — Precision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl"
        >
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            Operations — Precision
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Governs day-to-day execution through client service delivery, internal compliance, and quality assurance. Ensures consistent performance and operational integrity across every agent domain.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {features.slice(16, 24).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="group flex items-start gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-md hover:bg-white/70 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-white/50 backdrop-blur-md">
                    <Icon size={16} className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 leading-tight">{feature.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Growth — Momentum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-2xl p-6 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl"
        >
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            Growth — Momentum
          </h2>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Drives revenue generation and market visibility through multichannel campaigns, conversion optimisation, and iterative testing. Translates strategy into measurable growth.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {features.slice(24, 32).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="group flex items-start gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-md hover:bg-white/70 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-white/50 backdrop-blur-md">
                    <Icon size={16} className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 leading-tight">{feature.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
