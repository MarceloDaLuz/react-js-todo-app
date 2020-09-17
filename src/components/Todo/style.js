import styled, {css} from 'styled-components';
import { Check,Trash } from 'styled-icons/boxicons-regular';
const iconCSS = css`
    width: 25px;
    height: 25px;
`;

export const CheckIcon = styled(Check)`${iconCSS}`;

export const TrashIcon = styled(Trash)`${iconCSS}`;

export const Button = styled.button`
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
    background-color: ${props => props.completed ? 'rgb(11, 212, 162);' : 'rgb(255, 0, 0);'};
`;

export const TodoItem = styled.li`
    
    margin: 0.5rem;
    font-size: 1.5rem;
    background: white;
    color: black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    outline: none;
    transition: all 1s ease;
    & span{
        width: 100%;
        margin-left: 1rem;
    }
`;

export const Text =  styled.span`
    ${props => props.status ? css`text-decoration: line-through;` : css``}
`;