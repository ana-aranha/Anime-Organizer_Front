import { Anime } from "../../../services/anime-organizer";
import { PagePopUp } from "./style";
import parse from "html-react-parser";

export default function AnimePage({
	animeSelected,
	setShow,
}: {
	animeSelected: Anime;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<PagePopUp>
			<div>
				<h3 onClick={() => setShow(false)}>X</h3>
				<div>
					<h2>
						{animeSelected.title.english
							? animeSelected.title.english
							: animeSelected.title.romaji}
					</h2>
					<img
						src={animeSelected.coverImage.large}
						alt={animeSelected.title.romaji}
					/>
					<p>{parse(animeSelected.description)}</p>
				</div>
			</div>
		</PagePopUp>
	);
}
