import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <hr />
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <h5>Saya footer</h5>
    </div>
  );
}

export default Footer;
