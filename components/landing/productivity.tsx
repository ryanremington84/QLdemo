"use client";

import { Bot, Loader, Mail, User, Check, Clock, TrendingUp, UserCheck, Upload, File, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Productivity() {
    const [step, setStep] = useState(0);
    const [performanceReady, setPerformanceReady] = useState(false);
    const [activeEmployees, setActiveEmployees] = useState(27);
    const [animatedStats, setAnimatedStats] = useState({
        hours: 0,
        completion: 0,
        attendance: 0,
    });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });



    useEffect(() => {
        if (!isInView) return;

        const timers = [
            setTimeout(() => setStep(1), 3000),
            setTimeout(() => setStep(2), 6000),
            setTimeout(() => setStep(3), 9000),
            setTimeout(() => setStep(4), 12000),
        ];

        return () => timers.forEach(clearTimeout);
    }, [isInView]);

    useEffect(() => {
        if (!isInView) return;

        const timer = setTimeout(() => {
            setPerformanceReady(true);

            // Animate numbers upward
            let progress = 0;
            const interval = setInterval(() => {
                progress += 4;

                setAnimatedStats({
                    hours: Math.min(8.4, 8.4 * (progress / 100)),
                    completion: Math.min(94, 94 * (progress / 100)),
                    attendance: Math.min(98, 98 * (progress / 100)),
                });

                if (progress >= 100) clearInterval(interval);
            }, 40);

        }, 3000);

        return () => clearTimeout(timer);
    }, [isInView]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveEmployees(prev => {
                const change = Math.floor(Math.random() * 3) - 1; // -1, 0, +1
                return Math.max(20, Math.min(35, prev + change));
            });
        }, 1500);

        return () => clearInterval(interval);
    }, []);



    return (
        <div
            ref={ref}
            className="container mx-auto w-full min-h-screen flex flex-col items-center justify-center gap-10"
        >
            <h1 className="text-6xl leading-[1.1] font-semibold mb-6 bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                Boost your productivity
            </h1>
            <TopSide performanceReady={performanceReady} activeEmployees={activeEmployees} animatedStats={animatedStats} step={step} />
        </div>
    );
}

