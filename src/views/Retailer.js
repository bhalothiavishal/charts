import React, { useEffect, useState } from "react";
import RetailerChart from "../views/Charts/RetailerChart";
const Nav = React.lazy(() => import('../DefaultLayout/Nav'));
const Header = React.lazy(() => import('../DefaultLayout/Header'));
const data = require("../Datasheet/data.json");


function Retailer() {

    const [allData, setAllData] = useState(data);
    const [chartProduct, setChartProduct] = useState([]);
    const [productsName, setProductsName] = useState([]);
    const [productsCount, setProductsCount] = useState([]);
    const [colors, setColors] = useState([]);
    const [total, setTotal] = useState(0);

    const getTypesList = () => {
        let filteredProduct = allData.filter((val) => (val.location === 'Retailer' && (val.volume > 90 && val.volume <= 100)))
        let products = []
        filteredProduct.forEach((value) => {
            let key = value.Product;
            if (products[key]) {
                products[key].count = products[key].count + 1;
            } else {
                products[key] = {
                    count: 1,
                    name: key,
                    color: '#' + Math.floor(Math.random() * 16777215).toString(16)
                }
            }
        })
        setChartProduct(Object.values(products));
        setProductsName(Object.keys(products));
        setProductsCount(Object.values(products).map(v => v.count));
        setTotal(Object.values(products).map(v => v.count).reduce((a, b) => a + b, 0));
        setColors(Object.values(products).map(v => v.color));
    }

    useEffect(() => {
        getTypesList();
    }, [])

    return (
        <div className="container-full">
            <Header title="Retailer Full Product" />
            <div className="row mt-3">
                <Nav />
                <aside className="col-md-9 mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            {
                                chartProduct.map((item, i) => {
                                    return <div className="list" key={i}>
                                        <span style={{ backgroundColor: item.color, height: '15px', width: '15px', float: 'left', clear: 'both' }}></span>
                                        <span className="productName"> {item.name} </span> <span className="count"> {item.count}</span>
                                    </div>
                                })
                            }
                        </div>
                        <div className="col-md-6">
                            <RetailerChart productsName={productsName} productsCount={productsCount} colors={colors} />
                        </div>
                        <div className="col-md-3">
                            <h2>  Total : {total} </h2>
                        </div>
                    </div>
                </aside >
            </div >
        </div >
    )
}

export default Retailer;