import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ui/ThemeToggle';
import AnimatedLogo from './ui/AnimatedLogo';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-container">
                <AnimatedLogo />

                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="nav-links">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
