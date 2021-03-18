import React, { useState, useEffect } from "react";

import Sectorcard from "./Sectorcard";
import Search from "../Search/Search";
const Sectorscreen = () => {
	const [sector, setSector] = useState([]);
	const [text, setText] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		const fetchSectors = async () => {
			const res = await fetch("http://localhost:8000/sectors");
			const data = await res.json();
			setSector(data);
			setFilteredData(data);
		};
		fetchSectors();
	}, []);

	const filtered = (e) => {
		const filtered =
			sector &&
			sector.filter((item) => {
				return item.toLowerCase().includes(e.toLowerCase());
			});
		setFilteredData(filtered);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === "") {
			alert("Please enter Something");
		} else {
			setText("");
		}
	};

	const onChange = (e) => {
		setText(e.target.value);
		filtered(e.target.value);
	};

	return (
		<div className="w-full h-full bg-blue-50">
			<div className="p-5 ">
				<div className="mx-auto text-4xl font-semibold text-center text-blue-700">
					Browse by Sector
				</div>
			</div>

			<div className="flex flex-col items-center  space-x-0.5">
				<div className="w-full">
					<Search
						onChange={onChange}
						onSubmit={onSubmit}
						text={text}
					></Search>
				</div>
			</div>

			<div className="flex flex-col flex-wrap items-center flex-grow-0 justify-evenly md:flex-row">
				{filteredData && filteredData.length > 0
					? filteredData.map((data, index) => (
							<Sectorcard name={data} index={index} key={data} />
					  ))
					: null}
			</div>
		</div>
	);
};

export default Sectorscreen;
