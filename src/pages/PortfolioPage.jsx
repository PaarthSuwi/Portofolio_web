import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const PortfolioPage = () => {
    return (
        <section className="py-32 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-heading font-black mb-6"
                >
                    PROJECT <span className="text-glow-purple text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jdm-purple)] to-[var(--color-jdm-cyan)]">ARCHIVE</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 font-mono text-lg max-w-2xl mx-auto mb-12"
                >
                    A complete repository of all built systems, prototypes, and automated solutions. Prepare your remaining project data to populate this vault.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <HashLink
                        smooth
                        to="/#portfolio"
                        className="inline-flex items-center justify-center border border-[var(--color-jdm-cyan)] text-[var(--color-jdm-cyan)] px-8 py-4 font-mono font-bold tracking-widest uppercase hover:bg-[var(--color-jdm-cyan)] hover:text-black transition-all duration-300 shadow-neon-cyan"
                    >
                        Return to Origin
                    </HashLink>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioPage;
