import { Container } from "./styles";
import { Card } from "../Card"
import { useEffect, useState } from "react";
import type { CardProps } from "../Card/Card";
import { Searchbar } from '../Searchbar';
import {searchPokemon, getPokemons, getPokemonData} from './api'
import {PokemonDetailsModal} from '../PokemonDetailsModal';

export function Dashboard() {

    // Modal State and Variables
    const [DetailsModal, SetDetailsModal] = useState(false)
    function HandleCloseDetailsModal() {SetDetailsModal(false)}
    function HandleOpenDetailsModal() {SetDetailsModal(true)}
    // Modal State and Variables

    const [cards, setCards] = useState<CardProps[]>([]);

    const fetchPokemons = async () => {
            const data = await getPokemons();
            const promises = data.results.map(async (pokemon : any)=> {
                return await getPokemonData(pokemon.name)
            })
            const results = await Promise.all(promises)
            setCards(results)
    }

    const fetchPokemonsSearch = async (searchinfo : any) => {
            const data = await getPokemons();
            const promises = data.results.map(async (pokemon : any)=> {
                return await getPokemonData(pokemon.name)
            })
            const results = await Promise.all(promises)
            return results.filter(result => result.name.includes(searchinfo))
    }

    function onlySpaces(str : string) {
        return /^\s*$/.test(str);
      }

    const onSearch = async (pokemon: string) => {
        if (onlySpaces(pokemon)) {
            fetchPokemons()
        } else {
            // console.log(pokemon)
            const SearchResult : any = await fetchPokemonsSearch(pokemon)
            setCards(SearchResult)
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, []);

    function formatId(num : string, size : number) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    return (
        <Container >
        <div className="Searchbar">
            {/* <button className="modal-button" onClick={HandleOpenDetailsModal}>Teste Modal</button> */}
            <Searchbar onSearch={onSearch}/>
        </div>
        <div className="grid">
            {cards.map(pokemon => {
                return (
                        <Card 
                            key={pokemon.name}
                            id={pokemon.id} 
                            name={pokemon.name} 
                            image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatId(pokemon.id, 3)}.png`}
                            image2={pokemon.sprites.front_default}
                            type={pokemon.types[0].type.name}
                            hp={pokemon.stats[0].base_stat}
                            attack={pokemon.stats[1].base_stat}
                            defense={pokemon.stats[2].base_stat}
                        />
                );
            })}
        </div>

        <PokemonDetailsModal 
            isOpen={DetailsModal}
            onRequestClose={HandleCloseDetailsModal}
        />

        </Container>
    );
}
