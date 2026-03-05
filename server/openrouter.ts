export type OpenRouterType = {
    messages: {
        role: string;
        content: string | ({
            type: string;
            text: string;
            image_url?: string | undefined;
        } | {
            type: string;
            image_url: {
                url: string;
            };
            text?: string | undefined;
        })[];
    }[],
    model: string

}

export async function OpenRouter({ config }: { config: OpenRouterType }) {
    const openRouterResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "QuantonLabs"
        },
        body: JSON.stringify({
            model: config.model,
            messages: config.messages
        })
    });

    const data = await openRouterResponse.json();

    const extracted = data.choices?.[0]?.message?.content || "No text extracted.";

    return extracted
}