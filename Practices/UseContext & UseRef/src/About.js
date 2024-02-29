import React,{useContext} from "react";
import { prop } from "./UseContextHook";

function About(){
    const t = useContext(prop)
    return(
        <>
            <div>About {t} </div>
        </>
    )
}

export default About;