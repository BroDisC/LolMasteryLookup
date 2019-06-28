import React, { Component } from 'react';
import App from '../../App';
//import {summonername} from '../../App'

class Background extends Component {
    constructor() {
        super();
        this.state = {
            masteries: [],
        };
    }

    render(){
        return(
            <div className="Container">
                <div className="Container2">
                    {this.state.masteries.id}
                </div>
            </div>
        )
    }
}

export default Background;