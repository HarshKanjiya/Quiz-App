import styled from "styled-components";
import {Link} from 'react-router-dom';
import { auth} from "../app/firebase";
import { signOut } from "firebase/auth";

const NavBar = ({highScorePageRemover}) => {    

    const signOutHelper = () => {
        signOut(auth);
    }
    
    const formSelector = () => {

        if(auth.currentUser)
        {
            return <SignIN onClick={signOutHelper}
            style={{backgroundColor:'#ff0000'}}
            >Sign Out</SignIN>
        }
        else
        {
            return <Link to='SignIn'> <SignIN>Sign IN</SignIN> </Link>
        }
    }


    return ( 
        <Master>
            <Link to='/'><Home>QUIZ APP</Home></Link>
            <Tools>
                {
                    highScorePageRemover ? null :
                    <Link to='/HighScores' ><HighScores>HIGH SCORES</HighScores></Link>
                }
                {
                   formSelector()
                }
               
            </Tools>
        </Master>
     );
}            
export default NavBar;

const Master = styled.div`
height: 10vh;
width: 100vw;
background-color:rgba(255,255,255,0.2);
filter: hue-rotate(0);

display: flex;
align-items: center;
justify-content: space-between;
`

const Home = styled.p`
    font-weight: 600;
    font-size: 1.3rem;
    color: aliceblue;
    padding: 0px 7px;
    border-radius: 17px;
    margin: 0 20px;
    border: 1px solid rgba(255,255,255,0.0) ;

    cursor: pointer;
    transition:300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
        border: 1px solid rgba(255,255,255,0.4) ;
        background-color:rgba(255,255,255,0.2);
    }
`

const Tools = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 20px;
`

const HighScores = styled.button`
    
    width: max-content;
    height: 35px;
    padding: 0 7px;
    border-radius: 17px;
    color: aliceblue;
    border: 1px solid rgba(255,255,255,0.4) ;
    background-color:rgba(255,255,255,0.2);

    font-size: 1rem;
    transition: 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
        border-radius: 2.5px;
    }
    `

const SignIN = styled.button`

background-color:rgba(255,255,255,0.2);
    height: 2.3rem;
    height: 35px;
    padding: 0 7px;
    border-radius: 17px;
    color: aliceblue;
    border: 1px solid rgba(255,255,255,0.4) ;
    background-color:rgba(255,255,255,0.2);
    transition: 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover{
        border-radius: 2.5px;
    }
    
`