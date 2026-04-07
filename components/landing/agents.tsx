"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Send, TrendingUp, MessageSquare, Users, Cpu, Truck, BarChart2,
  Sun, AlertTriangle, CheckCircle, RefreshCw, DollarSign
} from "lucide-react";

const FAVICON_B64 = "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";

const GRADIENT = "linear-gradient(to right, #2B60EB, #4655EB, #584DEB, #7341EA, #8B37EA)";

const SHIMMER_CSS = `
@keyframes bsh {
  0% { background-position: 0% }
  50% { background-position: 100% }
  100% { background-position: 0% }
}
@keyframes lp {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.65); }
}
@keyframes rowflash {
  0% { background: rgba(43,96,235,0.12); }
  100% { background: transparent; }
}
@keyframes urgentflash {
  0% { background: rgba(239,68,68,0.20); }
  50% { background: rgba(239,68,68,0.10); }
  100% { background: rgba(239,68,68,0.05); }
}
@keyframes badgepop {
  0% { transform: scale(0); }
  70% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
.ql-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(to right, #2B60EB, #4655EB, #584DEB, #7341EA, #8B37EA);
  background-size: 300% 100%;
  animation: bsh 8s ease infinite;
}
.ql-card.alert-card::before {
  background: linear-gradient(to right, #EF4444, #F97316, #EF4444);
  background-size: 300% 100%;
  animation: bsh 3s ease infinite;
}
.ql-pdot {
  animation: lp 2s ease-in-out infinite;
}
.ql-gov-dot {
  animation: lp 2s ease-in-out infinite;
}
.ql-footer-dot {
  animation: lp 2s ease-in-out infinite;
}
.gov-row-enter {
  animation: rowflash 2.5s ease forwards;
}
.gov-row-urgent {
  animation: urgentflash 2.5s ease forwards;
}
.mini-row-enter {
  animation: rowflash 2.5s ease forwards;
}
.mini-row-urgent {
  animation: urgentflash 2.5s ease forwards;
}
.notif-badge {
  animation: badgepop 0.3s ease forwards;
}
.ql-pill {
  background: #ffffff !important;
  color: #1F2937 !important;
  font-family: Manrope, sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 6px;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: color 0.15s;
}
.ql-pill:hover {
  background: linear-gradient(to right, #2B60EB, #4655EB, #584DEB, #7341EA, #8B37EA) !important;
  color: #ffffff !important;
}
.ql-pill:hover .ql-pdot {
  background: #ffffff !important;
  animation: none !important;
}
.ql-pill.is-paused {
  background: #ffffff !important;
  color: #1F2937 !important;
}
.ql-pill.is-paused .ql-pdot {
  background: #9CA3AF !important;
  animation: none !important;
}
.ql-pill.is-paused:hover {
  background: linear-gradient(to right, #2B60EB, #4655EB, #584DEB, #7341EA, #8B37EA) !important;
  color: #ffffff !important;
}
.ql-pill.is-paused:hover .ql-pdot {
  background: #ffffff !important;
}
.dwell-bar {
  position: absolute;
  bottom: 0; left: 0;
  height: 2px;
  background: linear-gradient(to right, #2B60EB, #8B37EA);
  width: 0%;
  border-radius: 0;
  transition: width 0s linear;
}
.dwell-bar.filling {
  width: 100%;
}
`;

interface GovItem {
  icon: string;
  color: string;
  event: string;
  meta: string;
  badge: { text: string; bg: string; color: string } | null;
}

interface MiniItem {
  text: string;
  urgent: boolean;
  flash: "normal" | "urgent" | "none";
  id: number;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  sync: <RefreshCw size={11} color="white" />,
  alert: <AlertTriangle size={11} color="white" />,
  check: <CheckCircle size={11} color="white" />,
  trending: <TrendingUp size={11} color="white" />,
  dollar: <DollarSign size={11} color="white" />,
};

