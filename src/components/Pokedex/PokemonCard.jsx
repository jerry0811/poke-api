import React, { useEffect, useState } from "react";
import axios from "axios";
import StatPoke from "./StatPoke";
import { useNavigate } from "react-router-dom";
import "./style/pokemonCard.css";

const PokemonCard = ({ url }) => {
	const [pokemon, setPokemon] = useState();

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(url)
			.then((res) => setPokemon(res.data))
			.catch((err) => console.log(err));
	}, []);

	const handleClick = () => navigate(`/pokedex/${pokemon.name}`);

	return (
		<article onClick={handleClick} className="pokemon-container">
			<header className="pokemon-header">
				<img
					className="pokemon-imagen"
					src={pokemon?.sprites.other["official-artwork"]["front_default"]}
					alt=""
				/>
			</header>
			<section className="pokemon-body">
				<h3 className="pokemon-nombre">{pokemon?.name}</h3>
				<div className="pokemon-tipos">
					{pokemon?.types.map((slot) => (
						<p key={slot.type.url}>{slot.type.name}</p>
					))}
				</div>
				<p className="pokemon-tipos-tipo">Tipo</p>
				<hr className="pokemon-linea" />
			</section>
			<footer className="pokemon-footer">
				<ul>
					{pokemon?.stats.map((stat) => (
						<StatPoke key={stat.stat.url} infoStat={stat} />
					))}
				</ul>
			</footer>
		</article>
	);
};

export default PokemonCard;
