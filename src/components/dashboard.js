import React, { Component, Fragment } from 'react';
import logo from '../map-icon-train.gif';
import ServiceMenu from './serviceMenu';

class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: []
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
                })
            }
        }).catch(err=>{
            console.log(err)
        });
    }    


  render() {
    return (
        <Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Moving London</h1>          
            </header>
            <p className="App-intro">
            Your number one location to get travel updates and get moving.
            </p>

            <ServiceMenu data={this.state.data} />

        </Fragment>
    );
  }
}

export default Dashboard;
