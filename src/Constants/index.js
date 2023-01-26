
export const typesFirstFetch = {
    character: {
        min: 1,
        max: 826,
        title: "Personajes",
        fetch: "character",
        pages: 42,
    },
    episode:  {
        min: 1,
        max: 51,
        title: "Episodios",
        fetch: "episode",
        pages: 3,
    },
    location:  {
        min: 1,
        max: 126,
        title: "Locaciones",
        fetch: "location",
        pages: 7,
    },
}

export const baseUrlApi = "https://rickandmortyapi.com/api"

export const colorsCircleStatus = {
    Alive: 'green',
    Dead: 'red',
    unknown: 'gray',
    Unknown: 'gray',
}