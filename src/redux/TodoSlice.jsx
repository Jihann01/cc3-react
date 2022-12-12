import axios from "axios";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getTaches = createAsyncThunk('./taches/getTaches', async () => {
    const response = await axios.get('https://dummyjson.com/todos')
    return response.data
  })
  
  export const TacheSlice = createSlice({
    name: 'taches',
    initialState: {
      data: [],
      loading: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getTaches.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      builder.addCase(getTaches.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.data = action.payload
          state.loading = 'idle'
        }
      })
      builder.addCase(getTaches.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = 'Error occured'
        }
      })
    },
  })
  export default TacheSlice.reducer
  