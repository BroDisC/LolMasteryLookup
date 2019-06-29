import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputText from './Components/Frontend/inputText';
import ServerSelect from './Components/Frontend/serverSelect';
import SubmitButton from './Components/Frontend/submitButton';


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      summonername: '',
      summonerData: null,
      encryptedID: '',
      masteryData: null

      
    }
  }
  handleInput = (e) => {
    console.log("here")
    this.setState({summonername: e.target.value})
  }
  getEncryptedID = () => {
    fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.summonername}?api_key=RGAPI-805a7084-d3fd-4a7c-836d-b61ef14f6210`)
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({summonerData: data});
      this.setState({encryptedID: this.state.summonerData.id})
    }).then(
    fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${this.state.encryptedID}?api_key=RGAPI-805a7084-d3fd-4a7c-836d-b61ef14f6210`)
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({masteryData: data});
    }))
  }
  render(){
    return (
      <div>
        <Container maxWidth="sm">
          <h1>LoL Mastery Lookup</h1>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <InputText></InputText>
            </Grid>
            <Grid item xs={4}>
              <ServerSelect></ServerSelect>
            </Grid>
            <Grid item xs={3}>
              <SubmitButton></SubmitButton>
            </Grid>
          </Grid>
        </Container>
        <input type="text" name="summonername" id="summonername" onChange={this.handleInput}></input>
        {console.log(this.state)}
        <button type='submit' onClick={this.getEncryptedID}>submit</button>
      </div>
    );
  }
}