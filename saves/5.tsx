// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Database, 
  Users, 
  TrendingUp, 
  Shield, 
  Eye,
  BarChart3,
  Settings,
  Clock,
  AlertTriangle
} from 'lucide-react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-white/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200/30 to-blue-200/30 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The Operating System for Intelligent Businesses
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Quanton OS deploys 8 coordinated AI agents across your entire operation — marketing, sales, service, finance, operations, inventory, people, and governance — unified under one governing intelligence layer.
          </motion.p>
          
          <motion.p 
            className="text-slate-400/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Not automation. Not tools.
            <br />
            A governed AI architecture embedded into your business.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group">
              Request Strategic Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300">
              View Architecture
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Most Businesses Run on Disconnected Systems</h2>
            
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
                  className="flex items-start gap-4 text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.p 
              className="mt-10 text-xl font-bold text-slate-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Disconnected tools create operational drag.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-blue-500/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i}
                    className={`h-24 rounded-lg flex items-center justify-center ${
                      i === 0 ? 'bg-blue-500/30 border border-blue-400/50' : 
                      i === 1 ? 'bg-green-500/30 border border-green-400/50' : 
                      i === 2 ? 'bg-purple-500/30 border border-purple-400/50' : 
                      'bg-slate-800/50 border border-white/10'
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                        {i === 0 ? <Database className="w-4 h-4" /> : 
                         i === 1 ? <Users className="w-4 h-4" /> : 
                         i === 2 ? <TrendingUp className="w-4 h-4" /> : 
                         <Shield className="w-4 h-4" />}
                      </div>
                      <span className="text-xs text-slate-400">Tool {i+1}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute border-l border-white/20"
                    style={{
                      height: `${Math.random() * 40 + 20}%`,
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Solution */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Introducing Quanton OS
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300/90 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Quanton OS embeds eight coordinated AI agents across your business.
            Each agent governs a functional domain.
            One Governing Agent orchestrates the system.
            <br />
            This is AI as infrastructure — not assistance.
          </motion.p>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-white/10" />
              </div>
              
              <motion.div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-32 h-32 rounded-full border border-blue-400/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-400">Governing Agent</span>
                </div>
              </motion.div>
              
              {[...Array(7)].map((_, i) => {
                const angle = (i * 360 / 7) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-24 h-24 rounded-xl flex items-center justify-center backdrop-blur-lg border border-white/10 bg-white/5"
                    style={{
                      left: `calc(50% + ${x}px - 48px)`,
                      top: `calc(50% + ${y}px - 48px)`,
                    }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                        {i === 0 ? <Database className="w-4 h-4" /> : 
                         i === 1 ? <Users className="w-4 h-4" /> : 
                         i === 2 ? <TrendingUp className="w-4 h-4" /> : 
                         i === 3 ? <Shield className="w-4 h-4" /> : 
                         i === 4 ? <Eye className="w-4 h-4" /> : 
                         i === 5 ? <Clock className="w-4 h-4" /> : 
                         <BarChart3 className="w-4 h-4" />}
                      </div>
                      <span className="text-xs text-slate-300">
                        {i === 0 ? 'Marketing' : 
                         i === 1 ? 'Sales' : 
                         i === 2 ? 'Service' : 
                         i === 3 ? 'People' : 
                         i === 4 ? 'Operations' : 
                         i === 5 ? 'Inventory' : 'Finance'}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: The 8 Agents */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
                color: "blue"
              },
              {
                title: "Customer Experience Agent",
                description: "Handles service, retention, reviews, onboarding, and real-time website engagement.",
                color: "purple"
              },
              {
                title: "People & Team Agent",
                description: "Manages hiring, onboarding, performance prep, certifications, and team scheduling.",
                color: "green"
              },
              {
                title: "Operations Agent",
                description: "Controls SOPs, task management, vendor coordination, meetings, and quality monitoring.",
                color: "purple"
              },
              {
                title: "Inventory & Supply Chain Agent",
                description: "Tracks stock, triggers reorders, monitors suppliers, and analyzes cost compression.",
                color: "green"
              },
              {
                title: "Finance Agent",
                description: "Handles invoicing, reconciliation, reporting, contracts, compliance, and compensation tracking.",
                color: "red"
              },
              {
                title: "Governing Agent",
                description: "Orchestrates all other agents. Manages exceptions. Resolves conflicts. Provides unified leadership visibility.",
                color: "blue"
              }
            ].map((agent, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br from-white/5 to-${agent.color}-500/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${agent.color}-500/30 border border-${agent.color}-400/50 flex-shrink-0`}>
                    {index === 0 ? <Database className="w-6 h-6" /> : 
                     index === 1 ? <Users className="w-6 h-6" /> : 
                     index === 2 ? <TrendingUp className="w-6 h-6" /> : 
                     index === 3 ? <Shield className="w-6 h-6" /> : 
                     index === 4 ? <Eye className="w-6 h-6" /> : 
                     index === 5 ? <Clock className="w-6 h-6" /> : 
                     index === 6 ? <BarChart3 className="w-6 h-6" /> : 
                     <Settings className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{agent.title}</h3>
                    <p className="text-slate-300/90">{agent.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why This Is Different */}
      <section className="py-20 px-4 bg-gradient-to-r from-white/5 to-blue-500/5">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Without the Governing Agent, AI is Just Automation
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Automation Agencies", 
                description: "Deploy workflows",
                color: "red"
              },
              { 
                title: "AI Tools", 
                description: "Generate outputs",
                color: "blue"
              },
              { 
                title: "Fractional Operators", 
                description: "Provide oversight",
                color: "green"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-xl text-slate-300/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Seven agents execute.
            <br />
            The eighth ensures they operate as a system.
          </motion.p>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                title: "Assessment",
                description: "We analyze your operational architecture across 8 domains.",
                icon: Settings
              },
              {
                title: "Deployment",
                description: "Agents integrate directly into your CRM, finance, project management, and communication platforms.",
                icon: Database
              },
              {
                title: "Orchestration",
                description: "Shared state architecture enables cross-agent awareness.",
                icon: BarChart3
              },
              {
                title: "Governance",
                description: "Human approval gates remain in place. AI handles throughput. You retain control.",
                icon: Shield
              },
              {
                title: "Unified Dashboard",
                description: "One leadership view across marketing, pipeline, service, finance, operations, and risk.",
                icon: Eye
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-300/90">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Hybrid Execution Model */}
      <section className="py-20 px-4 bg-gradient-to-r from-white/5 to-purple-500/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">AI Executes. Humans Decide.</h2>
            
            <ul className="space-y-6">
              {[
                "AI drafts",
                "AI monitors",
                "AI detects patterns",
                "AI flags exceptions"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-4 text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-purple-500/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
              <h3 className="text-xl font-bold mb-6">But:</h3>
              
              <ul className="space-y-4">
                {[
                  "Humans approve proposals",
                  "Humans resolve escalations",
                  "Humans validate financial reporting",
                  "Humans make final decisions"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-4 text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.p 
                className="mt-10 text-xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Control remains with leadership.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Dashboard Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            One View. Total Visibility.
          </motion.h2>
          
          <motion.div 
            className="bg-gradient-to-br from-white/5 to-blue-500/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Real-time KPIs",
                "Pipeline health",
                "Cash position",
                "Operational bottlenecks",
                "Complaint volume",
                "Inventory risk",
                "Compliance status",
                "Exception alerts"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
            
            <p className="mt-8 text-center text-slate-300/90">
              All synthesized by the Governing Agent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Target Businesses */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Built for Operationally Complex Businesses
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "Professional service firms",
              "Multi-location operators",
              "Healthcare and regulated industries",
              "Manufacturing and supply chain-driven businesses",
              "Agencies scaling beyond founder-dependence"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-xl">{item}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            If your business complexity exceeds your visibility, Quanton OS is designed for you.
          </motion.p>
        </div>
      </section>

      {/* Section 10: Strategic Positioning */}
      <section className="py-20 px-4 bg-gradient-to-r from-white/5 to-red-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            This Is Not Software.
            <br />
            It Is Operating Architecture.
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Quanton OS replaces fragmented automation stacks with a unified intelligence layer embedded into your execution structure.
            <br />
            You do not “use” Quanton OS.
            <br />
            Your business runs on it.
          </motion.p>
        </div>
      </section>

      {/* Section 11: Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            See Your Business as a System.
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300/90 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Request a Quanton Strategic Assessment and receive a diagnostic of your operational architecture across all 8 domains.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group">
              Request Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300">
              Download Architecture Overview
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-bold mb-4">Quanton Labs</p>
          <p className="text-slate-400/90 mb-8">The Architecture of Intelligent Business</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {["Architecture", "Assessment", "Security", "Privacy", "Contact"].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-slate-400/90 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <p className="text-slate-500 text-sm">© 2026 Quanton Labs</p>
        </div>
      </footer>
    </div>
  );
}
