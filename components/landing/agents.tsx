"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, TrendingUp, MessageSquare, Users, Cpu, Truck, BarChart2 } from "lucide-react";

const agents = [
  {
    name: "Marketing and Content Agent",
    system: "Growth System",
    description: "Your brand shows up every day whether you are in the room or not. The Marketing and Content Agent runs your editorial calendar, publishes across every channel, enforces your brand voice on every word, and feeds your sales pipeline with warm signals. Consistent. On-brand. Always on.",
    icon: Send,
  },
  {
    name: "Sales Agent",
    system: "Growth System",
    description: "Your pipeline never sleeps. The Sales Agent responds to leads instantly, qualifies them against your criteria, generates proposals, and follows up across every touchpoint until the deal moves or the prospect opts out. No lead falls through the cracks. No follow-up gets forgotten.",
    icon: TrendingUp,
  },
  {
    name: "Customer Experience Agent",
    system: "Operations and Growth Systems",
    description: "Every client feels like your only client. The Customer Experience Agent handles onboarding, responds to inquiries, manages your calendar, and tracks satisfaction across every interaction. Your clients get a seamless experience. You get time back.",
    icon: MessageSquare,
  },
  {
    name: "People and Team Agent",
    system: "Operations System",
    description: "Building a team should not consume the team you already have. The People and Team Agent runs your recruiting pipeline, screens candidates, schedules interviews, onboards new hires, and tracks certifications and compliance deadlines. Your people operations run without you micromanaging them.",
    icon: Users,
  },
  {
    name: "Operations Agent",
    system: "Operations and Platform Systems",
    description: "Execution without the chaos. The Operations Agent assigns tasks, tracks progress, maintains your SOPs, coordinates vendors, and flags blockers before they become problems. Your business runs to a documented standard every single day, not just when you are watching.",
    icon: Cpu,
  },
  {
    name: "Inventory and Supply Chain Agent",
    system: "Operations System",
    description: "Never run out. Never overorder. The Inventory and Supply Chain Agent monitors your stock levels in real time, triggers reorders automatically, manages supplier communications, and flags delivery risks before they hit your operations. Your supply chain runs itself.",
    icon: Truck,
  },
  {
    name: "Finance Agent",
    system: "Operations System",
    description: "
