import React from "react";

const StatPoke = ({ infoStat }) => {
	return (
		<div>
			<h4 className="infoStat-name">{infoStat.stat.name.toUpperCase()}</h4>
			<p className="infoStat-base-stat">{infoStat.base_stat}</p>
		</div>
	);
};

export default StatPoke;
