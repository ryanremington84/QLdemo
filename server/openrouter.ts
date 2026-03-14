export type MessageType = {
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
}

export type OpenRouterType = {
    messages: MessageType[],
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

    if (!openRouterResponse.ok) {
        const err = await openRouterResponse.text();
        throw new Error(`OpenRouter error: ${err}`);
    }

    const data = await openRouterResponse.json();
    console.log(data);

    const content = data?.choices?.[0]?.message?.content;

    let extracted = "No text extracted.";

    if (typeof content === "string") {
        extracted = content;
    } else if (Array.isArray(content)) {
        extracted = content.map((c: any) => c.text || "").join("");
    }

    return extracted;
}