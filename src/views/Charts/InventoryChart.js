import React from "react";
import HSBar from "react-horizontal-stacked-bar-chart";

function InventoryChart({ chartData, handleFilter }) {

  return (
    <HSBar
      height={40}
      showTextDown
      id="new_id"
      fontColor="rgb(50,20,100)"
      data={chartData}
      onClick={e => handleFilter(e.bar)}
    />
  )
}

export default InventoryChart;