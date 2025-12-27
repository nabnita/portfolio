import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
            }}
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: [1, 1.2, 1],
                    filter: theme === 'light' ? 'drop-shadow(0 0 8px #fbbf24)' : 'none'
                }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'light' ? (
                    <FaLightbulb size={24} color="#fbbf24" /> // Lit Lamp
                ) : (
                    <FaRegLightbulb size={24} color="#a9b1d6" /> // Off Lamp
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
