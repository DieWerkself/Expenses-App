import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import s from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [changeForm, setChangeForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const changeFormHandler = () => {
    !changeForm ? setChangeForm(true) : setChangeForm(false);
  };

  return (
    <div className={s.newExpense}>
      {!changeForm ? (
        <button onClick={changeFormHandler}>Add New Expanse</button>
      ) : (
        <ExpenseForm
          onSaveExpanseDate={saveExpenseDataHandler}
          onChangeForm={setChangeForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
