import Section from './ui/Section';
import { profileData } from '../data/profile';
import './Certifications.css';

const Certifications = () => {
    return (
        <Section id="certifications" className="certifications-section">
            <h2 className="section-title">Certifications</h2>
            <div className="cert-grid">
                {profileData.certifications.map((cert, index) => {
                    const CardComponent = cert.link ? 'a' : 'div';
                    const cardProps = cert.link ? { 
                        href: cert.link, 
                        target: "_blank", 
                        rel: "noopener noreferrer", 
                        style: { textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' } 
                    } : {};

                    return (
                        <CardComponent key={index} className="cert-card" {...cardProps}>
                            <h3 className="cert-name">{cert.name}</h3>
                            <div className="cert-meta">
                                <span className="cert-issuer">{cert.issuer}</span>
                                <span className="cert-divider">•</span>
                                <span className="cert-date">{cert.date}</span>
                            </div>
                            {cert.link && (
                                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    View Credential <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </div>
                            )}
                        </CardComponent>
                    );
                })}
            </div>
        </Section>
    );
};

export default Certifications;
