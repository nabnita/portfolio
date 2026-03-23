import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
};

const Section = ({ children, id, className = "" }) => {
    return (
        <section
            id={id}
            // Reduced py-32 to py-24 (slightly less padding)
            className={`relative min-h-screen w-full flex flex-col justify-center items-center py-24 px-6 md:px-12 ${className}`}
            // MARGIN BOTTOM: 160px (80% of 200px)
            style={{
                scrollSnapAlign: 'center',
                textAlign: 'center',
                marginBottom: '160px'
            }}
        >
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="w-full max-w-5xl mx-auto z-10 flex flex-col items-center justify-center"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
export { sectionVariants }; 
