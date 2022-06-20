import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';
import { ThermometerHalf, BatteryHalf, Trash2Fill } from 'react-bootstrap-icons';
const HomeMap = React.lazy(() => import("../views/Charts/HomeMap"));
const Header = React.lazy(() => import('../DefaultLayout/Header'));
const Nav = React.lazy(() => import('../DefaultLayout/Nav'));
const data = require("../Datasheet/data.json");


function Home() {

    const [allData, setAllData] = useState(data);
    const [kegIds, setKegIds] = useState([]);
    const [mapData, setMapData] = useState();
    const [currentKegId, setCurrentKegId] = useState("");

    const getkegIdList = () => {
        setKegIds(allData.map((v) => v.kegtrackerId));
    }

    const getKegData = (e) => {
        let kegid = e.target.value;
        setCurrentKegId(kegid);
        setMapData(allData.find((val) => val.kegtrackerId == kegid))
    }
    useEffect(() => {
        getkegIdList();
    }, [])

    return (
        <div className="container-full">
            <Header title="Home Page" />
            <div className="row mt-3 ">
                <Nav />
                <aside className="col-md-9">
                    <div className="row">
                        <div className="col-md-9"></div>
                        <div className="col-md-3 pr-30">
                            <select className="form-select" name="kegIds" value={currentKegId} onChange={(e) => getKegData(e)} >
                                <option value={""}> Select Keg Tracker Id  </option>
                                {
                                    kegIds.map((item, i) => {
                                        return <option value={`${item}`} key={i}> {item}  </option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    {mapData && <div className="row mt-3">
                        <div className="homebox col-md-3">
                            <div className="row">
                                <div className="col-md-4"><ThermometerHalf size={75} /></div>
                                <div className="col-md-8 fontSize"><b>Temprature </b> <br />
                                    <CountUp end={mapData.temperature} /> ºC
                                </div>
                            </div>
                        </div>
                        <div className="homebox col-md-3 bold">
                            <div className="row">
                                <div className="col-md-4"><Trash2Fill size={75} /></div>
                                <div className="col-md-8 fontSize"><b>Volume </b> <br />
                                    <CountUp end={mapData.volume} /> %
                                </div>
                            </div>
                        </div>
                        <div className="homebox col-md-3">
                            <div className="row">
                                <div className="col-md-4"><BatteryHalf size={75} /></div>
                                <div className="col-md-8 fontSize"><b>Bettery </b> <br />
                                    <CountUp end={mapData.battery} /> %
                                </div>
                            </div>
                        </div>
                    </div>
                    }

                    {mapData && <div className="googlemap mt-2 row">
                        <HomeMap lat={mapData.latitude} long={mapData.longitude} kegid={mapData.kegtrackerId} title={`${mapData.Product} ( ${mapData.placename
                            })`} />
                    </div>}
                </aside>
            </div >

        </div >
    )
}

export default Home;