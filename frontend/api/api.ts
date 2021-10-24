/* eslint-disable @typescript-eslint/ban-types */
import axios, { AxiosResponse } from "axios";
import { QuestionType } from "../models/question.interface";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: Object) => instance.post(url, body).then(responseBody),
  put: (url: string, body: Object) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};
