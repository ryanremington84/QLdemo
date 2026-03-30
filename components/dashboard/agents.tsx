import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SelectedAgent } from "./components/selectedAgent";
import { useEffect, useState } from "react";
import { AgentDocument } from "@/model/agent";
import { UserDocument } from "@/model/user";

export default function Agents({ user }: { user: UserDocument }) {
    const [agents, setAgents] = useState<AgentDocument[]>([]);
    const [selectedA, setSelectedA] = useState<AgentDocument | null>(null);

    useEffect(() => {
        const get = async () => {
            const res = await fetch(`/api/authenticated/agent`, {
                method: "GET",
                cache: "no-store"
            });
            if (res.ok) {
                const result: {
                    success: boolean;
                    data: AgentDocument[];
                } = await res.json();
                setAgents(result.data);
            }
        };
        get()
    }, []);

    return (
        <div className="flex-1 flex flex-col p-8 gap-6">
            <div>
                <h1 className="text-zinc-700 font-medium text-xl">Agents</h1>
                <p className="opacity-80">
                    Accelerate your project with our collection of professionally designed agents
                </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
                <TabsList className="bg-muted p-1 rounded-lg w-fit">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="templates">Agents</TabsTrigger>
                    <TabsTrigger value="custom">Created by you</TabsTrigger>
                </TabsList>

                {/* ALL */}
                <TabsContent value="all" className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {agents.map((agent, i) => (
                        <AgentCard key={i} agent={agent} selectedAgent={setSelectedA} />
                    ))}
                </TabsContent>

                {/* TEMPLATES */}
                <TabsContent value="templates" className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {agents
                        .filter((a) => a.type === "template")
                        .map((agent, i) => (
                            <AgentCard key={i} agent={agent} selectedAgent={setSelectedA} />
                        ))}
                </TabsContent>

                {/* CUSTOM */}
                <TabsContent value="custom" className="mt-4">
                    <p className="text-sm text-zinc-500">No custom agents yet.</p>
                </TabsContent>
            </Tabs>

            {selectedA && <SelectedAgent agent={selectedA} user={user} onClose={() => setSelectedA(null)}/>}
        </div>
    );
}
function AgentCard({ agent, selectedAgent }: {
    agent: AgentDocument,
    selectedAgent: (v: AgentDocument) => void;
}) {
    return (
        <div className="w-full glass p-4 flex gap-4 items-center rounded-lg hover:shadow-md transition" onClick={() => selectedAgent(agent)}>
            <img
                src={agent.image}
                className="w-12 h-12 rounded-lg object-cover shrink-0"
            />

            <div className="flex flex-col gap-1 w-full">
                <h1 className="text-sm font-semibold text-zinc-800">
                    {agent.title}
                </h1>

                <span className="text-xs text-zinc-500">
                    {agent.category}
                </span>

                <p className="text-sm text-zinc-600 line-clamp-2">
                    {agent.description}
                </p>
            </div>
        </div>
    );
}

