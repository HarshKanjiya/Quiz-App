import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {  
  return (
    <Master
    className='backGround'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5, type:'spring'}}
    >
      <Header>
        <p>Quiz App</p>
      </Header>
        <Link to='/Game' >
          <Buttons
            whileTap={{scale:2,opacity:0}}
          >START</Buttons></Link>
        <Link to='/HighScores'>
          <Buttons
            whileTap={{scale:2,opacity:0}}
          >LEADER BOARD</Buttons></Link>
    </Master>
  )
}
export default Home;

const Master = styled(motion.div)`
height: 100vh;
width: 100vw;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
`

const Header = styled.div`
font-weight: 700;
font-size: 2.5rem;
color: #e9e9e9;
`

const Buttons = styled(motion.button)`
  height: 3rem;
  width: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  font-weight: 600;
  color: aliceblue;
  background-color: rgba(255,255,255,0.21);
  backdrop-filter: blur(10px);
  border: 0px solid;
  box-shadow: 2px 2px 11px rgba(0,0,0,0.21), -2px -2px 11px rgba(255,255,255,0.21);


  transition:300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover{
    background-color: rgba(255,255,255,0.5);
    box-shadow: 2px 2px 11px rgba(0,0,0,0.41), -2px -2px 11px rgba(255,255,255,0.41);

  }
`
