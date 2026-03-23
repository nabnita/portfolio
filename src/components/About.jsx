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
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    width: '100%'
                }}
            >
                <motion.h2 variants={itemVariants} className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                    About Me
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="about-text-container"
                    style={{ marginBottom: '2rem', maxWidth: '800px', lineHeight: '1.8' }}
                >
                    <p className="about-text">
                        {profileData.summary}
                    </p>
                </motion.div>

            </motion.div>
        </Section>
    );
};

export default About;
