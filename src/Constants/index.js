
export const typesFirstFetch = {
    character: {
        min: 1,
        max: 826,
        title: "Personajes",
        fetch: "character",
    },
    episode:  {
        min: 1,
        max: 51,
        title: "Episodios",
        fetch: "episode",
    },
    location:  {
        min: 1,
        max: 126,
        title: "Locaciones",
        fetch: "location",
    },
}

export const baseUrlApi = "https://rickandmortyapi.com/api"

export const colorsCircleStatus = {
    Alive: 'green',
    Dead: 'red',
    unknown: 'gray',
    Unknown: 'gray',
}