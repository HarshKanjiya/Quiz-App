import styled from "styled-components";

const SignUP = ({setSignInWindow}) => {

    const windowHelper = () => {
        setSignInWindow(true)
    }
    return ( 
        <>
        <Master>
            <Container>
                <Header>
                    <p>SIGN UP</p>
                    <hr/>
                </Header>
                <Content>
                    <label>E MAIL</label>
                    <input/>

                    <label>PASSWORD</label>
                    <input/>
                </Content>

                <Btns>
                  <a className="sign-in">CREATE NEW ACCOUNT</a>  
                </Btns>
                <Footer>
                    <a onClick={windowHelper}>Already have account?</a>
                </Footer>
            </Container>
        </Master>
        </>
     );
}
 
export default SignUP;

const Master = styled.div`
height: 90vh;
width: 100vw;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`;

const Container = styled.div`
height: 50vh;
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
`

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
`

const Btns = styled.div`
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
    transition:300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover{
    background-color: #1fff45;
    border: 1px solid aliceblue;
    color: #f1f1f1;
    }
}   
`;

const Footer = styled.div`
padding: 0 1rem;
text-align: center;
a{
    padding: 0.2rem;
}    
`;