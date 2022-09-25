import '../App.css';
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogWindow } from "../fetures/scoreSlice";
import { trueAnswer, falseAnswer, increseCount, resetBtn } from '../fetures/scoreSlice';
import { motion } from 'framer-motion';

const Questions = () => {
    const score = useSelector((state) => state.score.score)
    const count = useSelector((state) => state.score.count)
    const OptionA = useRef(null);
    const OptionB = useRef(null);
    const OptionC = useRef(null);
    const OptionD = useRef(null);
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
         ['140', false],
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
        
            
             for(let i = 1; i<5; i++){
                 if( currentQUE[i][1] == true){
                     if(option==i){
                        setCorrectCounter(correctCounter + 1);
                        dispatch(trueAnswer());
                         if(option==1){
                             OptionA.current.classList.add("trueOPT");
                         }
                         else if(option==2){
                             OptionB.current.classList.add("trueOPT");

                         }
                         else if(option==3){
                             OptionC.current.classList.add("trueOPT");

                         }
                         else if(option==4){
                             OptionD.current.classList.add("trueOPT");

                         }
                         setTimeout(() => {
                            if(option==1){
                                OptionA.current.classList.remove("trueOPT");
                            }
                            else if(option==2){
                                OptionB.current.classList.remove("trueOPT");
   
                            }
                            else if(option==3){
                                OptionC.current.classList.remove("trueOPT");
   
                            }
                            else if(option==4){
                                OptionD.current.classList.remove("trueOPT");
   
                            }
                            dispatch(increseCount())
                            if(count==7){
                                
                             setResultScreen(true)
                            }
                            setCurrentQUE(questionBank[count])
                            
                         }, 1000);
                     }
                     else{
                        dispatch(falseAnswer())
                        if(option==1){
                            OptionA.current.classList.add("falseOPT");
                        }
                        else if(option==2){
                            OptionB.current.classList.add("falseOPT");

                        }
                        else if(option==3){
                            OptionC.current.classList.add("falseOPT");

                        }
                        else if(option==4){
                            OptionD.current.classList.add("falseOPT");

                        }
                        setTimeout(() => {
                           if(option==1){
                               OptionA.current.classList.remove("falseOPT");
                           }
                           else if(option==2){
                               OptionB.current.classList.remove("falseOPT");
  
                           }
                           else if(option==3){
                               OptionC.current.classList.remove("falseOPT");
  
                           }
                           else if(option==4){
                               OptionD.current.classList.remove("falseOPT");
  
                           }
                           dispatch(increseCount())
                           if(count==7){
                               
                            setResultScreen(true)
                           }
                           setCurrentQUE(questionBank[count])
                           
                        }, 800);
                     }
                 }
             }      
    }

    
    return ( 
        <>
        {
            !resultScreen ?(  
            <Master
            >
                <Extras>
                    <p>COUNT:  { count } </p>
                    <p>SCORE: { score } </p>
                </Extras>
                <Question>
                    <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                    > {currentQUE[0]} </motion.p>
                </Question>
                <Options>
                    <WrapOPT
                        className="opt" 
                        ref={OptionA}  
                        onClick={() => clickHandler(1)}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1}}
                        >
                        <p>A</p><span> { 
                        currentQUE[1] } </span>
                    </WrapOPT>
                    <hr/>
                    <WrapOPT 
                        className="opt" 
                        ref={OptionB} 
                        onClick={() => clickHandler(2)}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1}}
                        >
                        <p>B</p><span> { currentQUE[2] } </span>
                    </WrapOPT>
                    <hr/>
                    <WrapOPT 
                        className="opt" 
                        ref={OptionC} 
                        onClick={() => clickHandler(3)}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1}}>
                        <p>C</p><span> { currentQUE[3] } </span>
                    </WrapOPT>
                    <hr/>
                    <WrapOPT 
                        className="opt" 
                        ref={OptionD} 
                        onClick={() => clickHandler(4)}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1}}
                        >
                        <p>d</p><span> { currentQUE[4] } </span>
                    </WrapOPT >
                    
                </Options>
                
            </Master>):
            (<Master>
                <Finalwindow
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{ duration:1}}
                    >
                    <span>YOUR SCORE: { score } </span>
                    <br/>
                    <p className="green">CORRECT ANSWERS: { correctCounter }</p>
                    <p className="red">INCORRECT ANSWERS: { 7 - correctCounter }</p>
                    <br/>
                    <p style={{display:'flex', alignItems:'center'}}><motion.p
                        className='sign-in-span'
                        initial={{y:-2}}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:1}}

                    >Sign in</motion.p> to PUBLISH score!</p>
                </Finalwindow>

            </Master>)
        }
        
        
    </>
    );
}
 
export default Questions;

const Master = styled(motion.div)`
height: max-content;
width: 80vw;
padding: 1.2rem;
border-radius: 11px;
display: flex;
flex-direction: column;
align-items: center;
background-color: aliceblue;
box-shadow: 5px 5px 11px rgba(0,0,0,0.3),
                -5px -5px 11px rgba(255,255,255,0.3);

.sign-in-span{
    padding: 5px;
    border-radius: 7px;
    font-weight: 400;
    font-size: 21px;
    color: #0059ff;
}
`;
const Extras = styled.div`
width: 100%;

padding: 0 0.5rem;
padding-bottom: 0.5rem;

display: flex;
justify-content: space-between;

`;
const Question = styled.div`
width: 100%;
padding: 0.5rem;
border-radius: 11px;
color:white;
background-color: #464646;
`;
const Options = styled.div`
width: 100%;
`;
const WrapOPT = styled(motion.div)`
display: flex;
gap: 20px;
padding: 10px;

cursor: pointer;
`;
const Finalwindow = styled(motion.div)`
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
`;
const Footer = styled.div`
height: auto;
width: 100%;

display: flex;
gap: 15px;
justify-content: end;
align-items: center;


`;
const Btn = styled.button`
height: 2rem;
width: 3rem;
background-color: #f54343;
color: aliceblue;
border: 1px solid aliceblue;
border-radius: 7px;

&:hover{
    background-color: #ff0000;

    scale: 1.04;
}

`;