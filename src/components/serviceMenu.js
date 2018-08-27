import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ServiceMenu extends Component {

  render() {
    return (
      <div className="ServiceMenu">
        <Paper>
        <Table >
            <TableHead>
            <TableRow>
                {/* <TableCell>Dessert (100g serving)</TableCell>
                <TableCell numeric>Calories</TableCell>
                <TableCell numeric>Fat (g)</TableCell>
                <TableCell numeric>Carbs (g)</TableCell>
                <TableCell numeric>Protein (g)</TableCell> */}
                <TableCell>Service Name</TableCell>
                <TableCell>Mode</TableCell>
                <TableCell>Operation</TableCell>
                <TableCell>Line Statuses</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {this.props.data.map(row => {
                return (
                <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {row.modeName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {row.serviceTypes[0].name ? <span>day</span> : <span>night&day</span>}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {row.lineStatuses[0].statusSeverity !==10 ? <span>Service Disruptions</span> : <span>{row.lineStatuses[0].statusSeverityDescription}</span>}
                    </TableCell>                                                     
                    {/* <TableCell numeric>{row.calories}</TableCell>
                    <TableCell numeric>{row.fat}</TableCell>
                    <TableCell numeric>{row.carbs}</TableCell>
                    <TableCell numeric>{row.protein}</TableCell> */}
                </TableRow>
                );
            })}
            </TableBody>
        </Table>
        </Paper>
      </div>
    );
  }
} 

export default ServiceMenu;
