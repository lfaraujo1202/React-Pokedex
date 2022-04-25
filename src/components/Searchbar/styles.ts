import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: -20px;
    margin-bottom: 15px;
    padding: 0rem 2rem;
    display: flex;
    gap: 1.5rem;
    height: 30px;

    input{
        border: #cccccc;
        height: 40px;
        border: none;
        padding: 5px;
        font-size: 1.05rem;
        color: #8c8c8c;
        
        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #8c8c8c;
        }
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

    select{
        border: #cccccc;
        height: 40px;
        border: none;
        padding: 5px;
        font-size: 1.05rem;
        color: #8c8c8c;
        width: 140px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #8c8c8c;
        }
        option{
            text-transform: capitalize;
        }
    }

`;