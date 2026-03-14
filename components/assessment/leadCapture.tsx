import { Lead } from "@/db/assessments";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function RenderLeadCapture({ setCurrentStep, leadInfo, setLeadInfo }: { setCurrentStep: Dispatch<SetStateAction<"profile" | "assessment" | "lead" | "results">>, setLeadInfo: Dispatch<SetStateAction<Partial<Lead>>>, leadInfo: Partial<Lead> }) {

    return (
        <div>
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="max-w-4xl md:min-w-2xl mx-auto px-4 py-8 sm:py-12 relative z-10">
                <Card
                    className="backdrop-blur-xl bg-white/20 border border-white/40 shadow-xl hover:bg-white/30 transition-all duration-300 rounded-xl max-w-5xl mx-auto"
                    style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                >
                    <CardHeader>
                        <CardTitle className="text-slate-700">Complete Your Profile</CardTitle>
                        <CardDescription className="text-slate-500">
                            Please provide your contact information so we can share your AI Coverage Report.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label htmlFor="fullName" className="text-zinc-600">Full Name</Label>
                                <Input
                                    id="fullName"
                                    placeholder="Your full name"
                                    value={leadInfo.full_name || ''}
                                    onChange={(e) => setLeadInfo({ ...leadInfo, full_name: e.target.value })}
                                    className="backdrop-blur-sm bg-white/20 border-slate-100 text-slate-600 text-sm placeholder:text-slate-600 focus:border-slate-400"
                                />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="email" className="text-zinc-600">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Your email address"
                                    value={leadInfo.email || ''}
                                    onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
                                    className="backdrop-blur-sm bg-white/20 border-slate-100 text-slate-600 text-sm placeholder:text-slate-600 focus:border-slate-400"
                                />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="company" className="text-zinc-600">Company Name</Label>
                                <Input
                                    id="company"
                                    placeholder="Your company name"
                                    value={leadInfo.company_name || ''}
                                    onChange={(e) => setLeadInfo({ ...leadInfo, company_name: e.target.value })}
                                    className="backdrop-blur-sm bg-white/20 border-slate-100 text-slate-600 text-sm placeholder:text-slate-600 focus:border-slate-400"
                                />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="role" className="text-zinc-600">Role / Title</Label>
                                <Input
                                    id="role"
                                    placeholder="Your role or title"
                                    value={leadInfo.role_title || ''}
                                    onChange={(e) => setLeadInfo({ ...leadInfo, role_title: e.target.value })}
                                    className="backdrop-blur-sm bg-white/20 border-slate-100 text-slate-600 text-sm placeholder:text-slate-600 focus:border-slate-400"
                                />
                            </div>


                        </div>
                        <div className="space-y-3 w-full">
                            <Label htmlFor="openText" className="text-zinc-600">Anything specific you want us to address?</Label>
                            <Textarea
                                id="openText"
                                placeholder="Optional additional details..."
                                value={leadInfo.open_text || ''}
                                onChange={(e) => setLeadInfo({ ...leadInfo, open_text: e.target.value })}
                                className="w-full min-h-[80px] backdrop-blur-sm bg-white/20 border-slate-100 text-slate-600 text-sm placeholder:text-slate-600 focus:border-slate-400"
                                rows={4}
                            />
                        </div>
                        <Button
                            onClick={() => setCurrentStep('results')}
                            className="w-full bg-linear-to-r from-slate-600 to-slate-700 py-6 text-base font-semibold shadow-lg"
                        >
                            View Your Results
                        </Button>
                    </CardContent>
                </Card>

                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-700">
                        Your data will be securely processed and never shared with third parties.
                    </p>
                </div>
            </div>
        </div>
    );
};