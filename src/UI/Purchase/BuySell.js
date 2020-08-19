import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React from "react";
import "react-tabs/style/react-tabs.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Slider from "@material-ui/core/Slider";
const BuySell = (props) => (
  <Tabs
    selectedTabClassName="selecedtab"
    style={{ color: "#ADADAD", backgroundColor: "#171b20",height:"100%" }}
  >
    <TabList className="tablist">
      <Tab style={{ width: "43%" }}>Title 1</Tab>
      <Tab style={{ width: "43%" }}>Title 2</Tab>
    </TabList>

    <TabPanel >
      <div
        style={{
          marginLeft: 10,
          marginRight: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent:"space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom:20
          }}
        >
          <label>Price</label>
          <div>
            <Button color="primary">STOP</Button>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom:20
          }}
        >
          <label>Size</label>
        <Slider
        style={{width:"50%"}}
          defaultValue={30}
          // getAriaValueText={valuetext}
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom:20
          }}
        >
          <label>Transfer (OUT)</label>
          <label>0 USDT</label>
          </div>
          <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",marginBottom:20
          }}
        >
          <label>Receive (IN)</label>
          <label>0 BTC</label>
          </div>
          <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",marginBottom:20
          }}
        >
          <label>Commision (0.1%)</label>
          <label>0 BTC</label>
          </div>
          <button style={{backgroundColor:"#003264",width:"100%",padding:5,marginTop:5}}>BUY</button>
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
);

export default BuySell;
