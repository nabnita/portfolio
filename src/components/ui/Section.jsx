import { motion } from 'framer-motion';

// Defined logic: Parent controls the entry.
// Variants allow children to inherit the 'visible' state automatically.

const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // Custom vague ease-out
            when: "beforeChildren", // Optional: wait for section to show before children? Or start together.
            staggerChildren: 0.1 // Default stagger if content is direct children
        }
    },
    exit: { opacity: 0, y: -60, transition: { duration: 0.5 } }
};

const Section = ({ children, id, className = "" }) => {
    return (
        <section
            id={id}
            className={`relative min-h-screen w-full flex flex-col justify-center py-20 px-6 md:px-12 ${className}`}
            style={{ scrollSnapAlign: 'start' }}
        >
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% in view
                className="w-full max-w-7xl mx-auto z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
export { sectionVariants }; 
