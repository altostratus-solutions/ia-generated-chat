import { InputOutputTextPair } from "../models";
import axiosInstance, { TEST_MODEL_API_URL } from "../api/axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";
type TestModelRequestBody = {
  context: string;
  chatbotName: string;
  examples: InputOutputTextPair[];
  message: {
    text: string;
  }};
type TestModelResponseBody = {
  text: string;
};

export async function sendMessage(data:TestModelRequestBody,config:AxiosRequestConfig={}):Promise<TestModelResponseBody> {
  try {
    const res :AxiosResponse<TestModelResponseBody> = await axiosInstance.post(TEST_MODEL_API_URL, data,config);
    return res.data;
  } catch (err) {
    console.log(err);
    return err as TestModelResponseBody;
  }


}