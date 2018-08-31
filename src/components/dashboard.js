import React, { Component, Fragment } from 'react';
import logo from '../map-icon-train.gif';
import ServiceMenu from './serviceMenu';

import Grid from '@material-ui/core/Grid';

class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
            fetching: true
        }
    }

    componentDidMount(){
        
        fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true ').then(response => {
            if(response.status !== 200){
                console.log('There has been a problem retrieving the data you requested. Error code is: ' + response.status);
                return
            }
            else {
                response.json().then( response => {
                    this.setState({data: response});
                    this.setState({fetching: false});
                })
            }
        }).catch(err=>{
            console.log(err)
        });
    }

  render() {
    return (
        <Fragment>
            <Grid item xs={12}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Moving London</h1>          
                </header>
                <h2>Services Noticeboard</h2>

                {this.state.fetching ? <Spinner />: <ServiceMenu data={this.state.data} />}
            </Grid>

        </Fragment>
    );
  }
}

export default Dashboard;
