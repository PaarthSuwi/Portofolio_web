import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Bajaj Auto Ltd",
        role: "Graduate Trainee Engineer (Intern)",
        period: "Jan 2026 - Present",
        description: "Operating in the Manufacturing & Automation Technology (M&AT) department. Gaining exposure to industrial automation systems, optimizing manual operations using automated machinery, and learning shop-floor process improvements.",
        skills: ["Automation", "Robotics", "Manufacturing"],
        color: "var(--color-jdm-cyan)",
        glow: "shadow-neon-cyan"
    },
    {
        company: "Wrench Wielders Racing",
        role: "Team Captain & Head of Design",
        period: "Sep 2023 - Nov 2025",
        description: "Led the Student Formula team through vehicle design, engineering, and performance optimization. Setup rigorous testing and oversaw CAD modeling, simulations, and manufacturing feasibility.",
        skills: ["CAD/CAM", "SolidWorks", "Leadership", "Vehicle Dynamics"],
        color: "var(--color-jdm-pink)",
        glow: "shadow-neon-pink"
    },
    {
        company: "BrightCHAMPS",
        role: "Robotics Instructor",
        period: "Jul 2025 - Aug 2025",
        description: "Taught young learners fundamentals of robotics and coding, fostering creativity and simplifying complex technical concepts.",
        skills: ["Robotics", "Programming", "Teaching"],
        color: "var(--color-jdm-green)",
        glow: "shadow-neon-green"
    },
    {
        company: "Freelancer",
        role: "Web Dev & 3D Modeling",
        period: "Jun 2018 - Sep 2024",
        description: "Delivered end-to-end solutions across web development, graphic design, and 3D modeling for rapid prototyping to various clients.",
        skills: ["Web Development", "Figma", "3D Printing"],
        color: "var(--color-jdm-purple)",
        glow: "shadow-neon-purple"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block border border-[var(--color-jdm-cyan)]/30 text-[var(--color-jdm-cyan)] px-4 py-1 rounded-full text-xs font-mono mb-4 tracking-widest uppercase"
                    >
                        Career Matrix
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold"
                    >
                        OPERATIONAL <span className="text-glow-cyan text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jdm-cyan)] to-[var(--color-jdm-pink)]">HISTORY</span>
                    </motion.h2>
                </div>

                <div className="relative border-l border-white/10 md:mx-auto md:w-3/4">
                    {experiences.map((exp, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className="mb-12 ml-6 relative group"
                        >
                            {/* Timeline dot */}
                            <span
                                className={`absolute -left-[32px] top-1 w-4 h-4 rounded-full border-2 border-[var(--color-jdm-surface)] ${exp.glow} transition-transform duration-300 group-hover:scale-150`}
                                style={{ backgroundColor: exp.color }}
                            ></span>

                            <div className={`glass-surface jdm-bubble p-6 rounded-xl border border-white/5 transition-all duration-300 hover:border-white/20 hover:translate-x-2`}>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-heading font-bold text-white mb-1 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-lg font-mono" style={{ color: exp.color }}>{exp.company}</h4>
                                    </div>
                                    <span className="font-mono text-xs text-slate-400 mt-2 md:mt-0 px-3 py-1 bg-black/40 rounded-full border border-white/10 w-max h-max">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-2 py-1 text-xs font-mono text-slate-300 bg-white/5 rounded border border-white/10"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
