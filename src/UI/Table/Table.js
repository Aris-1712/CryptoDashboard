import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StarRateIcon from '@material-ui/icons/StarRate';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
      backgroundColor:"#171b20",
      color:'#ADADAD',
      // borderColor:'yellow',
      overflowX:"hidden"
    },
    headCell:{
      color:"#ADADAD",borderColor:"#171b20"
    }
  });
  
  function createData(name, Balance, Average, Buy, Est,ProfitPer,Profit,Available) {
    return { name, Balance, Average, Buy, Est,ProfitPer,Profit,Available };
  }
  
  const rows = [
    createData('ETH (Ethereum)', '0.18 ETH','10,000 USDT','1,800 USDT','0.0000 USDT','-100.00%','-1,800.0000 USDT','0.01 ETH'),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
   const TableTab=(props)=> {
    const classes = useStyles();
  
    return (
      <TableContainer  component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell className={classes.headCell} >Name</TableCell>
              <TableCell  className={classes.headCell} align="right">Balance</TableCell>
              <TableCell className={classes.headCell} align="right">Average Price</TableCell>
              <TableCell  className={classes.headCell} align="right">Buy Value</TableCell>
              <TableCell  className={classes.headCell} align="right">Est. Value</TableCell>
              <TableCell  className={classes.headCell}align="right">Profit/Loss(%)</TableCell>
              <TableCell  className={classes.headCell}align="right">Profit/Loss</TableCell>
              <TableCell  className={classes.headCell} align="right">Available Balance</TableCell>
              <TableCell  className={classes.headCell} align="right"><StarRateIcon></StarRateIcon></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow  key={row.name}>
                <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} component="th" scope="row">
                  {row.name}
                </TableCell>
                {/* <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right">{row.name}</TableCell> */}
                <TableCell className={classes.headCell} align="right">{row.Balance}</TableCell>
                <TableCell className={classes.headCell} align="right">{row.Average}</TableCell>
                <TableCell className={classes.headCell} align="right">{row.Buy}</TableCell>
                <TableCell className={classes.headCell} align="right">{row.Est}</TableCell>
                <TableCell className={classes.headCell} style={{color:"#f36876"}} align="right">{row.ProfitPer}</TableCell>
                <TableCell className={classes.headCell} style={{color:"#f36876"}} align="right">{row.Profit}</TableCell>
                <TableCell className={classes.headCell} align="right">{row.Available}</TableCell>
                <TableCell className={classes.headCell} align="right"><StarRateIcon></StarRateIcon></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  export default TableTab