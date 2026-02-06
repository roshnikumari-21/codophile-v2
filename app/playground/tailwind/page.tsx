"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    LayoutTemplate,
    Type,
    Square,
    Sparkles,
    MousePointer2,
    Palette,
    Move,
    Play,
    ArrowLeft
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
    {
        title: "Layout Utilities",
        description: "Master flex, grid, spacing, sizing, and positioning classes.",
        icon: LayoutTemplate,
        href: "/playground/tailwind/layout",
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "Typography",
        description: "Control font-size, weight, leading, tracking, and colors.",
        icon: Type,
        href: "/playground/tailwind/typography",
        color: "from-sky-400 to-indigo-500"
    },
    {
        title: "Borders & Rings",
        description: "Experiment with rounded corners, border widths, and focus rings.",
        icon: Square,
        href: "/playground/tailwind/borders",
        color: "from-teal-400 to-emerald-500"
    },
    {
        title: "Effects & Filters",
        description: "Apply shadows, opacity, mix-blend modes, and backdrop blurs.",
        icon: Sparkles,
        href: "/playground/tailwind/effects",
        color: "from-purple-500 to-fuchsia-500"
    },
    {
        title: "Transforms",
        description: "Scale, rotate, translate, and skew elements using utility classes.",
        icon: Move,
        href: "/playground/tailwind/transforms",
        color: "from-orange-400 to-red-500"
    },
    {
        title: "Backgrounds",
        description: "Manage background colors, gradients, images, and sizes.",
        icon: Palette,
        href: "/playground/tailwind/backgrounds",
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Interactivity",
        description: "Customize cursors, pointer events, and user selection behavior.",
        icon: MousePointer2,
        href: "/playground/tailwind/interactivity",
        color: "from-yellow-400 to-amber-500"
    },
    {
        title: "Animations",
        description: "Use built-in animate classes and configure transitions.",
        icon: Play,
        href: "/playground/tailwind/animations",
        color: "from-violet-500 to-purple-600"
    }
];

export default function TailwindPlaygroundPage() {
    return (
        <div className="min-h-screen bg-[#030014] text-white selection:bg-cyan-500/30 relative overflow-hidden">
            <Header />

            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[#030014] -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 right-0 translate-y-20 -translate-x-10 blur-3xl opacity-20 w-96 h-96 bg-cyan-600 rounded-full" />
            </div>

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <Link href="/playground" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Selection
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Tailwind <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-400 to-white">Playground</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Rapidly prototype with Tailwind CSS utility classes.
                        Select a category to explore the available utilities visually.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((item, idx) => (
                        <Link key={idx} href={item.href} className="group relative">
                            <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 blur-xl`} />
                            <div className="relative h-full bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all hover:-translate-y-1 shadow-lg">
                                <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${item.color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
