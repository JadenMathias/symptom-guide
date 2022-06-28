import * as React from "react";
import classes from "./Question.module.scss";

const Question = ({ props }) => {
	return (
		<div className={classes.container}>
			<h1 className={classes.question}>{props.question}</h1>
		</div>
	);
};

export default Question;
