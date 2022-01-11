// 品牌管理模块相关Api接口
import request from '@/utils/request'
export const getBaseTrademark = ({ page, limit }) => {
  return request({
    url: `/admin/product/baseTrademark/${page}/${limit}`,
    method: 'get'
  })
}
