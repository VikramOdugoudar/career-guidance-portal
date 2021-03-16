import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
const SearchPage = () => {
	const [jobRole, setJobRole] = useState([]);
	const [text, setText] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		const fetchRoles = async () => {
			const res = await fetch("http://localhost:8000/allRoles");
			const data = await res.json();
			setJobRole(data);
			setFilteredData(data);
		};
		fetchRoles();
	}, []);

	const filtered = (e) => {
		const filtered =
			jobRole &&
			jobRole.filter((item) => {
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
		<div className="flex content-center w-screen h-screen bg-center bg-no-repeat bg-contain bg-blue-50 sm:bg-contain">
			<div className="flex flex-col items-center w-screen space-x-0.5">
				<div className="flex flex-row w-full ml-96">
					<input
						type="search"
						className="w-3/6 h-10 p-2 mb-4 text-center bg-blue-100 border-2 border-indigo-400 shadow-lg ml-60 rounded-3xl mt-14 focus:ring-2 focus:ring-blue-600"
						placeholder="Search Job Roles"
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
				{filteredData && filteredData.length > 0
					? filteredData.map((JobRoleInformation) => (
							<ul className="w-2/4 p-3 mt-2 text-center transform border-2 border-solid hover:bg-indigo-800 hover:scale-x-95 hover:text-white rounded-xl ">
								{JobRoleInformation}
							</ul>
					  ))
					: null}
			</div>
		</div>
	);
};

export default SearchPage;
