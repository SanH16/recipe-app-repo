import React from "react";
import { Link } from "react-router-dom";
import { authServices } from "../configs/auth";
import { Button, Image, Row } from "antd";
import { auth } from "../configs/firebase";

function Navbar() {
  return (
    <>
      <Row justify="space-between">
        <div>
          {auth.currentUser && (
            <>
              <Image width={30} src={auth.currentUser.photoURL} />
              <span>{auth.currentUser.displayName}</span>
            </>
          )}
          <Button type="link" onClick={() => authServices.logOut()}>
            Logout
          </Button>

          {!authServices.isAuthorized() && (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/add-recipes">
            <Button>Add Recipe</Button>
          </Link>
        </div>
      </Row>
      <hr />
    </>
  );
}

export default Navbar;
