import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'


const ExpenseList = (props) => {

  const deleteExpense = (id) => {
      props.onDelete(id);
  }

  const updateExpense = (expenseObject) => {
    props.onEdit(expenseObject);
  }

    return (
        <>
          {props.expenses.map( (item , index ) => {
            return(    
              <ExpenseItem key={item.id} id={item.id} index={index} charge={item.charge} amount={item.amount} deleteExpense={deleteExpense} updateExpense={updateExpense}/>
            );
          })}
        </>
    )
}

export default ExpenseList
