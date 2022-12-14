import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 780px;
    margin: auto;
    display: flex;
    padding: 50px 10px;

    
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }
`;

export const LogoLink = styled.a`

    img {
        width: 200px;
    }
    
`;

export const InfoArea = styled.div`
    margin: 10px 0;
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 700px) {
        justify-content: center;
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 400px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;