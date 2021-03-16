import React, { useState, useEffect } from "react";
import JobRolesList from "./JobRolesList";
import { useParams } from "react-router-dom";

const JobRolesOfSector = () => {
	const [jobRoles, setJobRoles] = useState([]);
	const { sector } = useParams();

	useEffect(() => {
		const fetchJobRoles = async () => {
			const res = await fetch(`http://localhost:8000/${sector}`);
			const data = await res.json();
			setJobRoles(data);
		};
		fetchJobRoles();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="w-full h-full bg-blue-50">
			<div className="container mx-auto ">
				<h1 className="p-5 mb-2 text-4xl font-semibold text-center text-indigo-600 ">
					Job Roles Of {sector} Sector
				</h1>
				<ul className="px-4 space-y-3 text-center cursor-pointer">
					<JobRolesList jobData={jobRoles} />
				</ul>
			</div>
		</div>
	);
};

export default JobRolesOfSector;
