import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import Card from './ui/Card';
import Modal from './ui/Modal';
import { profileData } from '../data/profile';
import { useState } from 'react';
import './Projects.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Section id="projects" className="projects-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title"
            >
                Featured Projects
            </motion.h2>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >
                {profileData.projects.map((project, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <Card
                            title={project.title}
                            subtitle={project.tech.join(" • ")}
                            onClick={() => setSelectedProject(project)}
                        >
                            <p>{project.description}</p>
                            <div style={{ marginTop: '1rem' }}>
                                <a 
                                    href={project.github || "https://github.com/nabnita"} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '6px 14px',
                                        backgroundColor: 'var(--bg-primary)',
                                        border: '1px solid var(--accent-primary)',
                                        color: 'var(--accent-primary)',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        fontWeight: '500',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'var(--accent-primary)';
                                        e.target.style.color = '#000';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'var(--bg-primary)';
                                        e.target.style.color = 'var(--accent-primary)';
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                    Code
                                </a>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedProject && (
                    <Modal
                        isOpen={!!selectedProject}
                        onClose={() => setSelectedProject(null)}
                        title={selectedProject.title}
                    >
                        <p>{selectedProject.details}</p>
                        <div className="project-links">
                            {selectedProject.link && <a href={selectedProject.link} target="_blank" rel="noreferrer">View Live</a>}
                            {selectedProject.github && <a href={selectedProject.github} target="_blank" rel="noreferrer">GitHub</a>}
                        </div>
                    </Modal>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Projects;
