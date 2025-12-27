import { motion, useScroll, useTransform } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';

const ScrollIndicator = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <motion.div
            style={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                translateX: '-50%',
                opacity,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                zIndex: 20,
                pointerEvents: 'none',
                color: 'var(--text-secondary)'
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
            <IoChevronDown size={24} style={{ color: 'var(--accent-primary)' }} />
        </motion.div>
    );
};

export default ScrollIndicator;
