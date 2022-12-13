import { useEffect, useState } from "react";
import {
	Anime,
	getAnime,
	SelectedType,
} from "../../../services/anime-organizer";
import { Animes } from "./../Homepage/style";
import AnimePage from "../AnimePage";

export default function PopularityPage() {
	const [animes, setAnimes] = useState<Anime[]>([]);
	const [show, setShow] = useState<boolean>(false);
	const [selected, setSelected] = useState<Anime>({
		coverImage: { large: "" },
		id: 0,
		title: { english: "", romaji: "" },
		description: "",
		idMal: 0,
	}) as SelectedType;

	useEffect(() => {
		getAnime()
			.then((resp) => {
				const response = resp.data;
				setAnimes(response.data.Page.media);
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{show ? (
				<AnimePage animeSelected={selected} setShow={setShow} />
			) : (
				<Animes>
					{animes.map((el, i) => (
						<div key={i}>
							<h2>{el.title.english ? el.title.english : el.title.romaji}</h2>
							<img
								src={el.coverImage.large}
								onClick={() => {
									setSelected({
										coverImage: el.coverImage,
										id: el.id,
										title: el.title,
										description: el.description,
										idMal: el.idMal,
									});
									setShow(true);
								}}
								alt={el.title.romaji}
							/>
						</div>
					))}
				</Animes>
			)}
		</>
	);
}
