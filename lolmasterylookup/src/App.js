import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Components/API/getEncryptedId';

function getSummonername(){
  this.setState({summonername: this.target.value})
}
export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      summonername: '',
      masteries: null
      
    }
  }
  handleInput = (e) => {
    console.log("here")
    this.setState({summonername: e.target.value})
  }
  fetchdata = () => {
    let encryptedID = this.state.masteries.id;
    fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.summonername}?api_key=RGAPI-deade7d2-c393-4041-b3da-de13daf2ffa8`)
    .then(results => {
      return results.json();
  }).then(data =>{
      this.setState({masteries: data});
      console.log("state", this.state)
  })
  }
  render(){
    return (
      <div>
        <input type="text" name="summonername" id="summonername" onChange={this.handleInput}></input>
        {console.log(this.state)}
        <button type='submit' onClick={this.fetchdata}>submit</button>
        <Background></Background>
      </div>
    );
  }
}
export {encryptedID}