import {motion} from 'framer-motion';
import styled from 'styled-components';
import NavBar from './NavBar.component';

import { getUserData} from '../app/firebase';
import { useEffect, useState } from 'react';
import AvgHelper from './HighScore-AvgHelper';

const HighScores = () => {

    const [userData, setUserData ] = useState(null);
    const [avgScores, setAvgScores ] = useState(null);
    var demoObj = []
    var temp = []
    var tempo = []

    // console.log('userData', userData)

    useEffect(()=>{
        const gettingData = async () => {
            const data = await getUserData();
            
            if(data){
                data.map((item,index) => {
                    temp[index] = item.score
                })
                
                // sorting
                for (let i = 0; i < temp.length; i++) {
                    for (let j = 0; j < temp.length; j++) {
                        if (temp[j] > temp[j + 1]) {
                            let t = temp[j];
                            temp[j] = temp[j + 1];
                            temp[j + 1] = t;
                        }
                    }
                }
                temp.reverse()

                temp.map((i,index) => {
                    data.map((j) => {
                        if(j.score === i){
                            tempo[index] = j 
                        }
                    })
                })
                
                setUserData(tempo)
            }
            

            tempo.map((item,index) => {
                if(tempo.length>2){
                    if(index>2){
                        demoObj[index-3] = item
                    }
                }
            })
            setAvgScores(demoObj)

        };
        gettingData();
    },[])
    
    return ( 
        <>
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
            <NavBar highScorePageRemover={true} />
            </motion.div>
        <Container
        className='backGround'
            initial={{y:'100%'}}
            animate={{y:0}}
            transition={{type:"spring", stiffness:50}}
        >
            <Master
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                >

                <Wrapper>
                    <Top3>
                        <WrapperBeta className='rank' style={{fontSize:'25px'}}>
                             <motion.p 
                                className='holder'
                                animate={{
                                    scale:[1,1.1,1]
                                }}
                                transition={{ duration:2, repeat:Infinity, type:'spring' }}
                                >
                                2
                                </motion.p> 
                                {userData &&
                                    userData[1] && <><p>{userData[1].displayName}</p> <p>{userData[1].score}</p> </>
                                }
                                </WrapperBeta>

                        <WrapperBeta className='rank' style={{fontSize:'30px'}}>
                            <motion.p 
                                className='holder'
                                animate={{
                                    scale:[1.1,1,1.1]
                                }}
                                transition={{ duration:2, repeat:Infinity, type:'spring' }}
                                >
                                1
                                </motion.p>  
                                {userData &&
                                    userData[0] && <><p>{userData[0].displayName}</p> <p>{userData[0].score}</p> </>
                                }
                                </WrapperBeta>

                        <WrapperBeta className='rank' style={{fontSize:'20px'}}> 
                            <motion.p 
                                className='holder'
                                animate={{
                                    scale:[1,1.1,1]
                                }}
                                transition={{ duration:2, repeat:Infinity, type:'spring' }}
                                >
                                3
                                </motion.p> 
                                {userData &&
                                    userData[2] && <><p>{userData[2].displayName}</p> <p>{userData[2].score}</p> </>
                                }
                                </WrapperBeta>
                    </Top3>
                    <hr/>

                    {
                        userData &&
                        avgScores.map((user,index) => {
                           
                                return(
                                    <AvgHelper key={index} user={user} index={index}  />
                                )
                            
                        
                        }
                        )
                    }

                </Wrapper>
            </Master>
        </Container>
        </>
     );
}
 
export default HighScores;


const Container = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Master = styled.div`
    width: 80vw;
    min-height: 300px;
    margin: 20px;
    border-radius: 11px;
    background-color: #f1f1f1;
    box-shadow: 5px 5px 11px rgba(0,0,0,0.3),
                -5px -5px 11px rgba(255,255,255,0.3);
`;
const Wrapper = styled(motion.div)`
margin: 14px 30px;
height:max-content;
`;
const Top3 = styled(motion.div)`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-end;
margin: 0px;
margin-bottom: 10px;

.rank{
    flex-direction: column;
    align-items: center;
}
.holder{
    width: 37px;
    height: 37px;
    color: #ff8484;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
}
`
const WrapperBeta = styled(motion.div)`
display: flex;
justify-content: space-around;
font-size: 18px;
`;