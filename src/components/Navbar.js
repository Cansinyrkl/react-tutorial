import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}
Navbar.defaultProps = {
  title: "Deafult App",
};
export default Navbar;
