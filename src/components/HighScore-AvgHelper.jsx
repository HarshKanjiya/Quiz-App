import styled from "styled-components"
import { motion } from "framer-motion"

const AvgHelper = ({user,index}) => {
    
    // console.log('user', user)
    return( 
        <>
            <WrapperBeta>
                {
                    <>
                    <p> {index+4} </p>
                    <p> {user.displayName} </p>
                    <p> {user.score} </p>
                    </>
                }
            </WrapperBeta>
            <hr/>
        </>
    )
}
export default AvgHelper;


const WrapperBeta = styled(motion.div)`
display: flex;
justify-content: space-between;
font-size: 18px;
margin: 2px 60px;
`;