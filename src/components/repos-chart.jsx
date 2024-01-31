/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

export const ReposChart = ({ languagesList }) => {
  const data = [
    ["Language", "Count of repos used"],
    ...Array.from(languagesList),
  ];

  console.log(data);
  return (
    <Chart
      chartType="PieChart"
      data={data}
      width="100%"
      height="50vh"
      legendToggle
    />
  );
};
