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
const OrderBook = (props) => {
  const useStyles = makeStyles({
    table: {
    //   height:300,
        border: "solid 1px #21252a",
        maxWidth:"100%",
      backgroundColor: "#171b20",
      color: "#ADADAD",
    },
    root: {
        // padding:10,
        height:350,
        backgroundColor: "#171b20",
    //   borderleft: "solid 1px #21252a",
    //   borderTop:"solid 1px #21252a",
    //   borderBottom:"solid 1px #21252a",
    },
  });
  function createData(sell, size, price, size1, buy1) {
    return { sell, size, price, size1, buy1 };
  }
  const rows = [
    createData(null, "0.00005", 12060, null, null),
    createData(null, "0.00005", 12060, null, null),
    createData(null, "0.00005", 12060, null, null),
    createData(null, "0.00005", 12060, null, null),
    createData(null, null, 12060, "0.00005", null),
    createData(null, null, 12060, "0.00005", null),
    createData(null, null, 12060, "0.00005", null),
    createData(null, null, 12060, "0.00005", null),
    // createData(null, "0.00005", 12060, null, null),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  const classes = useStyles();
  return (
      <div style={{marginLeft:10,marginRight:10}}>
          <h4 style={{color:"white"}}>Order Book</h4>
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell style={{ color: "#0080fe",borderBottom:"solid 1px #21252a",borderleft: "solid 1px #21252a", }}>Sell</TableCell>
            <TableCell style={{ color: "#0080fe",borderBottom:"solid 1px #21252a" }} align="right">
              Size
            </TableCell>
            <TableCell style={{ color: "#ADADAD",borderBottom:"solid 1px #21252a" }} align="right">
              Price
            </TableCell>
            <TableCell style={{ color: "#f36876",borderBottom:"solid 1px #21252a" }} align="right">
              Size
            </TableCell>
            <TableCell style={{ color: "#f36876" ,borderBottom:"solid 1px #21252a"}} align="right">
              Buy
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) =>
          
          {console.log(row)
              return(
            <TableRow style={{borderColor:"",borderRight:"solid 1px #21252a" }}  key={row.sell}>
              <TableCell style={{borderColor:"transparent",borderRight:"solid 1px #21252a", color: "#0080fe" }} component="th" scope="row">
                {row.sell}
              </TableCell>
              <TableCell style={{borderColor:"transparent",borderRight:"solid 1px #21252a" ,color: "#0080fe" }} align="right">{row.size}</TableCell>
              <TableCell style={{borderColor:"transparent",borderRight:"solid 1px #21252a",color: "#ADADAD" }} align="right">{row.price}</TableCell>
              <TableCell style={{borderColor:"transparent",borderRight:"solid 1px #21252a",color: "#f36876" }} align="right">{row.size1}</TableCell>
              <TableCell style={{borderColor:"transparent",color: "#f36876" }} align="right">{row.buy1}</TableCell>
            </TableRow>
          )})}
          
        </TableBody>
        
        
      </Table>
      
    </TableContainer>
    <br></br>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
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
