import styled from 'styled-components';

export const Section = styled.section`
  width: 400px;

  padding: 60px;

  background-color: #ececec;
  color: gray;

  font-size: 14px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px 10px;

  background-color: #ffffff;

  font-weight: 400;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  list-style: none;
`;

const setItemBgColor = ({ label }) => {
    switch (label) {
      case '.docx':
        return '#7777ff';
      case '.pdf':
        return '#d94fff';
      case '.mp3':
        return '#ec6363';
      case '.psd':
        return '#65c2c2';
      default:
        return '#ffffff';
    }
  }

export const Element = styled.li`
  width: calc(100% / 5);

  padding: 8px;

  background-color: ${setItemBgColor};
  color: #ffffff;

  font-size: 12px;
  text-align: center;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 6px;
`;

export const Percentage = styled.span`
  display: block;
`;