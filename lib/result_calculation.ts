import { TASK_VARIANTS, TaskResponse } from "@/db/assessments";

export function computeAssessmentMetrics(taskResponses: Record<string, TaskResponse>) {

    let totalTasks = 0;
    let notDoing = 0;
    let manual = 0;
    let looseAI = 0;
    let structured = 0;

    let estimatedHoursLow = 0;
    let estimatedHoursHigh = 0;

    for (const [taskId, task] of Object.entries(taskResponses)) {

        const taskVariant = TASK_VARIANTS[taskId as keyof typeof TASK_VARIANTS];
        if (!taskVariant) continue;


        totalTasks++;

        const frequency = taskVariant.frequency;
        const weight = frequency === "high" ? 1 : frequency === "medium" ? 0.6 : 0.3;

        switch (task.response) {

            case "not_doing":
                notDoing++;
                break;

            case "manual":
                manual++;
                estimatedHoursLow += 2 * weight;
                estimatedHoursHigh += 5 * weight;
                break;

            case "loose_ai":
                looseAI++;
                estimatedHoursLow += 1 * weight;
                estimatedHoursHigh += 3 * weight;
                break;

            case "structured":
                structured++;
                estimatedHoursLow += 0.5 * weight;
                estimatedHoursHigh += 1 * weight;
                break;
        }
    }

    const coverageTasks = looseAI + structured;

    const coveragePercentage =
        totalTasks === 0 ? 0 : Math.round((coverageTasks / totalTasks) * 100);

    return {
        coveragePercentage,
        totalTasks,
        notDoing,
        manual,
        looseAI,
        structured,
        estimatedHoursLow: Math.round(estimatedHoursLow),
        estimatedHoursHigh: Math.round(estimatedHoursHigh)
    };
}