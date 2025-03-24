// For fetching API 

export default async function getData() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();

        const pokemon = [];

        for (let i = 0; i < 20; i++) {
            const pokemonUrl = json.results[i].url;
            const pokemonResponse = await fetch(pokemonUrl);
            if (!pokemonResponse.ok) {
                throw new Error(`Failed to fetch deftails for Pokemon ${i + 1}`);
            }
            const pokemonData = await pokemonResponse.json();
            pokemon.push(pokemonData);
        }

        return pokemon;

    } catch (error) {
        console.error(error.message);
        return [];
    }
}


