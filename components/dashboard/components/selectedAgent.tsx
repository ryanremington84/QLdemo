"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { AgentDocument } from "@/model/agent";
import { UserDocument } from "@/model/user";

export function SelectedAgent({ agent, user, onClose }: {
    agent: AgentDocument;
    user: UserDocument;
    onClose: () => void;
}) {
    const [activeTab, setActiveTab] = useState("overview");
    const modalRef = useRef<HTMLDivElement>(null);

    const integrations = [
        { name: "Google", status: "Connected" },
        { name: "Mailgun", status: "Connected" },
        { name: "Slack", status: "Not Connected" },
    ];

    const usageData = [
        { time: "00:00", tokens: 1200 },
        { time: "04:00", tokens: 2400 },
        { time: "08:00", tokens: 3200 },
        { time: "12:00", tokens: 4500 },
        { time: "16:00", tokens: 3800 },
        { time: "20:00", tokens: 5200 },
        { time: "24:00", tokens: 4800 },
    ];

    const selectedAgent = user.companies[0].agents.find((i: { name: string }) => i.name === agent.title);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 glass z-50 flex items-center justify-center p-4"
            onClick={handleOverlayClick}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                ref={modalRef}
                className="glass w-full max-w-4xl rounded-2xl overflow-hidden"
            >
                {/* HEADER */}
                <div className="flex items-center gap-4 p-6 border-b border-white/10">
                    <img
                        src={agent.image}
                        className="w-14 h-14 rounded-xl object-cover"
                    />

                    <div>
                        <h1 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                            {agent.title}
                        </h1>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{agent.category}</p>
                    </div>

                    <div className="ml-auto flex gap-3">
                        <button className="px-4 py-2 bg-slate-400 text-white rounded-md text-sm transition-colors">
                            Start
                        </button>
                        <button className="px-4 py-2 bg-slate-800 text-white rounded-md text-sm transition-colors">
                            Stop
                        </button>
                    </div>
                </div>

                {/* TABS */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex flex-wrap gap-2">
                        {["overview", "tasks", "logs", "analytics", "integrations", "settings"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-md text-sm capitalize transition-colors ${activeTab === tab
                                    ? "bg-white/10 text-zinc-800 dark:text-zinc-200"
                                    : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-6">
                    {/* OVERVIEW */}
                    {activeTab === "overview" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            <div className="glass p-6 rounded-xl">
                                <h2 className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">Description</h2>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">{agent.description}</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <StatCard label="Tasks Completed" value="124" />
                                <StatCard label="Success Rate" value="98%" />
                                <StatCard label="Tokens Today" value="12,430" />
                                <StatCard label="Status" value="Running" />
                            </div>
                        </motion.div>
                    )}

                    {/* TASKS */}
                    {activeTab === "tasks" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-zinc-800 dark:text-zinc-200">Tasks</h2>
                                <button className="px-3 py-1 text-sm bg-slate-800 hover:bg-slate-900 text-white rounded-md transition-colors">
                                    + New Task
                                </button>
                            </div>

                            <div className="space-y-3">
                                {["Generate report", "Send email campaign", "Analyze leads"].map((task, i) => (
                                    <div key={i} className="glass p-4 rounded-lg flex justify-between items-center">
                                        <span className="text-sm text-zinc-800 dark:text-zinc-200">{task}</span>
                                        <span className="text-xs text-green-600">Completed</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* LOGS */}
                    {activeTab === "logs" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                        >
                            <h2 className="font-semibold text-zinc-800 dark:text-zinc-200">Activity Logs</h2>
                            <div className="glass p-4 rounded-lg h-[300px] overflow-y-auto font-mono text-xs space-y-1">
                                <p>[12:01] Received new lead</p>
                                <p>[12:01] Sending email via Mailgun</p>
                                <p>[12:02] Email delivered</p>
                                <p className="text-red-500">[12:03] Error: API timeout</p>
                            </div>
                        </motion.div>
                    )}

                    {/* ANALYTICS */}
                    {activeTab === "analytics" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <StatCard label="Hourly Tokens" value="2.1k" />
                                <StatCard label="Daily Tokens" value="12k" />
                                <StatCard label="Monthly Tokens" value="340k" />
                            </div>

                            <div className="glass p-6 rounded-xl">
                                <h2 className="font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Usage Graph</h2>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={usageData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                            <XAxis
                                                dataKey="time"
                                                stroke="#9CA3AF"
                                                tick={{ fontSize: 12 }}
                                            />
                                            <YAxis
                                                stroke="#9CA3AF"
                                                tick={{ fontSize: 12 }}
                                                tickFormatter={(value) => `${value / 1000}k`}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                                                    borderColor: 'rgba(255, 255, 255, 0.1)',
                                                    borderRadius: '0.5rem',
                                                    color: '#f9fafb'
                                                }}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="tokens"
                                                stroke="#3b82f6"
                                                strokeWidth={2}
                                                dot={{ stroke: '#3b82f6', strokeWidth: 2, r: 4 }}
                                                activeDot={{ r: 6, stroke: '#1e40af' }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* INTEGRATIONS */}
                    {activeTab === "integrations" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                        >
                            <h2 className="font-semibold text-zinc-800 dark:text-zinc-200">Integrations</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {integrations.map((int, i) => (
                                    <div
                                        key={i}
                                        className="glass p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors"
                                    >
                                        <span className="text-zinc-800 dark:text-zinc-200">{int.name}</span>
                                        <span className={`text-xs ${int.status === "Connected"
                                            ? "text-green-600"
                                            : "text-zinc-500 dark:text-zinc-400"
                                            }`}>
                                            {int.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* SETTINGS */}
                    {activeTab === "settings" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            <div className="glass p-6 rounded-xl space-y-4">
                                <h2 className="font-semibold text-zinc-800 dark:text-zinc-200">AI Configuration</h2>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-zinc-700 dark:text-zinc-300">Max Tokens</label>
                                    <input
                                        className="border border-black/20 bg-white/5 rounded-md p-2 text-zinc-800 dark:text-zinc-200"
                                        defaultValue={agent.config.maxTokens}
                                        readOnly
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-zinc-700 dark:text-zinc-300">Temperature</label>
                                    <input
                                        className="border border-black/20 bg-white/5 rounded-md p-2 text-zinc-800 dark:text-zinc-200"
                                        defaultValue={agent.config.temperature}
                                        readOnly
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm text-zinc-700 dark:text-zinc-300">
                                        Model
                                    </label>

                                    <input
                                        className="border border-black/20 bg-white/5 rounded-md p-2 text-zinc-800 dark:text-zinc-200"
                                        defaultValue={agent.config.model}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

function StatCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="glass p-4 rounded-lg">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{value}</h2>
        </div>
    );
}
