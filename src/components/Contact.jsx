import Section from './ui/Section';
import { profileData } from '../data/profile';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <Section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm currently looking for new opportunities in AI/ML engineering.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-links">
                    <a href={`mailto:${profileData.contact.email}`} className="contact-card">
                        <FaEnvelope className="contact-icon" />
                        <span>{profileData.contact.email}</span>
                    </a>

                    <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
                        <FaLinkedin className="contact-icon" />
                        <span>LinkedIn</span>
                    </a>

                    <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                        <FaGithub className="contact-icon" />
                        <span>GitHub</span>
                    </a>

                    {profileData.contact.phone && (
                        <div className="contact-card">
                            <FaPhone className="contact-icon" />
                            <span>{profileData.contact.phone}</span>
                        </div>
                    )}
                </div>

                <footer className="footer">
                    <p>Designed & Built by {profileData.name}</p>
                </footer>
            </div>
        </Section>
    );
};

export default Contact;
