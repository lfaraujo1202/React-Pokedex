import { Container } from "./styles";
import { useState, useEffect } from "react";

export function Searchbar (props : any) {
    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const onChange = (getValue : any) => {
        setSearch(getValue.target.value);
    };
    
    useEffect(() => {
        onSearch(search);   
    }, [search]);

    return (
        <Container>
            <input onChange={onChange}></input>
            <button>Search</button>
        </Container>
    )
}