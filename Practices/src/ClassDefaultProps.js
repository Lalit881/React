import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class ClassDefaultProps extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.num}</h4>
        <h4>{this.props.str}</h4>
        <h4>{this.props.arr}</h4>
        <h4>{this.props.bool}</h4>
      </div>
    )
  }
}

ClassDefaultProps.propTypes = {
    num:PropTypes.number

}

ClassDefaultProps.defaultProps = {
    num:12,
    str:"string value",
    arr: [12,"hi",true]

}
