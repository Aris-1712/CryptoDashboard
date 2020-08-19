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
    //   minWidth: 650,
      backgroundColor:"#171b20",
      color:'#ADADAD',
      
      overflowX:"hidden"
    },
    tablcellHeadStyle:{
      color:"#ADADAD",borderColor:"#171b20"
    }
  });
  
  function createData( pair, price, change, icon ) {
    return { pair, price, change, icon };
  }
  
  const rows = [
    createData('BTC/USDT', '11,800',<span style={{color:"#f37668"}}>+3.15%</span>,<span><StarRateIcon></StarRateIcon></span>),
    createData('BTC/USDT', '11,800',<span style={{color:"#f37668"}}>+3.15%</span>,<span><StarRateIcon></StarRateIcon></span>),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
   const MarketTable=(props)=> {
    const classes = useStyles();
  
    return (
      <TableContainer style={{backgroundColor:"#171b20"}} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell className={classes.tablcellHeadStyle} >Pair</TableCell>
              <TableCell className={classes.tablcellHeadStyle}  align="right">Price</TableCell>
              <TableCell className={classes.tablcellHeadStyle}  align="right">Change</TableCell>
              <TableCell className={classes.tablcellHeadStyle} align="right"></TableCell>
              {/* <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right">Est. Value</TableCell>
              <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right">Profit/Loss(%)</TableCell>
              <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right">Profit/Loss</TableCell>
              <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right">Available Balance</TableCell>
              <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right"><StarRateIcon></StarRateIcon></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow  key={row.pair}>
                <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} component="th" scope="row">
                  {row.pair}
                </TableCell>
                {/* <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right">{row.name}</TableCell> */}
                <TableCell  className={classes.tablcellHeadStyle} align="right">{row.price}</TableCell>
                <TableCell  className={classes.tablcellHeadStyle} align="right">{row.change}</TableCell>
                <TableCell  className={classes.tablcellHeadStyle} align="right">{row.icon}</TableCell>
                {/* <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right">{row.Est}</TableCell>
                <TableCell style={{color:"#ADADAD",borderColor:"#171b20",color:"#f36876"}} align="right">{row.ProfitPer}</TableCell>
                <TableCell style={{color:"#ADADAD",borderColor:"#171b20",color:"#f36876"}} align="right">{row.Profit}</TableCell>
                <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right">{row.Available}</TableCell>
                <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} align="right"><StarRateIcon></StarRateIcon></TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  export default MarketTable