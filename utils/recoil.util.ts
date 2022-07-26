import { v1 } from 'uuid'

// SSR error 동작에는 문제 없음 추후 recoil에서 해결되면 사용
// ex : reduxWrapper
export const getKey = (name: string) => {
  return `${name}/${v1()}`;
}