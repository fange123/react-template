import { RuleObject } from 'antd/lib/form'

export interface IRule {
  field: string
  fullField: string
  type: string | number | boolean
  validator: Function
}

export const validatePassword = (rule: RuleObject, value = '') => {
  const pattern = /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[@#$％^&*].*).{8,16}$/i
  if (!value) {
    return Promise.resolve()
  } else if (pattern.test(value)) {
    if (value.length < 8) return Promise.reject(new Error('密码长度至少8位!'))
  } else if (!pattern.test(value)) {
    return Promise.reject(new Error('请输入8-16位数字、字母和特殊符号，字母区分大小写!'))
  }
  return Promise.resolve()
}

export const validateNodeName = (rule: RuleObject, value = '') => {
  if (!value) {
    return Promise.resolve()
  } else if (value.length > 50) {
    return Promise.reject(new Error('节点名称不能超过50个字符!'))
  }
  return Promise.resolve()
}
