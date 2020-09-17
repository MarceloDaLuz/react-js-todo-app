import styled from 'styled-components';


export const Form = styled.form` 
    min-height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Select = styled.div`
    &::after {
        content: "\25BC";
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
        background: #ff6f47;
        cursor: pointer;
        pointer-events: none;
    }
`;

export const Selector = styled.select`
    margin: 1rem;
    position: relative;
    overflow: hidden;
    padding: 0.5rem;

    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background-image: none;
    padding: 0.5rem;
    font-size: 2rem;
    color: #a71da0;
    cursor: pointer;
    width: 12rem;
`