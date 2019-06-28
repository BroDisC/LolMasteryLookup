import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import InputText from './Components/Frontend/inputText';
import ServerSelect from './Components/Frontend/serverSelect';
import SubmitButton from './Components/Frontend/submitButton';

function App() {
  return (
    <Container maxWidth="sm">
      <h1>LoL Mastery Lookup</h1>
      <form>
        <InputText></InputText>
        <ServerSelect></ServerSelect>
        <SubmitButton></SubmitButton>
      </form>
    </Container>
  );
}

export default App;
