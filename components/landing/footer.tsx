"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Youtube
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full pt-24 pb-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-slate-300/20 blur-[120px] -bottom-40 left-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Main Footer Card */}
        <div className="glass backdrop-blur-xl bg-white/40 border border-white/40 shadow-xl rounded-2xl p-12">

          <div className="grid md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/assets/seo/ql_logo.png"
                  className="w-8"
                />
                <img
                  src="/images/assets/seo/ql_text.png"
                  className="w-28"
                />
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Quanton OS deploys coordinated AI agents that automate
                the growth, operations, and strategy infrastructure of
                modern businesses.
              </p>

              {/* Socials */}
              <div className="flex gap-4 mt-2">
                <a className="text-slate-600 hover:text-slate-900 transition">
                  <Twitter size={18} />
                </a>
                <a className="text-slate-600 hover:text-slate-900 transition">
                  <Linkedin size={18} />
                </a>
                <a className="text-slate-600 hover:text-slate-900 transition">
                  <Github size={18} />
                </a>
                <a className="text-slate-600 hover:text-slate-900 transition">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">
                Platform
              </h3>

              <div className="flex flex-col gap-3 text-sm text-slate-600">
                <Link href="#" className="hover:text-slate-900 transition">
                  Solutions
                </Link>

                <Link href="#" className="hover:text-slate-900 transition">
                  Resources
                </Link>

                <Link href="#" className="hover:text-slate-900 transition">
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">
                Contact
              </h3>

              <div className="flex flex-col gap-3 text-sm text-slate-600">

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
              <h3 className="font-semibold text-slate-900 mb-4">
                Product Updates
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                Subscribe to receive platform updates and new feature
                announcements.
              </p>

              <div className="flex gap-2">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/60 border border-slate-200 text-sm outline-none"
                />

                <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-800 transition">
                  Subscribe
                </button>

              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">

            <p>© {new Date().getFullYear()} Quanton Labs. All rights reserved.</p>

            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-slate-900">
                Privacy
              </Link>

              <Link href="#" className="hover:text-slate-900">
                Terms
              </Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}