// your Bomb code here!
import React, { Component } from 'react';
import initialCount from './index.js';

class Bomb extends Component {
state = {
    secondsLeft: [this.props.initialCount]
}



render() {
    if(this.state.secondsLeft){
        return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    } else {
        return <p>Boom!</p>
    }
}

}

export default Bomb;