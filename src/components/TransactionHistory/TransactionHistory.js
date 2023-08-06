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
        {items.map(item => (
            <RowItem key={item.id}>
                <ItemVal>{item.type}</ItemVal>
                <ItemVal>{item.amount}</ItemVal>
                <ItemVal>{item.currency}</ItemVal>
            </RowItem>))} 
        </Body>
    </Table>)
}

