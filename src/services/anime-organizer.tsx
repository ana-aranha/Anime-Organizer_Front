import axios from "axios";

const BASE_URL = "http://localhost:4000";

function getMyAnimes() {
	const promise = axios.get(`${BASE_URL}/myanimes`);
	return promise;
}

/* function getMyAnimesFiltered(id: number) {
  const promise = axios.get(`${BASE_URL}/myanimes?statusId=${id}`);
  return promise;
}

function createAnime(body) {
  const promise = axios.post(`${BASE_URL}/myanimes`, body);
  return promise;
}

function editAnime(body, id) {
  const promise = axios.put(`${BASE_URL}/myanimes/edit/${id}`, body);
  return promise;
}

function deleteAnime(id) {
  const promise = axios.delete(`${BASE_URL}/myanimes/delete/${id}`);
  return promise;
} */

const query = `
  query($search: String){
    Page {
      media(search: $search, type: ANIME, sort: POPULARITY_DESC, isAdult: false,) {
        id
        idMal
        description(asHtml: false)
        title {
          romaji
          english
        }
        coverImage {
          large
        }
      }
    }
  }
  `;

function getAnime() {
	const response = axios.post("https://graphql.anilist.co", {
		query,
	});
	return response;
}

function getAnimeSearch(Anime: string) {
	const variables = { search: Anime };
	const response = axios.post("https://graphql.anilist.co", {
		query,
		variables,
	});
	return response;
}

type Anime = {
	coverImage: imageType;
	description: string;
	id: number;
	idMal: number;
	title: titleType;
};

type AnimeSearch = {
	title: string;
};

type imageType = {
	large: string;
};

type titleType = {
	romanji: string;
	english: string;
};

type AnimeSearchContextType = {
	anime: AnimeSearch;
	setAnime: (anime: AnimeSearch) => void;
};

type DisabledContextType = {
	disabled: boolean;
	setDisabled: (disabled: boolean) => void;
};

export {
	getMyAnimes,
	getAnimeSearch,
	/*   getMyAnimesFiltered,
  createAnime,
  editAnime,
  deleteAnime, */
	getAnime,
};

export type { AnimeSearchContextType, DisabledContextType, Anime, AnimeSearch };
