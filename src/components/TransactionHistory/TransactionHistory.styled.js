import { styled } from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
`;

export const Head = styled.thead``;

export const Title = styled.tr``;

export const TitleVal = styled.th`
  width: 300px;

  padding: 10px 0;

  background-color: #00bcd5;
  color: #ffffff;

  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 1.25px;

  text-transform: uppercase;

  &:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
`;

export const Body = styled.tbody``;

export const RowItem = styled.tr`
  &:nth-of-type(2n) {
    background-color: #eeeeee;
  }
`;

export const ItemVal = styled.td`
  margin: 0;

  padding: 10px 0;

  color: #797979;

  text-align: center;

  font-size: 16px;

  &:not(:last-child) {
    border-right: 1px solid #e9e9e9;
  }
`;