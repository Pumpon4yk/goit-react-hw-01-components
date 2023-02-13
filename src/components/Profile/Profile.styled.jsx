import styled from '@emotion/styled';

export const Profile = styled.div`
    width: 300px;
    margin: 0 auto;
    border: 1px solid black;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    width: 100%;
`;

export const Photo = styled.img`
    display: block;
    width: 50px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const UserName = styled.p`
    font-size: 20px;
    color: black;
    margin: 0;
    margin-bottom: 10px;
`;

export const Tag = styled.p`
    font-size: 18px;
    color: grey;
    margin: 0;
    margin-bottom: 10px;
`;

export const Location = styled.p`
    font-size: 18px;
    color: grey;
    margin: 0;
    margin-bottom: 50px;
`;

export const Stats = styled.ul`
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
