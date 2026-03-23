import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
    {
        name: "Basic",
        price: "Custom",
        description: "Perfect for simple landing pages or personal portfolios.",
        color: "var(--color-jdm-cyan)",
        glow: "shadow-neon-cyan",
        border: "border-glow-cyan",
        features: [
            "1-3 Page Responsive Website",
            "Basic Animations",
            "Contact Form Integration",
            "1 Week Delivery"
        ]
    },
    {
        name: "Pro",
        price: "Custom",
        description: "Advanced web applications with complex interactions.",
        popular: true,
        color: "var(--color-jdm-pink)",
        glow: "shadow-neon-pink",
        border: "border-[var(--color-jdm-pink)]",
        features: [
            "Full Web Application",
            "Database Integration",
            "Advanced 3D/Framer Animations",
            "CMS Setup",
            "Priority Support"
        ]
    },
    {
        name: "Enterprise",
        price: "Contract",
        description: "Ongoing freelance development or large scale projects.",
        color: "var(--color-jdm-purple)",
        glow: "shadow-[0_0_15px_rgba(157,0,255,0.3)]",
        border: "border-[var(--color-jdm-purple)]",
        features: [
            "Custom Architecture",
            "Monthly Retainer Option",
            "Full Source Code Ownership",
            "Zero-Downtime Deployment",
            "Unlimited Revisions"
        ]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-black/30">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold"
                    >
                        FREELANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jdm-cyan)] to-[var(--color-jdm-pink)]">RATES</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-4 text-slate-400 font-mono text-sm uppercase tracking-wider"
                    >
                        Invest in digital excellence
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {tiers.map((tier, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            key={index}
                            className={`glass-surface rounded-2xl border ${tier.popular ? tier.border + ' ' + tier.glow + ' transform md:-translate-y-4' : 'border-white/10'} p-8 relative`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className={`bg-[${tier.color}] text-black font-bold font-mono text-xs py-1 px-3 rounded-full tracking-wider uppercase shadow-neon-pink bg-[var(--color-jdm-pink)]`}>
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-heading font-bold mb-2" style={{ color: tier.color }}>{tier.name}</h3>
                            <div className="text-4xl font-black text-white mb-4 tracking-tight">{tier.price}</div>
                            <p className="text-slate-400 text-sm h-12 mb-6">{tier.description}</p>

                            <hr className="border-white/10 mb-6" />

                            <ul className="space-y-4 mb-8 h-48">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                        <Check size={18} style={{ color: tier.color }} className="shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="w-full py-3 rounded-lg font-mono font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:gap-4"
                                style={{
                                    backgroundColor: tier.popular ? tier.color : 'transparent',
                                    color: tier.popular ? 'var(--color-jdm-bg)' : tier.color,
                                    border: `1px solid ${tier.color}`
                                }}
                            >
                                Inquire <ArrowRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing;
