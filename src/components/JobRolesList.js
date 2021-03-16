import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const JobRolesList = ({ jobData }) => {
	const { url } = useRouteMatch();
	return (
		<div className="mb-3 text-lg text-indigo-500 ">
			{jobData.map((jobTitle) => {
				return (
					<div className="flex justify-center ">
						<li
							key={jobTitle}
							className="w-1/2 px-3 py-3 my-3 list-none transition duration-500 ease-in-out transform bg-blue-200 border md:w-2/6 rounded-2xl hover:bg-indigo-800 hover:scale-x-95 hover:text-white"
						>
							<Link to={`${url}/${jobTitle}`}>{jobTitle}</Link>
						</li>
					</div>
				);
			})}
		</div>
	);
};

export default JobRolesList;
