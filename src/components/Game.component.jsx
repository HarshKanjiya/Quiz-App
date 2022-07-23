import styled from "styled-components";
import NavBar from "./NavBar.component";
import Questions from "./Questions.component";
import { useSelector, useDispatch } from 'react-redux'
import { falseAnswer, trueAnswer } from "../fetures/scoreSlice";

const Game = () => {
    
    const score = useSelector((state) => state.score.score)
    const dispatch = useDispatch()

   
    return ( 
        <Container>
            <NavBar/>
            <Master>
                <Wrapper>    
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
const Wrapper = styled.div`

`;