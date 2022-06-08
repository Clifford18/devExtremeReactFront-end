import './App.css';
import NavigationComponent from "./components/NavigationComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";


function App() {
	return (
			<div>
				<HeaderComponent/>

				<div className="container">
					<NavigationComponent/>
				</div>
				<FooterComponent/>

			</div>

	);
}

export default App;
