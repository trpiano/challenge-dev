import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentContainer = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 1rem;

    padding: 2rem;
    margin-top: 3rem;

    border-radius: 0.5rem;

    background: #FFFFFF;

    form{
        width: 100%;
        min-width: 640px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        gap: 1.5rem;

        p{
            font-weight: 300;
            font-size: 1rem;
        }
    }

    button {
        width: fit-content;
        height: 2rem;
        padding: 5px 20px;
        border: none;
        border-radius: 2rem;

        align-self: center;

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

    @media screen and (max-width: 700px) {
        width: 90%;

        form{
            min-width: 100%;
        }
    }
` 
