import React from 'react'
import DropDown from '../DropDowns/DropDown'
import StarRateIcon from "@material-ui/icons/StarRate";
import MarketTable from './MarketTable'
import Bitcoin from './Bitcoin';
const MarketList=(props)=>{
    const dropOptions = [
        { value: 'ALL', label: 'ALL' },
        { value: 'ALL', label: 'ALL' },
        { value: 'ALL', label: 'ALL' }
      ]
    return(
        <div className="MarketListContainer" style={{marginLeft:10,marginRight:10,display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"}}>
          <div>
          <h4 style={{color:"white"}}>Order Book</h4>
         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
             <input placeholder="Search" style={{padding:10,backgroundColor:"#0A0A0A",border:"solid 1px grey"}} type="text"></input>
             <select style={{backgroundColor:"#0A0A0A",color:"white",width:"20%",padding:10}}>
                {dropOptions.map((obj)=>{
                    return(
                    <option>{obj.value}</option>
                    )
                })}
            </select>
            <span style={{color:"#adadad",marginRight:20}}><StarRateIcon></StarRateIcon></span>
         </div>
         <MarketTable></MarketTable>
         </div>
         
         <Bitcoin></Bitcoin>
          </div>
    )
}
export default MarketList