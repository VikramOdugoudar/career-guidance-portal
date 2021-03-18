import React from "react";
import { BsSearch } from "react-icons/bs";
const Search = ({ onSubmit, onChange, text }) => {
	return (
		<div className="flex flex-row justify-center ">
			<input
				type="search"
				className="w-3/6 h-10 p-2 mb-4 text-xl bg-blue-100 border-2 border-indigo-400 shadow-lg rounded-3xl mt-14 focus:outline-none focus:ring-2 focus:ring-blue-600"
				placeholder="Search Job Roles "
				value={text}
				onChange={onChange}
			/>

			<button
				className="flex items-center justify-between px-4 py-1 ml-4 text-white align-text-bottom transition duration-500 ease-in-out transform bg-indigo-600 rounded-md mt-14 hover:bg-indigo-800 hover:scale-x-95 hover:text-white h-9"
				onClick={onSubmit}
			>
				Search
				<BsSearch className="ml-3" />
			</button>
		</div>
	);
};

export default Search;
