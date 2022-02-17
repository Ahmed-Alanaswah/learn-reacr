import React, { useState } from "react";
import style from "./Filter.module.css";
const Filter = ({ filteration }) => {
	const [filter, setFilter] = useState("");
	const filterHandler = (e) => {
		const name = e.target.value;
		setFilter(name);
		filteration(name);
	};
	return (
		<div className={style.mp}>
			<input
				type="text"
				placeholder="filter"
				value={filter}
				onChange={filterHandler}
			/>
		</div>
	);
};

export default Filter;
