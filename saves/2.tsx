// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Grid, 
  Layers, 
  Brain, 
  Target, 
  Users, 
  Database, 
  Shield,
  BarChart3,
  Zap,
  AlertTriangle,
  Clock,
  DollarSign
} from 'lucide-react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(59,130,246,0.05)_0%,_rgba(168,85,247,0.05)_100%)]"></div>
          
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200/30 bg-clip-text text-transparent"
          >
            The Operating System for Intelligent Businesses
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto"
          >
            Quanton OS deploys 8 coordinated AI agents across your entire operation — marketing, sales, service, finance, operations, inventory, people, and governance — unified under one governing intelligence layer.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-slate-400 mb-16 max-w-2xl mx-auto"
          >
            Not automation. Not tools.
            <br />
            A governed AI architecture embedded into your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group">
              Request Strategic Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
              View Architecture
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Most Businesses Run on Disconnected Systems</h2>
            
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
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-slate-300">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 text-xl font-bold text-slate-200"
            >
              Disconnected tools create operational drag.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-white/5 rounded-lg h-24 flex items-center justify-center">
                    <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
                  </div>
                ))}
              </div>
              <div className="h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10 flex items-center justify-center">
                <span className="text-slate-400">Disconnected Systems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Introducing Quanton OS</h2>
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
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse"></div>
              
              {/* Central Governing Agent */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute w-24 h-24 rounded-full bg-red-400 flex items-center justify-center z-10 shadow-lg"
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>
              
              {/* Surrounding Agents */}
              {[...Array(7)].map((_, i) => {
                const angle = (i / 7) * Math.PI * 2;
                const radius = 90;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, x: x/3, y: y/3 }}
                    whileInView={{ 
                      scale: 1, 
                      x: x, 
                      y: y 
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center shadow-lg"
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The 8 Agents</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Each agent governs a functional domain within your business
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Marketing & Content Agent",
                description: "Plans, creates, distributes, and optimizes content with brand governance and competitive intelligence.",
                color: "from-blue-400 to-blue-500"
              },
              {
                title: "Sales Agent",
                description: "Manages pipeline, proposals, forecasting, and outbound strategy with human approval at key decision points.",
                color: "from-green-400 to-green-500"
              },
              {
                title: "Customer Experience Agent",
                description: "Handles service, retention, reviews, onboarding, and real-time website engagement.",
                color: "from-purple-400 to-purple-500"
              },
              {
                title: "People & Team Agent",
                description: "Manages hiring, onboarding, performance prep, certifications, and team scheduling.",
                color: "from-red-400 to-red-500"
              },
              {
                title: "Operations Agent",
                description: "Controls SOPs, task management, vendor coordination, meetings, and quality monitoring.",
                color: "from-yellow-400 to-yellow-500"
              },
              {
                title: "Inventory & Supply Chain Agent",
                description: "Tracks stock, triggers reorders, monitors suppliers, and analyzes cost compression.",
                color: "from-indigo-400 to-indigo-500"
              },
              {
                title: "Finance Agent",
                description: "Handles invoicing, reconciliation, reporting, contracts, compliance, and compensation tracking.",
                color: "from-teal-400 to-teal-500"
              },
              {
                title: "Governing Agent",
                description: "Orchestrates all other agents. Manages exceptions. Resolves conflicts. Provides unified leadership visibility.",
                color: "from-red-400 to-red-500"
              }
            ].map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${agent.color} flex items-center justify-center mb-4`}>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{agent.title}</h3>
                <p className="text-slate-300">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Different Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Without the Governing Agent, AI is Just Automation</h2>
          </motion.div>
          
          <div className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-4 bg-[rgba(255,255,255,0.03)] rounded-lg">
                <h3 className="font-bold text-lg mb-2">Automation Agencies</h3>
                <p className="text-slate-400">Deploy workflows</p>
              </div>
              <div className="text-center p-4 bg-[rgba(255,255,255,0.03)] rounded-lg">
                <h3 className="font-bold text-lg mb-2">AI Tools</h3>
                <p className="text-slate-400">Generate outputs</p>
              </div>
              <div className="text-center p-4 bg-[rgba(255,255,255,0.03)] rounded-lg">
                <h3 className="font-bold text-lg mb-2">Fractional Operators</h3>
                <p className="text-slate-400">Provide oversight</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl font-bold text-slate-200 mb-6">
                Quanton OS → Embeds governed intelligence into your operating structure.
              </p>
              <p className="text-lg text-slate-300">
                Seven agents execute.
                <br />
                The eighth ensures they operate as a system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "We analyze your operational architecture across 8 domains.",
                icon: Database
              },
              {
                step: "2",
                title: "Deployment",
                description: "Agents integrate directly into your CRM, finance, project management, and communication platforms.",
                icon: Layers
              },
              {
                step: "3",
                title: "Orchestration",
                description: "Shared state architecture enables cross-agent awareness.",
                icon: Zap
              },
              {
                step: "4",
                title: "Governance",
                description: "Human approval gates remain in place. AI handles throughput. You retain control.",
                icon: Shield
              },
              {
                step: "5",
                title: "Unified Dashboard",
                description: "One leadership view across marketing, pipeline, service, finance, operations, and risk.",
                icon: BarChart3
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
                <div className="mt-4">
                  <item.icon className="w-8 h-8 text-slate-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Execution Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <p className="text-xl font-bold text-slate-200 mb-4">But:</p>
              <ul className="space-y-4">
                {[
                  "Humans approve proposals",
                  "Humans resolve escalations",
                  "Humans validate financial reporting",
                  "Humans make final decisions"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 text-xl font-bold text-slate-200"
            >
              Control remains with leadership.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
          >
            <div className="flex justify-between mb-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-300">AI</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-slate-300">Human</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                "Drafting proposals",
                "Monitoring performance",
                "Detecting anomalies",
                "Flagging exceptions"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                >
                  <span className="text-slate-300">{item}</span>
                  <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 space-y-4">
              {[
                "Approving proposals",
                "Resolving escalations",
                "Validating reports",
                "Making final decisions"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                >
                  <span className="text-slate-300">{item}</span>
                  <div className="w-6 h-6 rounded-full bg-green-400"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">One View. Total Visibility.</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-time KPIs, pipeline health, cash position, operational bottlenecks, complaint volume, inventory risk, compliance status, exception alerts - all synthesized by the Governing Agent.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Real-time KPIs", icon: BarChart3 },
                { title: "Pipeline Health", icon: Target },
                { title: "Cash Position", icon: DollarSign },
                { title: "Operational Bottlenecks", icon: AlertTriangle },
                { title: "Complaint Volume", icon: Users },
                { title: "Inventory Risk", icon: Database },
                { title: "Compliance Status", icon: Shield },
                { title: "Exception Alerts", icon: Clock }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-[rgba(255,255,255,0.03)] rounded-lg p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-300">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Businesses */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Operationally Complex Businesses</h2>
            
            <ul className="space-y-4 max-w-2xl mx-auto">
              {[
                "Professional service firms",
                "Multi-location operators",
                "Healthcare and regulated industries",
                "Manufacturing and supply chain-driven businesses",
                "Agencies scaling beyond founder-dependence"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-slate-300">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 text-xl font-bold text-slate-200"
            >
              If your business complexity exceeds your visibility, Quanton OS is designed for you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">This Is Not Software. It Is Operating Architecture.</h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Quanton OS replaces fragmented automation stacks with a unified intelligence layer embedded into your execution structure.
            </p>
            
            <p className="text-lg text-slate-400 mt-8 max-w-3xl mx-auto">
              You do not "use" Quanton OS.
              <br />
              Your business runs on it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See Your Business as a System.</h2>
            
            <p className="text-xl text-slate-300 mb-10">
              Request a Quanton Strategic Assessment and receive a diagnostic of your operational architecture across all 8 domains.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group">
                Request Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
                Download Architecture Overview
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl font-bold mb-4">Quanton Labs</p>
          <p className="text-slate-400 mb-6">The Architecture of Intelligent Business</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Architecture', 'Assessment', 'Security', 'Privacy', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <p className="text-slate-500 text-sm">
            © 2026 Quanton Labs
          </p>
        </div>
      </footer>
    </div>
  );
}
