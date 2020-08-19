import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Tabs.css";
import TableTab from "../Table/Table";
import LaunchIcon from "@material-ui/icons/Launch";
import StarRateIcon from "@material-ui/icons/StarRate";
const TabsReact = (props) => {
  return (
    <Tabs
      selectedTabClassName="selecedtab"
      style={{ color: "#ADADAD", backgroundColor: "#171b20" }}
    >
      <TabList className="tablist">
        <Tab>My Asset</Tab>
        <Tab>Pending Order</Tab>
        <Tab>Trade History</Tab>
        <div
          style={{ display: "inline-block", float: "right", marginRight: 30,marginTop:5 }}
        >
          <LaunchIcon></LaunchIcon>
        </div>
      </TabList>

      <TabPanel className={"panel"}>
        <div style={{ padding: 10 }}>
          {" "}
          <TableTab></TableTab>
        </div>
        <br></br>
        <div className="panelBottomContainer"
       
        >
          <div className="panelBottom">
            <StarRateIcon /> <label>0/1</label>
          </div>
          <label>Total Balance: 0 USDT</label>
          <label>Profit/Loss +0.0000 USDT (+0.00%)</label>
          <label>Total Equity: 0.0000 USDT</label>
        </div>
        <br></br>
      </TabPanel>
      <TabPanel className={"panel"}>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel className={"panel"}>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  );
};
export default TabsReact;
