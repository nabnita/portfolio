import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import NeuralBackground from './ui/NeuralBackground';
import ScrollIndicator from './ui/ScrollIndicator';
import InteractiveShape from './ui/InteractiveShape';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <NeuralBackground />

            <div className="hero-container">
                {/* Left: Text Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="hero-name">{profileData.name}</h1>
                    <h2 className="hero-title">{profileData.title}</h2>
                    <p className="hero-tagline">{profileData.tagline}</p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </motion.div>

                {/* Right: 3D Interaction */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <InteractiveShape />
                </motion.div>
            </div>

            <ScrollIndicator />
        </section>
    );
};

export default Hero;
