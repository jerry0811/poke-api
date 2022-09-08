import React from "react";

const SearchInput = ({ setPokeSearch, setOptionType }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		setPokeSearch(e.target.searchText.value.trim().toLowerCase());
		setOptionType("All");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" id="searchText" />
			<button>Search</button>
		</form>
	);
};

export default SearchInput;
