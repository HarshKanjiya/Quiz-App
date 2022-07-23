import SignUP from "./signUP.component";
import SignIN from './signIN.component'
import NavBar from "./NavBar.component";
import { useState } from "react";
const Logwindow = () => {
    const [signInWindow, setSignInWindow ] = useState(true);
    return (
    <>
        <NavBar/>
        {signInWindow ? <SignIN setSignInWindow={setSignInWindow} /> 
        :
        <SignUP setSignInWindow={setSignInWindow} />}    
    </> 
    );
}
 
export default Logwindow;