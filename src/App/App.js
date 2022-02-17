import React, { useState, useRef } from "react";
import "./App.css";
import CardList from "../components/CardList/CardList";
import Filter from "../components/filter/Filter";
import Modal from "../components/Modal/Modal";
const App = () => {
	const [cardToggle, setCardToggle] = useState(true);
	const [filter, setFilter] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [state, setState] = useState([
		{
			id: 1,
			name: "ahmed",
			age: 27,
			adress: "amman",
			phone: "1012154545",
			type: "boy",
		},

		{
			id: 2,
			name: "farah",
			age: 27,
			adress: "amman",
			phone: "1012154545",
			type: "girl",
		},

		{
			id: 3,
			name: "samer",
			age: 27,
			adress: "amman",
			phone: "1012154545",
			type: "boy",
		},

		{
			id: 4,
			name: "mariam",
			age: 27,
			adress: "amman",
			phone: "1012154545",
			type: "girl",
		},
	]);

	const toggleHandler = () => {
		setCardToggle(!cardToggle);
	};
	const deleteHandler = (e, selectedId) => {
		const deleteOperation = state.filter((el) => {
			return el.id !== selectedId;
		});

		setState(deleteOperation);
		// setState((prevState) => {
		// 	return prevState.filter((el, idx) => idx !== clickedIdx);
		// });
	};
	const filterNames = (name) => {
		setFilter(name);
	};

	const namesHandler = () => {
		console.log(filter);
		if (filter.length !== 0) {
			return state.filter((el) => el.name.includes(filter));
		}
		return state;
	};
	return (
		<div className="mainContainer">
			<Modal show={showModal} closeModal={() => setShowModal(false)} />
			<h1>boys</h1>
			<div style={{ display: "flex", marginBottom: "20px" }}>
				<button
					style={{ marginRight: "20px" }}
					onClick={toggleHandler}
					className="button"
				>
					{cardToggle ? "hide names" : "show names"}
				</button>
				<button
					className="button"
					onClick={() => {
						setShowModal(true);
					}}
				>
					New Record
				</button>
			</div>
			<div className={cardToggle ? "show" : "hide"}>
				<Filter filteration={filterNames} />

				<CardList
					namesList={namesHandler()}
					type="boys"
					deleteFunc={deleteHandler}
				/>
			</div>
		</div>
	);
};

export default App;
