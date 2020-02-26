import { isEmpty, isNil } from 'ramda'

const auth = () => {
  const codeAccess = localStorage.getItem('code_access')
  if(isEmpty(codeAccess) || isNil(codeAccess)) {
    return false
  }
  return true
}

export default auth
