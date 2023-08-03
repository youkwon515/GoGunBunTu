import styled from "styled-components";
import background from '../../assets/mainBanner.png';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    filter: brightness(55%);
    user-select: none;
    background-image: url('${background}');
    background-repeat: no-repeat; 
    background-position: center;
    background-size: cover; 
`;

export const Text = styled.div`
    position: absolute;
    top: 30%;
    right: 10%;
    text-align: right;
    pointer-events: none; 

    > h1 {
        color: #fff;
        font-size: 40px;
    }

    > p {
        color: #d4d4d4;
        font-size: 20px;
    }
`;

export const Text2 = styled.div`
    position: absolute;
    top: 30%;
    left: 10%;
    text-align: left;
    
    pointer-events: none; 

    > h1 {
        color : #417977;
        font-size: 20px;
    }

    > p {
        color: #4e4d4d;
        font-size: 20px;
    }
`