import React from "react";
import logo from "../images/react-icon-small.png";

function Navbar() {
	return (
		<header>
			<nav className="nav">
				<img src={logo} alt="react-logo" className="nav--icon" />
				<h3 className="nav--logo_text">ReactFacts</h3>
				<h4 className="nav--title">React Cource - Project 1</h4>
			</nav>
		</header>
	);
}

export default Navbar;
