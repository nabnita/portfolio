import Section from './ui/Section';
import { profileData } from '../data/profile';
import './Education.css';

const Education = () => {
    return (
        <Section id="education" className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
                {profileData.education.map((edu, index) => (
                    <div key={index} className="edu-card">
                        <div className="edu-header">
                            <h3 className="degree">{edu.degree}</h3>
                            <span className="edu-duration">{edu.duration}</span>
                        </div>
                        <h4 className="school">{edu.school}</h4>
                        <div className="edu-footer">
                            <span className="location">{edu.location}</span>
                            {edu.grade && <span className="grade">Grade: {edu.grade}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
