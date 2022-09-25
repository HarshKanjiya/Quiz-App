import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';
import { auth } from "../app/firebase";
import { useState } from "react";
import { motion} from 'framer-motion'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignIN = () => {
    const navigate = useNavigate();
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [viewPassword, changeViewPassword ] = useState(false);
    
    const googleProvider = new GoogleAuthProvider();

    // sign in / up
    const nativeSignIn = async () => {
        if(email ==='')return  toast('Enter valid Email');
        if(password ==='')return  toast('Enter valid Password')

        await signInWithEmailAndPassword(auth, email, password)
        .then(navigate(-1))
        .catch((error) => {
            switch(error.message)
            {
                case 'Firebase: Error (auth/network-request-failed).':
                    toast('Connection Lost');
                    break;
               default:
                toast('Sign in failed')
            }
        })

    }
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
        .then(navigate(-1))
        .catch((error)=>
        {
           switch(error.message){
            case 'Firebase: Error (auth/popup-closed-by-user).':
                toast('Pop up has been Closed')
                break;
            default:
                toast('Sign in with google has Failed')
           }
        }
      )
    };

    return ( 
        <>
        <Master
           initial={{ opacity:0, scale:0.95 }}
           animate={{ opacity:1, scale:1 }}
           transition={{duration:0.7, type:"spring"}}
           >
            <Container>
                <Header>
                    <p>SIGN IN</p>
                    <Link to='/Game' className="link" onClick={()=>navigate(-1)} ><p>+</p></Link>
                </Header>
                    <hr/>
                <Content>
                    <label>E MAIL</label>
                    <input 
                        type = 'email'
                        value = {email} 
                        onChange={(event) => {setEmail(event.target.value)}}
                    />

                    <label>PASSWORD</label>
                    <input
                        type = {viewPassword ? 'text':'password'}
                        value = {password}
                        onChange={(event) => {setPassword(event.target.value)}}
                    />
                    <PasswordVisiblity>
                        <input 
                            id="checkBox"
                            type='checkbox' 
                            onClick={()=>changeViewPassword(!viewPassword)}
                        />
                        <label>Show Password</label>
                    </PasswordVisiblity>
                </Content>

                <Btns>
                  <motion.a
                    whileHover={{ scale:1.05 }} 
                    whileTap={{scale:1}}
                    className="sign-in"
                    onClick={(event) => nativeSignIn(event)}
                    >
                    SIGN IN</motion.a>  
                  <motion.a
                    whileHover={{ scale:1.05 }} 
                    whileTap={{scale:1}}
                    className="google"
                    onClick={(event) => signInWithGoogle(event)}
                    >
                    GOOGLE</motion.a>  
                </Btns>
                <Footer>
                    <Link to='SignUp'
                    ><a>dont have account?</a> </Link>
                </Footer>
            </Container>
        </Master>
        <ToastContainer/>
        </>
     );
}
 
export default SignIN;

const Master = styled(motion.div)`
height: 90vh;
width: 100vw;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`;
const Container = styled.div`
height: max-content;
width: 25vw;
min-width: 18rem;
min-height: 20rem;

border-radius: 11px;
box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.1),
            5px 5px 12px rgba(255, 255, 255, 0.1);

background-color: aliceblue;
`;
const Header = styled.div`
padding: 1rem;
font-size: 1.7rem;
font-weight: 600;
color: #1a1a1adc;
letter-spacing: 1.5px;
display: flex;
justify-content: space-between;

.link{
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    color: aliceblue;
    background-color: #ff3a3a;

    p{
        transform: rotate(45deg);
    }
}
`;
const Content = styled.div`
padding: 1rem;
display: flex;
flex-direction: column;

gap: 0.5rem;

label{
    color: #1a1a1adc;
    font-size: 0.8rem;
}
input{
    background-color: aliceblue;
    outline: 0px;
    border: 0px;
    border-bottom: 1px solid #1a1a1adc;
}
`;
const Btns = styled(motion.div)`
margin: 1rem;
display: flex;
gap: 1rem;
justify-content: space-around;

a{
    height: 40px;
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

}

.sign-in{
    
    &:hover{
    border: 1px solid aliceblue;
    color: aliceblue;
    background-color: #ff4683;
    }
}   
.google{
    background-color: #008cff;
    color: aliceblue;

    &:hover{
        background-color: #2d9ffd;
        border: 1px solid aliceblue;
    }
}
`;
const Footer = styled.div`
margin: 1rem;
text-align: center;
bottom: 0;
`;
const PasswordVisiblity = styled.div`
display: flex;
align-items: center;

input{
    width: 16px;
    height: 16px;
    accent-color: #121212;
}

label{
    color: #1a1a1adc;
    margin: 0px 10px;
}
`;