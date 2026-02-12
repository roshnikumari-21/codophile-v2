"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { effectsData } from "./data";
import { LivePreview } from "@/components/EffectsUI/LivePreview";

const ITEMS_PER_PAGE = 9;

export default function EffectsPage() {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(effectsData.length / ITEMS_PER_PAGE);

    const paginatedData = effectsData.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    return (
        <div className="min-h-screen bg-[#030014] text-white selection:bg-pink-500/30 font-sans overflow-hidden">
            <Header />

            {/* Background Grid */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">

                {/* Hero */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-widest mb-6"
                    >
                        <Sparkles className="w-3 h-3" /> Visual Magic
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Cool CSS{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400 animate-gradient-x">
                            Effects
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        A curated collection of stunning visual effects, ready to copy-paste.
                        Explore, tweak, and implement modern UI magic.
                    </motion.p>
                </div>

                {/* Animated Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {paginatedData.map((effect, idx) => (
                            <EffectCard key={effect.id} effect={effect} index={idx} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Orbital Pagination */}
                <ConstellationPagination
                    totalPages={totalPages}
                    currentPage={page}
                    onChange={setPage}
                />

            </main>

            <Footer />
        </div>
    );
}

function EffectCard({ effect, index }: { effect: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
        >
            <Link href={`/effects/${effect.id}`} className="group relative block h-full">
                <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

                <div className="relative h-full bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-pink-500/30 hover:-translate-y-1">
                    <div className="h-52 relative w-full overflow-hidden bg-[#070707]">
                        <LivePreview
                            html={effect.code.html}
                            css={effect.code.css}
                            js={effect.code.js}
                        />
                    </div>

                    <div className="p-6 flex-1 flex flex-col border-t border-white/5 bg-[#0a0a0a]/80">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                            {effect.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                            {effect.description}
                        </p>
                        <div className="mt-auto flex items-center text-sm font-medium text-pink-300 group-hover:gap-2 transition-all">
                            View Snippet <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export function ConstellationPagination({
  totalPages,
  currentPage,
  onChange,
}: {
  totalPages: number;
  currentPage: number;
  onChange: (p: number) => void;
}) {
  /**
   * Robust pagination logic:
   * 1. Always show first and last.
   * 2. Show a window (delta) around the current page.
   * 3. Intelligently insert "..." or the missing number if the gap is only 1.
   */
  const getPages = () => {
    const delta = 2; // How many pages to show around current
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let prev: number | undefined;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (prev !== undefined) {
        if (i - prev === 2) {
          rangeWithDots.push(prev + 1);
        } else if (i - prev !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      prev = i;
    });

    return rangeWithDots;
  };

  const visiblePages = getPages();

  return (
    <div className="relative mt-32 mb-16 flex justify-center items-center">
      <div className="relative flex items-center gap-6 md:gap-10">
        
        {/* The Constellation Path (Background Line) */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent -translate-y-1/2" />

        {visiblePages.map((page, index) => {
          // Render the "..." Separator
          if (page === "...") {
            return (
              <div 
                key={`dots-${index}`} 
                className="text-gray-600 tracking-tighter text-xl select-none px-1 translate-y-[-2px]"
              >
                ⋯
              </div>
            );
          }

          const active = page === currentPage;
          const pageNum = Number(page);

          return (
            <motion.button
              key={`page-${pageNum}`}
              onClick={() => onChange(pageNum)}
              className="relative z-10 flex flex-col items-center group outline-none"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* The Star (Node) */}
              <div
                className={`
                  relative w-3.5 h-3.5 rounded-full transition-all duration-500 ease-out
                  ${active 
                    ? "bg-pink-400 shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee]" 
                    : "bg-white/20 group-hover:bg-white/70 shadow-none"}
                `}
              >
                {/* Internal Glow for Active Star */}
                {active && (
                   <div className="absolute inset-0 rounded-full bg-white blur-[1px] opacity-50" />
                )}
              </div>

              {/* Cinematic Active Effects */}
              <AnimatePresence>
                {active && (
                  <>
                    {/* Shared Layout ID allows the glow to "slide" to the next star */}
                    <motion.div
                      layoutId="activeGlow"
                      className="absolute -inset-3 rounded-full bg-pink-500/20 blur-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                    
                    {/* Ripple Pulse */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0.8 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-pink-400/40"
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Tech-Style Page Label */}
              <span className={`
                absolute top-8 font-mono text-[10px] tracking-[0.3em] transition-all duration-300
                ${active ? "text-cyan-400 font-bold translate-y-1" : "text-gray-500 opacity-60"}
              `}>
                {String(pageNum).padStart(2, "0")}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}


