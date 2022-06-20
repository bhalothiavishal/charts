import React, { useEffect, useState } from "react";
const InventoryChart = React.lazy(() => import("../views/Charts/InventoryChart"));
const InventoryTable = React.lazy(() => import("../views/Charts/InventoryTable"));
const Nav = React.lazy(() => import('../DefaultLayout/Nav'));
const Header = React.lazy(() => import('../DefaultLayout/Header'));
const data = require("../Datasheet/data.json");

function Inventory() {

    const [allData, setAllData] = useState(data);
    const [filterData, setFilterData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [typeName, setTypeName] = useState([]);
    const [typeCount, setTypeCount] = useState([]);
    const [selectedType, setSelectedType] = useState("All Products");


    const getChartData = () => {
        let products = []
        allData.forEach((value) => {
            let key = value.Type;
            if (products[key]) {
                products[key].value = products[key].value + 1;
                products[key].description = products[key].description + 1;
            } else {
                products[key] = {
                    value: 1,
                    description: 1,
                    name: key,
                    color: '#' + Math.floor(Math.random() * 16777215).toString(16)
                }
            }
        })
        setChartData(Object.values(products));
        setTypeName(Object.keys(products));
        setTypeCount(Object.values(products).map(v => v.count));
        setFilterData(allData);
    }

    const handleFilter = (data) => {
        setSelectedType(data.name);
        setFilterData(allData.filter((value) => value.Type == data.name));
    }

    useEffect(() => {
        getChartData();
    }, [])

    return (
        <div className="container-full">
            <Header title="Inventory Page" />
            <div className="row mt-3">
                <Nav />
                <aside className="col-md-9">
                    <div className="inventoryWidth">
                        <InventoryChart chartData={chartData} handleFilter={handleFilter} />
                    </div>
                    <h4>{selectedType}</h4>
                    <InventoryTable filterData={filterData} chartData={chartData} />
                </aside>
            </div>
        </div>
    )
}

export default Inventory;