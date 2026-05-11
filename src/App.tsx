import { useEffect } from "react";
import "./App.css";
import { Tracker } from "./components/Tracker";

function App() {
	useEffect(() => {}, []);
	return <Tracker distance={11} />;
}

export default App;
