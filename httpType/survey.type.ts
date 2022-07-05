export interface IReqSurveyCreate {
  title: string,
  time: string,
  target: string,
  endDate: Date,
  // tag?: [],
  link: string,
  description?: string
}