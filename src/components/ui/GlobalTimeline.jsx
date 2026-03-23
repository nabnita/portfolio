import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import './GlobalTimeline.css';

const GlobalTimeline = ({ sections, activeSection }) => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="global-timeline-container">
            {/* The background subtle line */}
            <div className="timeline-track"></div>
            
            {/* The highlighted active line */}
            <motion.div 
                className="timeline-fill"
                style={{ scaleY, transformOrigin: 'top' }}
            />

            {/* The Nodes */}
            <div className="timeline-nodes">
                {sections.map((section, index) => {
                    const isActive = activeSection === section.id;
                    return (
                        <div 
                            key={section.id} 
                            className={`timeline-node-wrapper ${isActive ? 'active' : ''}`}
                            onClick={() => {
                                const el = document.getElementById(section.id);
                                if(el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <div className="timeline-node">
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeNodeGlow"
                                        className="timeline-node-glow"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1.5 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </div>
                            {/* <span className="timeline-node-label">{section.id}</span> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GlobalTimeline;
