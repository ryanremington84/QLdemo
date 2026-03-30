"use client"

import Agents from "@/components/dashboard/agents";
import Overview from "@/components/dashboard/overview";
import PathPopup from "@/components/dashboard/popup";
import Setting from "@/components/dashboard/settings";
import { UserDocument } from "@/model/user";
import { Bell, BrainCircuit, ChevronsUpDown, FolderKanban, MessageCircleWarning, Settings } from "lucide-react"
import Link from "next/link";
import { useEffect, useState } from "react"

const links = [
    {
        icon: <FolderKanban size={16} />,
        Label: "Overview"
    },
    {
        icon: <BrainCircuit size={16} />,
        Label: "Agents"
    },
    {
        icon: <MessageCircleWarning size={16} />,
        Label: "Reports"
    },
]

export default function Dashboard() {
    const [selectedPage, setSelectedPage] = useState(1);
    const [path, setPath] = useState<{ state: boolean, value: string } | null>(null);
    const [user, setUser] = useState<UserDocument | null>(null);

    useEffect(() => {
        const get = async () => {
            const res = await fetch(`/api/authenticated/user`, {
                method: "GET",
                cache: "no-store"
            });
            if (res.ok) {
                const result = await res.json();
                setUser(result);
            };
        };
        get();
    }, [])

    useEffect(() => {
        try {
            const stored = localStorage.getItem("path");
            if (stored) {
                setPath(JSON.parse(stored));
            }
        } catch (err) {
            console.error("Invalid JSON in localStorage");
        }
    }, []);

    if (!user) return null

    return (
        <div className="w-full h-screen flex">
            <div className="w-[320px] h-full glass flex p-2">
                <div className="flex items-center gap-2 p-2 pl-0 h-full">
                    <div className="flex flex-col items-center justify-between gap-2 h-full">
                        <div className="flex flex-col items-center justify-start gap-2 select-none cursor-pointer">
                            <div className="p-3 bg-black/5 rounded-md">
                                <img src="/images/assets/seo/ql_logo.png" className="w-6" />
                            </div>
                            {links.map((item, index) => {

                                return (
                                    <div key={index} className={`p-3 ${selectedPage === index ? "bg-slate-100" : "opacity-70"} rounded-md`} onClick={() => setSelectedPage(index)}>
                                        {item.icon}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div onClick={() => setSelectedPage(links.length)} className={`p-3 ${selectedPage === (links.length) ? "bg-slate-100" : "opacity-70"} rounded-md`}>
                                <Bell size={16} />
                            </div>
                            <div onClick={() => setSelectedPage(links.length + 1)} className={`p-3 ${selectedPage === (links.length + 1) ? "bg-slate-100" : "opacity-70"} rounded-md`}>
                                <Settings size={16} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-slate-100 rounded-md border p-4 flex flex-col gap-1">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-medium text-md">{user.companies[0].name}</h1>
                            <h1 className="opacity-70 text-[14px]">{user.email}</h1>
                        </div>
                        <ChevronsUpDown size={16} />
                    </div>
                    <div className="">
                        {links.map((item, index) => {

                            return (
                                <div key={index} className={`p-3 font-medium text-sm ${selectedPage === index ? "bg-slate-200" : "opacity-70"} rounded-md flex items-center justify-start gap-3 w-full`} onClick={() => setSelectedPage(index)}>
                                    {item.Label}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="flex-1 p-2 flex bg-white">
                <div className="flex-1 rounded-lg">
                    {!path && <PathPopup setPath={setPath} />}
                    {selectedPage === 0 && <Overview />}
                    {selectedPage === 1 && <Agents user={user}/>}
                    {selectedPage === links.length + 1 && <Setting user={user} />}
                </div>
            </div>
        </div>
    )
}