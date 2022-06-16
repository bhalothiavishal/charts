import React, { useEffect } from "react";
const Nav = React.lazy(() => import('../DefaultLayout/Nav'));
const Header = React.lazy(() => import('../DefaultLayout/Header'));


function Inventory() {

    useEffect(() => {
        console.log("Inventory page use effect");
    }, [])

    return (
        <div className="outerLayout">
        <Header title="Inventory Page" />
        <Nav />
        <aside>
            <h1>this is inventory</h1>
        </aside>
    </div>
    )
}

export default Inventory;