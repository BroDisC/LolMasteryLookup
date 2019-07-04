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
      server: '',
      displayTab: false,
      rankedData: null
    }
  }
  handleInput = (e) => {
    this.setState({summonername: e.target.value});
  }
  handleSelect = (e) => {
    this.setState({server: e.target.value});
  }
  getEncryptedID = () => {
    fetch(`https://${this.state.server}1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.summonername}?api_key=RGAPI-3c84ae4c-3ae7-4a0b-ac07-5ba519e99a0f`)
    .then(results => {
      return results.json();
    }).then(data =>{
      this.setState({summonerData: data});
      this.setState({encryptedID: this.state.summonerData.id});

      fetch(`https://${this.state.server}1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${this.state.encryptedID}?api_key=RGAPI-3c84ae4c-3ae7-4a0b-ac07-5ba519e99a0f`)
      .then(results => {
        return results.json();
      }).then(data =>{
        this.setState({masteryData: data});
        this.setState({displayTab: true});

        fetch(`https://${this.state.server}1.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.state.encryptedID}?api_key=RGAPI-3c84ae4c-3ae7-4a0b-ac07-5ba519e99a0f`)
        .then(results => {
          return results.json();
        }).then(data =>{
          this.setState({rankedData: data[1]});
        });
      });
    });
  }
  render(){
    let masteryTab = null;

    if (this.state.displayTab) {
      masteryTab = (
        <Grid item md={12}>
          <MasteryRankingTab masteries={this.state.masteryData} summonerName={this.state.summonerData.name} rankedData={this.state.rankedData}></MasteryRankingTab>
        </Grid>
      )
    }
    return (
      <div>
        <Container maxWidth="lg">
          <h1>LoL Mastery Lookup</h1>
          <Grid container spacing={3}>
            <Grid item md={5}>
              <InputText changeFunc={this.handleInput}></InputText>
            </Grid>
            <Grid item md={3}>
              <ServerSelect changeFunc={this.handleSelect} server={this.state.server}></ServerSelect>
            </Grid>
            <Grid item md={4}>
              <SubmitButton clickFunc={this.getEncryptedID}></SubmitButton>
            </Grid>
            {masteryTab}
          </Grid>
        </Container>
      </div>
    );
  }
}