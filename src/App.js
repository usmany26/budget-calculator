import './App.css';
import React, {useState} from 'react';
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList';
import { AiFillDelete } from "react-icons/ai";


const App = () => {

  /*  expenses and charges state  */
    const [expenses, setExpenses] = useState([]);

  const onSubmitHandler = (expense) => {
      const newArr = [expense, ...expenses]
      setExpenses(newArr);    
     
    }
  
    /*  clear expenses and charges state  */
    const onClearHandle = () => {
       setExpenses([]);
     }

     /*  delete single expenses and charges state  */
    const onDeleteHandler = (index) => {
        const deletedArr = [...expenses];
        deletedArr.splice(index , 1);
        setExpenses(deletedArr);
    }
    
  return (
    <div className="App">
      <h1>Budget Calculator</h1>
      <div className='budget-calculator'>
           <ExpenseForm onSubmit={onSubmitHandler}  />
           <ExpenseList expenses={expenses} onDelete={onDeleteHandler} />
           <button className='btn' onClick={onClearHandle}>
             CLEAR EXPENSES <AiFillDelete className='clear' />
           </button>
      </div>
        <h1>Total Spendings: <span className='total'>{
          expenses.reduce((total , curr) => {
            return (total += parseInt(curr.amount));
          }, 0 )
        }$</span> </h1>
    </div>
  );
}

export default App;
