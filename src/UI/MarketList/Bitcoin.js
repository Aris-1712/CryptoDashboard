import React from 'react'
import BitcoinImg from '../../Images/Bitcoin.png'
import './Bitcoin.css' 
const Bitcoin=(props)=>{
return(
    <div>
    <h4 style={{color:"white"}}>Coin Information</h4>
     <div className="imgContainer"><img src={BitcoinImg} width={50} ></img>
     <div className="imgLabel">
         <label style={{color:"#ADADAD"}}>Bitcoin</label>
         <label style={{color:"#ADADAD"}}>Symbol BTC</label>
     </div> 
    
     </div>
     <br></br>
    <div className="labelContainerBitCoin" >
        <div  className="labelStyleBitCoin">
            <label>First Announced</label>
        </div>
        <div >
            <label>January 3, 2009</label>
        </div>
        
    </div>
    <br></br>
    <div className="labelContainerBitCoin" >
        <div  className="labelStyleBitCoin">
            <label>Market Cap</label>
        </div>
        <div >
            <label>$163,00,0000,212,0</label>
        </div>
        
    </div>
    <br></br>
    <div className="labelContainerBitCoin">
        <div  className="labelStyleBitCoin">
            <label>Block Time</label>
        </div>
        <div >
            <label>10 minutes</label>
        </div>
        
    </div>
    <br></br>
    <div className="labelContainerBitCoin">
        <div  className="labelStyleBitCoin">
            <label>Max Supply</label>
        </div>
        <div >
            <label>21M BTC</label>
        </div>
        
    </div>
    <br></br>
    <div className="labelContainerBitCoin">
        <div className="labelStyleBitCoin" >
            <label>Proof Type</label>
        </div>
        <div >
            <label>Proof of Work (PoW)</label>
        </div>
        
    </div>
    <br></br>
    <br></br>
    </div>
)
}

export default Bitcoin