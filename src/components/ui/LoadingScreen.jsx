import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const Steam = ({ delay, x }) => (
    <motion.div
        style={{
            position: 'absolute',
            top: -10,
            left: x,
            width: 6,
            height: 20,
            background: 'var(--text-secondary)',
            borderRadius: 10,
            opacity: 0,
        }}
        animate={{
            y: [-5, -40],
            opacity: [0, 0.6, 0],
            scaleY: [1, 1.5, 1],
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
    />
);

const LoadingScreen = () => {
    return (
        <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 99999,
            }}
        >
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
                {/* Steam Particles */}
                <Steam delay={0} x={10} />
                <Steam delay={0.5} x={25} />
                <Steam delay={1} x={40} />

                {/* Coffee Cup */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <FaCoffee size={64} color="var(--accent-primary)" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ textAlign: 'center' }}
            >
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                }}>
                    Brewing...
                </h2>

                {/* Progress Bar */}
                <div style={{
                    width: '200px',
                    height: '4px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                }}>
                    <motion.div
                        style={{
                            height: '100%',
                            background: 'var(--accent-secondary)'
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3.5, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
