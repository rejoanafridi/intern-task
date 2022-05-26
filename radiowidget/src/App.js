import React, { useEffect, useState } from "react";
import backArrow from "./image/back-arrow.png";
import switchImg from "./image/switch.png";
import "./App.css";
import Items from "./Components/Items";
const App = () => {
	const [data, setData] = useState([]);

	const [selectName, setSelectName] = useState("");

	useEffect(() => {
		fetch("/station.json")
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);
	return (
		<div>
			<div className="stations">
				<div className="station-header">
					<img src={backArrow} alt="" />
					<h1>STATIONS</h1>
					<img src={switchImg} alt="" />
				</div>
				<div className="stations-body">
					{data.map((itm, id) => (
						<Items key={id} props={itm} setSelectName={setSelectName}></Items>
					))}
				</div>

				<div className="station-footer">
					<hr />
					{selectName === "" ? (
						""
					) : (
						<>
							<h3>Currently Playing</h3>
							<p>{selectName}</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
