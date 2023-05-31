import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DashboardService from "../services/DashboardService.js";
import STATUS from "./status";

const initialState = {
   dashboard: {},
   status: STATUS.IDLE,
   error: "",
};

export const getDashboardInfo = createAsyncThunk(
   "dashboard/getDashboardInfo",
    async ({userId, timeFrame}) => {
      let timeFrameNumber;
      switch (timeFrame) {
         case "monthly":
            timeFrameNumber = 1;
            break;
         case "yearly":
            timeFrameNumber = 2;
            break;
         default:
            timeFrameNumber = 0;
      }

      const response = await DashboardService.getAll(userId, timeFrameNumber);
      return response.data;
   }
);

export const dashboardSlice = createSlice({
   name: "dashboard",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(getDashboardInfo.pending, (state, action) => {
            state.status = STATUS.LOADING;
         })
         .addCase(getDashboardInfo.fulfilled, (state, action) => {
            state.status = STATUS.SUCCEEDED;
            state.dashboard = action.payload;
         })
         .addCase(getDashboardInfo.rejected, (state, action) => {
            state.status = STATUS.FAILED;
            state.error = action.error.message;
         });
   },
});

export const selectDashboardInfo = (state) => state.dashboard;

export default dashboardSlice.reducer;