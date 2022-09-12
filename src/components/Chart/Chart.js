import ChartBar from "./ChartBar";
import s from "./Chart.module.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dpv) => dpv.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className={s.chart}>
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={totalMax}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
