import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  sidoDustContents: [
    {
      sidoName: '',
      stationName: '',
      pm10Value: '',
      pm10Grade: '',
      dataTime: ''
    }
  ],
  totalCount: 0,
  status: {
    error: '',
    loading: false
  },
  filteredDust: undefined,
  favoriteDust: [],
  initialDust: null
}

export const dustSlice: any = createSlice({
  name: 'dust',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDust.fulfilled, (state, { payload }) => {
      state.sidoDustContents = payload?.sidoDustContents
      state.totalCount = payload?.totalCount
      state.status.loading = false
      console.log(payload)
    })
    builder.addCase(getDust.rejected, (state, action) => {
      state.status.loading = false
      if (action.error.message) {
        state.status.error = action.error.message
      }
    })
    builder.addCase(getDust.pending, (state, action) => {
      state.status.loading = true
    })
  }
})

interface GetParams {
  serviceKey: string
  returnType: string
  pageNo: number
  numOfRows: number
  sidoName: string
  ver: string
}

export const getDust = createAsyncThunk('dust/getDust', async (sido: string) => {
  const getParameters: GetParams = {
    serviceKey: import.meta.env.VITE_SERVICE_KEY,
    returnType: 'json',
    pageNo: 1,
    numOfRows: 100,
    sidoName: sido,
    ver: '1.0'
  }
  try {
    const { data } = await axios.get('/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', {
      params: getParameters
    })

    const dust = data.response.body.items.map((item: any) => {
      return (item = {
        ...item,
        isLiked: false
      })
    })
    console.log(dust)
    const returnObj = {
      sidoDustContents: dust,
      totalCount: data.length
    }

    return returnObj
  } catch (error) {
    console.log(error)
  }
})

export const dustReducer = dustSlice.reducer
