import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

const Home = () => {
 
  
  return (
    <Master>

      <Header>
        <p>Quiz App</p>
      </Header>
        <Link to='/Game'><Buttons>START</Buttons></Link>
        <Link to='/HighScores'><Buttons>HIGH SCORES</Buttons></Link>
    </Master>
  )
}
export default Home;

const Master = styled.div`
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
color: #2eacff;
`

const Buttons = styled.button`
  height: 3rem;
  width: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  font-weight: 600;
  color: #00283a;
  border: 1px solid #00283a;
  background: #afbeff;

  transition:300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover{
    background-color: #012130;
    border: 1px solid #afbeff;
    color: white;

  }
`
