import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import NeuralBackground from './ui/NeuralBackground';
import ScrollIndicator from './ui/ScrollIndicator';
import InteractiveShape from './ui/InteractiveShape';
import Section from './ui/Section';
import './Hero.css';

const Hero = () => {
    return (
        <Section id="hero" className="hero-section-wrapper">
            <NeuralBackground />

            <div className="hero-container">
                {/* Left: Text Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ textAlign: 'left', flex: '1', minWidth: '300px' }}
                >
                    <div style={{ textAlign: 'left' }}>
                        <span className="hero-greeting" style={{ display: 'block', marginBottom: '1rem', fontSize: '2rem', color: 'var(--accent-primary)' }}>Hello, I'm</span>
                        <h1 className="hero-name" style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1', marginBottom: '1rem' }}>{profileData.name}</h1>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>{profileData.title}</h2>

                        <div className="hero-actions" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start' }}>
                            <a href="#projects" className="btn btn-primary" style={{ padding: '16px 36px', background: 'var(--accent-primary)', color: '#000', borderRadius: '50px', fontWeight: '700', fontSize: '1.1rem' }}>View Projects</a>
                            <a href="https://drive.google.com/file/d/1otc1uutsmmheT0_Vbsjaj-TnK-wKJ3FQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '16px 36px', border: '1px solid var(--text-secondary)', borderRadius: '50px', fontWeight: '700', fontSize: '1.1rem' }}>Resume</a>
                        </div>
                    </div>
                </motion.div>

                {/* Right: 3D Interaction */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ flex: '1', display: 'flex', justifyContent: 'flex-start' }}
                >
                    <InteractiveShape />
                </motion.div>
            </div>

            <ScrollIndicator />
        </Section>
    );
};

export default Hero;
