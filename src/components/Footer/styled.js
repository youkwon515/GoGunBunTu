import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom : 0;
    left : 0;
    right : 0;
    width : 100%;
    height : 50px;
    background : #6CA86E;
    > button {
        background : red;
    }
`

export const iconBtn = styled.button`
    width : 50px;
    height : 50px;
    background : transparent;
    color : #FFF;
`