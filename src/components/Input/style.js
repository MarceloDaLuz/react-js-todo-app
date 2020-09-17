import styled from 'styled-components';
import {ChevronDownSquare} from 'styled-icons/boxicons-regular';
export const Input = styled.input`
    padding: 0.5rem;
    font-size: 2rem;
    border: none;
    background: white;
    outline: none;
`;

export const Button = styled.button`
    color: #a71da0;
    background: #f7fffe;
    cursor: pointer;
    transition: all 0.3s ease;

    padding: 0.5rem;
    font-size: 2rem;
    border: none;
    background: white;
    
    &:hover{
        background: #a71da0;
        color: white;
    }
`;

export const SquareDown = styled(ChevronDownSquare)`
    width: 25px;
    height: 25px;
`;