import * as React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.scss";

const Home = () => {
	const [cases, setCases] = React.useState(0);
	const [deaths, setDeaths] = React.useState(0);
	// const [recs, setRecs] = React.useState(0);
	React.useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const request = await fetch("https://api.covid19api.com/summary");
		var data = await request.json();
		var cases = data.Global.TotalConfirmed;
		var deaths = data.Global.TotalDeaths;
		// var recs = data.Global.TotalRecovered;
		setCases(cases);
		setDeaths(deaths);
		// setRecs(recs);
	};

	return (
		<div className={classes.container}>
			<div className={classes.welcome_container}>
				<div className={classes.h1}>Welcome to Symptom Guide!</div>
				<div className={classes.h2}>
					A <span className={classes.cov}>Covid-19</span> screening website.
				</div>
			</div>
			<div className={classes.stats}>
				<div className={classes.h3}>{`Cases 🦠 ${cases}`}</div>
				<div className={classes.h3}>{`Deaths ⚰️ ${deaths}`}</div>
			</div>
			<Link to="/screening">
				<button className={classes.btn}>
					<span>Check Symptoms</span>
				</button>
			</Link>
		</div>
	);
};

export default Home;
