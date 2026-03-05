import { Mail, AlertTriangle, Clock, Truck, Phone, DollarSign, FileText, Calendar } from "lucide-react";

export const notifications = [
  { text: "Hey, not coming in today. Feeling sick.", icon: Mail },
  { text: "OVERDUE: Invoice #4421 - 14 days past due", icon: AlertTriangle },
  { text: "Client cancelled - 2 hours notice", icon: Clock },
  { text: "Hey it's Mike, the van won't start so...", icon: Truck },
  { text: "Quick question before you jump on that call", icon: Phone },
  { text: "Payment of $14,200 pending review", icon: DollarSign },
  { text: "Running 20 mins late to the site", icon: Clock },
  { text: "Supplier price increase effective immediately", icon: FileText },
  { text: "Tax filing deadline in 3 days", icon: Calendar },
  { text: "Can you call me when you get a sec?", icon: Phone },
  { text: "RE: Your review response needed", icon: Mail },
  { text: "The client is asking for an update on the job", icon: FileText },
];