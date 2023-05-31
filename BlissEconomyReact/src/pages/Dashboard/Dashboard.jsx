import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDashboardInfo, getDashboardInfo } from "../../stores/dashboard-slice";
import { UserIdContext } from "../../stores/settings-store";
import { BalanceChart, LastTransactions, MainCards } from "../../components/organisms";
import {
  DashboardStyle,
  DashboardMainCardsStyle,
  DashboardTitleStyle1,
  DashboardTitleStyle2,
} from "./Dashboard.style";

function Dashboard() {

  const [userId, setUserId] = useContext(UserIdContext);
  const [period, setPeriod] = useState("weekly"); // ["weekly", "monthly", "yearly"]

  const dispatch = useDispatch();
  const dashboardInfo = useSelector(selectDashboardInfo);

  useEffect(() => {
    dispatch(getDashboardInfo({
      userId: userId,
      timeFrame: period
    }))
  }, [period])

  return (
    <DashboardStyle>
      <DashboardTitleStyle1>Bliss Economics - Dashboard</DashboardTitleStyle1>
      <DashboardMainCardsStyle>
        <DashboardTitleStyle2>Hello, Darth Vader</DashboardTitleStyle2>
        <MainCards dashboardInfo={dashboardInfo}/>
      </DashboardMainCardsStyle>
      <BalanceChart dashboardInfo={dashboardInfo} period={period} setPeriod={setPeriod}/>
      <LastTransactions dashboardInfo={dashboardInfo} /> 
    </DashboardStyle>
  );
}

export default Dashboard;
