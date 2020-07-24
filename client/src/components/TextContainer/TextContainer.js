import React from 'react';
import { motion } from 'framer-motion';
import './TextContainer.css';
import onlineIcon from '../../icons/onlineIcon.png';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '10vw' 
  },
  visible: { 
    opacity: 1, 
    x: -10,
    transition: { type: 'spring', delay: 0.5, stiffness: 400 }
  }
};

const TextContainer = ({ users }) => (
  <motion.div className="textContainer" 
  variants={containerVariants}
  initial="hidden"
  animate="visible">
    <div>
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
    </div>
    {
      users
        ? (
          <div>
            <h1>People in the <span role="img" aria-label="emoji">💬</span> :</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <motion.div key={name} className="activeItem">
                    <img alt="Online Icon" src={onlineIcon}/>
                    {name}
                  </motion.div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </motion.div>
);

export default TextContainer;