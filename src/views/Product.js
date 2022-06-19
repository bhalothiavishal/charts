import React, { useEffect } from "react";
const Nav = React.lazy(() => import('../DefaultLayout/Nav'));
const Header = React.lazy(() => import('../DefaultLayout/Header'));


function Product() {

    useEffect(() => {
        console.log("Product page use effect");
    }, [])

    return (
        <div className="outerLayout">
            <Header  title="Product Availability"/>
            <Nav />
            <aside>
                <h1>This is Product Availability page</h1>
            </aside>
        </div>
    )
}

export default Product;