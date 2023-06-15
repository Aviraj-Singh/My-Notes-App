import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>~AvirajSingh</p>
    </footer>
  );
}

export default Footer;