function TopSide({ performanceReady, activeEmployees, animatedStats, step }: {
    performanceReady: boolean, activeEmployees: number, animatedStats: {
        hours: number;
        completion: number;
        attendance: number;
    },
    step: number
}) {


    const tasks = [
        {
            icon: Bot,
            text: "Generated a list of tasks for today",
        },
        {
            icon: Mail,
            text: "Sent emails to selected users",
        },
        {
            icon: User,
            text: "Employee performance results ready to view",
        },
        {
            icon: User,
            text: "Posted selected images to social media",
        },
    ];
    return (
        <div className="flex items-center justify-center gap-10 w-full">
            <div className="glass rounded-xl p-8 space-y-4 w-[500px] h-[380px]">
                <h2 className="text-slate-600 font-medium text-md">
                    Automate your daily tasks
                </h2>

                <div className="bg-slate-200/60 backdrop-blur-2xl rounded-xl space-y-3">
                    {tasks.map((task, index) => {
                        const Icon = task.icon;
                        const isActive = step === index;
                        const isComplete = step > index;

                        return (
                            <div
                                key={index}
                                className={`w-full p-4 flex items-center justify-between bg-white rounded-lg transition-all duration-500 ${isActive ? "shadow-lg scale-[1.02]" : ""
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon size={18} className="text-slate-600" />
                                    <p className="text-sm font-medium text-slate-700">
                                        {task.text}
                                    </p>
                                </div>

                                {/* Right Indicator */}
                                {isComplete ? (
                                    <Check
                                        size={18}
                                        className="text-green-500 transition-all duration-300"
                                    />
                                ) : isActive ? (
                                    <Loader size={18} className="animate-spin text-slate-500" />
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex gap-10 w-full h-[380px]">

                {/* LEFT SIDE (6 columns) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass rounded-2xl p-8 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl flex-1"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-slate-600 font-medium text-md">
                            Employee Activity
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Clock size={16} />
                            Today
                        </div>
                    </div>

                    {/* Time Log Table */}
                    <div className="space-y-4">

                        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                            <div>
                                <p className="text-sm font-medium text-slate-700">John Carter</p>
                                <p className="text-xs text-slate-500">Operations Manager</p>
                            </div>
                            <div className="text-right text-sm text-slate-600">
                                <p>Start: 8:45 AM</p>
                                <p>End: 5:32 PM</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                            <div>
                                <p className="text-sm font-medium text-slate-700">Sarah Lin</p>
                                <p className="text-xs text-slate-500">Project Lead</p>
                            </div>
                            <div className="text-right text-sm text-slate-600">
                                <p>Start: 9:10 AM</p>
                                <p>End: 6:01 PM</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                            <div>
                                <p className="text-sm font-medium text-slate-700">Michael Stone</p>
                                <p className="text-xs text-slate-500">Field Technician</p>
                            </div>
                            <div className="text-right text-sm text-slate-600">
                                <p>Start: 7:58 AM</p>
                                <p>End: 4:42 PM</p>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* RIGHT SIDE (3 columns) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="glass rounded-2xl p-4 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl flex flex-col gap-4"
                >

                    {/* Performance Card */}
                    <div className="flex-1 glass rounded-lg p-4 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp size={18} className="text-slate-600" />
                            <h3 className="text-md font-semibold text-slate-800">
                                Performance Overview
                            </h3>
                        </div>

                        <div className="space-y-2 text-sm text-slate-600">

                            {!performanceReady ? (
                                <div className="flex items-center gap-3 text-slate-500">
                                    <Loader size={16} className="animate-spin" />
                                    Calculating performance...
                                </div>
                            ) : (
                                <>
                                    <div className="flex justify-between">
                                        <span>Average Hours</span>
                                        <motion.span
                                            key={animatedStats.hours}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="font-medium text-slate-800"
                                        >
                                            {animatedStats.hours.toFixed(1)}h
                                        </motion.span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Task Completion</span>
                                        <motion.span
                                            key={animatedStats.completion}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="font-medium text-slate-800"
                                        >
                                            {Math.round(animatedStats.completion)}%
                                        </motion.span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Attendance Rate</span>
                                        <motion.span
                                            key={animatedStats.attendance}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="font-medium text-slate-800"
                                        >
                                            {Math.round(animatedStats.attendance)}%
                                        </motion.span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Active Employees */}
                    <div className="flex-1 glass rounded-lg p-6 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <UserCheck size={18} className="text-slate-600" />
                            <h3 className="text-md font-semibold text-slate-800">
                                Active Now
                            </h3>
                        </div>

                        <motion.p
                            key={activeEmployees}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="text-2xl font-semibold text-slate-900"
                        >
                            {activeEmployees}
                        </motion.p>
                        <p className="text-sm text-slate-500 mt-1">
                            Employees currently clocked in
                        </p>
                    </div>

                </motion.div>

            </div>
        </div>
    )
}

function BottomSide() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [extractedText, setExtractedText] = useState("");
    const [showModal, setShowModal] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (file: File) => {
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "text/plain",
            "image/png",
            "image/jpeg",
            "image/jpg",
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("Unsupported file type");
            return;
        }

        setSelectedFile(file);
        setIsUploading(true);
        setIsProcessing(true);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const res = await fetch("/api/convert", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            setExtractedText(data.text || "No text detected.");
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        } finally {
            setIsUploading(false);
            setIsProcessing(false);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center gap-10 w-full">
                <div className="glass rounded-2xl p-8 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl flex flex-col gap-3 items-center justify-start w-[420px]">

                    <h1 className="text-slate-600 font-medium text-md">
                        Convert documents, images into text
                    </h1>

                    {/* Upload */}
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="glass cursor-pointer rounded-lg p-4 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl flex items-center justify-between w-full hover:bg-white/40 transition"
                    >
                        <div className="flex items-center gap-2">
                            <Upload className="text-zinc-500" size={16} />
                            <h1 className="text-sm">
                                {selectedFile ? selectedFile.name : "Upload document/image"}
                            </h1>
                        </div>
                        {isUploading && <Loader className="text-zinc-500 animate-spin" size={16} />}
                    </div>

                    <input
                        ref={fileInputRef}
                        type="file"
                        hidden
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(file);
                        }}
                    />

                    {/* AI Processing */}
                    <div className={`glass rounded-lg p-4 backdrop-blur-xl border shadow-xl flex items-center justify-between w-full transition
                ${extractedText ? "cursor-pointer bg-white/30 border-white/40 hover:bg-white/40" : "opacity-50 bg-white/20 border-white/20"}
            `}>
                        <div className="flex items-center gap-2">
                            <Bot className="text-zinc-500" size={16} />
                            <h1 className="text-sm">
                                {isProcessing ? "AI agent running..." : "AI agent ready"}
                            </h1>
                        </div>
                        {isProcessing && <Loader className="text-zinc-500 animate-spin" size={16} />}
                    </div>

                    {/* View Result */}
                    <div
                        onClick={() => extractedText && setShowModal(true)}
                        className={`glass rounded-lg p-4 backdrop-blur-xl border shadow-xl flex items-center justify-between w-full transition
                ${selectedFile ? "cursor-pointer bg-white/30 border-white/40 hover:bg-white/40" : "opacity-50 bg-white/20 border-white/20"}
            `}
                    >
                        <div className="flex items-center gap-2">
                            <File className="text-zinc-500" size={16} />
                            <h1 className="text-sm">
                                {extractedText ? "Ready to view" : "Waiting for output"}
                            </h1>
                        </div>
                        <ChevronRight className="text-zinc-500" size={16} />
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 w-[600px] max-h-[70vh] overflow-y-auto shadow-2xl relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4"
                        >
                            <X size={18} />
                        </button>

                        <h2 className="text-lg font-semibold mb-4">Extracted Text</h2>

                        <pre className="text-sm whitespace-pre-wrap text-slate-700">
                            {extractedText}
                        </pre>
                    </div>
                </div>
            )}
        </>
    )
}