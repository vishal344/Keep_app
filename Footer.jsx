import React from "react";

const Footer = () => {

    const year= new Date().getFullYear();
  return (
    <>
      <div className="lower_footer text-center p-1 mt-md-5">
        {year} &copy; Copyright All Rights Reserved Created by Vishal
      </div>
    </>
  );
};
export default Footer;
