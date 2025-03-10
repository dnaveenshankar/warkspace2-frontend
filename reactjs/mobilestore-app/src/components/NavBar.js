import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.jpg"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <img src={logo1} alt="logo" style={{ borderRadius: '50%', width: '50px' }} />
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/mobile/add/" className="nav-link">Add Mobile</Link>
          </li>
          <li className="nav-item">
            <Link to="/mobile/all/" className="nav-link">Mobiles</Link>
          </li>
          <li className="nav-item">
            <Link to="/customer/add/" className="nav-link">Add Customer</Link>
          </li>
          <li className="nav-item">
            <Link to="/customer/all/" className="nav-link">Customer</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart/add/" className="nav-link">Add Item</Link>
          </li>
          <li className="nav-item">
            <Link to="/order/checkout/" className="nav-link">Order-CheckOut</Link>
          </li>
          <li className="nav-item">
            <Link to="/order/view/" className="nav-link">View Order</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;