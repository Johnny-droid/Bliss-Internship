import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import {
  BalanceChartContainer,
  BalanceChartStyle,
  BalanceChartTitle,
  SelectOption,
} from "./BalanceChart.style";
import { BarChart } from "../../molecules";


Chart.register(CategoryScale);

function BalanceChart({ dashboardInfo, period, setPeriod }) {

  return (
    <BalanceChartStyle>
      <BalanceChartTitle>
        {period.charAt(0).toUpperCase() + period.slice(1)} balance
      </BalanceChartTitle>
      <BalanceChartContainer>
        <SelectOption
          defaultValue={period}
          onChange={({ target }) => {
            setPeriod(target.value);
          }}
          name="balance_select"
        >
          <option value="weekly">Week</option>
          <option value="monthly">Month</option>
          <option value="yearly">Year</option>
        </SelectOption>
        <BarChart dashboardInfo={dashboardInfo} period={period}/>
        
      </BalanceChartContainer>
    </BalanceChartStyle>
  );
}

export default BalanceChart;
