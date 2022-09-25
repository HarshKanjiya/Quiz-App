import { configureStore} from '@reduxjs/toolkit'
import scoreReducer from '../fetures/scoreSlice'

export default configureStore({

    reducer: {
        score : scoreReducer,
    }
})