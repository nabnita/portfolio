import { motion } from 'framer-motion';
import Section from './ui/Section';
import { profileData } from '../data/profile';
import './Skills.css';

const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const Skills = () => {
    return (
        <Section id="skills" className="skills-section">
            <h2 className="section-title">Skills</h2>
            <motion.div
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ staggerChildren: 0.15 }}
            >
                {/* Languages */}
                <motion.div className="skill-category" variants={categoryVariants}>
                    <h3 className="skill-category-title">Languages</h3>
                    <div className="skill-tags">
                        {profileData.skills.languages && profileData.skills.languages.map((skill) => (
                            <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Frameworks */}
                <motion.div className="skill-category" variants={categoryVariants}>
                    <h3 className="skill-category-title">Frameworks</h3>
                    <div className="skill-tags">
                        {profileData.skills.frameworks && profileData.skills.frameworks.map((skill) => (
                            <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Tools */}
                <motion.div className="skill-category" variants={categoryVariants}>
                    <h3 className="skill-category-title">Tools</h3>
                    <div className="skill-tags">
                        {profileData.skills.tools && profileData.skills.tools.map((skill) => (
                            <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div className="skill-category" variants={categoryVariants}>
                    <h3 className="skill-category-title">Soft Skills</h3>
                    <div className="skill-tags">
                        {profileData.skills.soft && profileData.skills.soft.map((skill) => (
                            <span key={skill} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default Skills;
