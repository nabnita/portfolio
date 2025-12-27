import Section from './ui/Section';
import { profileData } from '../data/profile';
import './Experience.css';

const Experience = () => {
    return (
        <Section id="experience">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                {profileData.experience.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <span className="date">{exp.duration}</span>
                            <h3 className="role">{exp.role}</h3>
                            <h4 className="company">{exp.company}</h4>
                            <p className="description">{exp.description}</p>
                            <ul className="achievements">
                                {exp.achievements.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
