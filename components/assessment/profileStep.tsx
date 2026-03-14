import { Profile } from "@/db/assessments";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Dispatch, SetStateAction, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function RenderProfileStep({
    profile,
    setProfile,
    handleSubmit,
}: {
    profile: Partial<Profile>,
    setProfile: Dispatch<SetStateAction<Partial<Profile>>>,
    handleSubmit: () => void,
}) {
    const [currentPage, setCurrentPage] = useState(0);
    // Profile questions
    const profileQuestions = [
        {
            id: 'industry_vertical',
            title: "What best describes your business?",
            options: [
                { key: 'professional_services', label: 'Professional Services (consulting, legal, accounting, agencies)' },
                { key: 'automotive', label: 'Automotive (dealerships, repair shops, detailing, fleet services)' },
                { key: 'retail', label: 'Retail and E-commerce' },
                { key: 'financial_services', label: 'Financial Services (insurance, wealth management, lending, bookkeeping)' },
                { key: 'healthcare', label: 'Healthcare (medical practices, dental, chiropractic, allied health)' },
                { key: 'beauty_aesthetics', label: 'Beauty, Aesthetics, and Wellness (salons, med spas, barbershops, spas, studios)' },
                { key: 'home_services', label: 'Home Services and Trades (HVAC, plumbing, electrical, cleaning, moving)' },
                { key: 'saas', label: 'SaaS and Technology' },
                { key: 'other', label: 'Other' }
            ]
        },
        {
            id: 'company_size',
            title: "How many people are on your team?",
            options: [
                { key: 'micro', label: '1–5 employees' },
                { key: 'small', label: '6–15 employees' },
                { key: 'medium', label: '16–30 employees' },
                { key: 'large', label: '31–50 employees' }
            ]
        },
        {
            id: 'revenue_range',
            title: "What is your approximate annual revenue?",
            options: [
                { key: 'under_1m', label: 'Under $1M' },
                { key: '1m_5m', label: '$1M – $5M' },
                { key: '5m_10m', label: '$5M – $10M' },
                { key: '10m_20m', label: '$10M – $20M' },
                { key: 'over_20m', label: 'Over $20M' }
            ]
        },
        {
            id: 'ai_usage_level',
            title: "How is your business currently using AI?",
            options: [
                { key: 'none', label: 'We are not currently using any AI tools' },
                { key: 'casual', label: 'We use ChatGPT or similar for occasional tasks' },
                { key: 'fragmented', label: 'We use AI tools plus some automations (Zapier, Make, etc.)' },
                { key: 'structured', label: 'We have structured AI workflows integrated into our operations' }
            ]
        },
        {
            id: 'primary_pain_point',
            title: "What takes up more of your time than it should?",
            options: [
                { key: 'marketing', label: 'Keeping up with marketing and content' },
                { key: 'sales', label: 'Managing leads and closing deals' },
                { key: 'customers', label: 'Delivering a consistent client experience' },
                { key: 'finance', label: 'Staying on top of finances and admin' },
                { key: 'team', label: 'Coordinating my team and workflows' },
                { key: 'everything', label: 'All of the above' }
            ]
        }
    ];

    const totalPages = profileQuestions.length;

    const handleProfileChange = (key: keyof Profile, value: string) => {
        setProfile(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const renderCurrentQuestion = () => {
        const currentQuestion = profileQuestions[currentPage];

        return (
            <div className="space-y-4">
                <div className="flex items-center justify-between mb-2 gap-2">
                    <Label className="text-slate-700 text-base font-medium">{currentQuestion.title}</Label>
                    <span className="text-xs text-slate-500">{currentPage + 1} of {totalPages}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-80 md:h-auto overflow-y-auto">
                    {currentQuestion.options.map(option => (
                        <Card
                            key={option.key}
                            onClick={() => handleProfileChange(currentQuestion.id as keyof Profile, option.key)}
                            className={`p-4 cursor-pointer transition-all border backdrop-blur-sm ${profile[currentQuestion.id as keyof Profile] === option.key
                                ? 'border-slate-400 bg-white/30 text-slate-700'
                                : 'border-slate-500 hover:border-blue-300/50'
                                } rounded-lg`}
                        >
                            <CardContent className="p-0">
                                <div className="flex items-start gap-2 justify-between">
                                    <div className={`mt-0.5 w-3 h-3 rounded-full border flex items-center justify-center ${profile[currentQuestion.id as keyof Profile] === option.key
                                        ? 'bg-slate-400 text-slate-700'
                                        : 'border-slate-300'
                                        }`}>
                                        {profile[currentQuestion.id as keyof Profile] === option.key && (
                                            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
                                        )}
                                    </div>
                                    <p className="text-xs flex-1">{option.label}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            {/* Background blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="md:min-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                >
                    <Card
                        className="backdrop-blur-xl bg-white/20 border border-white/40 shadow-xl hover:bg-white/30 transition-all duration-300 rounded-lg overflow-hidden"
                        style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    >
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-slate-700 text-base">Business Profile</CardTitle>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setCurrentPage(-1)}
                                    className="p-1.5 h-7 w-7 rounded-full hover:bg-white/30"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </Button>
                            </div>
                            <CardDescription className="text-slate-500  text-sm">
                                Please answer these questions about your business to personalize the assessment.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="pb-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentPage}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {renderCurrentQuestion()}
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex justify-between mt-6 pt-4 border-t border-slate-200">
                                <Button
                                    onClick={prevStep}
                                    disabled={currentPage === 0}
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center gap-1.5 text-xs"
                                >
                                    <ChevronLeft className="w-3.5 h-3.5" />
                                    Back
                                </Button>

                                {currentPage === totalPages - 1 ? (
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={!profile.industry_vertical || !profile.company_size || !profile.revenue_range || !profile.ai_usage_level || !profile.primary_pain_point}
                                        className="bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 py-2.5 px-4 font-medium shadow-sm disabled:bg-slate-100 disabled:border-slate-200 disabled:text-slate-400 text-xs"
                                    >
                                        Begin Assessment
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={nextStep}
                                        disabled={!profile[profileQuestions[currentPage].id as keyof Profile]}
                                        size="sm"
                                        className="flex items-center gap-1.5 bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 py-2.5 px-4 font-medium shadow-sm text-xs"
                                    >
                                        Next
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="mt-6 text-center">
                    <p className="text-xs text-slate-50">
                        Your data will be securely processed and never shared with third parties.
                    </p>
                </div>
            </div>
        </div>
    );
}
