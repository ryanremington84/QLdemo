import { computeAssessmentMetrics } from "@/lib/result_calculation";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    const { leadInfo, profile, taskResponses } = await req.json();

    
    const metrics = computeAssessmentMetrics(taskResponses);

    return NextResponse.json(metrics);
}