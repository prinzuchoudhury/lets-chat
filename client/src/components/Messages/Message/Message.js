import React from 'react';
import { motion } from 'framer-motion';
import './Message.css';

import ReactEmoji from 'react-emoji';

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

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <motion.div className="messageContainer justifyStart"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </motion.div>
        )
  );
}

export default Message;