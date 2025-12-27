import { motion } from 'framer-motion';

const Shape = ({ delay, duration, top, left, size, color, type }) => {
    const isCircle = type === 'circle';

    return (
        <motion.div
            style={{
                position: 'absolute',
                top,
                left,
                width: size,
                height: size,
                borderRadius: isCircle ? '50%' : '12%',
                border: `2px solid ${color}`,
                opacity: 0.05,
                zIndex: 0,
                pointerEvents: 'none',
                background: `linear-gradient(135deg, ${color}22, transparent)`
            }}
            animate={{
                y: [0, -40, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        />
    );
};

const AmbientBackground = () => {
    // Elements positioned at edges to surround content
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden',
                pointerEvents: 'none'
            }}
        >
            {/* Top Left - Large Circle (Cyan) */}
            <Shape type="circle" top="-5%" left="-5%" size={300} color="var(--accent-primary)" duration={20} delay={0} />

            {/* Middle Right - Square (Purple) */}
            <Shape type="square" top="40%" left="90%" size={200} color="var(--accent-secondary)" duration={25} delay={2} />

            {/* Bottom Left - Square (Cyan) */}
            <Shape type="square" top="85%" left="5%" size={150} color="var(--accent-primary)" duration={22} delay={5} />

            {/* Top Right - Small Circle (Green/Tertiary) */}
            <Shape type="circle" top="10%" left="80%" size={100} color="var(--accent-tertiary)" duration={18} delay={1} />

            {/* Middle Left - Large Blurred Circle */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '-10%',
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
                    opacity: 0.03,
                    filter: 'blur(60px)',
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default AmbientBackground;
