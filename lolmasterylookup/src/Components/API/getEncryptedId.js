import React, { Component } from 'react';
import App from '../../App';

class Background extends Component {
    constructor() {
        super();
        this.state = {
            masteries: [],
    };
}

componentDidMount(){
    fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/PsychoCooki?api_key=RGAPI-c60084c5-dd91-4a58-bf8f-d369e3329941')
    .then(results => {
        return results.json();
    }).then(data =>{
        this.setState({masteries: data});
        console.log("state", this.state.data)
    })
    
    
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