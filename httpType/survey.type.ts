export interface IReqSurveyCreate {
  title: string,
  time: string,
  target: string,
  endDate: number,
  // tag?: [],
  link: string,
  description?: string
}