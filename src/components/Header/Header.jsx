import React from "react";
import logo from "../../assets/pokedesLogo.png";
import "./header.css";

const Header = () => {
	return (
		<section className="header-container">
			<div className="header-color1"></div>
			<div className="header-color2"></div>
			<div className="header-circulo1"></div>
			<div className="header-circulo2"></div>
			<img className="header-imagen" src={logo} alt="" />
		</section>
	);
};

export default Header;
