import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 50px;
    gap: 30px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 15px;
    gap: 20px;
    width: 300px;
    box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.61);
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ status }) => {
        return status ? 'green' : 'red';
    }};
`;

export const Icon = styled.img`
    width: 48px;
`;

export const Name = styled.p`
    font-size: 28px;
`;
