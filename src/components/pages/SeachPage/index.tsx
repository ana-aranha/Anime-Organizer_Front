import { useEffect, useState } from "react";
import {
	Anime,
	AnimeSearch,
	getAnimeSearch,
} from "../../../services/anime-organizer";
import { Animes } from "../Homepage/style";

export default function SearchPage({ anime }: { anime: AnimeSearch }) {
	const [result, setResult] = useState<Anime[]>([]);

	useEffect(() => {
		getAnimeSearch(anime.title)
			.then((resp) => {
				const response = resp.data;
				setResult(response.data.Page.media);
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [anime.title]);

	return (
		<Animes>
			{result.map((el, i) => (
				<div key={i}>
					<h2>{el.title.english}</h2>
					<img
						src={el.coverImage.large}
						onClick={() =>
							console.log({
								id: el.id,
								title: el.title,
								description: el.description,
							})
						}
						alt={el.title.english}
					/>
				</div>
			))}
		</Animes>
	);
}
