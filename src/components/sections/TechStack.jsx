import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
    {
        title: "Front-End",
        skills: ["React", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
        color: "var(--color-jdm-cyan)"
    },
    {
        title: "Back-End",
        skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
        color: "var(--color-jdm-pink)"
    },
    {
        title: "Design & Tools",
        skills: ["Figma", "Git", "Webpack", "Vite", "Linux", "AWS"],
        color: "var(--color-jdm-purple)"
    }
];

const TechStack = () => {
    return (
        <section id="stack" className="py-24 relative overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBMMCA0MEw0MCA0MEw0MCAwTDAgMFpNMCAwTDIwIDIwTDQwIDBMMCAwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')]">

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-4"
                    >
                        TECHNICAL <span className="text-glow-green text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jdm-green)] to-[var(--color-jdm-cyan)]">ARSENAL</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-[var(--color-jdm-green)] mx-auto rounded-full shadow-neon-green"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            key={idx}
                            className="glass-surface p-8 rounded-2xl border-t-2"
                            style={{ borderTopColor: category.color }}
                        >
                            <h3 className="text-2xl font-mono font-bold mb-8 text-white flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }}></span>
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-2 jdm-bubble text-slate-300 font-mono text-sm rounded border border-white/5 hover:border-white/20 transition-colors cursor-default"
                                        style={{ borderColor: `color-mix(in srgb, ${category.color} 20%, transparent)` }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechStack;
