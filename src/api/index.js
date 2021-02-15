import axios from 'axios'
import baseURL, { urls } from './urls'

const appkey = 'cz123_1609731416186'

// 创建一个axios的实例
const request = axios.create({
  baseURL,
  params: {
    appkey,
  }
})
request.interceptors.response.use((value)=> value.data);

const getSideList = (type) => request.get(
  urls.getSide,
  { params: { type } },
)

const getGoodsList = (type, page, size, sort) => request.get(
  urls.getGoodsList,
  // type: 商品列表的子项
  // page: 翻页
  // size: 每页的大小
  // sort: 排序方式
  { params: { type, size, sort, page } },
)

export default {
  getSideList,
  getGoodsList
}