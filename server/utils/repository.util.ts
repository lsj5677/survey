import { EntityTarget } from "typeorm"
import { getDatabase } from "./database.util"


export const getExtendsRepo = async <Entity>(entity: EntityTarget<Entity>) => {
  const db = await getDatabase()
  return db.getRepository(entity)
    .extend({
      // entity 생성 작업을 쉽게 도와줌
      async createByObject(params: any) {

        // 타입을 특정하기 어려워서 any 사용하게 되는데.... 
        // 나은 방법이 있으면 변경할게요!
        const newEntity: any = this.create()

        Object.keys(params).map(key => {
          if (Object.hasOwn(newEntity, key)) newEntity[key] = params[key]
        })

        return await this.save(newEntity)

      }
    })


}