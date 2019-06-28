import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import leagueServers from '../../files/leagueServers.json';
import './serverSelect.css';

class ServerSelect extends Component {
    constructor() {
        super();
        this.state = {
            selectedServer: "",
            servers: [],
            serversFromJson: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            selectedServer: event.target.value
        })
    }

    componentWillMount() {
        this.state.serversFromJson = leagueServers.map(server => { return {value: server.abbreviation} })
        this.state.servers = [{value: ''}].concat(this.state.serversFromJson);
    }


    render() {
        return(
            <FormControl id="formControl">
                <InputLabel htmlFor="serverSelect">Server</InputLabel>
                <Select id="serverSelect" value={this.state.selectedServer} onChange={this.handleChange}>
                    {this.state.servers.map((server) => <MenuItem key={server.value} value={server.value}>{server.value}</MenuItem>)}
                </Select>
            </FormControl>
        )
    }
}

export default ServerSelect;