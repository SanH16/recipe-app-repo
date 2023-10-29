import React from "react";
import { Link } from "react-router-dom";
import { authServices } from "../configs/auth";

function Navbar() {
  return (
    <>
      <nav>
        {/* <Link to=""> */}
        <button onClick={() => authServices.logOut()}>Logout</button>
        {/* </Link> */}
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
