import ExpenseForm from "./ExpenseForm";
import s from "./NewExpense.module.css";

const NewExpense = () => {
  return (
    <div className={s.newExpense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
