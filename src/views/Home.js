import React, { useEffect, useState } from "react";
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
            <Header  title="Home Page"/>
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
                {mapData && <div>
                    <div> Temprature : {mapData.temperature} *C </div>
                    <div> Volume : {mapData.volume} %</div>
                    <div> Bettery : {mapData.battery} %</div>

                </div>}
            </aside>
        </div>
    )
}

export default Home;