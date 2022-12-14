import { HeaderStyle, Form } from "./style";
import {
	AnimeSearchContextType,
	DisabledContextType,
} from "./../../services/anime-organizer";
import UserContext from "../../contexts/UserContext";
import * as React from "react";

export default function Header() {
	const { anime, setAnime, setDisabled } = React.useContext(
		UserContext,
	) as AnimeSearchContextType & DisabledContextType;

	async function searchAnime(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (anime.title !== "") {
			setDisabled(true);
		}
		if (anime.title === "") {
			setDisabled(false);
		}
	}

	return (
		<HeaderStyle>
			<Form onSubmit={searchAnime}>
				<input
					type="text"
					placeholder="Ache seu anime.."
					value={anime.title}
					onChange={(e) => {
						const aux = { ...anime };
						aux.title = e.target.value;
						setAnime(aux);
					}}
				/>
			</Form>
		</HeaderStyle>
	);
}
