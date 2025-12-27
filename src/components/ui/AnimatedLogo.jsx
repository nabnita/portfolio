import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Particle = ({ angle, distance }) => {
    return (
        <motion.div
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: 0,
                scale: 0
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: '#7dcfff', // Cyan particles
                boxShadow: '0 0 10px #7dcfff',
                zIndex: 50,
                pointerEvents: 'none'
            }}
        />
    );
};

const AnimatedLogo = () => {
    const [clickCount, setClickCount] = useState(0);
    const [particles, setParticles] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        setClickCount(prev => prev + 1);

        // Generate particles for explosion
        const newParticles = Array.from({ length: 8 }).map((_, i) => ({
            id: Date.now() + i,
            angle: (i / 8) * Math.PI * 2,
            distance: 40 + Math.random() * 30
        }));

        setParticles(newParticles);
        setTimeout(() => setParticles([]), 800);
    };

    return (
        <motion.a
            href="#"
            className="logo"
            onClick={handleClick}
            style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                padding: '0 10px'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span style={{
                fontSize: '2rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #7dcfff 0%, #3b82f6 100%)', // Cyan to Royal Blue
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 15px rgba(125, 207, 255, 0.3))',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-2px'
            }}>
                N
            </span>

            {/* Easter Egg Particles */}
            <AnimatePresence>
                {particles.map(p => (
                    <Particle key={p.id} angle={p.angle} distance={p.distance} />
                ))}
            </AnimatePresence>
        </motion.a>
    );
};

export default AnimatedLogo;
