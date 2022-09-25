import styled from "styled-components";
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { auth, creatingDocumentforNativeSignUP } from "../app/firebase";
import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUP = ({setSignInWindow}) => {

    const [displayName, setDisplayName ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [viewPassword, changeViewPassword ] = useState(false);

    const navigate = useNavigate();

    const makeDeafult = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
    }

    const signUpHelper = async () => {
        if(email === '' || password === '') return;
        
        await createUserWithEmailAndPassword(auth, email, password)
        // Signed in 
        .then(navigate(-2))
        .catch((error) => {
            switch(error.message)
            {
                case 'Firebase: Error (auth/email-already-in-use).':
                    toast('Email already in use ');
                    break;
                case 'Firebase: Error (auth/network-request-failed).':
                    toast('Connection Lost')
            }
        });

        await creatingDocumentforNativeSignUP(auth.currentUser,{ displayName })
        makeDeafult();
    }

    return ( 
        <>
        <Master
            initial={{ opacity:0, scale:0.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{duration:0.7, type:"spring"}}
            >
            <Container>
                <Header>
                    <p>SIGN UP</p>
                    <Link to='/Game' className="link" onClick={()=>navigate(-2)} ><p>+</p></Link>
                </Header>
                    <hr/>
                <Content>
                <label>DISPLAY NAME</label>
                    <input 
                        value = {displayName} 
                        type = 'email'
                        onChange={(event) => {setDisplayName(event.target.value)}} />
                    <label>E MAIL</label>
                    <input 
                        value = {email} 
                        type = 'email'
                        onChange={(event) => {setEmail(event.target.value)}} />

                    <label>PASSWORD</label>
                    <input 
                        value = {password} 
                        type = {viewPassword ? 'text':'password'}
                        onChange={(event) => {setPassword(event.target.value)}} />
                    <PasswordVisiblity>
                        <input 
                            id="checkBox"
                            type='checkbox' 
                            onClick={()=>changeViewPassword(!viewPassword)}
                        />
                        <label>Show Password</label>
                    </PasswordVisiblity>
                </Content>
                <Btns
                whileTap={{scale:1.1}}
                >
                  <a className="sign-in" onClick={signUpHelper}>CREATE NEW ACCOUNT</a>  
                </Btns>
                <Footer>
                    <p 
                    style={{cursor:"pointer"}}
                    onClick={()=>navigate(-1)}>Already have account?</p>
                </Footer>
            </Container>
        </Master>
        <ToastContainer/>
        </>
     );
}
 
export default SignUP;

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
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #fd4b68;
    color: #f1f1f1;
    font-weight: 400;

}   
`;
const Footer = styled.div`
margin: 1rem;
text-align: center;

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