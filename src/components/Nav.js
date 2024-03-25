import React from "react";
import "../components/Nav.css"
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary " id="nav1" >
        <div class="container-fluid">
          <a class="navbar-brand" style={{color:"white"}}>
            RESTUARANT PAGE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" >
                <Link
                  to="/Restaurantgallery"
                  class="nav-link active"
                  aria-current="page" style={{color:"white"}}

                >
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/Projectreg"
                  class="nav-link active"
                  aria-current="page"
                  style={{color:"white"}}
                >
                  NEW REGISTRATION
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/Customerviewmenu"
                  class="nav-link active"
                  aria-current="page"
                  style={{color:"white"}}
                >
                  MENU
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/CustomerOrderPage"
                  class="nav-link active"
                  aria-current="page"
                  style={{color:"white"}}
                >
                  MENU ORDER
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit" style={{color:"white"}}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
