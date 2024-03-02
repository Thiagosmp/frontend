import { ILoginInputModel, IRegisterUserInputModel } from "inputModels";
import api from "../service/api";
import { ILoginViewModel, IRegisterViewModel } from "viewModels";

const login = (input: ILoginInputModel) =>
  new Promise<ILoginViewModel>((resolve, reject) => {
    api
      .post("api/login", input)
      .then(({ data }) => resolve(data))
      .catch(reject);
  });

  const updateDataUser = (input: IRegisterUserInputModel) =>
  new Promise<IRegisterViewModel>((resolve, reject) => {
    api
      .post("api/register/edit", input)
      .then(({ data }) => resolve(data))
      .catch(reject);
  });

export const AuthController = {
  login,
  updateDataUser,
};