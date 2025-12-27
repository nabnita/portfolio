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
