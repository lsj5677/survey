
export interface IReqUserCreate {
  email: string;
  password: string | number;
  name?: string | number;
  token: string;
}