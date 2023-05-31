import axios from "axios";
//import { API_URL, POST_HEADER } from "./http.js";
const API_URL = "http://localhost:4000";

// const getAll = userId => {
//     return axios
//         .create({baseURL: API_URL})
//         .get(`/Transaction/gettransactionsbyuid/${userId}/2`);
// };

// const create = data => {
//     return axios.post("/Transaction/addtransaction", data);
// }

// const edit = data => {  
//     return axios.put(`/Transaction/updatetransactionbyid`, data);
// }

// const remove = id => {
//     return axios
//         .create({
//             baseURL: API_URL,
//             headers: {
//                 "Access-Control-Allow-Method": "*",
//             }
//         })
//         .delete(`/Transaction/deletetransactionbyid?id=${id}`);
// }

const getAll = userId => {
    return axios
        .create({baseURL: API_URL})
        .get(`/transactions`);
};

const create = data => {
    return axios
        .create({baseURL: API_URL})
        .post("/transactions", data);
}

const edit = data => {  
    return axios
        .create({baseURL: API_URL})
        .put(`/transactions/${data.id}`, data);
}

const remove = id => {
    return axios
        .create({baseURL: API_URL})
        .delete(`/transactions/${id}`);
}


const TransactionService = {
    getAll,
    create,
    edit,
    remove
}

export default TransactionService;