import { STAGE_TYPE } from "../types/environment.type";


export const consoleDebugSetting = (stage: STAGE_TYPE) => {
  if (stage === STAGE_TYPE.PROD) {
    // production debug 제거
    console.debug = function () { }
  } else {
    // console debug -> console log로 사용
    console.debug = function () {
      // bind : this만 넣어줌
      // apply : this 넣고 실행 arguments가 같이 넘어온 params / arguments -> array
      // call : apply랑 같으나 argument -> spread 형태
      console.log.apply(this, arguments as any);
    }
  }
}