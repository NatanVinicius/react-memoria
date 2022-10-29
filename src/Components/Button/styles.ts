import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #1550FF;
    border-radius: 10px;
    opacity: 1;
    transition: all .3s;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`;

export const Icon = styled.div`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    border-right: 1px solid rgba(255,255,255, .2);

    img {
        width: 20px;
    }
`;

export const Label = styled.div` 
    height: inherit;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #fff;
`;