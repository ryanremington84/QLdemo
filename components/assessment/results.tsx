import { Profile, TaskResponse, Lead } from "@/db/assessments";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function RenderResults({ profile, taskResponses, leadInfo }: { profile: Partial<Profile>, taskResponses: Record<string, TaskResponse>, leadInfo: Partial<Lead> }) {
    const [data, setData] = useState({
        coveragePercentage: 0,
        totalTasks: 0,
        notDoing: 0,
        manual: 0,
        looseAI: 0,
        estimatedHoursLow: 0,
        estimatedHoursHigh: 0,
        structured: 0,
    });
    const [airesponse, setAiresponse] = useState("");
    const [isloading, setIsloading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const get = async () => {
            const formdata = {
                taskResponses,
                leadInfo,
                profile
            }
            const res = await fetch('/api/assessment', {
                method: "POST",
                body: JSON.stringify(formdata),
                cache: 'no-store'
            });
            if (res.ok) {
                const result = await res.json()
                setData(result);
            }

        };
        get()
    }, []);

    const handleViewAiresponse = async () => {
        setIsloading(true)
        setOpenModal(true);
        const res = await fetch("/api/public/ai", {
            method: "POST",
            body: JSON.stringify({ profile, taskResponses, leadInfo }),
            cache: "no-store"
        });
        if (res.ok) {
            setIsloading(false);
            const result = await res.json();
            setAiresponse(result);
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto pt-30">
            <div className="w-full px-4 py-8 sm:py-12 relative z-10">
                {/* Results Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">AI Agent Coverage Report</h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Personalized insights on your current AI coverage and gaps
                    </p>
                </motion.div>

                {/* Main Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Coverage Summary Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <Card className="backdrop-blur-xl bg-white/80 border border-slate-200 shadow-lg hover:bg-slate-50 transition-all duration-300 rounded-xl">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                                    <div className="text-center md:text-left">
                                        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Coverage Overview</h2>
                                        <p className="text-slate-600">
                                            {data.coveragePercentage <= 20 ? 'Your business is running almost entirely on manual processes.' :
                                                data.coveragePercentage <= 40 ? 'You have started using AI, but most operations remain manual.' :
                                                    data.coveragePercentage <= 60 ? 'You have moderate AI coverage with significant gaps in core functions.' :
                                                        data.coveragePercentage <= 80 ? 'Your AI usage is above average, but disconnected tools limit your returns.' :
                                                            'Your operations are well-covered. The question is whether your systems work together.'}
                                        </p>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-2xl border-4 border-slate-200"
                                    >
                                        {data.coveragePercentage}%
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="backdrop-blur-sm bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                        <p className="text-2xl font-bold text-slate-900">{data.totalTasks}</p>
                                        <p className="text-sm text-slate-500">Total Tasks</p>
                                    </div>
                                    <div className="backdrop-blur-sm bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                        <p className="text-2xl font-bold text-slate-900">{data.notDoing + data.manual}</p>
                                        <p className="text-sm text-slate-500">Manual Tasks</p>
                                    </div>
                                    <div className="backdrop-blur-sm bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                                        <p className="text-2xl font-bold text-slate-900">{data.looseAI}</p>
                                        <p className="text-sm text-slate-500">Disconnected AI</p>
                                    </div>
                                </div>

                                {data.estimatedHoursLow > 0 && data.estimatedHoursHigh > 0 && (
                                    <div className="mt-6 p-4 backdrop-blur-sm bg-slate-100/50 rounded-lg border border-slate-200">
                                        <p className="font-semibold text-slate-900">Manual Hours at Risk</p>
                                        <p className="text-slate-700">{Math.round(data.estimatedHoursLow)}–{Math.round(data.estimatedHoursHigh)} hours per week</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <Card className="backdrop-blur-xl bg-white/80 border border-slate-200 shadow-lg hover:bg-slate-50 transition-all duration-300 rounded-xl">
                            <CardHeader>
                                <CardTitle className="text-slate-900">Response Distribution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-700">Not Doing</span>
                                        <Badge variant="secondary" className="bg-slate-200 text-slate-800">{data.notDoing}</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-700">Manual</span>
                                        <Badge variant="secondary" className="bg-slate-200 text-slate-800">{data.manual}</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-700">Loose AI</span>
                                        <Badge variant="secondary" className="bg-slate-200 text-slate-800">{data.looseAI}</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-700">Structured</span>
                                        <Badge variant="secondary" className="bg-slate-200 text-slate-800">{data.structured}</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="backdrop-blur-xl bg-white/80 border border-slate-200 shadow-lg hover:bg-slate-50 transition-all duration-300 rounded-xl">
                            <CardHeader>
                                <CardTitle className="text-slate-900">Recommendation</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className="text-slate-700 mb-4">
                                    {data.coveragePercentage > 80
                                        ? "Your AI implementation is strong. Focus on integration and optimization."
                                        : data.coveragePercentage > 60
                                            ? "You're making progress. Identify key areas for improvement."
                                            : "Immediate attention needed. Prioritize high-impact AI implementations."}
                                </p>
                                <Button className="w-full bg-slate-900 text-white hover:bg-slate-800" onClick={handleViewAiresponse}>
                                    View Detailed Analysis
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Agent Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12"
                >
                    <Card className="backdrop-blur-xl bg-white/80 border border-slate-200 shadow-lg hover:bg-slate-50 transition-all duration-300 rounded-xl">
                        <CardHeader>
                            <CardTitle className="text-slate-900">The Agent Map</CardTitle>
                            <CardDescription className="text-slate-600">
                                How each agent is mapping to your business functions
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Marketing and Content Agent */}
                                <div className="backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <h4 className="font-semibold mb-2 text-slate-900">Marketing and Content Agent</h4>
                                    <p className="text-sm text-slate-600 mb-3">Domain: Growth</p>
                                    <p className="text-sm text-slate-700 mb-3">Plans, creates, distributes, and optimizes content across all channels.</p>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Social Media</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Long-form Content</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Email Campaigns</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Content Repurposing</Badge>
                                    </div>
                                </div>

                                {/* Sales Agent */}
                                <div className="backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <h4 className="font-semibold mb-2 text-slate-900">Sales Agent</h4>
                                    <p className="text-sm text-slate-600 mb-3">Domain: Growth</p>
                                    <p className="text-sm text-slate-700 mb-3">Manages the revenue pipeline from inbound lead to closed deal.</p>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Lead Response</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Proposal Generation</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Follow-up Sequences</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Pipeline Tracking</Badge>
                                    </div>
                                </div>

                                {/* Customer Experience Agent */}
                                <div className="backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <h4 className="font-semibold mb-2 text-slate-900">Customer Experience Agent</h4>
                                    <p className="text-sm text-slate-600 mb-3">Domain: Operations + Growth</p>
                                    <p className="text-sm text-slate-700 mb-3">Manages post-acquisition service and retention.</p>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">FAQ Handling</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Booking Scheduling</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Complaint Routing</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Onboarding</Badge>
                                    </div>
                                </div>

                                {/* People and Team Agent */}
                                <div className="backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center md:col-span-3 bg-slate-100/50 hover:bg-slate-100 transition-colors">
                                    <h4 className="font-semibold mb-2 text-slate-900">People and Team Agent</h4>
                                    <p className="text-sm text-slate-600 mb-3">Domain: Operations</p>
                                    <p className="text-sm text-slate-800 mb-3">Manages the employee lifecycle and team performance infrastructure.</p>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Job Posting</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Candidate Screening</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Interview Scheduling</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Onboarding Workflows</Badge>
                                    </div>
                                </div>

                                {/* Operations Agent */}
                                <div className="backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <h4 className="font-semibold mb-2 text-slate-900">Operations Agent</h4>
                                    <p className="text-sm text-slate-600 mb-3">Domain: Operations</p>
                                    <p className="text-sm text-slate-700 mb-3">Controls internal execution infrastructure.</p>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Task Assignment</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">SOP Creation</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Vendor Coordination</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Meeting Management</Badge>
                                    </div>
                                </div>

                                {/* Inventory and Supply Chain Agent */}
                                <div className="backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <h4 className="font-semibold mb-2 text-slate-900">Inventory and Supply Chain Agent</h4>
                                    <p className="text-sm text-slate-600 mb-3">Domain: Operations</p>
                                    <p className="text-sm text-slate-700 mb-3">Manages stock and supplier systems.</p>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Stock Monitoring</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Low Stock Alerts</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Automated Reorders</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Supplier Communication</Badge>
                                    </div>
                                </div>

                                {/* Finance Agent */}
                                <div className="backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <h4 className="font-semibold mb-2 text-slate-900">Finance Agent</h4>
                                    <p className="text-sm text-slate-600 mb-3">Domain: Operations</p>
                                    <p className="text-sm text-slate-700 mb-3">Handles financial execution and compliance infrastructure.</p>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Invoice Generation</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Payment Reminders</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Expense Categorization</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Financial Reporting</Badge>
                                    </div>
                                </div>

                                {/* Governing Agent */}
                                <div className="backdrop-blur-sm border border-slate-200 rounded-lg p-4 text-center md:col-span-3 bg-slate-100/50 hover:bg-slate-100 transition-all">
                                    <h4 className="font-semibold mb-2 text-slate-900">Governing Agent</h4>
                                    <p className="text-sm text-slate-600 mb-3">Domain: Strategy</p>
                                    <p className="text-sm text-slate-800">
                                        The orchestration and intelligence layer that unifies the system.
                                    </p>
                                    <div className="mt-3 flex flex-wrap justify-center gap-1">
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Cross-agent Coordination</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Exception Management</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">KPI Monitoring</Badge>
                                        <Badge variant="secondary" className="bg-slate-200/50 text-slate-700 text-xs">Leadership Dashboard</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Gap Quantification */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <Card className="backdrop-blur-xl bg-white/80 border border-slate-200 shadow-lg hover:bg-slate-50 transition-all duration-300 rounded-xl">
                        <CardHeader>
                            <CardTitle className="text-slate-900">Gap Quantification</CardTitle>
                            <CardDescription className="text-slate-600">
                                Measurable insights into your current AI coverage gaps
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="p-5 backdrop-blur-sm bg-slate-50 rounded-lg border border-slate-200">
                                    <h4 className="font-semibold text-slate-900 mb-2">Manual Hours at Risk</h4>
                                    <p className="text-slate-700">{Math.round(data.estimatedHoursLow)}–{Math.round(data.estimatedHoursHigh)} hours per week</p>
                                    <p className="text-sm text-slate-600 mt-2">
                                        Based on your responses, your team is spending an estimated {Math.round(data.estimatedHoursLow)}–{Math.round(data.estimatedHoursHigh)} hours per week on tasks that could be automated.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-5 backdrop-blur-sm bg-slate-50 rounded-lg border border-slate-200">
                                        <h4 className="font-semibold text-slate-900 mb-2">Uncovered Functions</h4>
                                        <p className="text-slate-700">{data.notDoing} core business functions are not being performed at all.</p>
                                        <p className="text-sm text-slate-600 mt-2">
                                            These represent blind spots in your operations that could benefit from AI implementation.
                                        </p>
                                    </div>

                                    <div className="p-5 backdrop-blur-sm bg-slate-50 rounded-lg border border-slate-200">
                                        <h4 className="font-semibold text-slate-900 mb-2">Fragmented AI</h4>
                                        <p className="text-slate-700">{data.looseAI} tasks are using AI without a defined process.</p>
                                        <p className="text-sm text-slate-600 mt-2">
                                            Disconnected AI usage increases inconsistency and creates dependencies on individual judgment.
                                        </p>
                                    </div>
                                </div>

                                {data.structured > 0 && (
                                    <div className="p-5 backdrop-blur-sm bg-slate-50 rounded-lg border border-slate-200">
                                        <h4 className="font-semibold text-slate-900 mb-2">Governance Insight</h4>
                                        <p className="text-slate-700">{data.structured} structured workflows depend on one person's judgment rather than system-level governance.</p>
                                        <p className="text-sm text-slate-600 mt-2">
                                            The Governing Agent eliminates single points of failure by enforcing system-level oversight across all agents.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="backdrop-blur-xl bg-slate-50 rounded-xl p-8 mb-12 border border-slate-200"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Next Steps for Your AI Transformation</h3>

                        <p className="mb-6 text-slate-700">
                            {profile.ai_usage_level === 'none'
                                ? "Your business is operating entirely on manual effort. Every function in this assessment can be supported by a coordinated AI agent with human oversight."
                                : profile.ai_usage_level === 'casual'
                                    ? "You have started experimenting with AI, but there is a significant difference between asking ChatGPT occasional questions and deploying a coordinated operating system."
                                    : profile.ai_usage_level === 'fragmented'
                                        ? "You have invested in AI tools and automations, but your results suggest they are not working as a system. Disconnected automations create fragility."
                                        : "Your operation is more mature than most. The question is whether your current architecture provides unified visibility."}

                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {profile.revenue_range === 'under_1m' && (
                                <Button className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-lg">
                                    Request a Scaling Architecture Call
                                </Button>
                            )}

                            {(profile.revenue_range === '1m_5m' || profile.revenue_range === '5m_10m' ||
                                profile.revenue_range === '10m_20m') && (
                                    <Button className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-lg">
                                        Book a Readiness Consultation
                                    </Button>
                                )}

                            {profile.revenue_range === 'over_20m' && (
                                <Button className="bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-lg">
                                    Discuss Enterprise Configuration
                                </Button>
                            )}

                            <Button variant="outline" className="border-slate-300 text-slate-700 bg-transparent hover:bg-slate-100 px-6 py-3 rounded-lg">
                                Read the Full White Paper
                            </Button>
                        </div>

                        <p className="mt-6 text-sm opacity-80 text-slate-600">
                            {profile.revenue_range === 'under_1m'
                                ? "Quanton OS is designed for businesses generating $1M–$20M annually. If you are approaching that threshold, a conversation about operational infrastructure can help you scale without the chaos that typically accompanies growth."
                                : profile.revenue_range === 'over_20m'
                                    ? "Your organization may benefit from Quanton OS at the enterprise deployment level. Our standard implementation is designed for $1M–$20M businesses, but the operating principles and agent architecture scale. Contact us to discuss enterprise configuration."
                                    : ""}
                        </p>
                    </div>
                </motion.div>

                <footer className="text-center text-slate-600 text-sm py-6">
                    © 2026 Quanton Labs. All rights reserved.
                </footer>
            </div>

            {/* Modal for AI Response */}
            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold">
                            AI Analysis Report
                        </DialogTitle>
                    </DialogHeader>

                    {isloading ? (
                        <div className="flex items-center justify-center py-8">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-slate-900"></div>
                        </div>
                    ) : (
                        <div className="mt-4 prose prose-slate max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {airesponse}
                            </ReactMarkdown>
                        </div>
                    )}

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                        <Button variant="outline" onClick={() => setOpenModal(false)}>
                            Close
                        </Button>

                        <Button className="bg-slate-900 text-white hover:bg-slate-800">
                            Book a Demo
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};
