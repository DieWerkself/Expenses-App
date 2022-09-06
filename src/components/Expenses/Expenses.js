import s from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  let ExItem = props.expenses.map((e) => (
    <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
  ));

  const [selectedYear, setChange] = useState("2020");

  const saveSelectedYear = (enteredSelectedYear) => {
    setChange(enteredSelectedYear);
  };

  console.log(selectedYear);
  return (
    <Card className={s.expenses}>
      <ExpensesFilter
        selected={selectedYear}
        onSelectedYear={saveSelectedYear}
      />
      {ExItem}
    </Card>
  );
};

export default Expenses;
