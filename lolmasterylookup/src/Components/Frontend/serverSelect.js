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
            servers: [],
            serversFromJson: []
        };
    }

    componentWillMount() {
        let serversFromJson = leagueServers.map(server => { return {value: server.abbreviation} });

        this.setState({
            servers: [{value: ''}].concat(serversFromJson)
        })
    }


    render() {
        return(
            <FormControl id="formControl">
                <InputLabel htmlFor="serverSelect">Server</InputLabel>
                <Select id="serverSelect" value={this.props.server} onChange={this.props.changeFunc}>
                    {this.state.servers.map((server) => <MenuItem key={server.value} value={server.value}>{server.value}</MenuItem>)}
                </Select>
            </FormControl>
        )
    }
}

export default ServerSelect;