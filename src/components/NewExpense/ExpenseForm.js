import s from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className={s.newExpense__controls}>
        <div className={s.newExpense__control}>
          <label>Title</label>
          <input type="text" />
        </div>
        <div className={s.newExpense__control}>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className={s.newExpense__control}>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className={s.newExpense__actions}>
        <button type="submit">Add Expanse</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
