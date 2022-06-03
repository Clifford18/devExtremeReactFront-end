import './App.css';
import NavAppTest from "./NavTest/NavAppTest";
import {BrowserRouter as Router} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";


function App() {
	return (
		<Router>
			<div>
				<HeaderComponent/>
				<div className="container">
					<NavAppTest/>
				</div>
				<FooterComponent/>

			</div>

		</Router>

	);
}

export default App;
