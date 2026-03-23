import { motion } from 'framer-motion';
import Section from './ui/Section';
import { profileData } from '../data/profile';
import './About.css';

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
            <motion.div
                className="about-content"
                variants={containerVariants}
                // Strict Inline Styles to guarantee centering regardless of CSS
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%'
                }}
            >
                <motion.h2 variants={itemVariants} className="section-title">
                    About Me
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="about-text-container"
                    style={{ marginBottom: '4rem', maxWidth: '800px', lineHeight: '1.8' }}
                >
                    <p className="about-text">
                        {profileData.summary}
                    </p>
                </motion.div>

                <motion.div
                    className="about-stats-grid"
                    variants={itemVariants}
                    style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
                >
                    <div className="stat-item">
                        <span style={{ display: 'block', fontSize: '3rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>2+</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Years Exp</span>
                    </div>

                    <div className="stat-item">
                        <span style={{ display: 'block', fontSize: '3rem', fontWeight: '800', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>10+</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Projects</span>
                    </div>

                    <div className="stat-item">
                        <span style={{ display: 'block', fontSize: '3rem', fontWeight: '800', color: 'var(--accent-tertiary)', marginBottom: '0.5rem' }}>100%</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Committed</span>
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default About;
