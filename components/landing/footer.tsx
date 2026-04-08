"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Twitter, Linkedin, Github, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#041227",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "96px",
        paddingBottom: "48px",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <p style={{ color: "rgba(255,255,255,0.60)", fontSize: "14px", lineHeight: 1.7 }}>
              Quanton OS is not software you install or a tool you configure yourself. It is a governed AI operating system built by Quanton Labs, deployed on our proprietary infrastructure, and connected directly to how your business already runs.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "16px", fontFamily: "Manrope, sans-serif" }}>
              Platform
            </h3>
            <div className="flex flex-col gap-3" style={{ fontSize: "14px", color: "rgba(255,255,255,0.60)" }}>
              <Link href="#what-gets-deployed" className="hover:text-white transition">
                Solutions
              </Link>
              <Link href="#insights" className="hover:text-white transition">
                Resources
              </Link>
              <Link href="#" className="hover:text-white transition">
                Request Demo
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "16px", fontFamily: "Manrope, sans-serif" }}>
              Contact
            </h3>
            <div className="flex flex-col gap-3" style={{ fontSize: "14px", color: "rgba(255,255,255,0.60)" }}>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                +1 929-298-2162
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                Growth@QuantonLabs.com
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{ color: "#FFFFFF", fontWeight: 600, marginBottom: "16px", fontFamily: "Manrope, sans-serif" }}>
              Product Updates
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.60)", marginBottom: "16px" }}>
              Subscribe to receive platform updates and new feature announcements.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "linear-gradient(to right, #2B60EB, #4655EB, #584DEB, #7341EA, #8B37EA)",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: "40px",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13px",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} Quanton Labs. All rights reserved.</p>
            <div className="flex gap-4">
              <a style={{ color: "rgba(255,255,255,0.60)" }} className="hover:text-white transition">
                <Twitter size={16} />
              </a>
              <a style={{ color: "rgba(255,255,255,0.60)" }} className="hover:text-white transition">
                <Linkedin size={16} />
              </a>
              <a style={{ color: "rgba(255,255,255,0.60)" }} className="hover:text-white transition">
                <Github size={16} />
              </a>
              <a style={{ color: "rgba(255,255,255,0.60)" }} className="hover:text-white transition">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Terms
              </Link>
            </div>
            <Image
              src="/images/assets/QL_LOGO_WHITE_TRANSPARENT_v1_0_Feb2026.png"
              width={160}
              height={48}
              alt="Quanton Labs"
              style={{
                width: "160px",
                height: "auto",
                mixBlendMode: "screen",
              }}
            />
          </div>
        </div>

      </div>
    </footer>
  );
}
