import styled from 'styled-components';


export const HeaderContainerAll = styled.header`
    width: 1920px;
    max-width: 100%;
    height: 80px;
    background: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: flex-start;

`

export const BoxAdd = styled.div<{ return: boolean }>`
        width: ${props => (props.return ? `92%` : `100%`)};
        height: 100%;
        padding: ${props => (props.return ? `0 10rem 0 2rem` : `0 10rem`)};
        display: flex;
        align-items: center;
        justify-content: space-between;


        h5 {
            font-family: Montserrat, sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 1.5rem;
            color: #4F46BB;
        }

        button {
            width: 12rem;
            height: 2rem;
            background: #4F46BB;
            border: none;
            border-radius: 2rem;

            display: flex;
            align-items: center;
            justify-content: center;

            gap: 0.5rem;

            font-family: Inter, sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 1rem;
            color: #FFFFFF;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }

        @media screen and (max-width: 768px) {
            justify-content: center;

            gap: 1rem;

            button{
                display: flex;
                min-width: 4rem;

                span{
                    display: none;
                }
            }
        }
`;

export const BoxRetur = styled.div`
    width: 8%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
        cursor: pointer;
    }
`;