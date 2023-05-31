import axios from "axios";
import { API_URL } from "./http.js";

const getAll = (uid, timeFrame) => {
    return axios
        .create({ baseURL: API_URL })
        .get(`/api/Dashboard/getdashboardbyuserid/${uid}?timeFrame=${timeFrame}`);
};

const DashboardService = {
   getAll,
};

export default DashboardService;