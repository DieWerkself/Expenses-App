import ExpenseItem from "./ExpenseItem";
import s from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className={s.expensesList__fallback}>No expenses found.</h2>;
  }
  return (
    <ul className={s.expensesList}>
      {props.items.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
