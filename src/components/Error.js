import React from "react";

const Error = () => {
	return (
		<div className="w-full h-screen overflow-hidden bg-center bg-no-repeat bg-contain bg-error-img sm:bg-contain">
			<div className="mt-4 text-6xl font-semibold text-center text-red-600">
				Page Not Found
			</div>
		</div>
	);
};

export default Error;
