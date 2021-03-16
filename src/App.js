import JobRolesOfSector from "./components/JobRolesOfSector";
import JobRoleInformation from "./components/JobRoleInformation";
import Error from "./components/Error";
import Header from "./components/Header";
import Sectorscreen from "./components/Sectorscreen";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/">
					<Sectorscreen />
				</Route>
				<Route exact path="/search">
					<SearchPage />
				</Route>
				<Route exact path="/:sector">
					<JobRolesOfSector />
				</Route>
				<Route exact path="/:sector/:jobRole">
					<JobRoleInformation />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</>
	);
}
// className="box-border w-screen h-screen bg-gray-50"
export default App;
