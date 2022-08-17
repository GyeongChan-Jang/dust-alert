import axios from 'axios'

interface GetParams {
  serviceKey: string
  returnType: string
  pageNo: number
  numOfRows: number
  sidoName: string
  ver: string
}

const getParameters: GetParams = {
  serviceKey: import.meta.env.VITE_SERVICE_KEY,
  returnType: 'json',
  pageNo: 1,
  numOfRows: 100,
  sidoName: '서울',
  ver: '1.0'
}

export const getDustInfo = async () => {
  try {
    const { data } = await axios.get('/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', {
      params: getParameters
    })
    console.log(data.response.body.items)
    return data.response.body.items
  } catch (error) {
    console.log(error)
  }
}
