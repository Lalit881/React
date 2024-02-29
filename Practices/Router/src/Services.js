import React from "react";
import { Link, Outlet } from "react-router-dom";
function Services(){
    return(
        <>
        <Link to="Service1" >Service1</Link>
        <Link to="Service2" >Service2</Link>
        <Link to="Service3" >Service3</Link>
        <Outlet/>
        </>
    )
}

export default Services;