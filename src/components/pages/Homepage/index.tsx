import {
	AnimeSearchContextType,
	DisabledContextType,
} from "../../../services/anime-organizer";
import * as React from "react";
import { PageStyle } from "./style";
import PopularityPage from "../PopularityPage";
import SearchPage from "../SeachPage";
import UserContext from "../../../contexts/UserContext";
import Component from "../../ComponentAsProps";

export default function Homepage() {
	const { anime, disabled } = React.useContext(
		UserContext,
	) as AnimeSearchContextType & DisabledContextType;

	return (
		<PageStyle>
			{!disabled ? (
				<PopularityPage />
			) : (
				<SearchPage anime={anime} Component={Component} />
			)}
		</PageStyle>
	);
}
