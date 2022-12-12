import * as React from "react";
import {
	AnimeSearch,
	DisabledContextType,
	AnimeSearchContextType,
} from "../services/anime-organizer";

const UserContext = React.createContext<
	AnimeSearchContextType | boolean | null | DisabledContextType | AnimeSearch
>(null);

export default UserContext;
