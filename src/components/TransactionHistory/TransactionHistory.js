import PropTypes from 'prop-types';
import { Body, Head, ItemVal, RowItem, Table, Title, TitleVal } from "./TransactionHistory.styled"

export const TransactionHistory = ({items}) => {
 return (
    <Table>
         <Head>
          <Title>
            <TitleVal>Type</TitleVal>
            <TitleVal>Amount</TitleVal>
            <TitleVal>Currency</TitleVal>
          </Title>
        </Head>
        
        <Body>
        {items.map(({ id, type, amount, currency })  => (
            <RowItem key={id}>
                <ItemVal>{type}</ItemVal>
                <ItemVal>{amount}</ItemVal>
                <ItemVal>{currency}</ItemVal>
            </RowItem>))} 
        </Body>
    </Table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };