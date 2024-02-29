import React from "react";



function simplefun()
{
    alert("Hello Alert...!")
}

export default class About extends React.Component
{

     x= 12;

     y =function simplefun123()
    {
        alert("Hello Alert...!")
    }

    render()
    {
        return(
            <>
            {this.x}
            <h1 onClick={simplefun}>Class Component{this.x} </h1>


            <button onClick={this.y}>Click Me</button>
            </>
        )
    }
}


