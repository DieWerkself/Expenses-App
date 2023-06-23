import s from "./ExpensesFilter.module.css";

const ExpensesFilter = (props) => {
  const changeHandler = (event) => {
    props.onSelectedYear(event.target.value);
  };

  return (
    <div className={s.expensesFilter}>
      <div className={s.expensesFilter__control}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={changeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
