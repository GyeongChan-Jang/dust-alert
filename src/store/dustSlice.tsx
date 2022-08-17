import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface GugunType {
  sidoName: string
  stationName: string
  pm10Value: string
  pm10Grade: string
  dataTime: string
  isLiked: null
}

const initialState = {
  sidoDustContents: [
    {
      sidoName: '',
      stationName: '',
      pm10Value: '',
      pm10Grade: '',
      dataTime: '',
      isLiked: null
    }
  ],
  totalCount: 0,
  status: {
    error: '',
    loading: false
  },
  gugunDust: undefined,
  favoriteDust: [],
  initialDust: null
}

export const dustSlice = createSlice({
  name: 'dust',
  initialState,
  reducers: {
    gugunDustHandler(state, action) {
      if (!action.payload) return
      const gugunData: any = state.sidoDustContents.find(
        (item) => item.stationName == action.payload
      )
      state.gugunDust = gugunData
      // console.log(state.sidoDustContents)
      console.log(gugunData)
      console.log(state.gugunDust)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getDust.fulfilled, (state, action) => {
      state.sidoDustContents = action.payload?.sidoDustContents
      state.totalCount = action.payload?.totalCount
      state.status.loading = false
      state.gugunDust = undefined
      console.log(state.sidoDustContents)
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

    return {
      sidoDustContents: dust,
      totalCount: data.length
    }
  } catch (error) {
    console.log(error)
  }
})

export const dustReducer = dustSlice.reducer
export const { gugunDustHandler } = dustSlice.actions
