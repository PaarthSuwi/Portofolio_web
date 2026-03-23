import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Gesture-Controlled Dobot Magician",
        category: "Robotics / Computer Vision",
        description: "Gesture-based control system for the Dobot Magician arm using mediaPipe and OpenCV for real-time finger and palm detection. Built entirely on Ubuntu 22.04 with ROS 2 Humble.",
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop",
        tech: ["ROS 2", "MediaPipe", "OpenCV", "Python"],
        color: "var(--color-jdm-cyan)",
        glow: "shadow-neon-cyan",
        github: "https://github.com/PaarthSuwi/gesture-controlled-dobot-arm"
    },
    {
        title: "Welcoming TurtleBot",
        category: "Autonomy & AI",
        description: "Interactive Robotics project designed to welcome and engage users dynamically. Combined mobile robotics, programming, and user-interaction sequences into a working prototype.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        tech: ["Robotics", "AI", "TurtleBot", "Control Systems"],
        color: "var(--color-jdm-pink)",
        glow: "shadow-neon-pink",
        demo: "https://www.linkedin.com/posts/paarth-srivastava-65806623b_robotics-ai-turtlebot-activity-7376683409445838848-5nt4"
    },
    {
        title: "Traditional CAD & Simulation",
        category: "Mechanical Design",
        description: "Extensive experience leveraging industry-standard CAD software like SolidWorks, Fusion 360, and Solid Edge for complex mechanical modeling, assemblies, and simulation-driven design.",
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2070&auto=format&fit=crop",
        tech: ["SolidWorks", "Fusion 360", "Solid Edge", "Simulation"],
        color: "var(--color-jdm-purple)",
        glow: "shadow-neon-purple"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-[var(--color-jdm-purple)] font-mono text-sm tracking-widest mb-4"
                        >
                            <span className="w-8 h-[1px] bg-[var(--color-jdm-purple)]"></span>
                            LATEST DEPLOYMENTS
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-heading font-black"
                        >
                            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jdm-purple)] to-[var(--color-jdm-pink)]">WORK</span>
                        </motion.h2>
                    </div>

                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-sm uppercase"
                    >
                        View GitHub Archive <ExternalLink size={16} />
                    </motion.a>
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            key={index}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center group`}
                        >
                            {/* Image Container */}
                            <div className={`w-full lg:w-3/5 rounded-xl overflow-hidden glass-surface border border-white/10 relative ${project.glow} transition-all duration-500 group-hover:border-[${project.color}]`}>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[400px] object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>

                            {/* Content Container */}
                            <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} py-6`}>
                                <span className="font-mono text-sm mb-2" style={{ color: project.color }}>
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-heading font-bold mb-4 text-white">
                                    {project.title}
                                </h3>
                                <div className="glass-surface-light p-6 rounded-lg text-slate-300 font-light leading-relaxed mb-6 border border-white/5 relative z-20">
                                    {project.description}
                                </div>
                                <ul className={`flex flex-wrap gap-4 font-mono text-xs text-slate-400 mb-8 ${index % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                                    {project.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" title="GitHub Repo">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors" title="Live Site">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center justify-center border border-[var(--color-jdm-purple)] text-[var(--color-jdm-purple)] px-8 py-4 font-mono font-bold tracking-widest uppercase hover:bg-[var(--color-jdm-purple)] hover:text-black transition-all duration-300 shadow-neon-purple"
                    >
                        Explore Complete Archive
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default Portfolio;
