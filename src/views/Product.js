import React, { useEffect } from "react";
const Nav = React.lazy(() => import('../DefaultLayout/Nav'));
const Header = React.lazy(() => import('../DefaultLayout/Header'));


function Product() {

    useEffect(() => {
        console.log("Product page use effect");
    }, [])

    return (
        <div className="container-full">
            <Header title="Product Availability" />
            <div className="row mt-3">
                <Nav />
                <aside className="col-md-9 mt-5">
                    <h1>This is Product Availability page</h1>
                </aside>
            </div>
        </div>
    )
}

export default Product;