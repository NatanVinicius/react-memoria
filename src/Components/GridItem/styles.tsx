import styled from "styled-components";

type ContainerProps = {
    showBackground: Boolean
};

export const Container = styled.div<ContainerProps>`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
    border-radius: 20px;
    cursor: pointer;
`;

type IconProps = {
    opacity?: number
};

export const Icon = styled.img<IconProps>`
    width: 40px;
    opacity: ${props => props.opacity ?? 1};
`;