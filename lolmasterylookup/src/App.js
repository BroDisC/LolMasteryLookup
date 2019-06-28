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
        <button type='submit' onClick={this.fetchdata}>submit</button>
      </div>
    );
  }
}
export {}