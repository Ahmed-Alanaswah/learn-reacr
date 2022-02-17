import React from "react";
import styles from "./Card.module.css";
const Card = ({ boy, deleteFunc }) => {
	return (
		<div
			className={styles.cardWrapper}
			style={{ backgroundColor: boy.type === "boy" ? "green" : "pink" }}
		>
			<div>name : {boy.name}</div>
			<div>age: {boy.age}</div>
			<div>address: {boy.adress}</div>
			<div>phone: {boy.phone}</div>
			<div
				className={styles.deleteBtn}
				onClick={(e) => {
					deleteFunc(e, boy.id);
				}}
			>
				x
			</div>
		</div>
	);
};

export default Card;
