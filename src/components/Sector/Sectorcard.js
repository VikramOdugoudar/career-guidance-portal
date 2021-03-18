import React from "react";
import { Link } from "react-router-dom";
import images from "../ImageController/ImageHandler";
const Sectorcard = ({ name, index }) => {
	return (
		<div className="relative w-2/4 m-10 text-indigo-600 transition duration-500 ease-in-out transform bg-gray-100 shadow-xl cursor-pointer rounded-3xl hover:bg-indigo-400 hover:scale-95 hover:text-white md:w-1/5">
			<div className="w-full p-1">
				<img
					src={images[index]}
					alt="..."
					className="object-cover rounded-3xl"
				/>
			</div>
			<div className="pb-1 text-xl text-center cursor-pointer ">
				<Link to={`/${name}`}>{name}</Link>
			</div>
		</div>
	);
};

export default Sectorcard;
