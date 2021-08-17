import { PhoneReg } from '@/common/reg'

// 校验手机号
export function checkPhoneNum(rule, value, callback) {
  if (value && !PhoneReg.test(value)) {
    callback('请输入正确的手机号')
  } else {
    callback()
  }
}
