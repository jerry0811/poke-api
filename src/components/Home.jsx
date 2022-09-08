import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
import Footer from "./Footer/Footer";
import "./home.css";
import logo from "../assets/pokedesLogo.png";

const Home = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const inputValue = e.target.name.value.trim();
		if (inputValue.length !== 0) {
			dispatch(setNameTrainer(inputValue));
			navigate("/pokedex");
		}
		e.target.name.value = "";
	};
	return (
		<div className="container-home">
			<div className="container-header">
				<img className="imagen-home" src={logo} alt="" />
				<h1 className="title-home">Hi Trainer!</h1>
				<p className="parrafo-home">To Start give me your traine name</p>
				<form onSubmit={handleSubmit}>
					<input
						className="input"
						type="text"
						id="name"
						placeholder="your name "
					/>
					<button className="button">Catch then all</button>
				</form>
			</div>

			<div className="container-footer">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
