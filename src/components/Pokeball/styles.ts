import styled from "styled-components";

export const Container = styled.main`
border: solid 2px red;
display: flex;
justify-content: center;

        *, *:before, *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        }
        body {
        background: #ecf0f1;
        }

        /* Poké Styles */
        .pokeball {
        position: relative;
        width: 50px;
        height: 50px;
        background: #fff;
        border: 1.5px solid #000;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: inset -2.5px 2.5px 0 2.5px #ccc;
        animation: fall .25s ease-in-out,
        shake 1.25s cubic-bezier(.36,.07,.19,.97) 3;
        }
        .pokeball::before,
        .pokeball::after {
            content:"";
            position: absolute;
        }
        .pokeball::before {
            background: red;
            width: 100%;
            height: 50%;
        }
        .pokeball::after {
            top: calc(50% - 4px);
            width: 100%;
            height: 6px;
            background: #000;
        }
        .pokeball__button {
            position: absolute;
            top: calc(50% - 9px);
            left: calc(50% - 7px);
            width: 15px;
            height: 15px;
            background: #7f8c8d;
            border: 2.5px solid #fff;
            border-radius: 50%;
            z-index: 10;
            box-shadow: 0 0 0 1px black;
            animation: blink .5s alternate 7;
        }
        /* Animation */
        @keyframes blink {
        from { background: #eee;}
        to { background: #e74c3c; }
        }

        @keyframes fall {
        0% { top: -200px }
        60% { top: 0 }
        80% { top: -20px }
        100% { top: 0 }
        }

`;