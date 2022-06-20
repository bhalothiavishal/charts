
function Header({ title }) {
  return (
    <div className="header">
      <div className="head-appname"> <h2>Smart Container </h2> </div>
      <div className="head-module"> <h2>{title} </h2> </div>
    </div>
  );
}

export default Header;