import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShopList
} from '../api'

export default{
 async getAddress({commit,state}){
    //发送ajax
    const geohash=state.latitude+','+state.longitude
  const result=await reqAddress(geohash)
   if(result.code===0){
     const address=result.data
     commit(RECEIVE_ADDRESS,{address})
   }
  },
  async getCategorys({commit,state}){
    //发送ajax
    const result=await reqFoodCategorys()
    if(result.code===0){
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  async getShops({commit,state}){
    //发送ajax
    const {latitude,longitude}=state
    const result=await reqShopList()
    if(result.code===0){
      const shops=result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}
