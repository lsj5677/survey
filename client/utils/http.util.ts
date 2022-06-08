export const getHostUrl = () => {
  return 'http://localhost:3000';
}

export const http = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {

  const customInit: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...init
  }
  return await fetch(input, init);
}