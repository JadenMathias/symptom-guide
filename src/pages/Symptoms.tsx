import * as React from "react";
import { Link } from "react-router-dom";
import classes from "./Symptoms.module.scss";

const Symptoms = () => {
	return (
		<div className={classes.container}>
			<div className={classes.container__middle}>
				<h1 className={classes.title}>Covid-19 Self Check up</h1>
				<p className={classes.text}>
					This questionnaire is useful, if you were exposed to COVID-19 or have symptoms.
				</p>
				<p className={classes.text}>
					You will be guided through a few questions, answer them as accurately as
					possible.
				</p>
			</div>

			<Link to="/symptom-guide/q1">
				<button className={classes.btn}>Start</button>
			</Link>
			<div className={classes.container__bottom}>
				<p className={classes.text__sub}>
					DISCLAIMER: This is not official advice, but instead a webapp created as a
					project.
				</p>
				<a
					className={classes.text__link}
					target="_blank"
					href="https://covid-19.ontario.ca/self-assessment/"
				>
					Click here for official Covid self-assessment.
				</a>
				<p className={classes.emergency}>Call 911 incase of an emergency!</p>
			</div>
		</div>
	);
};

export default Symptoms;
