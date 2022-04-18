import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --background: #f0f2f5;
    --red: #d62744;
    --white: #ffffff;

    --normal: #A0A29F;
    --fire: #FBA54C;
    --water: #539DDF;
    --electric: #F2D94E;
    --grass: #5FBD58;
    --ice: #75D0C1;
    --ground: #DA7C4D;
    --flying: #A1BBEC;
    --ghost: #5F6DBC;
    --rock: #C9BB8A;
    --fighting: #D3425F;
    --poison: #B763CF;
    --psychic: #FA8581;
    --bug: #92BC2C;
    --dark: #595761;
    --steel: #5695A3;
    --dragon: #0C69C8;
    --fairy: #EE90E6;

    --textnormal: #bcaaa4;
    --textfire: #ff8a80;
    --textwater: #81d4fa;
    --textelectric: #ffd600;
    --textgrass: #81c784;
    --textpoison: #ad8ee7;
    --textfairy: #f8bbd0;
    --textbug: #81c784;
    --textice: #81d4fa;
    --textground: #bcaaa4;
    --textflying: #81d4fa;
    --textghost: #ad8ee7;
    --textrock: #bcaaa4;
    --textfighting: #ff8a80;
    --textpsychic: #ff8a80;
    --textdark: #bcaaa4;
    --textsteel: #5695A3;
    --textdragon: #81d4fa;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5% // 14px
    }
    @media (max-width: 1080px) {
        font-size: 93.75% // 15px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

button { 
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24 rem;
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }

}
`