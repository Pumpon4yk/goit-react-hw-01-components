import styled from '@emotion/styled'


export const TransactionHistory = styled.table`

width: 600px;
height: 400px;
margin: 50px auto 0;

padding: 0;

`;

export const Thead = styled.thead`
`;

export const TrHed = styled.tr`

`;

export const ThHed = styled.th`
width: calc(100% / 3);
height: 40px;

background-color: teal;
color: #fff;
margin: 0;


`;

export const Tbody = styled.tbody`

`;

export const TrBody = styled.tr`
background-color: ${
    ({id}) => id % 2 === 0? "#c9c8c849": "#c9c8c8c5"
};
height: 40px;

`;


export const TdBody = styled.td`
text-align: center;
width: calc(100% / 3)
`;