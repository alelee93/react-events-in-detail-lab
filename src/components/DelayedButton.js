// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{
    resp = (e) => {
        //console.log(e)
        e.persist()
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)

    }

    render(){
        return(
           <button onClick={(e) => this.resp(e)}>
               "DELAYED BUTTON" 
           </button>
        )
        
    }
}