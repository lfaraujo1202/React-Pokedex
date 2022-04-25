import styled from "styled-components";
import type { CardProps } from "./Card";

export const Container = styled.div<CardProps>`

    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        background: white;
        border-radius: 14px;
        height: 370px;
        width: 90%;
        margin-left: 32px;
        margin: 20px;
    }

    .CenterBall{
        width: 50px;
        height: 50px;
        border: 1px solid white;
        border-radius: 50px;
        position: absolute;
        margin-top: 158px;
        overflow: hidden;
    }

    .CenterBall::before,
    .CenterBall::after {
        content:"";
        position: absolute;
    }
    .CenterBall::before {
        background: ${
        props => 
        props.type === "normal" ? 'var(--textnormal)' 
        : props.type === "fire" ? 'var(--textfire)' 
        : props.type === "water" ? 'var(--textwater)' 
        : props.type === "electric" ? 'var(--textelectric)' 
        : props.type === "grass" ? 'var(--textgrass)' 
        : props.type === "ice" ? 'var(--textice)' 
        : props.type === "ground" ? 'var(--textground)' 
        : props.type === "flying" ? 'var(--textflying)' 
        : props.type === "ghost" ? 'var(--textghost)' 
        : props.type === "rock" ? 'var(--textrock)' 
        : props.type === "fighting" ? 'var(--textfighting)' 
        : props.type === "poison" ? 'var(--textpoison)' 
        : props.type === "psychic" ? 'var(--textpsychic)' 
        : props.type === "bug" ? 'var(--textbug)' 
        : props.type === "dark" ? 'var(--textdark)' 
        : props.type === "steel" ? 'var(--textsteel)' 
        : props.type === "dragon" ? 'var(--textdragon)' 
        : props.type === "fairy" ? 'var(--textfairy)' 
        : 'white'
        };
        width: 120px;
        height: 50%;
        margin-left: -30px;
    }
    .CenterBall::after {
        top: calc(50% - 2px);
        width: 120px;
        height: 4px;
        background: white;
        margin-left: -30px;
    }

    .CenterBall__button {
        position: absolute;
        top: calc(50% - 9px);
        left: calc(50% - 7px);
        width: 15px;
        height: 15px;
        background: #d9d9d9;
        border: 2.5px solid #fff;
        border-radius: 50%;
        z-index: 10;
        box-shadow: 0 0 0 1px #e6e6e6;
    }

    .card:hover .CenterBall__button{
        animation: blink .5s alternate 7;
    }

    @keyframes blink {
    from { background: #e6e6e6;}
    to { background: #e74c3c; }
    }

    .CardColor{
        width: 100%;
        height: 50.5%;
        background: ${
        props => 
        props.type === "normal" ? 'var(--normal)' 
        : props.type === "fire" ? 'var(--fire)' 
        : props.type === "water" ? 'var(--water)' 
        : props.type === "electric" ? 'var(--electric)' 
        : props.type === "grass" ? 'var(--grass)' 
        : props.type === "ice" ? 'var(--ice)' 
        : props.type === "ground" ? 'var(--ground)' 
        : props.type === "flying" ? 'var(--flying)' 
        : props.type === "ghost" ? 'var(--ghost)' 
        : props.type === "rock" ? 'var(--rock)' 
        : props.type === "fighting" ? 'var(--fighting)' 
        : props.type === "poison" ? 'var(--poison)' 
        : props.type === "psychic" ? 'var(--psychic)' 
        : props.type === "bug" ? 'var(--bug)' 
        : props.type === "dark" ? 'var(--dark)' 
        : props.type === "steel" ? 'var(--steel)' 
        : props.type === "dragon" ? 'var(--dragon)' 
        : props.type === "fairy" ? 'var(--fairy)' 
        : 'white'
        };
        border-radius: 0 0 14px 14px;
    }
    
    .icon {
        width: 120px;
        height: 120px;
    }

    .progress {
        font-weight: 200;
        max-width: 240px;
        font-size: 1rem;
        margin-top: 4rem;
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: -2rem;

    }

    .card:hover .progress {
        margin-top: 1.95rem;
    }


    .currentclass {
        font-weight: 200;
        max-width: 240px;
        font-size: 1rem;
        margin-top: 2rem;
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 1rem;

    }

    button {
        cursor: pointer;
        width: 200px;
        height: 40px;
        /* margin-top: 1.5rem; */
        border: none;
        background: transparent;
        color: var(--white);
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        transition: 0.2s;
        transform: translate;
    }

    button:hover {
        background: var(--green);
    }

    .pokebg {
        position: absolute;
        width: 120px;
        display: flex;
        border-radius: 50px;
        border: none;
    }

    .pokeball {
        display: none;
    }

    .icon img{
        height: 120px; 
        border-radius: 50%;
        border: 10px solid transparent;
        background: transparent;
        margin-bottom: 100px;
    }

    .card:hover .pokebg{
        transition: 0.1s;
        width: 0px;
        border: none;
    }

    .card:hover img{
        display: block;
        width: 100px;
        height: 100px;
        margin-left: 10px;
        transform-style: preserve-3d;
        transform: translate3d(0px,-60%,0px);
        transition: 0.2s;
        box-sizing: border-box;
        background: white;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-shadow: inset -2.5px -2.5px 0 2.5px #ccc;
        border: 10px solid var(--background);
    }

    h2 { 
        font-size: 1.2rem;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        position: absolute;
        margin-left: -250px;
        color: ${
        props => 
        props.type === "normal" ? 'var(--textnormal)' 
        : props.type === "fire" ? 'var(--textfire)' 
        : props.type === "water" ? 'var(--textwater)' 
        : props.type === "electric" ? 'var(--textelectric)' 
        : props.type === "grass" ? 'var(--textgrass)' 
        : props.type === "ice" ? 'var(--textice)' 
        : props.type === "ground" ? 'var(--textground)' 
        : props.type === "flying" ? 'var(--textflying)' 
        : props.type === "ghost" ? 'var(--textghost)' 
        : props.type === "rock" ? 'var(--textrock)' 
        : props.type === "fighting" ? 'var(--textfighting)' 
        : props.type === "poison" ? 'var(--textpoison)' 
        : props.type === "psychic" ? 'var(--textpsychic)' 
        : props.type === "bug" ? 'var(--textbug)' 
        : props.type === "dark" ? 'var(--textdark)' 
        : props.type === "steel" ? 'var(--textsteel)' 
        : props.type === "dragon" ? 'var(--textdragon)' 
        : props.type === "fairy" ? 'var(--textfairy)' 
        : 'white'
        };
    }

    h3 {
        font-size: 1.2rem;
        margin: 16px 0;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        position: absolute;
        margin-top: 130px;
        color: ${
        props => 
        props.type === "normal" ? 'var(--textnormal)' 
        : props.type === "fire" ? 'var(--textfire)' 
        : props.type === "water" ? 'var(--textwater)' 
        : props.type === "electric" ? 'var(--textelectric)' 
        : props.type === "grass" ? 'var(--textgrass)' 
        : props.type === "ice" ? 'var(--textice)' 
        : props.type === "ground" ? 'var(--textground)' 
        : props.type === "flying" ? 'var(--textflying)' 
        : props.type === "ghost" ? 'var(--textghost)' 
        : props.type === "rock" ? 'var(--textrock)' 
        : props.type === "fighting" ? 'var(--textfighting)' 
        : props.type === "poison" ? 'var(--textpoison)' 
        : props.type === "psychic" ? 'var(--textpsychic)' 
        : props.type === "bug" ? 'var(--textbug)' 
        : props.type === "dark" ? 'var(--textdark)' 
        : props.type === "steel" ? 'var(--textsteel)' 
        : props.type === "dragon" ? 'var(--textdragon)' 
        : props.type === "fairy" ? 'var(--textfairy)' 
        : 'white'
        };
        
        &::first-letter {
        text-transform: capitalize;
        }
    }

    .Types {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        font-size: 1rem;
        margin-top: 30px;
        color: white;
        margin-bottom: 0px;

        .tag{
            background: rgba(0, 0, 0, .1);
            border-radius: 6px;
            padding: 3px;
        }
    }

    h6 {
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
        font-size: 0.8rem;
        color: white;
    }

    .Atributes{
        margin-top: 22px;
    }

    .card:hover h3{
        transition: 0.2s;
        margin-top: 70px;
        position: absolute;
    }

    .card:hover .icon::after {
        position: absolute;
        width: 30px;
        height: 30px;
        font-size: 6rem;
        opacity: 0.03;
        margin-left: -8%;
        margin-top: 20px;
        font-family: 'Baloo 2', Arial, Helvetica, cursive;
    }

    h4 {
        display: none;
    }


    .card:hover h4{
        display: block;
        transition: 0.2s;
        font-weight: 400;
        font-size: 0.9rem;
        color: var(--white);
        opacity: 0.89;
        margin-bottom: -3px;
    }


    .card:before{
        content: '';
        position: absolute;
        width: 50px;
        height: 50px;
        margin-right: 148px;
        margin-top: -17px;
        background: transparent;
        border-top-right-radius: 22px;
        box-shadow: 0px -22px 0 0 transparent;
        display: block;
        
    }

    .card:hover::before
    {
        display: block;
        transition: all 0.2s ease;
        box-shadow: 0px -22px 0 0 var(--background);
        background: transparent;
    }

    .card:after{
        content: '';
        position: absolute;
        width: 50px;
        height: 50px;
        margin-right: -148px;
        margin-top: -17px;
        background: transparent;
        border-top-left-radius: 22px;
        box-shadow: 0px -22px 0 0 transparent;
        display: block;
    }

    .card:hover::after
    {
        display: block;
        transition: all 0.2s ease;
        box-shadow: 0px -22px 0 0 var(--background);
        background: transparent;
    }

`