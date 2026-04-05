import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: '张三'
  },
  reducers: {
    changeCount(state, { payload }) {
      state.count = state.count + payload
    }
  }
})

export const { changeCount } = counterSlice.actions
export default counterSlice.reducer
