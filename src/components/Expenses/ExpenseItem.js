import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import s from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={s.expenseItem}>
        <ExpenseDate date={props.date} />
        <div className={s.expenseItem__description}>
          <h2>{props.title}</h2>
          <div className={s.expenseItem__price}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
