import React from "react";

class TestProp extends React.Component
{

    // props = {
    //     name:jhello
    // }
    render()
    {
        return(

            <>
            <h4>{this.props.name}</h4>
            <h4>{this.props.email}</h4>
            <h4>{this.props.address.city}</h4>
            <h4>{this.props.address.area}</h4>

            
            </>
        )
    }
}

export default TestProp;