import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: " Chart 2023 year",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function extractamount(data) {
  const amounts = [];

  data.forEach((item) => {
    const index = item.date;

    amounts[index] = item.amount;
  });

  console.log(amounts);
  return amounts;
}

function Barchart({ totalarr }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Expense Limit",
        data: Array(12).fill(20000),
        backgroundColor: "blue",
      },
      {
        label: "Monthly Expense",
        data: extractamount(totalarr) || [2000, 4000, 2500],
        backgroundColor: "green",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default Barchart;
