import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class InputText extends Component {

render() {
    return(
        <TextField label="Summoner Name" margin="dense" variant="outlined" />
    )
}

}

export default InputText;