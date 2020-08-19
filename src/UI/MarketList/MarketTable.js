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
          
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow  key={row.pair}>
                <TableCell style={{color:"#ADADAD",borderColor:"#171b20"}} component="th" scope="row">
                  {row.pair}
                </TableCell>
               
                <TableCell  className={classes.tablcellHeadStyle} align="right">{row.price}</TableCell>
                <TableCell  className={classes.tablcellHeadStyle} align="right">{row.change}</TableCell>
                <TableCell  className={classes.tablcellHeadStyle} align="right">{row.icon}</TableCell>
        
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  export default MarketTable