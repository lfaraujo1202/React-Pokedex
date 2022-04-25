import { Container } from "./styles";
import { useState, useEffect } from "react";

export function Searchbar (props : any) {
    const { onSearch } = props;
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [sort, setSort] = useState("");

    const onChange = (getValue : any) => {
        setSearch(getValue.target.value);
    };
    
    const onFilter = (getType : any) => {
        setType(getType.target.value);
    };

    const onSort = (getSort : any) => {
        setSort(getSort.target.value);
    };

    useEffect(() => {
        onSearch(search, type, sort);
    }, [search, type, sort]);

    return (
        <Container>
            <input 
                onChange={onChange}
                placeholder=" Pesquisar">
            </input>

            <select className="Sort" onChange={onSort}>
                <option value="number" disabled selected>Ordenar</option>
                <option value={'numberasc'}>↓ Número</option>
                <option value={'numberdesc'}>↑ Número</option>
                <option value={'namedesc'}>↑ Nome</option>
                <option value={'nameasc'}>↓ Nome</option>
            </select>

            <select onChange={onFilter}>
                <option value={'all'}>Todos</option>
                <option value={'normal'}>normal</option>
                <option value={'fire'}>fire</option>
                <option value={'water'}>water</option>
                <option value={'electric'}>electric</option>
                <option value={'grass'}>grass</option>
                <option value={'ice'}>ice</option>
                <option value={'ground'}>ground</option>
                <option value={'flying'}>flying</option>
                <option value={'ghost'}>ghost</option>
                <option value={'rock'}>rock</option>
                <option value={'fighting'}>fighting</option>
                <option value={'poison'}>poison</option>
                <option value={'psychic'}>psychic</option>
                <option value={'bug'}>bug</option>
                <option value={'dark'}>dark</option>
                <option value={'steel'}>steel</option>
                <option value={'dragon'}>dragon</option>
                <option value={'fairy'}>fairy</option>
            </select>

        </Container>
    )
}