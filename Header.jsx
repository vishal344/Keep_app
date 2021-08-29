import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
         
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/558px-Google_Keep_icon_%282020%29.svg.png"
              alt=""
              width="50"
              height="60"
              className="d-inline-block align-text-top"
            />
            
        </div>
      </nav>
    </>
  );
};
export default Header;
