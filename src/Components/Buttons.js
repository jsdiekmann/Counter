import React from "react";

export class Land extends React.Component {
  
    render() {
        return (
            <button className='Counter' onClick={this.props.onClick}>
                If By Land!
            </button>
        )
    }
}

export class Sea extends React.Component {

  render() {
      return(
          <button className='TwoTimes' onClick={this.props.onClick}>
              If By Sea!
          </button>
      )
  }
}