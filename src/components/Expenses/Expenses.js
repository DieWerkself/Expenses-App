import s from "./Expenses.module.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setChange] = useState("2020");
  const saveSelectedYear = (enteredSelectedYear) => {
    setChange(enteredSelectedYear);
  };

  const filterByYear = props.expenses.filter(
    (y) => y.date.getFullYear().toString() === selectedYear
  );

  let exItem = filterByYear.map((e) => (
    <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
  ));

  let expensesContent = <p>"Nothing intresting here"</p>;

  if (filterByYear.length > 0) {
    expensesContent = exItem;
  }

  return (
    <Card className={s.expenses}>
      <ExpensesFilter
        selected={selectedYear}
        onSelectedYear={saveSelectedYear}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
