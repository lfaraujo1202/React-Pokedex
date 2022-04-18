import styled from "styled-components";

export const Container = styled.main`
    input{
        border: #cccccc;
        height: 30px;
    }

    button{
        margin-left: 10px;
        color: var(--fighting);
        background-color: white;
        height: 30px;
        border: none;
        border-radius: 8px;
        width: 60px;
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.9);
        }
    }

`;