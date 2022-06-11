import { SurveyBoardEntity } from "../entity/survey.entity";
import { getDatabase } from "../utils/database.util";

// 실질적 비지니스 로직이 이루어지는 부분

export const getSurveyList = async () => {
  const db = await getDatabase();
  const surveyRepo = db.getRepository(SurveyBoardEntity);
  const surveyAll = await surveyRepo.find();

  return surveyAll;
}

// export const getSurveyOne = async () => {
//   const db = await getDatabase();
//   const userRepo = db.getRepository(UserEntity);
//   // find : array - getAll
//   // findOne : obj - getOne
//   const userAll = await userRepo.findOne({
//     // 조건 obj
//     where: { id: 10 }
//   });
//   console.log(`SUJIN:: ~ getUserList ~ userAll`, userAll);

//   return userAll;
// }