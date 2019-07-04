import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './rankingInfo.css'

class RankingInfo extends Component {
    constructor() {
        super();
        this.getWinrate = this.getWinrate.bind(this);
    }

    getWinrate() {
        Number((6.688689).toFixed(1))
        return Number((this.props.rankedData.wins / (this.props.rankedData.wins + this.props.rankedData.losses) * 100).toFixed(1));
    }

    render() {
        return(
            <Grid container spacing={3}>
                <Grid item md={3}></Grid>
                <Grid item md={3}>
                    <h1>{this.props.rankedData.summonerName}</h1>
                </Grid>
                <Grid item md={3}>
                    <h1><font color="green">{this.props.rankedData.wins}W </font><font color="red">{this.props.rankedData.losses}L</font></h1>
                </Grid>
                <Grid item md={3}></Grid>
                <Grid item md={3}></Grid>
                <Grid item md={3}>
                    <h1>{this.props.rankedData.tier} {this.props.rankedData.rank} {this.props.rankedData.leaguePoints}LP</h1>
                </Grid>
                <Grid item md={3}>
                    <h1>{this.getWinrate()}% Winrate</h1>
                </Grid>
                <Grid item md={3}></Grid>
            </Grid>
        )
    }
}

export default RankingInfo;