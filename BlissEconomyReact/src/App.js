import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/templates";
import { Dashboard, Transactions } from "./pages";
import { MoneyHideContext, moneyHideInitialState, UserIdContext, userIdInitialState} from "./stores/settings-store";
import "./themes/App.css";

function App() {
  const [moneyHide, setMoneyHide] = useState(moneyHideInitialState);
  const [userId, setUserId] = useState(userIdInitialState);

  return (
    <div className="App">
      <MoneyHideContext.Provider value={[moneyHide, setMoneyHide]}>
      <UserIdContext.Provider value={[userId, setUserId]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </UserIdContext.Provider>
      </MoneyHideContext.Provider>
    </div>
  );
}

export default App;
