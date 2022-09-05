import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import s from "./ExpenseItem.module.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className={s.expenseItem}>
      <ExpenseDate date={props.date} />
      <div className={s.expenseItem__description}>
        <h2>{title}</h2>
        <div className={s.expenseItem__price}>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
