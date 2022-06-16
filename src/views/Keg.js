import React, { useEffect } from "react";
const Nav = React.lazy(() => import('../DefaultLayout/Nav'));
const Header = React.lazy(() => import('../DefaultLayout/Header'));



function Keg() {

    useEffect(() => {
        console.log("keg page use effect");
    }, [])

    return (
        <div className="outerLayout">
            <Header />
            <Nav />
            <aside>
                <h1>this is keg</h1>
            </aside>
        </div>
    )
}

export default Keg;