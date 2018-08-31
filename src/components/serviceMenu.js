import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

class ServiceMenu extends Component {

  render() {
    return (
      <div className="ServiceMenu">
        <Paper>
          <MenuList>
            {this.props.data.map(
              (row, index) => {
                return(
                  <MenuItem key={index}>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={row.name} />
                  </MenuItem>               
                );     
              }
            )}
            </MenuList>
        </Paper>
      </div>
    );
  }

}

export default ServiceMenu;
