import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "./UI/Graph/Graph";
import Tabs from "../src/UI/Tabs/Tabs";
import OrderBook from "./UI/OrderBook/OrderBook";
import BuySell from "./UI/Purchase/BuySell";
import MarketList from "./UI/MarketList/MarketList";

function App() {
  return (
    // style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between",height:"100%",flexWrap:"wrap"}}
    <div className="mainAppContainer" >
{/* style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}} */}
      <div className="mainContainer" >
      <div className="innerContainer" >
        <Graph></Graph>
      </div>
      <div className="innerContainer2" >
        <Tabs></Tabs>
      </div>
      </div>
      {/* style={{display:"flex",justifyContent:"space-between"}} */}
      <div className="mainContainer3" >
      {/* style={{backgroundColor: "#171b20"}} */}
      <div className="innerContainer3" >
        <OrderBook></OrderBook>
      </div>
      {/* style={{backgroundColor: "#171b20"}} */}
      <div className="innerContainer4" >
        <BuySell></BuySell>
      </div>
      </div>
      <div className="mainContainer2" >
      <MarketList></MarketList>
      </div>

    </div>
  );
}

export default App;
