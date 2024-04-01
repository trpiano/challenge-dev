import styled from 'styled-components';

export const ContainerButton = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    button {
        width: fit-content;
        height: 2rem;
        padding: 5px 20px;
        border: none;
        border-radius: 2rem;

        background: #4F46BB;

        font-family: Inter, sans-serif;
        font-weight: 700;
        font-size: 1rem;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`