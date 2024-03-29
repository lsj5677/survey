import axios, { AxiosRequestConfig } from 'axios'

export const getHostUrl = () => {
  console.debug(`SUJIN:: ~ getHostUrl ~ process.env`, process)
  return process.env.STAGE === 'production' ? 'https://api.survee.link' : 'http://localhost:3000';
}
const hostUrl = getHostUrl();

export const sessionConfig = (userInfo?: any, config?: AxiosRequestConfig<any>) => {
  return {
    headers: {
      Authorization: userInfo?.accessToken ? `Bearer ${userInfo?.accessToken}` : '',
      ...config?.headers
    },
    ...config
  }
}

export const httpGet = async (url: string, userInfo?: any, config?: AxiosRequestConfig<any>) => {
  const customConfig = sessionConfig(userInfo, config);
  return await axios.get(`${hostUrl}/${url}`, customConfig)
}

export const httpPost = async<D>(url: string, data?: D, userInfo?: any, config?: AxiosRequestConfig<any>) => {
  const customConfig = sessionConfig(userInfo, config);
  return await axios.post(`${hostUrl}/${url}`, data, customConfig)
}

export const httpPut = async<D>(url: string, data?: D, userInfo?: any, config?: AxiosRequestConfig<any>) => {
  const customConfig = sessionConfig(userInfo, config);
  return await axios.put(`${hostUrl}/${url}`, data, customConfig)
}

export const httpDelete = async (url: string, userInfo?: AudioNode, config?: AxiosRequestConfig<any>) => {
  const customConfig = sessionConfig(userInfo, config);
  return await axios.delete(`${hostUrl}/${url}`, customConfig)
}

export const http = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
  return await fetch(input, init);
}

export const setClientInterceptor = (token?: string) => {
  axios.interceptors.request.use(
    (config) => {
      if (!config?.headers) return config;

      if (!token) {
        delete config.headers.Authorization;
        return config;
      }

      config.headers['Authorization'] = `Bearer ${token}`

      return config
    },
    (error) => Promise.reject(error)
  )
}