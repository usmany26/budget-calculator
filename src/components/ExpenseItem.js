import React, {useContext} from 'react'
import './ExpenseItem.css'
import { BiPencil } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { UpdateContext } from '../context/update-context'

const ExpenseItem = (props) => {

    const updateContext = useContext(UpdateContext);

    const updateExpenseHandler = (expense) => {
        updateContext.setExpenseForm(expense);
    }

    return (
        <div className='expense__item'>
            <div className='exp__container'>
               <div>
                {props.charge}
               </div>
               <div className='item__expense'>
                {props.amount}$
               </div>
               <div>
                    <BiPencil className='exp__icon pen' onClick={() => updateExpenseHandler({
                        id: props.id,
                        charge: props.charge,
                        amount: props.amount
                    }) }/>
                <AiFillDelete className='exp__icon del' onClick={() => props.deleteExpense(props.index)}/>
               </div>
            </div>
        </div>
    )
}

export default ExpenseItem
