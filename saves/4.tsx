// app/page.tsx
"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BrainCircuit, 
  Database, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  CheckCircle,
  AlertTriangle,
  Eye,
  Zap,
  Shield
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-blue-500/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/70"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent"
          >
            The Operating System for Intelligent Businesses
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto"
          >
            Quanton OS deploys 8 coordinated AI agents across your entire operation — marketing, sales, service, finance, operations, inventory, people, and governance — unified under one governing intelligence layer.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            Not automation. Not tools. A governed AI architecture embedded into your business.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 font-medium hover:bg-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request Strategic Assessment <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-slate-600/50 rounded-lg text-slate-300 font-medium hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Architecture
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Most Businesses Run on Disconnected Systems</h2>
            
            <ul className="space-y-4">
              {[
                "Marketing tools don’t know what sales is doing",
                "Sales promises delivery operations can’t support",
                "Finance reacts after the fact",
                "Leadership sees lagging indicators, not live intelligence",
                "Automation exists — but orchestration does not"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-xl font-bold text-slate-200"
            >
              Disconnected tools create operational drag.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-12 bg-slate-800/50 rounded-lg border border-slate-700/50 flex items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                    <span className="text-slate-400">Tool {item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-8 bg-slate-800/50 rounded-lg border border-slate-700/50 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - THE SOLUTION */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Introducing Quanton OS
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            Quanton OS embeds eight coordinated AI agents across your business. Each agent governs a functional domain. One Governing Agent orchestrates the system.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex justify-center items-center">
                <div className="relative w-64 h-64">
                  {/* Central Governing Agent */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-500/30 border border-red-500/50 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-red-400" />
                    </div>
                  </motion.div>
                  
                  {/* Orbiting Agents */}
                  {[1, 2, 3, 4, 5, 6, 7].map((agent, index) => {
                    const angle = (index / 7) * Math.PI * 2;
                    const radius = 90;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={agent}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="absolute"
                        style={{
                          left: `calc(50% + ${x}px - 20px)`,
                          top: `calc(50% + ${y}px - 20px)`,
                        }}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          agent === 1 ? "bg-blue-500/30 border border-blue-500/50" :
                          agent === 2 ? "bg-green-500/30 border border-green-500/50" :
                          agent === 3 ? "bg-purple-500/30 border border-purple-500/50" :
                          agent === 4 ? "bg-red-500/30 border border-red-500/50" :
                          agent === 5 ? "bg-yellow-500/30 border border-yellow-500/50" :
                          agent === 6 ? "bg-indigo-500/30 border border-indigo-500/50" :
                          "bg-teal-500/30 border border-teal-500/50"
                        }`}>
                          {agent === 1 && <Database className="w-5 h-5 text-blue-400" />}
                          {agent === 2 && <Users className="w-5 h-5 text-green-400" />}
                          {agent === 3 && <ShoppingCart className="w-5 h-5 text-purple-400" />}
                          {agent === 4 && <BarChart3 className="w-5 h-5 text-red-400" />}
                          {agent === 5 && <Settings className="w-5 h-5 text-yellow-400" />}
                          {agent === 6 && <Eye className="w-5 h-5 text-indigo-400" />}
                          {agent === 7 && <Zap className="w-5 h-5 text-teal-400" />}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              <p className="mt-8 text-slate-400">
                This is AI as infrastructure — not assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - THE 8 AGENTS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            The 8 Agents
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Marketing & Content Agent",
                description: "Plans, creates, distributes, and optimizes content with brand governance and competitive intelligence.",
                color: "blue"
              },
              {
                title: "Sales Agent",
                description: "Manages pipeline, proposals, forecasting, and outbound strategy with human approval at key decision points.",
                color: "green"
              },
              {
                title: "Customer Experience Agent",
                description: "Handles service, retention, reviews, onboarding, and real-time website engagement.",
                color: "purple"
              },
              {
                title: "People & Team Agent",
                description: "Manages hiring, onboarding, performance prep, certifications, and team scheduling.",
                color: "red"
              },
              {
                title: "Operations Agent",
                description: "Controls SOPs, task management, vendor coordination, meetings, and quality monitoring.",
                color: "yellow"
              },
              {
                title: "Inventory & Supply Chain Agent",
                description: "Tracks stock, triggers reorders, monitors suppliers, and analyzes cost compression.",
                color: "indigo"
              },
              {
                title: "Finance Agent",
                description: "Handles invoicing, reconciliation, reporting, contracts, compliance, and compensation tracking.",
                color: "teal"
              },
              {
                title: "Governing Agent",
                description: "Orchestrates all other agents. Manages exceptions. Resolves conflicts. Provides unified leadership visibility.",
                color: "red"
              }
            ].map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  agent.color === "blue" ? "bg-blue-500/30 border border-blue-500/50" :
                  agent.color === "green" ? "bg-green-500/30 border border-green-500/50" :
                  agent.color === "purple" ? "bg-purple-500/30 border border-purple-500/50" :
                  agent.color === "red" ? "bg-red-500/30 border border-red-500/50" :
                  agent.color === "yellow" ? "bg-yellow-500/30 border border-yellow-500/50" :
                  agent.color === "indigo" ? "bg-indigo-500/30 border border-indigo-500/50" :
                  "bg-teal-500/30 border border-teal-500/50"
                }`}>
                  {agent.color === "blue" && <Database className="w-6 h-6 text-blue-400" />}
                  {agent.color === "green" && <Users className="w-6 h-6 text-green-400" />}
                  {agent.color === "purple" && <ShoppingCart className="w-6 h-6 text-purple-400" />}
                  {agent.color === "red" && <BarChart3 className="w-6 h-6 text-red-400" />}
                  {agent.color === "yellow" && <Settings className="w-6 h-6 text-yellow-400" />}
                  {agent.color === "indigo" && <Eye className="w-6 h-6 text-indigo-400" />}
                  {agent.color === "teal" && <Zap className="w-6 h-6 text-teal-400" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{agent.title}</h3>
                <p className="text-slate-400">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - WHY THIS IS DIFFERENT */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/30 to-slate-900/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Without the Governing Agent, AI is Just Automation.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">Automation Agencies</h3>
              <p className="text-slate-300">Deploy workflows</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-green-400">AI Tools</h3>
              <p className="text-slate-300">Generate outputs</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-400">Fractional Operators</h3>
              <p className="text-slate-300">Provide oversight</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 backdrop-blur-sm max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-red-400">Quanton OS</h3>
            <p className="text-xl text-slate-200">
              Embeds governed intelligence into your operating structure.
            </p>
            
            <p className="mt-6 text-lg text-slate-300">
              Seven agents execute. The eighth ensures they operate as a system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - HOW IT WORKS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {[
              { step: 1, title: "Assessment", description: "We analyze your operational architecture across 8 domains." },
              { step: 2, title: "Deployment", description: "Agents integrate directly into your CRM, finance, project management, and communication platforms." },
              { step: 3, title: "Orchestration", description: "Shared state architecture enables cross-agent awareness." },
              { step: 4, title: "Governance", description: "Human approval gates remain in place. AI handles throughput. You retain control." },
              { step: 5, title: "Unified Dashboard", description: "One leadership view across marketing, pipeline, service, finance, operations, and risk." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div className="w-16 h-16 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - HYBRID EXECUTION MODEL */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/30 to-slate-900/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">AI Executes. Humans Decide.</h2>
            
            <div className="space-y-6">
              {[
                "AI drafts",
                "AI monitors",
                "AI detects patterns",
                "AI flags exceptions"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-800/50">
              <p className="text-xl font-bold text-slate-200">
                But:
              </p>
              
              <ul className="mt-4 space-y-3">
                {[
                  "Humans approve proposals",
                  "Humans resolve escalations",
                  "Humans validate financial reporting",
                  "Humans make final decisions"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-xl font-bold text-slate-200"
            >
              Control remains with leadership.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-slate-400">AI Agent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-slate-400">Human</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-lg p-3">
                    <p className="text-slate-300">AI processing task {item}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-red-400" />
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-lg p-3">
                  <p className="text-slate-300">Human approval required</p>
                </div>
              </div>
              
              {[4, 5].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-lg p-3">
                    <p className="text-slate-300">AI executes final task {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - DASHBOARD PREVIEW */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            One View. Total Visibility.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                "Real-time KPIs",
                "Pipeline health",
                "Cash position",
                "Operational bottlenecks"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center"
                >
                  <p className="text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Complaint volume",
                "Inventory risk",
                "Compliance status",
                "Exception alerts"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center"
                >
                  <p className="text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center text-slate-400"
            >
              All synthesized by the Governing Agent.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 - TARGET BUSINESSES */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/30 to-slate-900/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Built for Operationally Complex Businesses
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              "Professional service firms",
              "Multi-location operators",
              "Healthcare and regulated industries",
              "Manufacturing and supply chain-driven businesses",
              "Agencies scaling beyond founder-dependence"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800/50 rounded-lg p-6 backdrop-blur-sm text-left"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl font-bold text-slate-200"
          >
            If your business complexity exceeds your visibility, Quanton OS is designed for you.
          </motion.p>
        </div>
      </section>

      {/* SECTION 10 - STRATEGIC POSITIONING */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            This Is Not Software.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-slate-300 mb-12"
          >
            It Is Operating Architecture.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 backdrop-blur-sm"
          >
            <p className="text-xl text-slate-200">
              Quanton OS replaces fragmented automation stacks with a unified intelligence layer embedded into your execution structure.
            </p>
            
            <p className="mt-6 text-xl text-slate-200">
              You do not “use” Quanton OS. Your business runs on it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11 - FINAL CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            See Your Business as a System.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-10"
          >
            Request a Quanton Strategic Assessment and receive a diagnostic of your operational architecture across all 8 domains.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 font-medium hover:bg-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request Assessment <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-slate-600/50 rounded-lg text-slate-300 font-medium hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Download Architecture Overview
            </motion.button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-bold mb-2">Quanton Labs</p>
          <p className="text-slate-400 mb-6">The Architecture of Intelligent Business</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {["Architecture", "Assessment", "Security", "Privacy", "Contact"].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <p className="text-slate-600 text-sm">© 2026 Quanton Labs</p>
        </div>
      </footer>
    </div>
  );
}
