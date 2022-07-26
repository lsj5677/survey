export interface IIronSessionUser {
  id: number,
  email: string,
  name?: string,
  accessToken: string,
  refreshToken: string
}