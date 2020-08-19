import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React from "react";
import "react-tabs/style/react-tabs.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Slider from "@material-ui/core/Slider";
import './BuySell.css'
const BuySell = (props) => (
  <Tabs
    selectedTabClassName="selecedtab"
    style={{ color: "#ADADAD", backgroundColor: "#171b20",height:"100%" }}
  >
    <TabList className="tablist">
      <Tab style={{ width: "43%",textAlign:"center" }}>Buy</Tab>
      <Tab style={{ width: "43%",textAlign:"center"}}>Sell</Tab>
    </TabList>

    <TabPanel >
      <div className="PanelBuySellContainer"
      
      >
        <div className="PanelBuySellContent"
     
        >
          <label>Price</label>
          <div>
     
            <button style={{border:"solid 1px #ADADAD",backgroundColor:"black",color:'#ADADAD',padding:5,borderRadius:2,marginRight:10 }}>STOP</button>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
            >
              
               
              <Button>LIMIT</Button>
              <Button>MARKET</Button>
            </ButtonGroup>
          </div>
        </div>
        <br></br>
        <div
          dir="rtl"
          style={{
            border: "solid 1px #27272B",
            padding: 5,
            backgroundColor: "#0A0A0A",
            marginBottom:20
          }}
        >
          USDT{" "}
          <span dir="rtl" style={{ color: "white" }}>
            11,500{" "}
          </span>
        </div>
        <div className="PanelBuySellContent"
      
        >
          <label>Size</label>
        <Slider
        style={{width:"50%",color:"#ADADAD"}}
          defaultValue={30}
    
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={30}
          marks
          min={10}
          max={110}
        />
        </div>
        
        <div
          dir="rtl"
          style={{
            border: "solid 1px #27272B",
            padding: 5,
            backgroundColor: "#0A0A0A",
          }}
        >
          BTC{" "}
          <span dir="rtl" style={{ color: "#f36876" }}>
            Not enough balance{" "}
          </span>
        </div>
        <div className="PanelBuySellContent"
         
        >
          <label>Transfer (OUT)</label>
          <label>0 USDT</label>
          </div>
          <div className="PanelBuySellContent"
      
        >
          <label>Receive (IN)</label>
          <label>0 BTC</label>
          </div>
          <div className="PanelBuySellContent"
          
        >
          <label>Commision (0.1%)</label>
          <label>0 BTC</label>
          </div>
          <button className="PanelBuyButton"
  
           >BUY</button>
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);

export default BuySell;
