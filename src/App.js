import './App.css';
import NavigationComponent from "./components/NavigationComponent";
import {BrowserRouter as Router} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";


function App() {
	return (
		<Router>
			<div>
				<HeaderComponent/>
				<div className="container">
					<NavigationComponent/>
				</div>
				<FooterComponent/>

			</div>

		</Router>

	);
}

export default App;
