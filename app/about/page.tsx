"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users, Zap, Trophy, History, Target } from "lucide-react";
import { HeroIllustration, MissionIllustration, CommunityIllustration } from "@/components/Illustrations";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#030014] text-white selection:bg-indigo-500/30 overflow-hidden">
            <Header />

            <div className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -z-10" />

                {/* Hero Section */}
                <section className="mb-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            Reimagining Web Design
                        </motion.div>
                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            We are <br />
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-indigo-200 to-violet-400">
                                Codophile
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Transforming how developers design and build. We bridge the gap between creative vision and production code with our advanced visual playground.
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                Join Our Journey
                            </button>
                            <button className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                                View Career
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full max-w-lg lg:max-w-none"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <HeroIllustration className="w-full h-auto drop-shadow-2xl" />
                    </motion.div>
                </section>

                {/* Stats Section */}
                <section className="mb-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-12"
                    >
                        {[
                            { label: "Designers", value: "10K+", icon: Users },
                            { label: "Components", value: "500+", icon: Code },
                            { label: "Templates", value: "50+", icon: Palette },
                            { label: "Community", value: "25K+", icon: Trophy },
                        ].map((stat, idx) => (
                            <motion.div key={idx} variants={fadeIn} className="text-center">
                                <div className="flex justify-center mb-4 text-indigo-400">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Mission & Vision Split */}
                <section className="mb-32 space-y-24">
                    {/* Mission */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            className="flex-1 w-full max-w-md lg:max-w-none order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <MissionIllustration className="w-full h-auto" />
                        </motion.div>
                        <motion.div
                            className="flex-1 order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-6">
                                <Target size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                To democratize high-quality web design. We believe everyone should have the power to create stunning interfaces without getting bogged down by the complexities of CSS syntax.
                            </p>
                            <ul className="space-y-4">
                                {["Simplify CSS mastery", "Accelerate development workflows", "Foster a global design community"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Vision/Community */}
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            className="flex-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                                <Users size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Visualizing the Future</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We envision a world where the barrier between a design idea and a live product is non-existent. Our community is at the heart of this revolution, constantly sharing, iterating, and improving.
                            </p>
                            <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group">
                                Join the Community <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                        <motion.div
                            className="flex-1 w-full max-w-md lg:max-w-none"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <CommunityIllustration className="w-full h-auto" />
                        </motion.div>
                    </div>
                </section>

                {/* Our Journey Timeline (Unstop Style) */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Journey</h2>
                        <p className="text-gray-400">From a simple idea to a global platform.</p>
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10" />

                        {[
                            { year: "2024", title: "Inception", desc: "The idea of Codophile was born from a late-night coding session." },
                            { year: "2025", title: "Waitlist Launch", desc: "Over 5,000 developers joined our waitlist in just one week." },
                            { year: "2026", title: "Global Beta", desc: "Launched our public beta to users across 100+ countries." },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className={`relative flex items-center justify-between mb-12 last:mb-0 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className={`w-[45%] ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <div className="text-2xl font-bold text-indigo-400 mb-1">{item.year}</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#030014] z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                <div className="w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white flex items-center justify-center gap-3">
                        <Users className="text-indigo-400" /> Meet the Creators
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {/* Lead Developer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-violet-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-24 h-24 bg-linear-to-tr from-violet-500 to-fuchsia-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                                A
                            </div>
                            <h3 className="text-xl font-semibold text-white">Ayush Kumar Singh</h3>
                            <p className="text-indigo-400 text-sm mb-4 font-medium uppercase tracking-wide">Lead Developer & Founder</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Visionary leader passionate about creating intuitive developer tools and solving complex UI challenges.
                            </p>
                        </motion.div>

                        {/* Team Member 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-24 h-24 bg-linear-to-tr from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                                R
                            </div>
                            <h3 className="text-xl font-semibold text-white">Roshni Kumari</h3>
                            <p className="text-cyan-400 text-sm mb-4 font-medium uppercase tracking-wide">Team Member</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Driving frontend innovation and ensuring seamless user experiences across the platform.
                            </p>
                        </motion.div>

                        {/* Team Member 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-24 h-24 bg-linear-to-tr from-pink-500 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                                A
                            </div>
                            <h3 className="text-xl font-semibold text-white">Aprajita Kumari</h3>
                            <p className="text-pink-400 text-sm mb-4 font-medium uppercase tracking-wide">Team Member</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Crafting beautiful interfaces and maintaining high design standards in every component.
                            </p>
                        </motion.div>

                        {/* Team Member 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-24 h-24 bg-linear-to-tr from-amber-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                                S
                            </div>
                            <h3 className="text-xl font-semibold text-white">Sakshi Kumari</h3>
                            <p className="text-amber-400 text-sm mb-4 font-medium uppercase tracking-wide">Team Member</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Focused on robust architecture and scalable solutions for the growing user base.
                            </p>
                        </motion.div>

                        {/* DigiCraft */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-24 h-24 bg-linear-to-tr from-emerald-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                                D
                            </div>
                            <h3 className="text-xl font-semibold text-white">DigiCraft Innovation</h3>
                            <p className="text-emerald-400 text-sm mb-4 font-medium uppercase tracking-wide">Parent Company</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Supporting the vision of Codophile with resources and innovation.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Upcoming Features Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-linear-to-br from-violet-900/20 to-indigo-900/20 border border-violet-500/20 rounded-2xl p-10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(#ffffff05_1px,transparent_1px),linear-gradient(to_right,#ffffff05_1px,transparent_1px)] -z-10" style={{ backgroundSize: "20px 20px" }} />

                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-3">
                            <Rocket className="text-pink-500" /> What's Coming Next?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400 mt-1">
                                        <Palette size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Cool CSS Library</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            We are about to release a massive library of cool CSS components based on particular themes.
                                            You'll be able to easily copy and integrate these stunning designs directly into your websites.
                                            Expect glassmorphism, neomorphism, and futuristic themes!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                                        <Code size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">More Generators</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Expanding our playground to include advanced animations, grid layouts, and interactive components.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
