import type { PageParam, PageResult } from '@/http/types'
import { http } from '@/http/http'

/** 操作记录信息 */
export interface Record {
  id?: number
  businessType?: string
  traceId?: string
  userId?: number
  userType?: number
  userName?: string
  type?: string
  subType?: string
  bizId?: number
  action?: string
  extra?: string
  requestMethod?: string
  requestUrl?: string
  userIp?: string
  userAgent?: string
  createTime?: Date
}

/** 获取操作记录分页列表 */
export function getRecordPage(params: PageParam) {
  return http.get<PageResult<Record>>('/mngt/form-record/page', params)
}

/** 获取操作记录详情 */
export function getRecord(id: number) {
  return http.get<Record>(`/mngt/form-record/get?id=${id}`)
}

/** 创建记录 */
export function createRecord( data) {
   return http.post<PageResult<Record>>('/mngt/form-record/create', data)
}/** 更新记录 */
export function updateRecord(data) {
  return http.put<Record>('/mngt/form-record/update', data)
}