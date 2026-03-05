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
  Zap,
  ChevronRight,
  Play,
  BookOpen,
  Lock,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const QuantonLabsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F1A]/90 backdrop-blur-md py-4' : 'py-6'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div 
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Quanton Labs
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Architecture', 'Assessment', 'Security', 'Privacy'].map((item) => (
              <motion.a 
                key={item}
                href="#" 
                className="text-slate-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
            className="px-6 py-2 bg-[#60A5FA]/10 border border-[#60A5FA]/30 rounded-full text-[#60A5FA] hover:bg-[#60A5FA]/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Operating System for <span className="text-blue-400">Intelligent Businesses</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Quanton OS deploys 8 coordinated AI agents across your entire operation — marketing, sales, service, finance, operations, inventory, people, and governance — unified under one governing intelligence layer.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Strategic Assessment
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Architecture
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 flex items-center gap-2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span>Scroll to explore</span>
          <ChevronRight className="w-5 h-5 rotate-90" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#0B0F1A]/30 to-[#0B0F1A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Most Businesses Run on Disconnected Systems</h2>
              
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
                    className="flex items-start gap-3 text-slate-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.p 
                className="mt-8 text-xl font-bold text-red-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Disconnected tools create operational drag.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-24 h-24 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Database className="w-8 h-8 text-slate-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-red-500/30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Introducing Quanton OS</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Quanton OS embeds eight coordinated AI agents across your business. 
              Each agent governs a functional domain. One Governing Agent orchestrates the system.
            </p>
            <p className="mt-4 text-lg text-slate-400">
              This is AI as infrastructure — not assistance.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/10 backdrop-blur-sm overflow-hidden">
              {/* Central Governing Agent */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="w-10 h-10 text-red-400" />
              </motion.div>
              
              {/* Functional Agents */}
              {[...Array(7)].map((_, i) => {
                const angle = (i * 360 / 7) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  >
                    <Zap className="w-6 h-6 text-blue-400" />
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
                  <div
                    key={`line-${i}`}
                    className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-white/20 to-transparent"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}rad) translateX(${radius}px)`,
                      height: '0.5px'
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F1A]/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The 8 Agents</h2>
            <p className="text-xl text-slate-300">
              Each agent governs a functional domain, orchestrated by the Governing Agent.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Marketing & Content Agent",
                color: "blue",
                description: "Plans, creates, distributes, and optimizes content with brand governance and competitive intelligence."
              },
              {
                title: "Sales Agent",
                color: "blue",
                description: "Manages pipeline, proposals, forecasting, and outbound strategy with human approval at key decision points."
              },
              {
                title: "Customer Experience Agent",
                color: "blue",
                description: "Handles service, retention, reviews, onboarding, and real-time website engagement."
              },
              {
                title: "People & Team Agent",
                color: "blue",
                description: "Manages hiring, onboarding, performance prep, certifications, and team scheduling."
              },
              {
                title: "Operations Agent",
                color: "purple",
                description: "Controls SOPs, task management, vendor coordination, meetings, and quality monitoring."
              },
              {
                title: "Inventory & Supply Chain Agent",
                color: "purple",
                description: "Tracks stock, triggers reorders, monitors suppliers, and analyzes cost compression."
              },
              {
                title: "Finance Agent",
                color: "green",
                description: "Handles invoicing, reconciliation, reporting, contracts, compliance, and compensation tracking."
              },
              {
                title: "Governing Agent",
                color: "red",
                description: "Orchestrates all other agents. Manages exceptions. Resolves conflicts. Provides unified leadership visibility."
              }
            ].map((agent, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-${agent.color}-500/20 border border-${agent.color}-500/30 flex items-center justify-center mb-4`}>
                  <Zap className={`w-6 h-6 text-${agent.color}-400`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{agent.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Different Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-[#0B0F1A]/30 to-[#0B0F1A]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Without the Governing Agent, AI is Just Automation.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  title: "Automation Agencies", 
                  description: "Deploy workflows",
                  color: "blue"
                },
                { 
                  title: "AI Tools", 
                  description: "Generate outputs",
                  color: "green"
                },
                { 
                  title: "Fractional Operators", 
                  description: "Provide oversight",
                  color: "purple"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="text-2xl font-bold text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Seven agents execute. The eighth ensures they operate as a system.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-slate-300">
              A structured deployment process that embeds Quanton OS into your business.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {[
              { 
                title: "Assessment", 
                description: "We analyze your operational architecture across 8 domains.",
                icon: Eye
              },
              { 
                title: "Deployment", 
                description: "Agents integrate directly into your CRM, finance, project management, and communication platforms.",
                icon: Database
              },
              { 
                title: "Orchestration", 
                description: "Shared state architecture enables cross-agent awareness.",
                icon: Zap
              },
              { 
                title: "Governance", 
                description: "Human approval gates remain in place. AI handles throughput. You retain control.",
                icon: Shield
              },
              { 
                title: "Unified Dashboard", 
                description: "One leadership view across marketing, pipeline, service, finance, operations, and risk.",
                icon: TrendingUp
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Model */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F1A]/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Executes. Humans Decide.</h2>
              
              <div className="space-y-4">
                {[
                  "AI drafts",
                  "AI monitors",
                  "AI detects patterns",
                  "AI flags exceptions"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 text-slate-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                className="mt-8 text-xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                But:
              </motion.p>
              
              <div className="space-y-4 mt-4">
                {[
                  "Humans approve proposals",
                  "Humans resolve escalations",
                  "Humans validate financial reporting",
                  "Humans make final decisions"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 text-slate-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                className="mt-8 text-xl font-bold text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Control remains with leadership.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-32 h-32 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      >
                        <div className="text-center">
                          <Users className="w-8 h-8 mx-auto text-blue-400" />
                          <span className="text-xs mt-2 block">AI</span>
                        </div>
                      </motion.div>
                    ))}
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-32 h-32 rounded-lg bg-gradient-to-br from-red-500/20 to-yellow-500/20 border border-white/10 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      >
                        <div className="text-center">
                          <Shield className="w-8 h-8 mx-auto text-red-400" />
                          <span className="text-xs mt-2 block">Human</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">One View. Total Visibility.</h2>
            
            <p className="text-xl text-slate-300">
              Real-time KPIs, pipeline health, cash position, operational bottlenecks, 
              complaint volume, inventory risk, compliance status, exception alerts.
            </p>
            
            <p className="mt-4 text-lg text-slate-400">
              All synthesized by the Governing Agent.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-96 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/10 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4 p-6">
                  {[
                    "KPIs", "Pipeline", "Cash", "Bottlenecks",
                    "Complaints", "Inventory", "Compliance", "Alerts"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex flex-col items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-2">
                        <TrendingUp className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Businesses */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F1A]/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Operationally Complex Businesses</h2>
            
            <ul className="space-y-4 text-lg">
              {[
                "Professional service firms",
                "Multi-location operators",
                "Healthcare and regulated industries",
                "Manufacturing and supply chain-driven businesses",
                "Agencies scaling beyond founder-dependence"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.p 
              className="mt-8 text-xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              If your business complexity exceeds your visibility, Quanton OS is designed for you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">This Is Not Software. It Is Operating Architecture.</h2>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Quanton OS replaces fragmented automation stacks with a unified intelligence layer embedded into your execution structure.
            </p>
            
            <p className="mt-6 text-lg text-slate-400">
              You do not "use" Quanton OS. Your business runs on it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F1A]/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See Your Business as a System.</h2>
            
            <p className="text-xl text-slate-300 mb-10">
              Request a Quanton Strategic Assessment and receive a diagnostic of your operational architecture across all 8 domains.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="px-8 py-4 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Assessment
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Architecture Overview
                <BookOpen className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quanton Labs</h3>
              <p className="text-slate-400">The Architecture of Intelligent Business</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              {['Architecture', 'Assessment', 'Security', 'Privacy'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-500">
            <p>© 2026 Quanton Labs</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantonLabsPage;
