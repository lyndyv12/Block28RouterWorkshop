import React from 'react'
import { Link } from "react-router-dom";

function NavBar({ colors }) {
    return (
      <div id="navbar">
        <Link to="/">Home</Link>
        {colors.map((color) => (
          <Link key={color} to={`/${color.toLowerCase()}`}>
            {color}
          </Link>
        ))}
      </div>
    );
  }

export default NavBar