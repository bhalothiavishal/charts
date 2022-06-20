import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="sidebar col-md-3">
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/inventory"><li>Inventory</li></NavLink>
        <NavLink to="/retailer"><li>Retailer</li></NavLink>
        <NavLink to="/keg"><li>Keg</li></NavLink>
        <NavLink to="/product"><li>Product</li></NavLink>
      </ul>
    </div>
  );
}

export default Nav;