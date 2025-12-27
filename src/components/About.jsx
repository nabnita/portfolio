import { motion } from 'framer-motion';
import Section from './ui/Section';
import { profileData } from '../data/profile';
import './About.css';

// Container handles the group entrance and staggers children
const containerVariants = {
    hidden: {
        opacity: 0,
        transition: { staggerChildren: 0.1 }
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

// Items inherit 'hidden'/'visible' from container
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const About = () => {
    return (
        <Section id="about" className="about-section">
            {/* 
         Converted to motion.div to participate in the variant chain.
         Inherits 'hidden'/'visible' from Section.
      */}
            <motion.div
                className="about-content"
                variants={containerVariants}
            // initial/whileInView are managed by parent Section
            >
                <motion.h2 variants={itemVariants} className="section-title">
                    About Me
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="about-text-container"
                    style={{ marginBottom: '3rem' }}
                >
                    <p className="about-text">
                        {profileData.summary}
                    </p>
                </motion.div>

                <motion.div
                    className="about-stats-grid"
                    variants={itemVariants} // Treat the whole grid as one item, or stagger internal?
                    // Let's treat grid as one item for simplicity, or add another stagger level.
                    // For now, simple slide up.
                    style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}
                >
                    <div className="stat-item">
                        <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-primary)' }}>2+</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Years Exp</span>
                    </div>

                    <div className="stat-item">
                        <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-secondary)' }}>10+</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Projects</span>
                    </div>

                    <div className="stat-item">
                        <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-tertiary)' }}>100%</span>
                        <span style={{ color: 'var(--text-secondary)' }}>Committed</span>
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default About;
