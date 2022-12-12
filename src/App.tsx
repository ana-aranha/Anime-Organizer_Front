import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Assets/GlobalStyle";
import { useState } from "react";
import Homepage from "./components/pages/Homepage/index";
import Header from "./components/header/index";
import UserContext from "./contexts/UserContext";
import { AnimeSearch } from "./services/anime-organizer";

function App() {
	const [anime, setAnime] = useState<AnimeSearch>({ title: "" });
	const [disabled, setDisabled] = useState<boolean>(false);

	return (
		<>
			<GlobalStyle />
			<UserContext.Provider value={{ anime, setAnime, disabled, setDisabled }}>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Homepage />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
