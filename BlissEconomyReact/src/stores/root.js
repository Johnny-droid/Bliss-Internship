import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './transactions-slice'
import dashboardReducer from './dashboard-slice'

export default configureStore({
    reducer: {
        dashboard: dashboardReducer,
        transactions: transactionsReducer
    }
})