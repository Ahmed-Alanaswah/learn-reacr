import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import Controller from "../Layout/Controller";
const Backdrop = ({ close }) => {
	return <div className={styles.backDrop} onClick={close}></div>;
};

const Overlay = () => {
	return (
		<div className={styles.overlay}>
			<form>
				<Controller>
					<label htmlFor="name">name</label>
					<input type="name" placeholder="enter name" />
				</Controller>
			</form>
		</div>
	);
};
const Modal = ({ show, closeModal }) => {
	return (
		show && (
			<Fragment>
				{ReactDOM.createPortal(
					<Fragment>
						<Backdrop close={closeModal} />
						<Overlay />
					</Fragment>,
					document.getElementById("modal")
				)}
			</Fragment>
		)
	);
};

export default Modal;
