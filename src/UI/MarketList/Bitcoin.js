import React from 'react'
import BitcoinImg from '../../Images/Bitcoin.png' 
const Bitcoin=(props)=>{
return(
    <div>
    <h4 style={{color:"white"}}>Coin Information</h4>
     <div style={{display:"flex",alignItems:"center"}}><img src={BitcoinImg} width={50} ></img>
     <div style={{display:"flex",flexDirection:"column",marginLeft:20}}>
         <label style={{color:"#ADADAD"}}>Bitcoin</label>
         <label style={{color:"#ADADAD"}}>Symbol BTC</label>
     </div> 
    
     </div>
     <br></br>
    <div style={{display:"flex",flexDirection:"row",color:"#ADADAD"}}>
        <div style={{width:"50%"}}>
            <label>First Announced</label>
        </div>
        <div >
            <label>January 3, 2009</label>
        </div>
        
    </div>
    <br></br>
    <div style={{display:"flex",flexDirection:"row",color:"#ADADAD"}}>
        <div style={{width:"50%"}}>
            <label>Market Cap</label>
        </div>
        <div >
            <label>$163,00,0000,212,0</label>
        </div>
        
    </div>
    <br></br>
    <div style={{display:"flex",flexDirection:"row",color:"#ADADAD"}}>
        <div style={{width:"50%"}}>
            <label>Block Time</label>
        </div>
        <div >
            <label>10 minutes</label>
        </div>
        
    </div>
    <br></br>
    <div style={{display:"flex",flexDirection:"row",color:"#ADADAD"}}>
        <div style={{width:"50%"}}>
            <label>Max Supply</label>
        </div>
        <div >
            <label>21M BTC</label>
        </div>
        
    </div>
    <br></br>
    <div style={{display:"flex",flexDirection:"row",color:"#ADADAD"}}>
        <div style={{width:"50%"}}>
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