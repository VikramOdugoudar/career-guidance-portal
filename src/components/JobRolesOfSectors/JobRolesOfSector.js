import React, { useState, useEffect } from "react";
import JobRolesList from "./JobRolesList";
import { useParams } from "react-router-dom";
import Search from "../Search/Search";

const JobRolesOfSector = () => {
	const [jobRoles, setJobRoles] = useState([]);
	const [text, setText] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const { sector } = useParams();

	useEffect(() => {
		const fetchJobRoles = async () => {
			const res = await fetch(`http://localhost:8000/${sector}`);
			const data = await res.json();
			setJobRoles(data);
			setFilteredData(data);
		};
		fetchJobRoles();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const filtered = (e) => {
		const filtered =
			jobRoles &&
			jobRoles.filter((item) => {
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
			<div className="container mx-auto ">
				<h1 className="p-5 mb-2 text-5xl font-semibold text-center text-indigo-600 ">
					Job Roles Of {sector} Sector
				</h1>

				{/* <div className="flex flex-col items-center w-screen space-x-0.5">
					<div className="flex flex-row w-full ml-96">
						
						
					</div>
					
				</div> */}
				<Search
					onChange={onChange}
					onSubmit={onSubmit}
					text={text}
				></Search>

				<ul className="px-4 space-y-3 text-center cursor-pointer">
					<JobRolesList jobData={filteredData} />
				</ul>
			</div>
		</div>
	);
};

export default JobRolesOfSector;
