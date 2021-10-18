import React, {useState} from "react";

import Nav from "./Nav";
import HogDetails from "./HogDetails";
import TitleContainer from "./TitleContainer";

import hogs from "../porkers_data";

function App() {
	const [hogToDisplay, setHogToDisplay] = useState({});

	function handleHogClick(hog) {
		setHogToDisplay(hog);
	}

	return (
		<div className="App">
			<Nav />
			<TitleContainer hogs={hogs} handleHogClick={handleHogClick}/>
			<HogDetails hogToDisplay={hogToDisplay}/>
		</div>
	);
}

export default App;


/*

hogToDisplay = {
	name: "",
	specialty: "",
	greased: '',
	weight: '',
	"highest medal achieved": "",
	image: "",
}

*/