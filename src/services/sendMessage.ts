import { Question } from "../schemas";
import axiosInstance, { TEST_MODEL_API_URL } from "../api/axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";
type TestModelRequestBody = {
  context: string;
  chatbotName: string;
  examples: Question[];
  message: {
    text: string;
  };
};
type TestModelResponseBody = {
  text: string;
};

export function sendMessage(
  data: TestModelRequestBody,
  config: AxiosRequestConfig = {}
) {
  return axiosInstance
    .post(TEST_MODEL_API_URL, data, config)
    .then((response: AxiosResponse<TestModelResponseBody>) => {
      if (response.status === 200) return response;
      throw new Error(response.statusText);
    })
    .then((response) => {
      return response.data as TestModelResponseBody;
    });
}
