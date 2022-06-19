import React from "react";
import Table from 'react-bootstrap/Table'

function InventoryTable({ filterData }) {

  return (

    <div className="mt-5">
      <Table striped bordered={true} hover>
        <thead>
          <tr>
            <th>Type Color</th>
            <th>Type</th>
            <th>Batch Id</th>
            <th>Current Location</th>
            <th>Product</th>
            <th>vVolume</th>
            <th>Status Time</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, i) => {
            return <tr key={i} >
              <td style={{ backgroundColor: item.color, height: '15px', width: '15px' }}>
                {item.kegtrackerId}
              </td>
              <td>{item.Type}</td>
              <td>{item.BatchNumber}</td>
              <td>{item.location}</td>
              <td>{item.Product}</td>
              <td>{item.volume}</td>
              <td>{item.statusTime}</td>
            </tr>
          })}
        </tbody>
      </Table>
    </div >

  )


}

export default InventoryTable