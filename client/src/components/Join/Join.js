import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import './Join.css';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 6px rgb(0,255,255)",
    boxShadow: "0px 0px 6px rgb(255,0,255)",
    transition: {
      duration: 0.3,
      yoyo: 6
    }
  }
}

const containerVariants = {
  hidden: { 
    opacity: 0, 
  },
  visible: { 
    opacity: 1, 
    transition: { delay: 1.5, duration: 1.5 }
  }
};

const SignIn = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
    <div className="joinOuterContainer">
      <motion.div className="joinInnerContainer" variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" >
        <h1 className="heading">Join Chat</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <motion.button 
          variants={buttonVariants}
          whileHover="hover" 
          className={'button mt-20'} 
          type="submit">Enter Room</motion.button>
        </Link>
      </motion.div>
    </div>
    </div>
  );
}
export default  SignIn;
