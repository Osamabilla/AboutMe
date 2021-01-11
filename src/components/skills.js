import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';


class SKills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{padding: "1em"}}>{this.props.skill} <ProgressBar style={{margin: 'auto', width: '75%', marginTop: '1em'}}
                     progress={this.props.progress}/></div>
                </Cell>
            </Grid>
        )
    }
}

export default SKills;