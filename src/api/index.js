//包含n个接口请求函数
import ajax from './ajax'
const BASE_URL='/api'

export const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)
export const reqFoodCategorys=()=>ajax(`${BASE_URL}/index_category`)
export const reqShopList=(longitude,latitude)=>ajax(`${BASE_URL}/shops`,{longitude,latitude})
