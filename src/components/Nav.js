import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const custid = localStorage.getItem("custId");
  const custname = localStorage.getItem("fname");
  const staffid = localStorage.getItem("staffId");
  const staffname = localStorage.getItem("sfname");

  const handleCustomerLogout = () => {
    localStorage.removeItem("custId");
    localStorage.removeItem("fname");
    alert("You have logged out");
    navigate("/Customerlogin");
  };

  const handleStaffLogout = () => {
    localStorage.removeItem("staffId");
    localStorage.removeItem("sfname");
    alert("You have logged out");
    navigate("/Staffslogin");
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3">
        <div className="container-fluid">
          <Link className="navbar-brand custom-brand" to="/">
            UDHITH AND Co. RESTAURANT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {custid ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ViewOrders">
                      View Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Customerviewmenu">
                      Menu Items
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownCustomer"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {custname}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownCustomer">
                      <li>
                        <Link className="dropdown-item" onClick={handleCustomerLogout} to="/Customerlogin">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : staffid ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/StaffviewOrder">
                      View Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Staffviewfood">
                      Menu Items
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownStaff"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {staffname}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownStaff">
                      <li>
                        <Link className="dropdown-item" onClick={handleStaffLogout} to="/StaffsLogin">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Restaurantgallery">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownRegister"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Registration
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownRegister">
                      <li>
                        <Link className="dropdown-item" to="/Projectreg">
                          Customer
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/StaffRegistration">
                          Staff
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownLogin"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Login
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownLogin">
                      <li>
                        <Link className="dropdown-item" to="/StaffsLogin">
                          Staff
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Customerlogin">
                          Customer
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
