import React, {useState} from 'react'

export const UpdateContext = React.createContext({
    expense: {
          id: '',
          charge: '',
          amount: '',
    },
    setExpenseForm: () => { },
})

const UpdateContextProvider = (props) => {

    const [expense, setExpense] = useState({
        id: '',
        charge: '',
        amount: '',
    })

    const setExpenseForm = (expense) => {
        setExpense(expense);
    }
    

    return (
        <UpdateContext.Provider value={{ setExpenseForm: setExpenseForm , expense: expense }}>
            {props.children}
        </UpdateContext.Provider>
    ) 
}

export default UpdateContextProvider;