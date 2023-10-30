import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function LogoutSession() {
  return (
    <div>
      <h1>440 | Login Time Out</h1>
      <p>
        The clien's session has expired and must{" "}
        <Link to="/login">
          <Button type="link">Login</Button>
        </Link>
        again
      </p>
    </div>
  );
}

export default LogoutSession;
