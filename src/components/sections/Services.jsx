import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, PenTool, Layout, Database } from 'lucide-react';

const services = [
    {
        icon: <Code2 size={32} className="text-[var(--color-jdm-cyan)]" />,
        title: "Robotics Control",
        description: "Developing robust, real-time control logic for multi-robot environments, incorporating kinematics and collision detection.",
        neonHover: "hover:shadow-neon-cyan hover:border-[var(--color-jdm-cyan)]"
    },
    {
        icon: <PenTool size={32} className="text-[var(--color-jdm-pink)]" />,
        title: "Computer Vision",
        description: "Implementing vision-based AI solutions, mapping human pose data into system parameters such as gesture control.",
        neonHover: "hover:shadow-neon-pink hover:border-[var(--color-jdm-pink)]"
    },
    {
        icon: <Layout size={32} className="text-[var(--color-jdm-purple)]" />,
        title: "Parametric CAD",
        description: "Structuring and simulating code-based CAD designs combining 3D rendering with backend calculation pipelines.",
        neonHover: "hover:shadow-neon-purple hover:border-[var(--color-jdm-purple)]"
    },
    {
        icon: <Database size={32} className="text-[var(--color-jdm-green)]" />,
        title: "Full Stack Apps",
        description: "Architecting interactive frameworks that bridge heavy backend computations with sleek, highly responsive frontends.",
        neonHover: "hover:shadow-neon-green hover:border-[var(--color-jdm-green)]"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Services = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block border border-[var(--color-jdm-cyan)]/30 text-[var(--color-jdm-cyan)] px-4 py-1 rounded-full text-xs font-mono mb-4 tracking-widest uppercase"
                    >
                        Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold"
                    >
                        WHAT I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jdm-cyan)] to-[var(--color-jdm-pink)]">CAN DO</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`glass-surface p-8 rounded-xl border border-white/5 transition-all duration-300 group cursor-pointer ${service.neonHover}`}
                        >
                            <div className="mb-6 p-4 rounded-lg jdm-bubble inline-block group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-3 text-slate-200 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 font-light text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Link
                        to="/services"
                        className="inline-flex items-center justify-center border border-[var(--color-jdm-cyan)] text-[var(--color-jdm-cyan)] px-8 py-4 font-mono font-bold tracking-widest uppercase hover:bg-[var(--color-jdm-cyan)] hover:text-black transition-all duration-300 shadow-neon-cyan"
                    >
                        Explore Full Database
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default Services;
