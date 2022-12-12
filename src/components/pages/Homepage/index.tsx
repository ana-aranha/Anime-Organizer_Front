import {
	AnimeSearchContextType,
	DisabledContextType,
} from "../../../services/anime-organizer";
import * as React from "react";
import { PageStyle } from "./style";
import PopularityPage from "../PopularityPage";
import SearchPage from "../SeachPage";
import UserContext from "../../../contexts/UserContext";

export default function Homepage() {
	const { anime } = React.useContext(UserContext) as AnimeSearchContextType;
	const { disabled } = React.useContext(UserContext) as DisabledContextType;

	return (
		<PageStyle>
			{!disabled ? <PopularityPage /> : <SearchPage anime={anime} />}
		</PageStyle>
	);
}