const AGENT_ICONS: Record<string, React.ReactNode> = {
  governing: <Sun size={10} color="white" />,
  people: <Users size={10} color="white" />,
  sales: <TrendingUp size={10} color="white" />,
  cx: <MessageSquare size={10} color="white" />,
  finance: <BarChart2 size={10} color="white" />,
  ops: <Cpu size={10} color="white" />,
  marketing: <Send size={10} color="white" />,
  inventory: <Truck size={10} color="white" />,
};

const AGENT_CONFIG: Record<string, { tag: string; title: string }> = {
  governing: { tag: "Governing Agent", title: "Synthesis Overview" },
  people: { tag: "People and Team", title: "People Agent" },
  sales: { tag: "Sales", title: "Sales Agent" },
  cx: { tag: "Customer Experience", title: "CX Agent" },
  finance: { tag: "Finance", title: "Finance Agent" },
  ops: { tag: "Operations", title: "Ops Agent" },
  marketing: { tag: "Marketing", title: "Content Agent" },
  inventory: { tag: "Inventory and Supply Chain", title: "Supply Chain Agent" },
};

const INITIAL_GOV: GovItem[] = [
  { icon: "sync", color: "#2B60EB", event: "SOP v2.1 approved — cross-domain applied", meta: "Operations Agent → all agents updated", badge: null },
  { icon: "trending", color: "#584DEB", event: "Pipeline velocity up 18% this month", meta: "Synthesis: Sales + Marketing + CX", badge: { text: "insight", bg: "rgba(88,77,235,0.10)", color: "#534AB7" } },
  { icon: "check", color: "#4655EB", event: "Payroll confirmed — 8,400 processed", meta: "People Agent → Finance Agent confirmed", badge: null },
  { icon: "check", color: "#2B60EB", event: "Supplier ETA confirmed — no ops impact", meta: "Inventory Agent → Governing Agent", badge: null },
];

const INITIAL_MINI: Record<string, string[]> = {
  people: ["Performance review queued — Q2", "New hire onboarding — Day 3 tasks sent", "Payroll processed — 14 employees"],
  sales: ["Follow-up day 3 — Meridian Logistics", "Pipeline: 3 active, 1 deferred", "CRM updated — 6 records synced"],
  cx: ["Inquiry routed → Finance (billing)", "Satisfaction score: 9/10 — Meridian", "Post-service follow-up sent"],
  finance: ["P&L report queued — sends 8AM", "Payroll confirmed — 8,400 processed", "Invoice generated — ,500 Phase 1"],
  ops: ["SOP v2.1 pending hard block approval", "Task completion: 91% this week", "Vendor PO submitted — IT supplier"],
  marketing: ["14 posts scheduled — next: 9AM", "Lead signal: Acme Corp engaged 3×", "Email open rate: 34% this week"],
  inventory: ["Stock healthy — 94% SKUs in range", "Supplier ETA confirmed — Tuesday", "Reorder triggered — SKU-1042", "Delivery tracking active — 3 inbound"],
};

let idCounter = 0;
function makeItems(texts: string[]): MiniItem[] {
  return texts.map(t => ({ text: t, urgent: false, flash: "none", id: idCounter++ }));
}

