import React from "react";
import Table from 'react-bootstrap/Table'

function InventoryTable({ filterData, chartData }) {

  const getStatus = (volume) => {
    if (volume > 90 && volume <= 100) {
      return "Full";
    } else if (volume > 10 && volume <= 90) {
      return "In Use";
    } else {
      return "Empty";
    }
  }

  const getColor = (type) => {
    return chartData.find((v) => v.name === type).color;
  }

  return (
    <div className="mt-5">
      <Table striped bordered={true} hover responsive="lg">
        <thead>
          <tr>
            <th>Color</th>
            <th>Type</th>
            <th>Batch Id</th>
            <th>Current Location</th>
            <th>Product</th>
            <th>Volume</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, i) => {
            return <tr key={i} >
              <td style={{ backgroundColor: getColor(item.Type), height: '15px', width: '15px' }}>
                {item.kegtrackerId}
              </td>
              <td>{item.Type}</td>
              <td>{item.BatchNumber}</td>
              <td>{item.placename}</td>
              <td>{item.Product}</td>
              <td>{item.volume}</td>
              <td>{getStatus(item.volume)}</td>
            </tr>
          })}
        </tbody>
      </Table>
    </div >

  )


}

export default InventoryTable