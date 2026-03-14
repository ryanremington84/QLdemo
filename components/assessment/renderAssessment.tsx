import { DOMAINS, TASK_VARIANTS, TaskResponse } from "@/db/assessments";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Dispatch, SetStateAction } from "react";

export default function RenderAssessmentStep({
    visibleDomains,
    allTasks,
    currentDomain,
    displayedTasks,
    handleResponseSelect,
    handleGovernanceToggle,
    handlePrevPage,
    handleNextPage,
    currentPage,
    taskResponses,
    setCurrentPage,
    setCurrentDomain,
    setCurrentStep
}: {
    visibleDomains: string[],
    allTasks: string[],
    currentDomain: number,
    displayedTasks: string[],
    handleResponseSelect: (taskId: string, responseValue: "not_doing" | "manual" | "loose_ai" | "structured") => void,
    handleGovernanceToggle: (taskId: string, flag: "system_governed" | "person_dependent") => void,
    handlePrevPage: () => void,
    handleNextPage: () => void,
    currentPage: number,
    taskResponses: Record<string, TaskResponse>,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    setCurrentDomain: Dispatch<SetStateAction<number>>,
    setCurrentStep: Dispatch<SetStateAction<"results" | "lead" | "profile" | "assessment">>
}) {
    // Get visible domains and tasks

    if (visibleDomains.length === 0 || currentDomain >= visibleDomains.length) return null;

    const domainKey = visibleDomains[currentDomain];
    const domainName = DOMAINS[domainKey as keyof typeof DOMAINS].name;

    // Get tasks for this domain

    if (allTasks.length === 0) return null;

    return (
        <div className="">
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="max-w-2xl md:min-w-xl mx-auto px-4 py-6 sm:py-8 relative z-10">
                <Card
                    className="backdrop-blur-xl bg-white/20 border border-white/40 shadow-xl hover:bg-white/30 transition-all duration-300 rounded-lg max-w-5xl mx-auto"
                    style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                >
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center justify-between text-base">
                            <span className="text-slate-700">{domainName}</span>
                            <Badge variant="secondary" className="bg-slate-400/20 px-2 py-1 text-xs">
                                {currentDomain + 1} of {visibleDomains.length}
                            </Badge>
                        </CardTitle>
                        <CardDescription className="text-sm text-slate-600">
                            How are these tasks currently handled?
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {/* Progress bar */}
                        <div className="flex items-center justify-between text-xs mb-3">
                            <Progress
                                value={(currentPage / ((allTasks.length / 4) + 1)) * 100}
                                className="w-24 h-1.5 bg-slate-600 rounded-full"
                            />
                        </div>

                        {/* Tasks */}
                        <div>
                            {displayedTasks.map(taskId => {
                                const task = TASK_VARIANTS[taskId as keyof typeof TASK_VARIANTS];

                                return (
                                    <Card
                                        key={taskId}
                                        className="overflow-hidden backdrop-blur-sm bg-white/30 border border-white/40 hover:border-blue-400/50 transition-all rounded-lg mb-3"
                                    >
                                        <div className="p-4">
                                            <h3 className="font-medium text-zinc-700 text-sm">{task.label}</h3>

                                            {/* Response options */}
                                            <div className="mt-3 space-y-2">
                                                {[
                                                    { key: 'not_doing', label: 'Not doing this', subtext: 'This task is not performed or is entirely reactive', score: 0 },
                                                    { key: 'manual', label: 'Manual / human only', subtext: 'A person handles this entirely with no AI involvement', score: 1 },
                                                    { key: 'loose_ai', label: 'Using AI loosely', subtext: 'AI tools applied without a defined process or consistent output', score: 2 },
                                                    { key: 'structured', label: 'Structured and governed', subtext: 'Defined workflow, AI-assisted execution, approvals at decision points, consistent outputs', score: 3 }
                                                ].map(option => (
                                                    <div
                                                        key={option.key}
                                                        onClick={() => handleResponseSelect(taskId, option.key as any)}
                                                        className={`p-3 rounded-md cursor-pointer transition-all text-xs ${taskResponses[taskId]?.response === option.key
                                                            ? 'ring-2 ring-slate-400 bg-white/30'
                                                            : 'bg-white/10 hover:bg-white/20'
                                                            }`}
                                                    >
                                                        <div className="flex items-start space-x-2">
                                                            <div className={`mt-0.5 w-3 h-3 rounded-full border flex items-center justify-center ${taskResponses[taskId]?.response === option.key
                                                                ? 'bg-zinc-400'
                                                                : 'border-slate-300'
                                                                }`}>
                                                                {taskResponses[taskId]?.response === option.key && (
                                                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                                                )}
                                                            </div>
                                                            <div className='flex-1'>
                                                                <p className="font-medium text-zinc-700">{option.label}</p>
                                                                <p className="text-xs text-slate-600">{option.subtext}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Governance toggle */}
                                            {taskResponses[taskId]?.response === 'structured' && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="mt-3"
                                                >
                                                    <div className="flex items-start justify-start bg-white/20 p-3 rounded-md text-zinc-700 flex-col gap-2">
                                                        <span className="text-xs">Does this run consistently without relying on one person's judgment?</span>
                                                        <div className="space-x-1.5">
                                                            <Button
                                                                variant={taskResponses[taskId]?.governance_flag === 'system_governed' ? 'default' : 'secondary'}
                                                                onClick={() => handleGovernanceToggle(taskId, 'system_governed')}
                                                                className="text-xs px-2 py-1"
                                                            >
                                                                Yes
                                                            </Button>
                                                            <Button
                                                                variant={taskResponses[taskId]?.governance_flag === 'person_dependent' ? 'default' : 'secondary'}
                                                                onClick={() => handleGovernanceToggle(taskId, 'person_dependent')}
                                                                className="text-xs px-2 py-1"
                                                            >
                                                                No
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between pt-3 border-t border-slate-500/30">
                            {currentPage > 0 && (
                                <Button
                                    onClick={handlePrevPage}
                                    variant="outline"
                                    className="text-xs px-3 py-1.5 border-slate-500 hover:bg-white/10 text-white bg-transparent"
                                >
                                    Previous
                                </Button>
                            )}

                            <div className="flex-grow"></div>

                            {currentPage < Math.ceil(allTasks.length / 4) - 1 ? (
                                <Button
                                    onClick={handleNextPage}
                                    className="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => {
                                        if (currentDomain >= visibleDomains.length - 1) {
                                            // Final domain completed
                                            setCurrentStep('lead');
                                        } else {
                                            setCurrentDomain(prev => prev + 1);
                                            setCurrentPage(0);
                                        }
                                    }}
                                    className="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                                >
                                    Next Domain
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-6 text-center">
                    <p className="text-xs text-slate-300">
                        Your data will be securely processed and never shared with third parties.
                    </p>
                </div>
            </div>
        </div>
    );
};
