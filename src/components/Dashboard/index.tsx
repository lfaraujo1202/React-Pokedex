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
        try {
            const data = await getPokemons();
            const promises = data.results.map(async (pokemon : any)=> {
                return await getPokemonData(pokemon.name)
            })
            const results = await Promise.all(promises)
            setCards(results)
        }   
        catch(err) {
        }
    }

    const onSearch = async (pokemon: any) => {
        if(!pokemon) {
            return fetchPokemons();
        }
        const result = await searchPokemon(pokemon);
        if(!result) {
            console.log("not found");
        }   else {
        setCards([result])
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, []);

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
                            image={pokemon.sprites.front_default}
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
