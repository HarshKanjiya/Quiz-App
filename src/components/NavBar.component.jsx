import styled from "styled-components";
import {Link} from 'react-router-dom';

import { nativeSignUP} from '../app/firebase'

const NavBar = () => {
    return ( 
        <Master>
            <Link to='/'><Home>QUIZ APP</Home></Link>
            <Tools>
                <Link to='/HighScores'><HighScores>HIGH SCORES</HighScores></Link>
                <Link to='Log'><SignIN>SIGN IN</SignIN></Link>
            </Tools>
        </Master>
     );
}
export default NavBar;

const Master = styled.div`
height: 10vh;
width: 100vw;
background-color:#00283a;

display: flex;
align-items: center;
justify-content: space-between;
`

const Home = styled.p`
    font-weight: 600;
    font-size: 1.3rem;
    color: #2eacff;
    margin: 0 20px;
    cursor: pointer;
`

const Tools = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0 20px;
`

const HighScores = styled.button`
    margin: 5px 0;
    width: max-content;
    color: #2eacff;
    background-color: #00283a;
    border: 0px ;
    font-size: 1rem;
    transition: 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
        color:#e0efff;
        border-radius: 2.5px;

        
    }`

const SignIN = styled.button`
    background-color: #00283a;
    height: 2.3rem;
    width: 4rem;
    border: 1px solid #2eacff;
    color: #2eacff;
    border-radius: 7px;
    transition: 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
        color:#00283a;
        background-color: #2eacff;
        border: 1px solid #00283a;
    }
    
`