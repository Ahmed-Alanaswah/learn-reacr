import React from "react";
import Card from "../Card/Card";
const CardList = ({ namesList, deleteFunc }) => {
	const boy = namesList.map((boy) => {
		return <Card boy={boy} deleteFunc={deleteFunc} key={boy.id} id={boy.id} />;
	});

	return <div>{boy}</div>;
};
export default CardList;
