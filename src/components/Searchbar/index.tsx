import { Container } from "./styles";
import { useState } from "react";

export function Searchbar (props : any) {
    const { onSearch } = props;
    const [search, setSearch] = useState("");

    const onChange = (getValue : any) => {
        setSearch(getValue.target.value);
    };

    const onClick = async (getValue : any) => {
        onSearch(search);
    }

    return (
        <Container>
            <input onChange={onChange}></input>
            <button onClick={onClick}>Search</button>
        </Container>
    )
}