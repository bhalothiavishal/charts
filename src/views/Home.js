import React, { useEffect, useState } from "react";
const GoogleMapReact = React.lazy(() => import("../views/Charts/GoogleMap"));
const Header = React.lazy(() => import('../DefaultLayout/Header'));
const Nav = React.lazy(() => import('../DefaultLayout/Nav'));
const data = require("../Datasheet/data.json");

function Home() {

    const [allData, setAllData] = useState(data);
    const [kegIds, setKegIds] = useState([]);
    const [mapData, setMapData] = useState();
    const [currentKegId, setCurrentKegId] = useState("");

    const options = {
        center: {
            lat: mapData?.latitude || 51.4835741, lng: mapData?.longitude || -0.1252037
        },
        zoom: 15,
    }

    const getkegIdList = () => {
        setKegIds(allData.map((v) => v.kegtrackerId));
    }

    const getKegData = (e) => {
        let kegid = e.target.value;
        setCurrentKegId(kegid);
        setMapData(allData.find((val) => val.kegtrackerId == kegid))
    }
    const addMarkers = (map, links) => {
        const marker = new window.google.maps.Marker({
            map,
            position: { lat: mapData?.latitude || 51.4835741, lng: mapData?.longitude || -0.1252037 },
            label: mapData.Product,
            title: `${mapData.Product} ( ${mapData.placename})`,
        })
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
                {mapData && <div>
                    <div> Temprature : {mapData.temperature} *C </div>
                    <div> Volume : {mapData.volume} %</div>
                    <div> Bettery : {mapData.battery} %</div>

                </div>}

                {mapData && <div className="googlemap">
                    <GoogleMapReact options={options} onMount={addMarkers} onMountProps={{ coords: { lat: mapData?.latitude || 51.4835741, lng: mapData?.longitude || -0.1252037 } }} />
                </div>}
            </aside>
        </div>
    )
}

export default Home;