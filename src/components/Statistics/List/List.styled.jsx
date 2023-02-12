import styled from '@emotion/styled'


export const Stat = styled.ul`
display: flex;
align-items: center;
justify-content: center;

width: 100%;

list-style: none;
margin:0;
padding:0;

`;


export const Item = styled.li`
width: calc(100% / 5);
height: 90px;
border: 1px solid grey;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

color: #fff;
text-shadow: 0px 0px 7px rgba(0,0,0,1);
font-size: 20px;

background-color: ${()=> `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Label = styled.span`
margin-bottom: 10px;
`;

export const Percentage = styled.span`

`;