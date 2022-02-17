import React from "react";
import styles from "./Layout.module.css";
const Controller = (props) => {
	return <div className={styles.control}>{props.children}</div>;
};

export default Controller;
