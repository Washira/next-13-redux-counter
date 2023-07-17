const { createSlice } = require("@reduxjs/toolkit");

const initialValue = { count1: 150 }

const appSlice = createSlice({
  name: 'app',
  initialState: initialValue,
  reducers: {
    add: (state) => {
      state.count1++
    },
    remove: (state) => {
      state.count1--
    }
  },
})

export const { add, remove } = appSlice.actions
export default appSlice.reducer