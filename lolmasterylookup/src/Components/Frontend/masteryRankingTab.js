import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './masteryRankingTab.css';
import MasteryTable from './masteryTable';
import Grid from '@material-ui/core/Grid';
import RankingInfo from './rankingInfo';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class MasteryRankingTab extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue) {
        this.setState({
            value: newValue
        })
    }

    render() {
        return(
            <AppBar color="default" position="static">
                <Tabs variant="fullWidth" indicatorColor="primary" value={this.state.value} onChange={this.handleChange}>
                    <Tab label="Masteries" />
                    <Tab label="Ranked stats" />
                </Tabs>
                {this.state.value === 0 && 
                    <TabContainer>
                        <Grid container spacing={3}>
                            <Grid item md={12}>
                                <h2>{this.props.summonerName}</h2>
                            </Grid>
                        </Grid>

                        <MasteryTable masteries={this.props.masteries}></MasteryTable>
                    </TabContainer>
                }
                {this.state.value === 1 && 
                    <TabContainer>
                        <RankingInfo rankedData={this.props.rankedData}></RankingInfo>
                    </TabContainer>
                }
            </AppBar>
        )
    }
}

export default MasteryRankingTab;