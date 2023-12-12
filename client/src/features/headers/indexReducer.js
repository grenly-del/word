import { createSlice } from '@reduxjs/toolkit'


const activeHeader = {
    nama: '',
    active: false
}


export const headersAction = createSlice({
  name: 'headers',
  initialState: false,
  reducers: {
    active: (state, action) => {
        console.log(state)
        state.nama = action.payload.nama
        state.active = true
    }
  }
})

export const { active } = headersAction.actions

export default headersAction.reducer