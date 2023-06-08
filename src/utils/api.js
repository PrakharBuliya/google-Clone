import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

//AIzaSyDLsWy43ynWhtiPhQiTaXJ7R-Vu3B_CjCU
//AIzaSyBKDBcVZ54LUSfV-1FTOPHdLHEW8IDEuIw

const params = {
  key: "AIzaSyDLsWy43ynWhtiPhQiTaXJ7R-Vu3B_CjCU",
  cx: "a6b0f67b465114154",
  //a6b0f67b465114154
  //26f478d921b824360
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
