"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="relative w-full py-40 overflow-hidden">

            <div className="container mx-auto px-6 relative z-10 flex justify-center">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl w-full text-center glass rounded-3xl backdrop-blur-xl bg-white/40 border border-white/40 shadow-2xl p-16"
                >

                    {/* Heading */}
                    <h2 className="text-5xl font-semibold leading-[1.1] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                        Transform Your Business Into
                        <br />
                        An Intelligent Operating System
                    </h2>

                    {/* Subtext */}
                    <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
                        See how Quanton OS deploys coordinated AI agents across growth,
                        operations, and strategy to automate the infrastructure of your business.
                    </p>

                    {/* Button */}
                    <div className="mt-10 flex justify-center">
                        <Link
                            href="https://calendly.com/quantonlabs/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-8 py-4 rounded-xl
              bg-slate-900 text-white font-medium text-lg
              shadow-lg hover:shadow-2xl
              hover:-translate-y-1
              transition-all duration-300"
                        >
                            Request a Demo

                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}