import getOptions from "./services.ultils";
import authAxios from "./authAxios";


export async function createData(path, accessToken, data) {
  try {
    let endpoint = "";
    let body = {};
    let option = {};
    if (accessToken && accessToken !== "") option = getOptions(accessToken);
    if (path !== "") {
      endpoint = `/${path}`;
    }
    if (data !== "") {
      body = data;
    }
    const res = await authAxios(option).post(endpoint, body);
    return res;
  } catch (error) {
    return error.response;
  }
}





