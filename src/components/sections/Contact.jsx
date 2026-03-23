import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, TerminalSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-black/80 border-t border-white/5">

            {/* Background Decor */}
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-jdm-cyan)] opacity-5 blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-6 text-glow-cyan"
                    >
                        <TerminalSquare size={32} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-[var(--color-jdm-cyan)]"
                    >
                        INITIATE <br />CONNECTION
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-lg text-slate-400 font-mono"
                    >
                        Ready to build something extraordinary? Secure a channel.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto font-mono">
                    <motion.a
                        href="mailto:paarth.srivastava777@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-surface p-8 rounded-2xl border border-[var(--color-jdm-cyan)] shadow-neon-cyan flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="bg-[var(--color-jdm-cyan)]/10 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                            <Mail size={32} className="text-[var(--color-jdm-cyan)] text-glow-cyan" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-widest uppercase">Email Protocol</h3>
                        <p className="text-slate-400 text-sm mb-6">Direct secure transmission.</p>
                        <div className="mt-auto flex items-center gap-2 text-[var(--color-jdm-cyan)] group-hover:gap-4 transition-all">
                            Send Transmission <ArrowRight size={16} />
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/paarth-srivastava-65806623b/"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-surface p-8 rounded-2xl border border-[var(--color-jdm-pink)] shadow-neon-pink flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="bg-[var(--color-jdm-pink)]/10 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                            <Linkedin size={32} className="text-[var(--color-jdm-pink)] text-glow-pink" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-widest uppercase">Professional Sync</h3>
                        <p className="text-slate-400 text-sm mb-6">Establish neural link on LinkedIn.</p>
                        <div className="mt-auto flex items-center gap-2 text-[var(--color-jdm-pink)] group-hover:gap-4 transition-all">
                            Connect Profile <ArrowRight size={16} />
                        </div>
                    </motion.a>
                </div>

                {/* Additional Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-8 mt-20"
                >
                    <a href="https://github.com/PaarthSuwi" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[var(--color-jdm-cyan)] transition-colors p-3 border border-transparent hover:border-white/10 glass-surface rounded-full flex gap-3 text-sm font-mono items-center">
                        <Github size={20} /> Access GitHub Repo
                    </a>
                </motion.div>

                <div className="text-center mt-20 text-slate-600 font-mono text-xs uppercase tracking-widest">
                    © {new Date().getFullYear()} PAARTH SRIVASTAVA. All systems nominal.
                </div>

            </div>
        </section>
    );
};

export default Contact;
