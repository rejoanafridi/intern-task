import React, { useState } from "react";
import minusImg from "../image/minus.png";
import plusImg from "../image/plus.png";
import imgWorld from "../image/Layer_3.png";
import "./Items.css";
const Items = ({ props, setSelectName }) => {
	const { name, number } = props;
	// console.log(name);
	const [select, setSelect] = useState(false);

	const handleClick = (e) => {
		setSelect(true);
		setSelectName(e.target.innerHTML);
	};

	console.log(select);
	return (
		<div className="station-item">
			<hr />
			<div className="item">
				<h3 onClick={handleClick}>{name}</h3>
				<p>{number}</p>
			</div>

			{select ? (
				<div className="after-select">
					<a href="#">
						{" "}
						<img className="plusIcon" src={minusImg} alt="" />{" "}
					</a>
					<img className="imgworld" src={imgWorld} alt="" />
					<a href="#">
						{" "}
						<img className="minusIcon" src={plusImg} alt="" />{" "}
					</a>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Items;
