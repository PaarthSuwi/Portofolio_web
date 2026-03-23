import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power } from 'lucide-react';

const IntroBuffer = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const [isEntering, setIsEntering] = useState(false);

    // Matrix Rain Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas to full screen
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Matrix characters (Katakana + Latin + Numerals)
        const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            // Translucent black background to create trail effect
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Setup neon character style
            ctx.fillStyle = '#0f0'; // pure green base for matrix
            if (document.documentElement.classList.contains('light-mode')) {
                ctx.fillStyle = '#39ff14'; // jdm green for contrast
            }
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Randomly reset drops to top
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleEnter = () => {
        setIsEntering(true);
        // Wait for the exit animation before firing complete
        setTimeout(() => {
            onComplete();
        }, 1500);
    };

    return (
        <AnimatePresence>
            {!isEntering && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-[var(--color-jdm-bg)] flex flex-col items-center justify-center overflow-hidden"
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    {/* Matrix Canvas Background layer */}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    />

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2 tracking-[0.2em] uppercase">
                                System
                            </h1>
                            <p className="text-[var(--color-jdm-cyan)] font-mono text-sm tracking-widest uppercase mb-12 animate-pulse">
                                Authentication Required
                            </p>

                            <button
                                onClick={handleEnter}
                                className="group relative px-12 py-4 bg-transparent border border-white/20 glass-surface rounded uppercase font-mono tracking-[0.3em] text-sm overflow-hidden transition-all duration-300 hover:border-[var(--color-jdm-green)]"
                            >
                                {/* Button Glitch Hover Effect Background */}
                                <div className="absolute inset-0 bg-[var(--color-jdm-green)]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>

                                <span className="relative z-10 flex items-center justify-center gap-3 text-slate-300 group-hover:text-[var(--color-jdm-green)] transition-colors text-glow-cyan group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">
                                    <Power size={16} /> ENTER NEXUS
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-8 text-center w-full font-mono text-[10px] text-slate-600 uppercase tracking-[0.5em]">
                        Establish Secure Connection
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroBuffer;
