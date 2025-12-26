import type { PageParam, PageResult } from '@/http/types'
import { http } from '@/http/http'

/** 操作记录信息 */
export interface Record {
  id?: number
  formId?: number
  objectId?: number
  deviceId?: number
  businessType?: string
  name?: string
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
/** 删除操作记录 */
export function deleRecord(id: number) {
  return http.delete<Record>(`/mngt/form-record/delete?id=${id}`)
}

/** 创建记录 */
export function createRecord(data) {
  return http.post<PageResult<Record>>('/mngt/form-record/create', data)
}/** 更新记录 */
export function updateRecord(data) {
  return http.put<Record>('/mngt/form-record/update', data)
}


/** 获取服务对象列表 */
export function getServiceObjectList(params: PageParam) {
  return http.get<PageResult<Record>>('/mngt/service-object/simple-list', params)
}

/** 获取所有操作卡列表 */
export function getmngtformall(params: PageParam) {
  return http.get<PageResult<Record>>('/mngt/form/all', params)
}


/** 操作卡分页 */
export function getmngtformpage(params: PageParam) {
  return http.get<PageResult<Record>>('/mngt/form/page', params)
}
/** 操作卡详情 */
export function getForm(id: number) {
  return http.get<Record>(`/mngt/form/get?id=${id}`)
}

