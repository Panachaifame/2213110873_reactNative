import axios, { AxiosResponse, AxiosError } from "axios";
//create instance
const http = axios.create({
  headers: { "Content-Type": "applicaion/json" }, //every file = .json
});
export { http };
export type { AxiosResponse, AxiosError };