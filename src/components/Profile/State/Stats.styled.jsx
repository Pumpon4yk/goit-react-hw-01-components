import styled from '@emotion/styled'


export const List = styled.ul`
width: 100%;
display: flex;

justify-content: center;
align-items: center;
margin: 0;
padding: 0;

list-style: none;


`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: calc(100% / 3);
height: 90px;

background-color: #c7c5c565;

border: 1px solid grey;
`;

export const Label = styled.span`
color: grey;
`;

export const Quantity = styled.span`
color: black;
margin-top: 5px;
`;
