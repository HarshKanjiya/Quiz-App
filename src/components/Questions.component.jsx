import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trueAnswer, falseAnswer, increseCount } from '../fetures/scoreSlice'
const Questions = () => {
    const score = useSelector((state) => state.score.score)
    const count = useSelector((state) => state.score.count)
    const dispatch = useDispatch()

    const [currentQUE, setCurrentQUE ] = useState([]);
    const [resultScreen, setResultScreen ] = useState(false);
    const [correctCounter, setCorrectCounter ] = useState(0);
    const questionBank=[
        [
        "What does CPU stand for?",
        ['Central Process Unit', false],
        ['Computer Personal Unit',false],
        ['Central Processor Unit',false],
        ["Central Processing Unit",true]
        ]
        ,
        
        [
        "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
        ['1100', false],
        ['1000', true],
        ['450', false],
        ["900", false]
        ],
        
        [
        "What is the most preferred image format used for logos in the Wikimedia database?" ,
        ['.gif', false],
        ['.jpeg',false],
        ['.png', false],
        [".svg",true]
        ]
        ,
        
        [
        "On Twitter, what was the original character limit for a Tweet?",
        
        ['121', false],
         ['140', true],
         ['154', false],
         ["120", true]
        ],

        [
        "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
        
        ['green', true],
        ['red', false],
        ['blue', false],
        ["yellow",false]
        ]
        ,

        [
        "The numbering system with a radix of 16 is more commonly referred to as",
        
        ['decimal', false],
        ['binary', false],
        ['hexidecimal', true],
        ["octal",false]
        ],
        
        [
        "This mobile OS held the largest market share in 2012",
        
        ['blackbarry', false],
        ['android',false],
        ['ios', true],
        ["symbian",false]
        ]
    ]
        
    useEffect(()=>{
        setCurrentQUE(questionBank[0])
    },[])
        


    const clickHandler = (option) => {

        if(count<7){
            for(let i = 1; i<5; i++){
                if( currentQUE[i][0] == option){
                    var selector = currentQUE[i]
                }
            }
            if(selector[1] == true ){
                setCorrectCounter(correctCounter + 1)
                dispatch(trueAnswer())
            }
            else{
                dispatch(falseAnswer())
            }
            dispatch(increseCount())
            setCurrentQUE(questionBank[count])
        }
        else{
            
            var current = questionBank[6]
            for(let i=1; i<5; i++){
                if(current[i][0] == option ){
                    var selector = current[i]
                }
            }
            console.log('selector from alsssss', selector)

            if(selector[1] == true ){
                setCorrectCounter(correctCounter + 1)
                dispatch(trueAnswer())
            }
            else{
                dispatch(falseAnswer())
            }
            setResultScreen(true)
        }
        


       
    }

    console.log('currentQUE', currentQUE)

    return ( 
        <>
        {
            !resultScreen &&
            <Master>
                <Extras>
                    <p>COUNT:  { count } </p>
                    <p>SCORE: { score } </p>
                </Extras>
                <Question>
                    <p> {currentQUE[0]} </p>
                </Question>
                <Options>
                    <WrapOPT onClick={(event) => clickHandler(event.target.innerText)}>
                        <p>A</p><span> { currentQUE[1] } </span>
                    </WrapOPT>
                    <hr/>
                    <WrapOPT onClick={(event) => clickHandler(event.target.innerText)}>
                        <p>B</p><span> { currentQUE[2] } </span>
                    </WrapOPT>
                    <hr/>
                    <WrapOPT onClick={(event) => clickHandler(event.target.innerText)}>
                        <p>C</p><span> { currentQUE[3] } </span>
                    </WrapOPT>
                    <hr/>
                    <WrapOPT onClick={(event) => clickHandler(event.target.innerText)}>
                        <p>d</p><span> { currentQUE[4] } </span>
                    </WrapOPT >
                    
                </Options>
                
            </Master>
        }
        {
            resultScreen &&

            <Master>
                <Finalwindow>
                    <span>YOUR SCORE: { score } </span>
                    <br/>
                    <p className="green">CORRECT ANSWERS: { correctCounter }</p>
                    <p className="red">INCORRECT ANSWERS: { 7 - correctCounter }</p>
                    <br/>
                    <p>Sign in to PUBLISH score!</p>
                </Finalwindow>

            </Master>
        }
    </>
    );
}
 
export default Questions;

const Master = styled.div`
height: max-content;
width: 80vw;
padding: 1.2rem;
border-radius: 11px;
display: flex;
flex-direction: column;
align-items: center;
background-color: aliceblue;
box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.2), -2px -2px 11px rgba(255, 255, 255, 0.2);

`;

const Extras = styled.div`
width: 100%;

padding: 0 0.5rem;
padding-bottom: 0.5rem;

display: flex;
justify-content: space-between;

`


const Question = styled.div`
width: 100%;
padding: 0.5rem;
border-radius: 11px;
color:white;
background-color: #3636eb;
`;

const Options = styled.div`
width: 100%;
`;

const WrapOPT = styled.div`
display: flex;
gap: 20px;
padding: 10px;

cursor: pointer;
`;

const Finalwindow = styled.div`
padding: 2rem;
display: flex;
flex-direction: column;

span{
    font-size: 1.4rem;
    font-weight: 600;
    color: #414141;
}

.green{
    color: #00d300;
}
.red{
    color: red;
}
`