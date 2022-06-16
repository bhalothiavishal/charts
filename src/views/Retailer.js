import React, { useEffect, useState } from "react";
import RetailerChart from "../views/Charts/RetailerChart";
const Nav = React.lazy(() => import('../DefaultLayout/Nav'));
const Header = React.lazy(() => import('../DefaultLayout/Header'));
const data = require("../Datasheet/data.json");


function Retailer() {

    const [allData, setAllData] = useState(data);
    const [types, setTypes] = useState([]);
    const [typeList, setTypeList] = useState([]);

    const getTypesList = () => {
        setTypes(allData.filter((val) => {
            if (val.location === 'Retailer' && (val.volume > 90 && val.volume <= 100)) {
                if (!typeList.includes(val.Type)) {
                    let arr = [...typeList];
                    arr.push(val.Type);
                    setTypeList(arr)
                }
                return val;
            }
        })
        )
    }


    useEffect(() => {
        getTypesList();
    }, [])

    useEffect(() => {
        console.log('-------->', typeList)
    }, [typeList])

    return (
        <div className="outerLayout">
            <Header title="Retailer Full Product" />
            <Nav />
            <aside>
                <div className="retailer-chart">
                    <RetailerChart />
                </div>
            </aside>
        </div>
    )
}

export default Retailer;