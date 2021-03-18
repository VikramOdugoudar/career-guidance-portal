import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const Header = () => {
	const location = useLocation();
	const { pathname } = location;
	return (
		<nav className="bg-indigo-600">
			<div className="flex flex-col items-center justify-between p-2 xs:flex-row">
				<div className="flex items-center ml-3">
					<div className="flex items-center justify-center mx-2 mt-1 text-xl font-bold text-indigo-600 bg-white rounded-full w-7 h-7">
						T
					</div>
					<div className="text-3xl font-semibold tracking-widest text-white">
						<Link to="/">Transil</Link>
					</div>
				</div>
				{pathname === "/" ? null : (
					<div className="m-0.5 mx-6 mt-5 xs:mt-1">
						<button className="flex items-center justify-between px-4 py-1 text-indigo-600 transition duration-500 ease-in-out transform bg-white rounded-md hover:bg-indigo-800 hover:scale-x-95 hover:text-white">
							<Link to="/">Home</Link>
							<FaHome className="ml-3" />
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Header;