function GovFeed({ items }: { items: GovItem[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((item, i) => (
        <div
          key={i}
          className={i === 0 ? (item.badge?.text === "urgent" || item.badge?.text === "action required" ? "gov-row-urgent" : "gov-row-enter") : ""}
          style={{
            display: "flex", alignItems: "flex-start", gap: 8,
            padding: "6px 0",
            borderBottom: i < items.length - 1 ? "0.5px solid #F1F5F9" : "none",
            borderRadius: i === 0 ? 5 : 0,
            ...(i === 0 ? { margin: "0 -4px", padding: "6px 4px" } : {}),
          }}
        >
          <div style={{ width: 22, height: 22, borderRadius: 5, background: item.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {ICON_MAP[item.icon] || <CheckCircle size={11} color="white" />}
          </div>
          <div>
            <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 11, fontWeight: 600, color: "#1E293B", lineHeight: 1.35 }}>
              {item.event}
              {item.badge && (
                <span style={{ display: "inline-block", fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 3, marginLeft: 4, verticalAlign: "middle", background: item.badge.bg, color: item.badge.color }}>
                  {item.badge.text}
                </span>
              )}
            </div>
            <div style={{ fontFamily: "Manrope, sans-serif", fontSize: 10, color: "#94A3B8", marginTop: 1 }}>{item.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniFeed({ items, isInventory }: { items: MiniItem[]; isInventory?: boolean }) {
  const max = isInventory ? 4 : 3;
  return (
    <div style={isInventory ? { display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "4px 12px" } : { display: "flex", flexDirection: "column" }}>
      {items.slice(0, max).map((item, i) => (
        <div
          key={item.id}
          className={item.flash === "urgent" ? "mini-row-urgent" : item.flash === "normal" ? "mini-row-enter" : ""}
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 10, fontWeight: item.urgent ? 700 : 500,
            color: item.urgent ? "#DC2626" : "#475569",
            padding: isInventory ? "4px 8px 4px 0" : "4px 0",
            borderBottom: isInventory ? "none" : (i < Math.min(items.length, max) - 1 ? "0.5px solid #F1F5F9" : "none"),
            borderRight: isInventory ? (i < max - 1 ? "0.5px solid #F1F5F9" : "none") : "none",
            lineHeight: 1.4,
            ...(item.flash !== "none" ? { borderRadius: 3, margin: "0 -3px", padding: "4px 3px" } : {}),
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}

function AgentCard({
  agentKey, alertCard, badge, govItems, miniItems,
  onDwellStart, onDwellEnd,
  approvalVisible, rewardVisible, onApprove,
}: {
  agentKey: string;
  alertCard: boolean;
  badge: boolean;
  govItems?: GovItem[];
  miniItems?: MiniItem[];
  onDwellStart: () => void;
  onDwellEnd: () => void;
  approvalVisible?: boolean;
  rewardVisible?: boolean;
  onApprove?: () => void;
}) {
  const cfg = AGENT_CONFIG[agentKey];
  const isGov = agentKey === "governing";
  const isInv = agentKey === "inventory";
  const dwellRef = useRef<HTMLDivElement>(null);

  const gridColSpan: Record<string, string> = {
    governing: "span 4", people: "span 2", sales: "span 2",
    cx: "span 2", finance: "span 2", ops: "span 2",
    marketing: "span 2", inventory: "span 6",
  };

  return (
    <div
      className={`ql-card${alertCard ? " alert-card" : ""}`}
      style={{
        gridColumn: gridColSpan[agentKey],
        ...(isGov ? { gridRow: "span 2" } : {}),
        background: "#fff",
        border: alertCard ? "0.5px solid #FCA5A5" : "0.5px solid #E2E8F0",
        borderRadius: 10, padding: 12, position: "relative", overflow: "hidden",
        boxShadow: alertCard ? "0 0 0 2px rgba(239,68,68,0.15)" : "none",
        transition: "box-shadow 0.2s, border-color 0.2s",
        fontFamily: "Manrope, sans-serif",
      }}
      onMouseEnter={() => {
        onDwellStart();
        if (dwellRef.current) {
          dwellRef.current.style.transition = `width 1200ms linear`;
          dwellRef.current.classList.add("filling");
        }
      }}
      onMouseLeave={() => {
        onDwellEnd();
        if (dwellRef.current) {
          dwellRef.current.style.transition = "width 0.3s ease";
          dwellRef.current.classList.remove("filling");
          dwellRef.current.style.width = "0%";
        }
      }}
    >
      <div ref={dwellRef} className="dwell-bar" />

      {badge && (
        <div className="notif-badge" style={{ position: "absolute", top: 8, right: 8, fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, background: "#EF4444", color: "#fff", transform: "scale(0)" }}>
          !
        </div>
      )}

      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: alertCard ? "#EF4444" : "#94A3B8", marginBottom: 5 }}>
        {cfg.tag}
      </div>

      <div style={{ fontSize: 12, fontWeight: 600, color: "#1E293B", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
        <div style={{ width: 20, height: 20, borderRadius: 5, background: alertCard ? "linear-gradient(135deg,#EF4444,#F97316)" : GRADIENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {AGENT_ICONS[agentKey]}
        </div>
        {cfg.title}
        {isGov && (
          <span className="ql-gov-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", marginLeft: "auto", flexShrink: 0 }} />
        )}
      </div>

      {isGov && govItems && <GovFeed items={govItems} />}
      {!isGov && miniItems && <MiniFeed items={miniItems} isInventory={isInv} />}

      {isGov && approvalVisible && !rewardVisible && (
        <div style={{ marginTop: 12, borderRadius: 8, border: "1.5px solid #4655EB", background: "linear-gradient(135deg,rgba(43,96,235,0.04),rgba(139,55,234,0.06))", padding: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1E293B", marginBottom: 4, fontFamily: "Manrope, sans-serif" }}>Approval required — Shift coverage plan</div>
          <div style={{ fontSize: 11, color: "#475569", lineHeight: 1.6, marginBottom: 12, fontFamily: "Manrope, sans-serif" }}>
            People Agent has escalated J. Walsh (no call/no show). Operations Agent has reviewed shift load. Proposed plan: redistribute Walsh's tasks across Martinez and Chen. Notify shift supervisor. Flag for HR review end of day. Your approval activates the plan across both agents.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={onApprove}
              style={{ fontFamily: "Manrope, sans-serif", fontSize: 11, fontWeight: 700, padding: "7px 16px", borderRadius: 6, border: "none", background: GRADIENT, color: "#fff", cursor: "pointer" }}
            >
              Approve plan
            </button>
            <button style={{ fontFamily: "Manrope, sans-serif", fontSize: 11, fontWeight: 600, padding: "7px 12px", borderRadius: 6, border: "1px solid #E2E8F0", background: "#fff", color: "#64748B", cursor: "pointer" }}>
              Defer
            </button>
          </div>
        </div>
      )}

      {isGov && rewardVisible && (
        <div style={{ marginTop: 12, borderRadius: 8, border: "1.5px solid #4ADE80", background: "linear-gradient(135deg,rgba(74,222,128,0.06),rgba(43,96,235,0.06))", padding: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", marginBottom: 6, fontFamily: "Manrope, sans-serif" }}>Decision executed across three agents.</div>
          <div style={{ fontSize: 11, color: "#475569", lineHeight: 1.65, marginBottom: 12, fontFamily: "Manrope, sans-serif" }}>
            People Agent logged the escalation. Operations Agent redistributed shift tasks. Governing Agent closed the exception and updated the audit trail. That is what governed AI infrastructure looks like in practice — not a chatbot, not a workflow. A system that coordinates, escalates, and acts on your approval.<br /><br />Want to see where your business stands today?
          </div>
          <a
            href="https://quantonlabs.com/assessment"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "Manrope, sans-serif", fontSize: 11, fontWeight: 700, padding: "8px 16px", borderRadius: 6, border: "none", background: GRADIENT, color: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}
          >
            Assess your business →
          </a>
        </div>
      )}
    </div>
  );
}

export default function QuantonDashboard() {
  const [isPaused, setIsPaused] = useState(false);
  const [pillLabel, setPillLabel] = useState("Live");
  const [clockStr, setClockStr] = useState("6:35:00 AM");
  const [excVal, setExcVal] = useState("1 pending");
  const [excColor, setExcColor] = useState("#F59E0B");
  const [govItems, setGovItems] = useState<GovItem[]>(INITIAL_GOV);
  const [miniItems, setMiniItems] = useState<Record<string, MiniItem[]>>(
    Object.fromEntries(Object.entries(INITIAL_MINI).map(([k, v]) => [k, makeItems(v)]))
  );
  const [alertCards, setAlertCards] = useState<Record<string, boolean>>({});
  const [badgeCards, setBadgeCards] = useState<Record<string, boolean>>({});
  const [approvalVisible, setApprovalVisible] = useState(false);
  const [rewardVisible, setRewardVisible] = useState(false);
  const clockRef = useRef({ h: 6, m: 35, s: 0 });
  const dwellTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    const t = setInterval(() => {
      const c = clockRef.current;
      c.s++;
      if (c.s >= 60) { c.s = 0; c.m++; }
      if (c.m >= 60) { c.m = 0; c.h++; }
      if (c.h >= 24) c.h = 0;
      const h = c.h % 12 || 12;
      const ampm = c.h < 12 ? "AM" : "PM";
      setClockStr(`${h}:${String(c.m).padStart(2, "0")}:${String(c.s).padStart(2, "0")} ${ampm}`);
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pushGov = useCallback((item: GovItem) => {
    setGovItems(prev => [item, ...prev].slice(0, 4));
  }, []);

  const pushMini = useCallback((key: string, text: string, urgent: boolean) => {
    setMiniItems(prev => {
      const next = [...prev[key]];
      if (next.length >= 3) next.pop();
      next.unshift({ text, urgent, flash: urgent ? "urgent" : "normal", id: idCounter++ });
      setTimeout(() => {
        setMiniItems(p => ({
          ...p,
          [key]: p[key].map((item, i) => i === 0 ? { ...item, flash: "none" } : item),
        }));
      }, 2500);
      return { ...prev, [key]: next };
    });
  }, []);

  useEffect(() => {
    const sequence = [
      { t: 4000, fn: () => {
        pushMini("sales", "Deal closed — Hartwell Group 42,000", false);
        pushGov({ icon: "dollar", color: "#059669", event: "Major sale closed — Hartwell Group 42,000", meta: "Sales Agent → Finance + CX coordination triggered", badge: { text: "major sale", bg: "rgba(5,150,105,0.10)", color: "#065F46" } });
      }},
      { t: 7000, fn: () => {
        pushMini("finance", "Invoice generated — 42,000 Hartwell Group", false);
        pushMini("cx", "Onboarding initiated — Hartwell Group", false);
      }},
      { t: 11000, fn: () => {
        setAlertCards(p => ({ ...p, people: true }));
        setBadgeCards(p => ({ ...p, people: true }));
        pushMini("people", "ALERT: J. Walsh — missed timecard punch 8:00 AM", true);
        setExcVal("2 pending");
      }},
      { t: 14000, fn: () => {
        pushMini("people", "6:18 AM — Called J. Walsh (843) 291-7734 — no answer", true);
        pushGov({ icon: "alert", color: "#EF4444", event: "People Agent escalation — J. Walsh no call/no show", meta: "6:18 AM — Mobile contact attempted, no answer. SMS sent.", badge: { text: "urgent", bg: "rgba(239,68,68,0.12)", color: "#991B1B" } });
        setAlertCards(p => ({ ...p, governing: true }));
        setBadgeCards(p => ({ ...p, governing: true }));
      }},
      { t: 18000, fn: () => {
        pushMini("people", "6:18 AM — Text sent — no reply. Emergency contact at 10AM if no response", true);
        pushMini("people", "Routing summary to Operations Agent — shift coordination required", true);
      }},
      { t: 22000, fn: () => {
        setAlertCards(p => ({ ...p, ops: true }));
        setBadgeCards(p => ({ ...p, ops: true }));
        pushMini("ops", "Internal memo — J. Walsh no call/no show", true);
        pushMini("ops", "Review shift load — determine coverage next steps", true);
      }},
      { t: 27000, fn: () => {
        pushGov({ icon: "alert", color: "#7341EA", event: "Approval required — shift coverage plan ready", meta: "People + Operations → awaiting Managing Director decision", badge: { text: "action required", bg: "rgba(239,68,68,0.12)", color: "#991B1B" } });
        setApprovalVisible(true);
      }},
    ];
    const timers = sequence.map(s => setTimeout(s.fn, s.t));
    return () => timers.forEach(clearTimeout);
  }, [pushGov, pushMini]);

  const handleApprove = useCallback(() => {
    setApprovalVisible(false);
    setRewardVisible(true);
    setAlertCards({});
    setBadgeCards({});
    setExcVal("0 pending");
    setExcColor("#4ADE80");
    pushGov({ icon: "check", color: "#4ADE80", event: "Shift coverage plan approved — exception closed", meta: "Governing Agent → People + Operations updated", badge: { text: "resolved", bg: "rgba(74,222,128,0.12)", color: "#166534" } });
  }, [pushGov]);

  const handleDwellStart = useCallback((id: string) => {
    dwellTimers.current[id] = setTimeout(() => {}, 1200);
  }, []);

  const handleDwellEnd = useCallback((id: string) => {
    clearTimeout(dwellTimers.current[id]);
  }, []);

  const AGENT_ORDER = ["governing", "people", "sales", "cx", "finance", "ops", "marketing", "inventory"];

  return (
    <>
      <style>{SHIMMER_CSS}</style>
      <div style={{ border: "0.5px solid #1E3A5F", borderRadius: 12, overflow: "hidden", fontFamily: "Manrope, sans-serif" }}>

        {/* Top bar */}
        <div style={{ background: "#041227", padding: "9px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "Manrope, sans-serif" }}>Meridian Logistics</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#CBD5E1", fontFamily: "Manrope, sans-serif", letterSpacing: "0.06em", background: "rgba(255,255,255,0.07)", padding: "4px 9px", borderRadius: 5, border: "0.5px solid rgba(255,255,255,0.12)" }}>
              {clockStr}
            </span>
            <button
              className={`ql-pill${isPaused ? " is-paused" : ""}`}
              onMouseEnter={() => setPillLabel(isPaused ? "Start" : "Pause")}
              onMouseLeave={() => setPillLabel(isPaused ? "Paused" : "Live")}
              onClick={() => {
                setIsPaused(p => !p);
                setPillLabel(isPaused ? "Live" : "Paused");
              }}
            >
              <span className={`ql-pdot`} style={{ width: 6, height: 6, borderRadius: "50%", background: isPaused ? "#9CA3AF" : "#4ADE80", flexShrink: 0 }} />
              {pillLabel}
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <img src={`data:image/x-icon;base64,${FAVICON_B64}`} alt="Quanton Labs" style={{ width: 18, height: 18, borderRadius: 3, objectFit: "contain" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "Manrope, sans-serif" }}>
                QUANTON OS
              </span>
            </div>
          </div>
        </div>

        {/* Sub bar */}
        <div style={{ background: "#071830", padding: "6px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { label: "Last sync", val: "just now", cls: "" },
            { label: "Agents active", val: "8 / 8", cls: "accent" },
            { label: "Exceptions", val: excVal, cls: "warn", style: { color: excColor } },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {i > 0 && <div style={{ width: 1, height: 12, background: "rgba(255,255,255,0.12)", marginRight: 5 }} />}
              <span style={{ fontSize: 9, fontWeight: 600, color: "#94A3B8", letterSpacing: "0.07em", textTransform: "uppercase", fontFamily: "Manrope, sans-serif" }}>{item.label}</span>
              <span style={{ fontSize: 9, fontWeight: 700, fontFamily: "Manrope, sans-serif", color: item.cls === "accent" ? "#60A5FA" : item.cls === "warn" ? excColor : "#fff" }}>{item.val}</span>
            </div>
          ))}
        </div>

        {/* Dashboard grid */}
        <div style={{ background: "#F1F5F9", padding: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", gridTemplateRows: "auto auto", gap: 8 }}>
            {AGENT_ORDER.map(key => (
              <AgentCard
                key={key}
                agentKey={key}
                alertCard={!!alertCards[key]}
                badge={!!badgeCards[key]}
                govItems={key === "governing" ? govItems : undefined}
                miniItems={key !== "governing" ? miniItems[key] : undefined}
                onDwellStart={() => handleDwellStart(key)}
                onDwellEnd={() => handleDwellEnd(key)}
                approvalVisible={approvalVisible}
                rewardVisible={rewardVisible}
                onApprove={handleApprove}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: "#071830", padding: "7px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: "#94A3B8", fontFamily: "Manrope, sans-serif" }}>Quanton Labs · quantonlabs.com</span>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 600, color: "#60A5FA", fontFamily: "Manrope, sans-serif" }}>
            <span className="ql-footer-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} />
            All systems operational
          </span>
        </div>

      </div>
    </>
  );
}
