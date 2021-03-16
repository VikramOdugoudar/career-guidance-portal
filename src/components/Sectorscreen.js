import React, { useState, useEffect } from "react";
import Sectorcard from "./Sectorcard";
const Sectorscreen = () => {
	const [sector, setSector] = useState([]);

	useEffect(() => {
		const fetchSectors = async () => {
			const res = await fetch("http://localhost:8000/sectors");
			const data = await res.json();
			setSector(data);
		};
		fetchSectors();
	}, []);
	return (
		<div className="h-full bg-blue-50">
			<div className="w-full p-5 ">
				<div className="mx-auto text-3xl font-semibold text-center text-blue-700">
					Browse by Sector
				</div>
			</div>
			<div className="flex flex-col flex-wrap items-center flex-grow-0 justify-evenly md:flex-row">
				{sector.map((data, index) => (
					<Sectorcard name={data} index={index} key={data} />
				))}
				,{}
			</div>
		</div>
	);
};

export default Sectorscreen;
// w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700
