import mongoose, { Schema, Document } from "mongoose";

/* =========================
   RAG Schema
========================= */

const RagSchema = new Schema({
    enabled: {
        type: Boolean,
        default: false,
    },

    documents: [
        {
            name: String,
            source: String, // file, url, etc.
            chunks: Number,
        },
    ],

    vectorStore: {
        provider: {
            type: String,
            enum: ["pinecone", "weaviate", "local"],
            default: "local",
        },
        indexName: String,
    },

    retrieval: {
        topK: {
            type: Number,
            default: 5,
        },
        scoreThreshold: {
            type: Number,
            default: 0.7,
        },
    },

    embeddingModel: {
        type: String,
        default: "text-embedding-3-small",
    },
});

/* =========================
   Agent Schema
========================= */

export interface AgentDocument extends Document {
    title: string;
    category: string;
    image: string;
    type: string;
    description: string;

    status: "idle" | "running" | "paused";

    config: {
        model: string;
        temperature: number;
        maxTokens: number;
    };

    rag: any;
}

const AgentSchema = new Schema<AgentDocument>({
    title: { type: String, required: true },
    category: String,
    image: String,
    type: String,
    description: String,

    status: {
        type: String,
        enum: ["idle", "running", "paused"],
        default: "idle",
    },

    config: {
        model: { type: String, default: "openai/gpt-4o-mini" },
        temperature: { type: Number, default: 0.7 },
        maxTokens: { type: Number, default: 4096 },
    },

    /* RAG SYSTEM */
    rag: RagSchema,

}, { timestamps: true });

export const Agent =
    mongoose.models.Agent ||
    mongoose.model<AgentDocument>("Agent", AgentSchema);