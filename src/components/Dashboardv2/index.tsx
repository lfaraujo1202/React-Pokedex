import { Container } from "./styles";
import { Card } from "../Card"
import { useEffect, useState } from "react";
import type { CardProps } from "../Card/Card";
import axios from 'axios';
import { Searchbar } from '../Searchbar';
import {searchPokemon, getPokemons, getPokemonData} from '../Dashboard/api'

export function Dashboardv2() {
    const [cards, setCards] = useState<CardProps[]>([]);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon/?limit=151');

    const getAllPokemons = async () => {
        const res = await axios.get(loadMore);
        createPokemonObject(res.data.results);
    }

    async function createPokemonObject (result : any) {
            const promises = result.map ( async (pokemon : any) => {
            return await axios.get(pokemon.url);
        })
            const results = await Promise.all(promises)
            console.log(results)
            setCards(results)
    }

    const onSearch = async (pokemon: any) => {
        if(!pokemon) {
            return getAllPokemons();
        }
        const result = await searchPokemon(pokemon);
        if(!result) {
            console.log("not found");
        }   else {
        setCards([result])
        }
    }

    useEffect(() => {
        getAllPokemons()
    }, []);

    return (
        <Container >
        <div className="Searchbar">
            <Searchbar onSearch={onSearch}/>
        </div>

        <div className="grid">
            {cards.map(pokemon => {
                return (
                        <Card 
                            key={pokemon.data.name}
                            id={pokemon.data.id} 
                            name={pokemon.data.name} 
                            image={pokemon.data.sprites.front_default}
                            type={pokemon.data.types[0].type.name}
                            hp={pokemon.data.stats[0].base_stat}
                            attack={pokemon.data.stats[1].base_stat}
                            defense={pokemon.data.stats[2].base_stat}
                        />
                );
            })}
        </div>
        </Container>
    );
}
