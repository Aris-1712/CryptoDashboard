import React, { useState } from "react";
import dayjs from "dayjs";
import Chart from "react-apexcharts";
import DropDown from '../DropDowns/DropDown'
import "./Graph.css";
const Graph = (props) => {
  const data = [
    {
      name: "candle",
      data: [
        {
          x: new Date(15958600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1595780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1595782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1595784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1595785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1595787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1595789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1595791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1595793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1595794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1595796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1595798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1595800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1595802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1595803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1595805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1595807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1595809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1595811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1595812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1595814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1595816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1595818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1595820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1595821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1595823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1595825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1595827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1595829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1595830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1595832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1595834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1595836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1595838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1595839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1595841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1595843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1595845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1595847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1595848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1595850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1595852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1595854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1595856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1595857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1595859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: new Date(1595861400000),
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: new Date(1595863200000),
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: new Date(1595865000000),
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: new Date(1595866800000),
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: new Date(1595868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: new Date(1595870400000),
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: new Date(1595872200000),
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: new Date(1595874000000),
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: new Date(1595875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1595877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1595879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1595881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1595883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1595884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ];
  const series2 = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    //    {
    //     name: 'Free Cash Flow',
    //     data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    //   }
  ];
  const options2 = {
    colors: ["#1A73E8", "#f36876"],

    chart: {
      type: "bar",
      height: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      borderColor: "#1d2126",
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: "#1e2227",
      },
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: "#1e2227",
      },
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  const options = {
    grid: {
      borderColor: "#1d2126",
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#0080fe",
          downward: "#f36876",
        },
      },
    },
    chart: {
      height: "100%",
      type: "candlestick",
    },
    // title: {
    //   text: "BTC/USDT",
    //   align: "left",
    //   style:{}
    // },

    tooltip: {
      enabled: true,
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: "#1e2227",
      },
      type: "category",
      labels: {
        formatter: (val) => {
          return dayjs(val).format("MMM DD HH:mm");
        },
      },
    },
    yaxis: {
      show: true,
      axisBorder: {
        show: true,
        color: "#1e2227",
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  const dropOptions1 = [
    { value: '1H', label: '1H' },
    { value: '2H', label: '2H' },
    { value: '3H', label: '3H' }
  ]
  const dropOptions2 = [
    { value: 'CANDLESTICK', label: 'CANDLESTICK' },
    { value: 'CANDLESTICK', label: 'CANDLESTICK' },
    { value: 'CANDLESTICK', label: 'CANDLESTICK' }
  ]
  const dropOptions3 = [
    { value: 'SELECT INDICATOR', label: 'SELECT INDICATOR' },
    { value: 'SELECT INDICATOR', label: 'SELECT INDICATOR' },
    { value: 'SELECT INDICATOR', label: 'SELECT INDICATOR' }
  ]
  return (
    <div className="chartContainer">
      <br></br>
      <div>
      <div className="chartDetailContainer" ><DropDown  options={dropOptions1}></DropDown>
      <DropDown options={dropOptions2}></DropDown>
      <DropDown options={dropOptions3}></DropDown></div>
      <br></br>
      <div style={{ textAlign: "left", width: "100%", color: "white" }}>
        <label >
          BTC/USDT
          <span className="LabelStyle" >&nbsp;&nbsp;&nbsp;Date </span>
          <span className="labelValueStyle">2020-08-17 09:00</span>
          <span className="LabelStyle">   &nbsp;&nbsp;&nbsp; O </span>
          <span className="labelValueStyle">11,730</span>
          <span className="LabelStyle">   &nbsp;&nbsp;&nbsp; H </span>
          <span className="labelValueStyle">11,910</span>
          <span className="LabelStyle">  &nbsp;&nbsp;&nbsp;  L </span>
          <span className="labelValueStyle">11,620</span>
          <span className="LabelStyle">  &nbsp;&nbsp;&nbsp;  C </span>
          <span className="labelValueStyle">11,790</span>
        </label>
      </div>
      </div>
      <div className="chart">
        <Chart
          series={data}
          options={options}
          type="candlestick"
          height={200}
        ></Chart>
      </div>
      <div className="chart2">
        <Chart
          series={series2}
          options={options2}
          type="bar"
          height={"100%"}
        ></Chart>
      </div>
    </div>
  );
};

export default Graph;
