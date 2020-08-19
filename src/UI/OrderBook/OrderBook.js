import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import './OrderBook.css'
const OrderBook = (props) => {
  const useStyles = makeStyles({
    table: {

        border: "solid 1px #21252a",
        maxWidth:"100%",
      backgroundColor: "#171b20",
      color: "#ADADAD",
    },
    root: {
  
        height:350,
        backgroundColor: "#171b20",

    },
    OrderBooktableCellP:{
      color: "#0080fe",borderBottom:"solid 1px #21252a"
    },
    OrderBooktableCellN:{
      color: "#f36876",borderBottom:"solid 1px #21252a"
    },
    OrderTableRowCell:{
      borderColor:"transparent",borderRight:"solid 1px #21252a" ,color: "#ADADAD"
    }
  });
  function createData(sell, size, price, size1, buy1) {
    return { sell, size, price, size1, buy1 };
  }
  const rows = [
    createData(null, "0.00005", <span className="PriceP" >12060</span>, null, null),
    createData(null, "0.00005", <span className="PriceP">12060</span>, null, null),
    createData(null, "0.00005", <span className="PriceP">12060</span>, null, null),
    createData(null, "0.00005", <span className="PriceP">12060</span>, null, null),
    createData(null, null, <span className="PriceN">12060</span>, "0.00005", null),
    createData(null, null, <span className="PriceN">12060</span>, "0.00005", null),
    createData(null, null, <span className="PriceN">12060</span>, "0.00005", null),
    createData(null, null, <span className="PriceN">12060</span>, "0.00005", null),
  
  ];
  const classes = useStyles();
  return (

      <div className="OrderBookContainer" >
          <h4 style={{color:"white"}}>Order Book</h4>
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell className={classes.OrderBooktableCellP} style={{ borderleft: "solid 1px #21252a", }}>Sell</TableCell>
            <TableCell className={classes.OrderBooktableCellP} align="right">
              Size
            </TableCell>
            <TableCell className={classes.OrderBooktableCellP}  style={{ color: "#ADADAD" }} align="right">
              Price
            </TableCell>
            <TableCell  className={classes.OrderBooktableCellN}  align="right">
              Size
            </TableCell>
            <TableCell className={classes.OrderBooktableCellN} align="right">
              Buy
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) =>
          
          {console.log(row)
              return(
            <TableRow   key={row.sell}>
              <TableCell className={classes.OrderTableRowCell} component="th" scope="row">
                {row.sell}
              </TableCell>
              <TableCell className={classes.OrderTableRowCell} align="right">{row.size}</TableCell>
              <TableCell className={classes.OrderTableRowCell} style={{color: "#ADADAD" }} align="right">{row.price}</TableCell>
              <TableCell className={classes.OrderTableRowCell}  align="right">{row.size1}</TableCell>
              <TableCell style={{borderColor:"transparent",color: "#f36876" }} align="right">{row.buy1}</TableCell>
            </TableRow>
          )})}
          
        </TableBody>
        
        
      </Table>
      
    </TableContainer>
    <br></br>
    <div className="ordericon" >
    <CloseIcon style={{color:"#0080fe"}}></CloseIcon>
    <AddIcon style={{color:"#0080fe"}}></AddIcon>
    <RadioButtonCheckedIcon style={{color:"#0080fe"}}></RadioButtonCheckedIcon>
    <RemoveIcon style={{color:"#0080fe"}}></RemoveIcon>
    <CloseIcon style={{color:"#0080fe"}}></CloseIcon>
    </div>
    <br></br>
    </div>
  );
};

export default OrderBook;
