import axios from "axios";
import { Course } from "./types";
export const BASE_URI = "http://127.0.0.1:3030";

export const API_Filtering = async (label: string, value: string) => {
  console.log("시작");
  await axios
    .get(`${BASE_URI}/course/filter`, {
      params: { label: label, value: value },
    })
    .then((value) => {
      return value.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// useQuery(`LandlordUserProfile`, () => API_GET_LAND_LORD_INFO(access_token), {
//   onSuccess: response => {
//     const { data } = response;
//     logger.info('임대인 정보 가져오기 API 성공');
//     logger.debug('임대인 정보 response.data', data);
//     setName(data.name);
//     setCouponCount(data.ticket);
//   },
//   onError: err => {
//     logger.error('임대인 정보 API 실패', err.response.data ?? err);
//   },
// });
