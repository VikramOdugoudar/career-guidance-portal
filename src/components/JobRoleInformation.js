import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FingerprintSpinner } from "react-epic-spinners";
import JobDetailsCard from "./JobDetailsCard";

const JobRoleInformation = () => {
	const [jobDetail, setJobDetail] = useState([]);
	const { sector, jobRole } = useParams();

	useEffect(() => {
		fetchJobInformation();
	}, []);

	console.log(jobDetail);
	const fetchJobInformation = async () => {
		const res = await fetch(`http://localhost:8000/${sector}/${jobRole}`);
		const data = await res.json();
		setJobDetail(data);
	};

	return (
		<div className="flex flex-col content-center w-full h-screen bg-gray-50">
			{jobDetail.length === 0 ? (
				<FingerprintSpinner color="blue" />
			) : (
				<>
					<h1 className="mt-10 mb-5 text-3xl font-semibold text-center text-indigo-700">
						{jobDetail[0].TITLE}
					</h1>
					<JobDetailsCard
						information={jobDetail[1].JOB_DESCRIPTION}
						field_title="Job Description"
					/>
					<JobDetailsCard
						information={jobDetail[2].WORK_ENVIRONMENT}
						field_title="Work Environment"
					/>
					<JobDetailsCard
						information={
							jobDetail[3].EDUCATIONAL_QUALIFICATIONS_AND_TRAINING
						}
						field_title="Educational Qualifications and Training"
					/>
					<JobDetailsCard
						information={jobDetail[4].KEY_COMPETENCIES}
						field_title="Key Competencies"
					/>
					<JobDetailsCard
						information={jobDetail[5].DESIRABLE_COMPETENCIES}
						field_title="Desirable Competencies"
					/>
					<JobDetailsCard
						information={
							jobDetail[6]
								.AVAILABLE_SKILL_TRAINING_AND_LEARNING_INSTITUTES
						}
						field_title="Available Skills and Training Institutes"
					/>
					<JobDetailsCard
						information={
							jobDetail[7]
								.AVAILABLE_SKILL_TRAINING_SCHEMES_SCHOLARSHIPS
						}
						field_title="Available Skills and Training Scholarships"
					/>
					<JobDetailsCard
						information={
							jobDetail[8].SAMPLE_OF_TRAINING_AND_LEARNING_COURSES
						}
						field_title="Sample Of Training and Learning Courses"
					/>
					<JobDetailsCard
						information={jobDetail[9].CAREER_PROGRESSION_PATH}
						field_title="Career Progression Path"
					/>
					<JobDetailsCard
						information={jobDetail[10].EXPECTED_EARNINGS}
						field_title="Expected Earnings"
					/>
					<JobDetailsCard
						information={jobDetail[11].REQUIRED_WORK_EXPERIENCE}
						field_title="Required Work Experience"
					/>
					<JobDetailsCard
						information={jobDetail[12].PROBABLE_EMPLOYERS}
						field_title="Probable Employers"
					/>
					<JobDetailsCard
						information={jobDetail[13].KEYWORDS}
						field_title="Keywords"
					/>
				</>
			)}
		</div>
	);
};

export default JobRoleInformation;
