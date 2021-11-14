import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
`;

export const Title = styled.div`
    h2 {
        font-size: 25px;
    }

    span {
        color: var(--color-secondary);
        font-size: 17px;
        margin-left: 5px;
    }
`;

export const BoxInfos = styled.div`
    display: flex;

    .search {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px 0px 15px;
        width: 365px;
        height: 60px;
        background: var(--white);
        border: 2px solid var(--grey-100);
        box-sizing: border-box;
        border-radius: 8px;

        input {
            border: none;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            color: var(--grey-100)
        }

        .hideInput {
            display: none;
        }
    }

    svg {
        width: 25px;
        height: 25px;
        margin: 0 5px;
    }
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 53px;
    height: 40px;
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    box-sizing: border-box;
    border-radius: 8px;

    svg {
        width: 13px;
        height: 16px;
        font-weight: 900;
    }
`;

export const CartContainer = styled.div`
    margin: 0 5px;   
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 25px;
        height: 25px;
    }

    span {
        position: absolute;
        top: 14px;
        right: 71px;
        width: 15px;
        height: 20px;
        background: var(--color-primary);
        border-radius: 7px;
        text-align: center;
        font-style: normal;
        font-weight: 900;
        font-size: 14px;
        color: var(--white);
    }
    

`;
