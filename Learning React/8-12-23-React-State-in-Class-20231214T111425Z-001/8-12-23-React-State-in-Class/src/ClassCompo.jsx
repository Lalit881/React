
import React from "react"

function getAlert()
{
    alert("This is Class Component..!");
}

class Test2 extends React.Component
{

     x=123;


    getAlert1()
        {
            alert("This is Class Component123..!");
        }

    render()
    {
        return(
            <>
           <button onClick={getAlert}>Alert1</button>
           <button onClick={this.getAlert1}>Alert2</button>
            </>
        )
    }
}

export default Test2;