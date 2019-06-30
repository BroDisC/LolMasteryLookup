import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputText from './Components/Frontend/inputText';
import ServerSelect from './Components/Frontend/serverSelect';
import SubmitButton from './Components/Frontend/submitButton';
import MasteryRankingTab from './Components/Frontend/masteryRankingTab';


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      summonername: '',
      summonerData: null,
      encryptedID: '',
      masteryData: null,
      displayTab: false
    }
  }
  handleInput = (e) => {
    console.log("here")
    this.setState({summonername: e.target.value})
  }
  getEncryptedID = () => {
    fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.summonername}?api_key=RGAPI-ac88290a-e1e4-41d8-ade9-735b614d6a07`)
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({summonerData: data});
      this.setState({encryptedID: this.state.summonerData.id});

      fetch(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${this.state.encryptedID}?api_key=RGAPI-ac88290a-e1e4-41d8-ade9-735b614d6a07`)
      .then(results => {
        return results.json();
      }).then(data =>{
        this.setState({masteryData: data});
        this.setState({displayTab: true});
      });
    });
  }
  render(){
    let masteryTab = null;

    if (this.state.displayTab) {
      masteryTab = (
        <Grid item md={12}>
          <MasteryRankingTab masteries={this.state.masteryData}></MasteryRankingTab>
        </Grid>
      )
    }
    return (
      <div>
        <Container maxWidth="lg">
          <h1>LoL Mastery Lookup</h1>
          <Grid container spacing={3}>
            <Grid item md={5}>
              <InputText></InputText>
            </Grid>
            <Grid item md={3}>
              <ServerSelect></ServerSelect>
            </Grid>
            <Grid item md={4}>
              <SubmitButton></SubmitButton>
            </Grid>
            {masteryTab}
          </Grid>
        </Container>
        <input type="text" name="summonername" id="summonername" onChange={this.handleInput}></input>
        {console.log(this.state)}
        <button type='submit' onClick={this.getEncryptedID}>submit</button>
      </div>
    );
  }
}