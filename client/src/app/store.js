import { configureStore } from '@reduxjs/toolkit'
import indexReducer from '../features/headers/indexReducer'

export default configureStore({
  reducer: {
    headers: indexReducer
  }
})