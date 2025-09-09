import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  timeout: 1000,
  headers: {
    "X-Parse-Application-Id": "b44WHXPs2YqHDajovVVALA8b6labKQP4nDbR2WsG",
    "X-Parse-JavaScript-Key": "SJvyjqtUsQlMIdYeckPIv5FNT7sILBDmBnmQVSCN",
  },
});

export async function getTasks() {
  const response = await instance.get("/classes/Task");
  return response.data;
}
