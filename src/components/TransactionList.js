import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions)

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length === 0 && <h2>No History</h2> }
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      
    </>
  )
  // function History(props) {
  //   const TransactionList = props.TransactionList;
  //   return (
  //     <div>
  //       {Transaction.lenght > 0 &&
  //         <h2>
  //           You have {TransactionList.length} no history.
  //         </h2>
  // }
  //     </div>
  // )}
}