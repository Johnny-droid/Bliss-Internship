import { Transaction } from '../models/Transaction.js';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import TransactionService from '../services/TransactionService.js';
import STATUS from './status.js';

const initialState = {
    transactions: [],
    status: STATUS.IDLE,
    error: '',
}

export const getAllTransactions = createAsyncThunk('transactions/getAllTransactions', async () => {
    const userId = "Darth-Vader";
    const response = await TransactionService.getAll(userId);
    // Set 5 seconds delay to simulate a slow connection
    // await new Promise(resolve => setTimeout(resolve, 1000));
    return Transaction.sort(response.data, 'date', 'asc');
})

export const postTransaction = createAsyncThunk('transactions/postTransaction', async (transaction) => {
    const response = await TransactionService.create(transaction);
    // Set 5 seconds delay to simulate a slow connection
    // await new Promise(resolve => setTimeout(resolve, 1000));
    return response.data;
})

export const editTransaction = createAsyncThunk('transactions/editTransaction', async (transaction) => {
    const response = await TransactionService.edit(transaction);
    return response.data;
})

export const removeTransaction = createAsyncThunk('transactions/removeTransaction', async (id) => {
    const response = await TransactionService.remove(id);
    return response.data;
})

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllTransactions.pending, (state, action) => {
                state.status = STATUS.LOADING;
            })
            .addCase(getAllTransactions.fulfilled, (state, action) => {
                state.status = STATUS.SUCCEEDED;
                state.transactions = action.payload;
            })
            .addCase(getAllTransactions.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            })
            .addCase(postTransaction.pending, (state, action) => {
                state.status = STATUS.LOADING;
            })
            .addCase(postTransaction.fulfilled, (state, action) => {
                state.status = STATUS.SUCCEEDED;
                state.transactions.push(action.payload);
            })
            .addCase(postTransaction.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            })
            .addCase(editTransaction.pending, (state, action) => {
                state.status = STATUS.LOADING;
            })
            .addCase(editTransaction.fulfilled, (state, action) => {
                state.status = STATUS.SUCCEEDED;
                const index = state.transactions.findIndex(transaction => transaction.id === action.payload.id);
                state.transactions[index] = action.payload;
            })
            .addCase(editTransaction.rejected, (state, action) => {
                state.status = STATUS.FAILED;
                state.error = action.error.message;
            })
            .addCase(removeTransaction.pending, (state, action) => {
                state.status = STATUS.LOADING;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                state.status = STATUS.SUCCEEDED;
                const index = state.transactions.findIndex(transaction => transaction.id === action.payload.id);
                state.transactions.splice(index, 1);
            })
        }
    }
)

// state -> o objeto que tem a nossa data no momento atual
// store -> conjunto de state + actions + reducers

// reducer -> fn para alterar o meu state com ele mesmo e com uma action
// action -> é um obj, que tem o type da ação e um payload com data para alterar o meu estado.

// Action creators are generated for each case reducer function

export const selectTransactions = (state) => state.transactions;


export default transactionsSlice.reducer