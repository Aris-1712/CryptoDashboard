import React from 'react'
import Select from 'react-select'
import './DropDown.css'
const DropDown=(props)=>{

    return(
        <div style={{marginRight:30}}>
            <select className="DropDownSelect" >
                {props.options.map((obj)=>{
                    return(
                    <option>{obj.value}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default DropDown