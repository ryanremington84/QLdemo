import mongoose, { Schema, Document, Types } from "mongoose";

interface Task {
  title: string;
  description?: string;
  reasoning?: string;
  output?: string;
  status: "Completed" | "Failed" | "Waiting" | "In Progress";
}

interface Agent {
  name: string;
  subtitle?: string;
  description?: string;

  overview: {
    task: {
      completed: number;
      successRate: number;
    };
    tokensUsed: number;
    status: "Running" | "Stopped";
  };

  tasks: Task[];

  logs: string[];

  analytics: {
    tokens: {
      hour: number;
      day: number;
      month: number;
    };
  };

  integrations: {
    providerId?: string;
    status: "Connected" | "Disconnected";
  }[];
}

interface Company {
  name: string;
  role: "Owner" | "Developer" | "Member";

  agents: Agent[];
  tasks: Task[];

  token: {
    balance: number;
    usageRate: number;
  };

  reports: any[];
  notifications: any[];
}

/* =========================
   Sub Schemas
========================= */

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  reasoning: String,
  output: String,
  status: {
    type: String,
    enum: ["Completed", "Failed", "Waiting", "In Progress"],
    default: "Waiting",
  },
}, { timestamps: true });

const AgentSchema = new Schema({
  name: { type: String, required: true },
  subtitle: String,
  description: String,

  overview: {
    task: {
      completed: { type: Number, default: 0 },
      successRate: { type: Number, default: 0 },
    },
    tokensUsed: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["Running", "Stopped"],
      default: "Stopped",
    },
  },

  tasks: [TaskSchema],

  logs: [{ type: String }],

  analytics: {
    tokens: {
      hour: { type: Number, default: 0 },
      day: { type: Number, default: 0 },
      month: { type: Number, default: 0 },
    },
  },

  integrations: [{
    providerId: String,
    status: {
      type: String,
      enum: ["Connected", "Disconnected"],
      default: "Disconnected",
    },
  }],
}, { timestamps: true });

const ReportSchema = new Schema({
  name: String,
  subject: String,
  text: String,
  links: [{
    url: String,
    fileType: {
      type: String,
      enum: ["jpg", "xlsm", "pdf"],
    },
  }],
}, { timestamps: true });

const NotificationSchema = new Schema({
  text: String,
  status: {
    type: String,
    enum: ["read", "unread"],
    default: "unread",
  },
}, { timestamps: true });

const CompanySchema = new Schema({
  name: { type: String, required: true },
  role: {
    type: String,
    enum: ["Owner", "Developer", "Member"],
  },

  agents: [AgentSchema],
  tasks: [TaskSchema],

  token: {
    balance: { type: Number, default: 0 },
    usageRate: { type: Number, default: 0 },
  },

  reports: [ReportSchema],
  notifications: [NotificationSchema],

}, { timestamps: true });

/* =========================
   User Schema
========================= */

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  avatarUrl: string;
  credits: number;
  currency: string;
  money: number;
  country: string;
  companies: Company[];
}

const UserSchema = new Schema<UserDocument>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },

  avatarUrl: String,

  credits: { type: Number, default: 0 },
  currency: { type: String, default: "USD" },
  money: { type: Number, default: 0 },

  country: String,

  companies: [CompanySchema],

}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);