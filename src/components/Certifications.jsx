import Section from './ui/Section';
import { profileData } from '../data/profile';
import './Certifications.css';

const Certifications = () => {
    return (
        <Section id="certifications" className="certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="cert-grid">
                {profileData.certifications.map((cert, index) => (
                    <div key={index} className="cert-card">
                        <h3 className="cert-name">{cert.name}</h3>
                        <div className="cert-meta">
                            <span className="cert-issuer">{cert.issuer}</span>
                            <span className="cert-divider">•</span>
                            <span className="cert-date">{cert.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
