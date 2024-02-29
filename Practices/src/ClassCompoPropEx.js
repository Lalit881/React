import React, { Component } from 'react'

export default class ClassCompoPropEx extends Component {

    // prop =23;

    constructor()
    {
        super();
        this.prop =23;
    }

  render() {
    return (
      <div>Class Prop :{this.prop}</div>
    )
  }
}
