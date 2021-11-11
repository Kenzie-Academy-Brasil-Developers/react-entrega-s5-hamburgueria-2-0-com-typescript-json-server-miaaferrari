import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;
        height: 100vh;
        width: 100vw;
        align-items: center;
        justify-content: space-evenly;
  }
  
`;

export const Title = styled.div`
    padding: 20px 10px 15px;
    width: 100%;

    h2 {
        font-size: 30px;

        span {
            font-size: 20px;
            margin-left: 5px;
            color: #EB5757;
        }
    }
`;

export const Slogan = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: var(--white);
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        width: 350px;
        height: 95px;
        margin: 5px 0 20px;

    div {
        display: flex;
        width: 60px;
        height: 60px;
        justify-content: center;
        align-items: center;
        background: rgba(39, 174, 96, 0.1);
        border-radius: 5px;
    }

    span {
        font-size: 14px;
        line-height: 22px;
        width: 260px;
        display: inline-block;
        color: var(--grey-300);

        strong {
            color: var(--grey-600);
        }
    }
    `;

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 400px;
    padding: 10px;
    border: 2px solid #F5F5F5;
    box-sizing: border-box;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    h4 {
        color: var(--grey-600);
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px 0;

        button {
            width: 330px;
            height: 60px;
            background: #219653;
            border-radius: 8px;
            color: var(--white);
            font-weight: 600;
            font-size: 16px;
            line-height: 28px;
            border: none;
            margin: 5px 0;
        }
    }

    div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            color: var(--grey-50);
            margin-bottom: 10px;
        }

        button {
            width: 330px;
            height: 60px;
            background: var(--grey-100);
            border-radius: 8px;
            color: var(--grey-50);
            font-weight: 600;
            font-size: 16px;
            line-height: 28px;
            border: none;
            margin: 5px 0;
        }
    }

`;