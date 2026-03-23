import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden text-slate-300">

            {/* Decorative Glow */}
            <div className="absolute top-1/2 right-[-20%] w-[50%] h-[50%] rounded-full bg-[var(--color-jdm-purple)] opacity/5 blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[2px] w-12 bg-[var(--color-jdm-cyan)]"></span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                                ABOUT SYSTEM
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg font-light leading-relaxed">
                            <p>
                                I am a driven <strong className="text-white font-medium">Robotics and Automation student</strong> blending mechanical engineering with intelligent software.
                            </p>
                            <p>
                                My expertise spans across Parametric CAD, complex control systems, and AI-driven robotics. I build solutions that bridge the gap between pure code and the physical world.
                            </p>

                            <div className="font-mono text-sm tracking-widest uppercase border-l-2 border-[var(--color-jdm-pink)] pl-4 py-2 mt-8 text-[var(--color-jdm-pink)]">
                                &gt; Design // Simulate // Automate
                            </div>
                        </div>
                    </div>

                    {/* Abstract Visual / Stats */}
                    <div className="relative">
                        <div className="glass-surface-light p-8 rounded-2xl border border-white/5 shadow-neon-purple relative z-10">
                            <div className="flex flex-col gap-6 font-mono">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-slate-500 text-sm">STATUS</span>
                                    <span className="text-glow-cyan text-[var(--color-jdm-cyan)] drop-shadow-md">Active.Available</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-slate-500 text-sm">FOCUS</span>
                                    <span className="text-white">Robotics & AI Control</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-slate-500 text-sm">LOCATION</span>
                                    <span className="text-white">Earth // Internet</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-slate-500 text-sm">EXPERIENCE</span>
                                    <span className="text-glow-pink text-[var(--color-jdm-pink)] font-bold">3+ Years</span>
                                </div>
                            </div>
                        </div>

                        {/* Geometric accents */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border border-[var(--color-jdm-cyan)]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[var(--color-jdm-pink)]/20 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
