import { Anime, SelectedType } from "../../../services/anime-organizer";
import { PagePopUp } from "./style";

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
				<h2>
					{animeSelected.title.english
						? animeSelected.title.english
						: animeSelected.title.romaji}
				</h2>
				<img
					src={animeSelected.coverImage.large}
					alt={animeSelected.title.romaji}
				/>
				<p>{animeSelected.description}</p>
				<h3 onClick={() => setShow(false)}>CLOSE</h3>
			</div>
		</PagePopUp>
	);
}
