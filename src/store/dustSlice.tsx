import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface sidoDustTypes {
  coFlag: string | null
  coGrade: string | null
  coValue: string | null
  dataTime: string | null
  khaiGrade: string | null
  khaiValue: string | null
  no2Flag: string | null
  no2Grade: string | null
  no2Value: string | null
  o3Flag: string | null
  o3Grade: string | null
  o3Value: string | null
  pm10Flag: string | null
  pm10Grade: string | null
  pm10Value: string | null
  pm25Flag: string | null
  pm25Grade: string | null
  pm25Value: string | null
  sidoName: string | null
  so2Flag: string | null
  so2Grade: string | null
  so2Value: string | null
  stationName: string | null
}

interface StateType {
  sidoDustContents: any[]
  totalCount: number
  status: {
    loading: boolean
    error: string
  }
  gugunDust: any
  favoriteDust: object[]
  initialDust: sidoDustTypes | null
}
const initialState: StateType = {
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
      console.log(gugunData)
      console.log(state.gugunDust)
    },
    favoriteDustHandler(state, action) {
      const starClickedItem = action.payload
      console.log(starClickedItem)
      state.favoriteDust.push({
        ...starClickedItem,
        isLiked: true
      })
      console.log(state.favoriteDust)
    },
    favoriteDustRemoveHandler(state, action) {
      let starClickedItem = action.payload
      starClickedItem = {
        ...starClickedItem,
        isLiked: false
      }
      state.favoriteDust = state.favoriteDust.filter(
        (item: any) => item.stationName !== starClickedItem.stationName
      )
    },
    myplaceHandler(state, action) {
      state.initialDust = state.sidoDustContents.find((item) => item.stationName == action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getDust.fulfilled, (state, action) => {
      state.sidoDustContents = action.payload?.sidoDustContents
      state.totalCount = action.payload?.totalCount
      state.status.loading = false
      state.gugunDust = undefined
      state.initialDust = action.payload?.sidoDustContents[0]
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
    sidoName: '서울',
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
export const { gugunDustHandler, favoriteDustHandler, favoriteDustRemoveHandler, myplaceHandler } =
  dustSlice.actions
