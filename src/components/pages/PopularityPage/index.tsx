import { useEffect, useState } from "react";
import { Anime, getAnime } from "../../../services/anime-organizer";
import { Animes } from "./../Homepage/style";

export default function PopularityPage() {
	const [animes, setAnimes] = useState<Anime[]>([]);

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
		<Animes>
			{animes.map((el, i) => (
				<div key={i}>
					<h2>{el.title.english ? el.title.english : el.title.romaji}</h2>
					<img
						src={el.coverImage.large}
						onClick={() =>
							console.log({
								id: el.id,
								title: el.title,
								description: el.description,
								image: el.coverImage.large,
							})
						}
						alt={el.title.romaji}
					/>
				</div>
			))}
		</Animes>
	);
}
