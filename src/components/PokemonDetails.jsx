import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
	const { name } = useParams();

	const [pokeInfo, setPokeInfo] = useState();

	useEffect(() => {
		const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
		axios
			.get(URL)
			.then((res) => setPokeInfo(res.data))
			.catch((err) => console.log(err));
	}, []);

	console.log(pokeInfo);

	return (
		<article>
			<img
				src={pokeInfo?.sprites.other["official-artwork"].front_default}
				alt=""
			/>
			<h1>{name}</h1>
		</article>
	);
};

export default PokemonDetails;
