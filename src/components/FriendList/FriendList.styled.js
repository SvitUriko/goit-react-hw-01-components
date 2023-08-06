import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
`;

export const Item = styled.li`
  width: 100%;
  box-shadow: 0px 2px 15px #ccc;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
`;