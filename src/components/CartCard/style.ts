import styled from 'styled-components';

export const Container = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: start;
    padding: 10px;
    border: 2px solid lightgray;
    border-radius: 8px;

    img {
        display: none;
    }

    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: var(--grey-600);
        margin-bottom: 10px;
    }

    span {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: var(--grey-300);
        margin-bottom: 5px;
    }

    p {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-primary);
        margin-bottom: 5px;
    }

    button {
        background: var(--color-primary);
        border: 2px solid var(--color-primary);
        box-sizing: border-box;
        border-radius: 8px;
        width: 106px;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
    }

`;
