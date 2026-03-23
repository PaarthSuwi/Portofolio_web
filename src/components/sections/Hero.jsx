import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Terminal, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">

            {/* Background Tech Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-surface border-glow-cyan/50 text-glow-cyan text-sm font-mono mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-jdm-cyan)] animate-pulse"></span>
                        System Online / Ready for deployment
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-heading font-black tracking-tight mb-6"
                    >
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
                            INITIALIZING
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jdm-cyan)] via-white to-[var(--color-jdm-pink)] text-glow-cyan mt-2">
                            PAARTH
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-400 font-mono max-w-2xl mb-12"
                    >
                        &gt; Robotics & Automation Student <br />
                        &gt; Integrating CAD, Control Systems, & AI-driven Robotics.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-6 justify-center"
                    >
                        <a href="#work" className="px-8 py-4 bg-[var(--color-jdm-cyan)] text-[var(--color-jdm-bg)] font-bold font-mono rounded hover:bg-white transition-all shadow-neon-cyan duration-300 flex items-center gap-2 group">
                            <Terminal size={18} className="group-hover:animate-bounce" />
                            VIEW_WORK
                        </a>

                        <a href="#contact" className="px-8 py-4 glass-surface border border-[var(--color-jdm-pink)] text-[var(--color-jdm-pink)] font-bold font-mono rounded hover:bg-[var(--color-jdm-pink)] hover:text-white transition-all shadow-neon-pink duration-300 flex items-center gap-2 group">
                            <Zap size={18} className="group-hover:scale-110 transition-transform" />
                            INIT_CONTACT
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-500 hover:text-[var(--color-jdm-cyan)] transition-colors"
            >
                <span className="font-mono text-xs mb-2 tracking-widest uppercase">Scroll Info</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
