// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Database, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  Clock, 
  AlertTriangle,
  Target,
  Globe,
  TrendingUp,
  Settings,
  Eye
} from 'lucide-react';

const HomePage = () => {
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
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200/30 bg-clip-text text-transparent"
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
            Not automation. Not tools. A governed AI architecture embedded into your business.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group">
              Request Strategic Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
              View Architecture
            </button>
          </motion.div>
        </motion.div>

        {/* Animated grid background */}
        <div className="absolute inset-0 z-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-white/10 rounded-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
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
                  className="flex items-start gap-4 text-slate-300/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isMounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <CheckCircle className="w-6 h-6 text-slate-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.p 
              className="text-xl font-bold mt-12 text-slate-200"
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Disconnected tools create operational drag.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-slate-700/50 rounded-lg mb-3 flex items-center justify-center">
                    {i % 2 === 0 ? <Database className="w-6 h-6" /> : <Users className="w-6 h-6" />}
                  </div>
                  <p className="text-sm text-slate-400 text-center">Tool {i + 1}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Introducing Quanton OS</h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              Quanton OS embeds eight coordinated AI agents across your business. Each agent governs a functional domain. One Governing Agent orchestrates the system.
            </p>
            <p className="text-lg text-slate-400 mt-6">
              This is AI as infrastructure — not assistance.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-64 h-64">
              {/* Central Governing Agent */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-red-500/30 backdrop-blur-sm border border-red-500/50 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="w-10 h-10 text-red-400" />
              </motion.div>
              
              {/* Surrounding Agents */}
              {[...Array(7)].map((_, i) => {
                const angle = (i * 360 / 7) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  >
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${
                      i % 4 === 0 ? 'bg-blue-500/30 border border-blue-500/50' :
                      i % 4 === 1 ? 'bg-green-500/30 border border-green-500/50' :
                      i % 4 === 2 ? 'bg-purple-500/30 border border-purple-500/50' :
                      'bg-red-500/30 border border-red-500/50'
                    }`}>
                      {i % 4 === 0 ? <Target className="w-6 h-6 text-blue-400" /> :
                       i % 4 === 1 ? <TrendingUp className="w-6 h-6 text-green-400" /> :
                       i % 4 === 2 ? <Globe className="w-6 h-6 text-purple-400" /> :
                       <Zap className="w-6 h-6 text-red-400" />}
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Connecting lines */}
              {[...Array(7)].map((_, i) => {
                const angle = (i * 360 / 7) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={`line-${i}`}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-24 bg-white/20"
                    style={{
                      transform: `translate(calc(-50% + ${x/2}px), calc(-50% + ${y/2}px)) rotate(${angle + Math.PI/2}rad)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={isMounted ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The 8 Agents</h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              Each agent governs a functional domain, working in harmony under the Governing Agent.
            </p>
          </motion.div>
          
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
                color: "green"
              },
              {
                title: "People & Team Agent",
                description: "Manages hiring, onboarding, performance prep, certifications, and team scheduling.",
                color: "purple"
              },
              {
                title: "Operations Agent",
                description: "Controls SOPs, task management, vendor coordination, meetings, and quality monitoring.",
                color: "purple"
              },
              {
                title: "Inventory & Supply Chain Agent",
                description: "Tracks stock, triggers reorders, monitors suppliers, and analyzes cost compression.",
                color: "red"
              },
              {
                title: "Finance Agent",
                description: "Handles invoicing, reconciliation, reporting, contracts, compliance, and compensation tracking.",
                color: "green"
              },
              {
                title: "Governing Agent",
                description: "Orchestrates all other agents. Manages exceptions. Resolves conflicts. Provides unified leadership visibility.",
                color: "red"
              }
            ].map((agent, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  agent.color === 'blue' ? 'bg-blue-500/30 border border-blue-500/50 text-blue-400' :
                  agent.color === 'green' ? 'bg-green-500/30 border border-green-500/50 text-green-400' :
                  agent.color === 'purple' ? 'bg-purple-500/30 border border-purple-500/50 text-purple-400' :
                  'bg-red-500/30 border border-red-500/50 text-red-400'
                }`}>
                  {index === 2 ? <Target className="w-6 h-6" /> :
                   index === 3 ? <Users className="w-6 h-6" /> :
                   index === 4 ? <Settings className="w-6 h-6" /> :
                   index === 5 ? <Database className="w-6 h-6" /> :
                   index === 6 ? <BarChart3 className="w-6 h-6" /> :
                   index === 7 ? <Shield className="w-6 h-6" /> :
                   <Zap className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{agent.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Different Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Without the Governing Agent, AI is Just Automation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="bg-gradient-to-r from-white/10 to-blue-500/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-2xl font-bold">
                Seven agents execute.
                <br />
                The eighth ensures they operate as a system.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              A structured deployment approach that integrates seamlessly with your existing systems.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 z-0"></div>
            
            {[
              {
                title: "Assessment",
                description: "We analyze your operational architecture across 8 domains.",
                icon: <Database className="w-6 h-6" />
              },
              {
                title: "Deployment",
                description: "Agents integrate directly into your CRM, finance, project management, and communication platforms.",
                icon: <Settings className="w-6 h-6" />
              },
              {
                title: "Orchestration",
                description: "Shared state architecture enables cross-agent awareness.",
                icon: <Globe className="w-6 h-6" />
              },
              {
                title: "Governance",
                description: "Human approval gates remain in place. AI handles throughput. You retain control.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Unified Dashboard",
                description: "One leadership view across marketing, pipeline, service, finance, operations, and risk.",
                icon: <Eye className="w-6 h-6" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center text-center max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Execution Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
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
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isMounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <div className="mt-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-slate-300/90">{item}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">But:</h3>
              <ul className="space-y-4">
                {[
                  "Humans approve proposals",
                  "Humans resolve escalations",
                  "Humans validate financial reporting",
                  "Humans make final decisions"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-4 text-slate-300/90"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isMounted ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 * (index + 4), duration: 0.5 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.p 
              className="text-xl font-bold mt-12 text-slate-200"
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Control remains with leadership.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-blue-500/30 border border-blue-500/50 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold mb-2">AI</h3>
                <p className="text-sm text-slate-400 text-center">Executes tasks automatically</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-500/30 border border-green-500/50 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-bold mb-2">Humans</h3>
                <p className="text-sm text-slate-400 text-center">Make strategic decisions</p>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-bold">Hybrid Execution</span>
              </div>
              <p className="text-slate-300/90 text-sm">
                AI handles the routine, humans govern the strategic. This balance ensures optimal performance and control.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 px-4 bg-gradient-to-br from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">One View. Total Visibility.</h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              Real-time KPIs, pipeline health, cash position, operational bottlenecks, and more — all synthesized by the Governing Agent.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                "Real-time KPIs",
                "Pipeline health",
                "Cash position",
                "Operational bottlenecks"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-3"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Complaint volume",
                "Inventory risk",
                "Compliance status"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-3"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Exception alerts</span>
                </div>
                <div className="text-sm text-slate-400">All synthesized by Governing Agent</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Businesses */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Operationally Complex Businesses</h2>
            <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
              If your business complexity exceeds your visibility, Quanton OS is designed for you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Professional service firms",
              "Multi-location operators",
              "Healthcare and regulated industries",
              "Manufacturing and supply chain-driven businesses",
              "Agencies scaling beyond founder-dependence"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">This Is Not Software. It Is Operating Architecture.</h2>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <p className="text-xl text-slate-300/90 leading-relaxed">
                Quanton OS replaces fragmented automation stacks with a unified intelligence layer embedded into your execution structure.
                <br />
                <span className="font-bold text-white">You do not “use” Quanton OS. Your business runs on it.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See Your Business as a System.</h2>
            
            <p className="text-xl text-slate-300/90 max-w-2xl mx-auto mb-12">
              Request a Quanton Strategic Assessment and receive a diagnostic of your operational architecture across all 8 domains.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group">
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
          <div className="flex flex-col items-center gap-6 mb-8">
            <h3 className="text-2xl font-bold">Quanton Labs</h3>
            <p className="text-slate-400">The Architecture of Intelligent Business</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-slate-500">
            {['Architecture', 'Assessment', 'Security', 'Privacy', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          
          <p className="text-slate-600 text-sm">
            © 2026 Quanton Labs
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
