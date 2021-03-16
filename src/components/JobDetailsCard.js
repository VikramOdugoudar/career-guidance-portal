import React from "react";

const JobDetailsCard = ({ information, field_title }) => {
	return (
		<div className="flex flex-col content-center w-9/12 p-4 mx-auto mt-4 mb-4 bg-blue-500 rounded-xl h-60 align-center md:w-7/12">
			<div className="transition duration-500 ease-in-out transform hover:scale-105">
				<h1 className="p-2 font-sans text-2xl font-semibold text-center text-white bg-blue-500 rounded-xl">
					{field_title}
				</h1>
				<p className="p-5 bg-blue-200 rounded-xl ">{information}</p>
			</div>
		</div>
	);
};

export default JobDetailsCard;
