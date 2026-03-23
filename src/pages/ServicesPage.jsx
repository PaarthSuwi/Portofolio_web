import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const ServicesPage = () => {
    return (
        <section className="py-32 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-heading font-black mb-6"
                >
                    SERVICE <span className="text-glow-pink text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jdm-pink)] to-[var(--color-jdm-purple)]">DATABASE</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 font-mono text-lg max-w-2xl mx-auto mb-12"
                >
                    Comprehensive list of capabilities, ongoing offerings, and specialized expertise tailored for industrial and web applications. (Content pipeline ready for expansion).
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <HashLink
                        smooth
                        to="/#services"
                        className="inline-flex items-center justify-center border border-[var(--color-jdm-cyan)] text-[var(--color-jdm-cyan)] px-8 py-4 font-mono font-bold tracking-widest uppercase hover:bg-[var(--color-jdm-cyan)] hover:text-black transition-all duration-300 shadow-neon-cyan"
                    >
                        Return to Origin
                    </HashLink>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesPage;
