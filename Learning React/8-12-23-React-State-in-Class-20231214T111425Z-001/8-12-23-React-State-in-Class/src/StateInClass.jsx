import React, { Component } from 'react'

export default class StateInClass extends Component {


    state = {count:0};

    xyz = ()=>{

        // this.setState({count:"hi"});

        // this.setState(()=>(
        //     {count:"hi"}
             
        // ))

        // this.setState(()=>(

        //     {count:this.state.count+1}

        // ))

        this.setState((prevState)=>(
            console.log(prevState)//{count:0}
            // {count:prevState.count+1}
        ))

       
    }

  render() {
    return (
      <div className='App'>

            <h6>{this.state.count}</h6>
        
        <button onClick={this.xyz}>Change State</button>
      </div>
    )
  }
}
