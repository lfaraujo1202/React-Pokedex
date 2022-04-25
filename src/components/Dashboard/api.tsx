export const searchPokemon = async (pokemon : any) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {}
};

export const getPokemons = async () => {
    try {
        let url = 'https://pokeapi.co/api/v2/pokemon/?limit=251';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {}
};

export const getPokemonData = async (pokemon : any) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {}
};