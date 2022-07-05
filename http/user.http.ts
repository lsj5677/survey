import { IReqUserCreate, IReqVerifyToken } from "../httpType/user.type";
import { getHostUrl } from "../utils/http.util";
import axios from 'axios';

const hostUrl = getHostUrl();

// export const httpUserCreate = async (params: IReqUserCreate) => {
//   try {
//     const createRes = await http(
//       `${hostUrl}/auth/sign-up`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(params)
//       }
//     );

//     return createRes;
//   } catch (error) {
//     throw error;
//   }
// }

export const httpUserCreate = async (params: IReqUserCreate) => {
  try {
    // const payload = JSON.stringify(params);
    const res = await axios.post(`${hostUrl}/auth/sign-up`, params, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // const res = await httpPost('auth/sign-up', params)

    return res.data;

  } catch (error) {
    throw error;
  }
}


export const httpTokenVerify = async (params: IReqVerifyToken) => {
  try {
    // const payload = JSON.stringify(params);
    const res = await axios.post(`${hostUrl}/auth/token-verify`, params, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // const res = await httpPost('auth/token-verify', params)

    return res.data;
  } catch (error) {
    throw error;
  }
}