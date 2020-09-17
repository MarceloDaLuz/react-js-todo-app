import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80vw;
`;

export const Ul = styled.ul`
    list-style: none;
    width: 100%;    
    & li{
        flex: 1;
    }
`;