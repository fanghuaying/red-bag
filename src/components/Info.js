import React, { Component } from 'react'

class Info extends Component{
    render() {
        return (
            <div className = "alert-info">{this.props.test}</div>
        )
    }
}
export default Info