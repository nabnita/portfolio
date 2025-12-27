import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ title, subtitle, children, onClick, className = "" }) => {
    return (
        <motion.div
            className={`card ${className}`}
            onClick={onClick}
            whileHover={{ y: -8, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                {subtitle && <span className="card-subtitle">{subtitle}</span>}
            </div>
            <div className="card-body">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
