import React from "react";
import { Link } from "react-router-dom";
import { authServices } from "../configs/auth";
import { Button } from "antd";

function Navbar() {
  return (
    <>
      <nav>
        {/* <Link to=""> */}
        <button onClick={() => authServices.logOut()}>Logout</button>
        {/* </Link> */}
        {!authServices.isAuthorized() && (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
        <Link to="/add-recipes">
          <Button>Add Recipe</Button>
        </Link>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
