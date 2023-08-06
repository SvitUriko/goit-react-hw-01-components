import styled from 'styled-components';

export const Status = styled.span`
    display: block;
     
    width: 16px;
    height: 16px;
    background-color: ${props => (props.isOnlineStatus ? 'green' : 'red')};
    border-radius: 50%;
`;

export const Avatar = styled.img`
    width: 60px;
    height: 100%;
`;

export const Name = styled.p`
    font-weight: 600;
    font-size: 24px;
`;