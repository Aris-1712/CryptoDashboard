import React from 'react'
import DropDown from '../DropDowns/DropDown'
import StarRateIcon from "@material-ui/icons/StarRate";
import MarketTable from './MarketTable'
import Bitcoin from './Bitcoin';
import './MarketList.css'
const MarketList=(props)=>{
    const dropOptions = [
        { value: 'ALL', label: 'ALL' },
        { value: 'ALL', label: 'ALL' },
        { value: 'ALL', label: 'ALL' }
      ]
    return(
        <div className="MarketListContainer" >
          <div>
          <h4 style={{color:"white"}}>Order Book</h4>
         <div className="inputHolder">
             <input placeholder="Search" className='inputStyle'  type="text"></input>
             <select className="selectStyleMarketList">
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