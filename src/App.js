import JobRolesOfSector from "./components/JobRolesOfSectors/JobRolesOfSector";
import JobRoleInformation from "./components/IndividualJobDetails/JobRoleInformation";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import Sectorscreen from "./components/Sector/Sectorscreen";
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
export default App;
