import styled from "styled-components";
import NavBar from "./NavBar.component";
import Questions from "./Questions.component";
import {motion} from 'framer-motion'

const Game = () => {
    
    

   
    return ( 
        <Container
        >
            <motion.div
            style={{
                position: "absolute",
                top:0,
                left: 0,
                zIndex:2
            }}
            initial={{y:'-100%'}}
            animate={{y:0}}
            transition={{duration:0.8, type:"spring",stiffness:30}}
            >
            <NavBar/>
            </motion.div>
            <Master
                    className='backGround'
                    >
                <Wrapper
                initial={{y:'100%'}}
                animate={{y:0}}
                transition={{type:"spring", stiffness:50}}
                >    
                    <Questions  />
                </Wrapper>
            </Master>
        </Container>
     );
}
 
export default Game;

const Container = styled.div`
height: 100vh;
width: 100vw;
overflow: hidden;
`;
const Master = styled.div`
height: 100vh;
width: 100vw;
overflow: hidden;

display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled(motion.div)`
box-shadow: 5px 5px 25px rgba(0,0,0,0.1);
`;