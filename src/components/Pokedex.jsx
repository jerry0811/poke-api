import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./Pokedex/PokemonCard";
import SearchInput from "./Pokedex/SearchInput";
import Selectype from "./Selectype";
import "./pokedex.css";
import Header from "./Header/Header";

const Pokedex = () => {
	const [pokemons, setPokemons] = useState();
	const [pokeSearch, setPokeSearch] = useState();
	const [optionType, setOptionType] = useState("All");

	useEffect(() => {
		let URL;
		if (optionType !== "All") {
			// Aqui se hace la logica de cuando el usuario quieres filtrar por tipo
			URL = `https://pokeapi.co/api/v2/type/${optionType}/`;
			axios
				.get(URL)
				.then((res) => {
					const arr = res.data.pokemon.map((e) => e.pokemon);
					setPokemons({ results: arr });
				})
				.catch((err) => console.log(err));
		} else if (pokeSearch) {
			//Aqui se hace la logica de cuando el usuario busca por el input
			const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;
			const obj = {
				results: [
					{
						url,
					},
				],
			};
			setPokemons(obj);
		} else {
			// Aquio se hace la logica cuando el usuario quiere todos los pokemons
			URL = "https://pokeapi.co/api/v2/pokemon";
			axios
				.get(URL)
				.then((res) => {
					setPokemons(res.data);
					setPokemons(obj);
				})
				.catch((err) => console.log(err));
		}
	}, [pokeSearch, optionType]);

	const nameTrainer = useSelector((state) => state.nameTrainer);

	return (
		<div>
			<div className="cards-container">
				<Header />
				<div className="cards-body">
					<h2>welcome {nameTrainer}, Catch them all</h2>
					<div className="cards-search">
						<SearchInput
							setPokeSearch={setPokeSearch}
							setOptionType={setOptionType}
						/>
						<Selectype
							setOptionType={setOptionType}
							setPokeSearch={setPokeSearch}
							optionType={optionType}
						/>
					</div>
					<div className="cards-card">
						{pokemons?.results.map((pokemon) => (
							<PokemonCard key={pokemon.url} url={pokemon.url} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pokedex;
