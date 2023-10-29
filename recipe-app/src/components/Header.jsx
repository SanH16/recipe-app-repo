import React from "react";
import { useLocation } from "react-router-dom";

const breadcrumbs = [
  {
    path: "/",
    name: "Home",
    description: "Recipes",
  },
];
function Header() {
  const location = useLocation();

  function checkLocation() {
    // console.log(location.pathname);
    return breadcrumbs.find(
      (val) => val.path.includes(location.pathname.split("/")[1]) // output {0: 'products', 1: 'id'}
    );
  }
  const path = checkLocation();

  return (
    <header>
      {path ? (
        <div>
          <h6>{path.name}</h6>
          <p>{path.description}</p>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
