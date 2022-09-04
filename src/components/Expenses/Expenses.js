import s from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  let ExItem = props.expenses.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
  ));
  return <Card className={s.expenses}>{ExItem}</Card>;
}

export default Expenses;
