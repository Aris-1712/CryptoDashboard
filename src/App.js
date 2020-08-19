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
    
    <div className="mainAppContainer" >

      <div className="mainContainer" >
      <div className="innerContainer" >
        <Graph></Graph>
      </div>
      <div className="innerContainer2" >
        <Tabs></Tabs>
      </div>
      </div>

      <div className="mainContainer3" >

      <div className="innerContainer3" >
        <OrderBook></OrderBook>
      </div>
    
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
