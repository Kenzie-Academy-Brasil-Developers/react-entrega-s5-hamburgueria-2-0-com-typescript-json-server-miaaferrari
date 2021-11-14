import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center ;
    overflow-y: hidden;
    overflow-x: scroll;
    width: 75%;
    max-height: 680px;

    @media (min-width: 768px) {
        overflow-x: hidden;
        flex-wrap: wrap;
    }
`;

export const Box = styled.div`
    display: flex;
`;

export const CartContainer = styled.div`
    width: 30%;
    
    .cartBox {
        display: flex;
        flex-wrap: wrap;
        
    }

    div {
        img {

            display: none;
        }
    }
`;