import { features } from "@/db/features";
import {ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Features() {
    return (
        <div className="container mx-auto w-full min-h-screen flex flex-col items-center justify-center gap-10">
            
            <h1 className="text-6xl leading-[1.1] font-semibold mb-6 bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                More then 40+ features to assist your business
            </h1>
            <div className="w-full flex flex-wrap gap-6 items-start justify-center">
                {features.slice(0, 20).map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={index}
                            className="group w-[260px] glass rounded-xl p-5 backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-white/50 backdrop-blur-md">
                                    <Icon size={18} className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300" />
                                </div>
                                <h3 className="text-sm font-semibold text-slate-800">
                                    {feature.title}
                                </h3>
                            </div>

                            <div className="h-0.5 w-0 group-hover:w-full bg-linear-to-r from-slate-400 to-slate-700 transition-all duration-500"></div>
                        </div>
                    );
                })}
            </div>
            <Link
                href="/"
                className="px-4 py-4 rounded-xl glass backdrop-blur-md text-slate-800 text-sm font-medium flex items-center justify-between gap-12"
            >
                <h1>Learn More</h1>
                <ChevronRight />
            </Link>
        </div>
    )
}