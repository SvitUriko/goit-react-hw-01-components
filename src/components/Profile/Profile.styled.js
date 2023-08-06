import styled from 'styled-components';


export const Card = styled.div`
  padding: 60px;
  width: 400px;
  height: 500px;
  background-color: #ececec;
  font-size: 20px;
`;

export const Description = styled.div`
  padding: 50px 0;

  background-color: #ffffff;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  box-shadow: 5px 5px 5px 7px rgba(212, 212, 212, 1);

  text-align: center;
`;

export const Image = styled.img`
  width: 100px;
  display: block;
  margin: 0 auto;

  border-radius: 50%;
`;

export const Username = styled.p``;

export const Usertag = styled.p`
  color: #a5a5a5;

  font-size: 16px;
`;

export const Location = styled.p`
  color: #a5a5a5;

  font-size: 16px;
`;

export const Stats = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  background-color: #dadada;

  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  box-shadow: 5px 5px 5px 7px rgba(212, 212, 212, 1);

  border-top: 1px solid #cbcbcb;
  list-style: none;
`;

export const Stat = styled.li`
  width: calc(100% / 3);
  padding: 10px;

  font-size: 16px;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid #cbcbcb;
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 6px;

  color: #a5a5a5;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 600;
`;