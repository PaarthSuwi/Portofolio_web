import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const navLinks = [
    { name: 'About', href: '#about', color: 'hover:text-[var(--color-jdm-cyan)]' },
    { name: 'Experience', href: '#experience', color: 'hover:text-[var(--color-jdm-green)]' },
    { name: 'Services', href: '#services', color: 'hover:text-[var(--color-jdm-pink)]' },
    { name: 'Portfolio', href: '#portfolio', color: 'hover:text-[var(--color-jdm-purple)]' },
    { name: 'Pricing', href: '#pricing', color: 'hover:text-[var(--color-jdm-cyan)]' },
    { name: 'Connect', href: '#contact', color: 'hover:text-[var(--color-jdm-green)]' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-surface border-b border-glow-cyan/20 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <HashLink smooth to="/#hero" className="text-xl md:text-2xl font-heading font-bold tracking-wider relative group">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-jdm-cyan)] to-[var(--color-jdm-purple)] group-hover:text-glow-cyan transition-all">
                        PAARTH SRIVASTAVA
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-jdm-cyan)] group-hover:w-full transition-all duration-300"></span>
                </HashLink>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-widest text-slate-400">
                    {navLinks.map((link) => (
                        <HashLink
                            smooth
                            key={link.name}
                            to={`/${link.href}`}
                            className={`transition-colors duration-300 relative group ${link.color}`}
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-current rounded-full group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                        </HashLink>
                    ))}

                </div>

                {/* Mobile Menu Button & Controls */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        className="text-slate-300 hover:text-[var(--color-jdm-cyan)] transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass-surface-light border-b border-glow-cyan/20 px-6 py-4 flex flex-col gap-4 font-mono text-center uppercase tracking-widest"
                >
                    {navLinks.map((link) => (
                        <HashLink
                            smooth
                            key={link.name}
                            to={`/${link.href}`}
                            className={`text-slate-300 transition-colors py-2 ${link.color}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </HashLink>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
