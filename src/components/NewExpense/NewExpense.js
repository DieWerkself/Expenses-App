import ExpenseForm from "./ExpenseForm";
import s from "./NewExpense.module.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={s.newExpense}>
      <ExpenseForm onSaveExpanseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
