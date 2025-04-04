import axios from "axios";

import { AppError } from "@utils/AppError";

const api = axios.create({
  baseURL: "http://192.168.3.19:3333",
  timeout: 5000,
});

//pega a mensagem de erro e aplica a padronização do AppError nela
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    }else{
        return Promise.reject(error) //caso erro generico
    }
  }
);

export { api };
