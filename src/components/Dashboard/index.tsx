import { Container } from "./styles";
import { Card } from "../Card"
import { useEffect, useState } from "react";
import type { CardProps } from "../Card/Card";
import { Searchbar } from '../Searchbar';
import {searchPokemon, getPokemons, getPokemonData} from './api'

export function Dashboard() {
    const [cards, setCards] = useState<CardProps[]>([]);

    const fetchPokemons = async (sort : string) => {  
            const data = await getPokemons();
            const promises = data.results.map(async (pokemon : any)=> {
                return await getPokemonData(pokemon.name)
            })
            const results = await Promise.all(promises)

            if ((sort == 'numberasc') || sort == '') {
                const getSort = results.sort((a : any, b :any) => a.id-b.id);
                setCards(getSort);
            } else if (sort == 'nameasc') {
                const getSort = results.sort((a : any, b :any) => a.name.localeCompare(b.name));
                setCards(getSort);
            } else if (sort == 'numberdesc') {
                const getSort = results.sort((a : any, b :any) => b.id-a.id);
                setCards(getSort);
            } else if (sort == 'namedesc') {
                const getSort = results.sort((a : any, b :any) => b.name.localeCompare(a.name));
                setCards(getSort);
            }
    }

    function SortBy(obj : any, sort: string) {
        if (sort == 'nameasc') {
            const sortResults = obj.sort((a : any, b :any) => a.name.localeCompare(b.name));
            return sortResults;
        } else if (sort == 'numberasc') {
            const sortResults = obj.sort((a : any, b :any) => a.id-b.id);
            return sortResults;
        } else if (sort == 'numberdesc') {
            const sortResults = obj.sort((a : any, b :any) => b.id-a.id);
            return sortResults;
        } else if (sort == 'namedesc') {
            const sortResults = obj.sort((a : any, b :any) => b.name.localeCompare(a.name));
            return sortResults;
        } 
    }

    const fetchPokemonsSearch = async (searchinfo : any, typeinfo: any, sort: any) => {
        const data = await getPokemons();
        const promises = data.results.map(async (pokemon : any)=> {
            return await getPokemonData(pokemon.name)
        })
        const results = await Promise.all(promises)
        if ((typeinfo !== 'all') && (typeinfo !== '')) {
            const sResults = results.filter(result => result.name.includes(searchinfo))
            const newPokemonArray = new Array(); 
            
            // map to find pokemon by type and then return new array
            sResults.map(result =>{
                result.types.map(((ptype : any) => {
                    if (ptype.type.name == typeinfo) {
                        newPokemonArray.push(result)
                    }
                }))
            })
            setCards(SortBy(newPokemonArray, sort))
            return newPokemonArray

        } else {
            return results.filter(result => result.name.includes(searchinfo))
        }
    }

    function onlySpaces(str : string) {
        return /^\s*$/.test(str);
      }

    const onSearch = async (pokemon: string, type: string, sort: string) => {

        if (onlySpaces(pokemon) && ((type == 'all') || (type == ''))) {
            fetchPokemons(sort)
        } else {
            const SearchResult : any = await fetchPokemonsSearch(pokemon, type, sort)
            setCards(SearchResult)
        }
    }

    useEffect(() => {
        fetchPokemons('numberasc')
    }, []);

    function formatId(num : string, size : number) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    return (
        <Container >
        <div className="Searchbar">
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
                            type={pokemon.types}
                            hp={pokemon.stats[0].base_stat}
                            attack={pokemon.stats[1].base_stat}
                            defense={pokemon.stats[2].base_stat}
                        />
                );
            })}
        </div>
        </Container>
    );
}
