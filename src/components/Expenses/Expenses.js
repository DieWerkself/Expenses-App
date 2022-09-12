import s from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setChange] = useState("2020");
  const saveSelectedYear = (enteredSelectedYear) => {
    setChange(enteredSelectedYear);
  };

  const filterByYear = props.expenses.filter(
    (y) => y.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className={s.expenses}>
      <ExpensesFilter
        selected={selectedYear}
        onSelectedYear={saveSelectedYear}
      />
      <ExpensesChart expenses={filterByYear} />
      <ExpensesList items={filterByYear} />
    </Card>
  );
};

export default Expenses;
