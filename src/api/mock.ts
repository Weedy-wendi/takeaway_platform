import Mock from 'mockjs'
import homeApi from './mockdata/homeApi'
import storeApi from './mockdata/storeApi'
Mock.mock('/home/getHomedata',homeApi.getHomedata)
Mock.mock('/home/getStoredata',storeApi.getStoredata)