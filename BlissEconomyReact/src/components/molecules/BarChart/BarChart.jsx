import React from "react";
import { useTheme } from "styled-components";
import { Bar } from "react-chartjs-2";
import { BarChartContainer } from "./BarChart.style";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function BarChart({ period, dashboardInfo }) {
  const transactions = dashboardInfo.dashboard.timeFrameTransaction;
  const theme = useTheme();
  
  let labels = ['One', 'Two', 'Three', 'Four', 'Five'];
  let dataIncome = [10, 20, 30, 40, 50];
  let dataExpense = [50, 40, 30, 20, 10];
  
  // Today in the format YYYY-MM-DD
  const today = new Date().toISOString().slice(0, 10);
  const currentWeekDay = new Date().getDay();
  const currentMonthDay = new Date().getDate();
  const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth()+1, 0).getDate();

  switch (period) {
    case "weekly":
      labels = daysOfWeek.slice(currentWeekDay + 1).concat(daysOfWeek.slice(0, currentWeekDay + 1))
      // Get the dates of the last 7 days including today
      const last7Days = Array.from(Array(7).keys())
        .reverse()
        .map((day) => {
          const date = new Date();
          date.setDate(date.getDate() - day);
          return date.toISOString().slice(0, 10);
        });
      dataIncome = last7Days.map((day) => getValueDay(transactions, day, 0));
      dataExpense = last7Days.map((day) => getValueDay(transactions, day, 1));
      break;

    case "monthly":
      const lastMonthDays = Array.from(Array(currentMonthDay).keys())
        .reverse()
        .map((day) => {
          const date = new Date();
          date.setDate(date.getDate() - day);
          return date.toISOString().slice(0, 10);
        });

      labels = Array.from(Array(daysInMonth).keys())
      dataIncome = lastMonthDays.map((day) => getValueDay(transactions, day, 0));
      dataExpense = lastMonthDays.map((day) => getValueDay(transactions, day, 1));
      break;

    case "yearly":
      labels = months;
      dataIncome = Array.from(Array(12).keys()).map((month) => getValueMonth(transactions, month, 0));
      dataExpense = Array.from(Array(12).keys()).map((month) => getValueMonth(transactions, month, 1));
      break;

    default:
      break;
  }

  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: dataIncome,
        backgroundColor: `${theme.colors.positive}`,
      },
      {
        label: 'Expense',
        data: dataExpense,
        backgroundColor: `${theme.colors.negative}`,
      },
    ],
  };

  return (
    <BarChartContainer>
      <Bar
        data={data}
        options={chartOptions}
      />
    </BarChartContainer>
  
  );
}

function getValueDay(transactions, date, typeTransaction) {
  if (!transactions) return 0;
  let result = transactions
    .filter((transaction) => transaction.type === typeTransaction && transaction.created.slice(0, 10) === date)
    .map((transaction) => transaction.value)
    .reduce((acc, curr) => acc + curr, 0);
  
  //console.log("Date: ", date, "Result: ", result)
  return result;
}

function getValueMonth(transactions, month, typeTransaction) {
  if (!transactions) return 0;
  return transactions
    .filter((transaction) => {
      let monthTransaction = new Date(transaction.created.slice(0, 10)).getMonth();
      return transaction.type === typeTransaction && monthTransaction === month
    })
    .map((transaction) => transaction.value)
    .reduce((acc, curr) => acc + curr, 0);
}


export default BarChart;
