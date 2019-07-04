import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './submitButton.css'

class SubmitButton extends Component {

    render() {
        return(
            <Button onClick={this.props.clickFunc} id="btn" variant="contained" color="primary">Lookup</Button>
        )
    }

}

export default SubmitButton;