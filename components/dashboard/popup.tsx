"use client"

import { Blocks, HatGlasses, MessageCircle } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function PathPopup({ setPath }: {
    setPath: Dispatch<SetStateAction<{
        state: boolean;
        value: string;
    } | null>>
}) {
    return (
        <div className="fixed z-999 glass w-full h-screen flex items-center justify-center top-0 left-0">
            <div className="w-full max-w-5xl  bg-linear-to-br from-white via-blue-50 to-purple-50 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-10 flex flex-col items-center gap-10">

                {/* Header */}
                <div className="text-center max-w-xl">
                    <h1 className="font-semibold text-3xl text-gray-800 mb-2">
                        What would you like to do first?
                    </h1>
                    <p className="text-gray-500">
                        Integrate and enhance your website experience with powerful AI agents
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

                    {/* Card 1 */}
                    <div className="group bg-white rounded-xl p-5 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-4">
                        <div className="w-full h-[140px] bg-blue-100 flex items-center justify-center rounded-lg">
                            <Blocks size={40} className="text-blue-600" />
                        </div>

                        <h2 className="font-semibold text-gray-800">
                            Optimize workflow & systems
                        </h2>

                        <p className="text-sm text-gray-500">
                            Integrate agents into your website to automate processes, increase revenue, and reduce costs.
                        </p>

                        <button
                            className="mt-auto w-full py-2 rounded-md bg-blue-600 text-white text-sm font-medium group-hover:bg-blue-700 transition"
                            onClick={() => { localStorage.setItem("path", JSON.stringify({ state: true, value: "manual" })); setPath({ state: true, value: "manual" }) }}
                        >
                            Start Integration
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white rounded-xl p-5 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-4">
                        <div className="w-full h-[140px] bg-pink-100 flex items-center justify-center rounded-lg">
                            <MessageCircle size={40} className="text-pink-600" />
                        </div>

                        <h2 className="font-semibold text-gray-800">
                            Build your chatbot
                        </h2>

                        <p className="text-sm text-gray-500">
                            Create and train a chatbot, then embed it into your website using iframe or script.
                        </p>

                        <button
                            className="mt-auto w-full py-2 rounded-md bg-pink-600 text-white text-sm font-medium group-hover:bg-pink-700 transition"
                            onClick={() => { localStorage.setItem("path", JSON.stringify({ state: true, value: "chatbot" })); setPath({ state: true, value: "chatbot" }) }}
                        >
                            Create Chatbot
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white rounded-xl p-5 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-4 relative">
                        <div className="p-2 px-6 absolute bg-purple-500 left-20 text-white font-medium rounded-full text-sm top-0">
                            Recommended
                        </div>
                        <div className="w-full h-[140px] bg-purple-100 flex items-center justify-center rounded-lg">
                            <HatGlasses size={40} className="text-purple-600" />
                        </div>

                        <h2 className="font-semibold text-gray-800">
                            Let us handle everything
                        </h2>

                        <p className="text-sm text-gray-500">
                            Our team will fully integrate and optimize your website for maximum performance.
                        </p>

                        <button
                            className="mt-auto w-full py-2 rounded-md bg-purple-600 text-white text-sm font-medium group-hover:bg-purple-700 transition"
                            onClick={() => { localStorage.setItem("path", JSON.stringify({ state: true, value: "team" })); setPath({ state: true, value: "team" }) }}
                        >
                            Contact Team
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}