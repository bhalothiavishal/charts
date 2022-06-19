import React, { useEffect, useState } from "react";
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
        <div className="outerLayout">
            <Header title="Home Page" />
            <Nav />
            <aside>
                <div>
                    <select name="kegIds" value={currentKegId} onChange={(e) => getKegData(e)} >
                        <option value={""}> Select Keg Tracker Id  </option>
                        {
                            kegIds.map((item, i) => {
                                return <option value={`${item}`} key={i}> {item}  </option>
                            })
                        }
                    </select>
                </div>
                {mapData && <div className="homebox-row">
                    <div className="homebox"> Temprature : {mapData.temperature} *C </div>
                    <div className="homebox"> Volume : {mapData.volume} %</div>
                    <div className="homebox"> Bettery : {mapData.battery} %</div>

                </div>}

                {mapData && <div className="googlemap">
                    <HomeMap lat={mapData.latitude} long={mapData.longitude} kegid={mapData.kegtrackerId} title={`${mapData.Product} ( ${mapData.placename
                        })`} />
                </div>}
            </aside>
        </div>
    )
}

export default Home;