import s from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={s.expenseDate}>
      <div className={s.expenseDate__month}>{month}</div>
      <div className={s.expenseDate__year}>{year}</div>
      <div className={s.expenseDate__day}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
