declare module 'inputModels' {
  export interface IRegisterUserInputModel {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    cel: string;
    cep: string;
    uf: string;
    city: string;
    end: string;
    num: string;
    comp: string;
    bairro: string;
    ref: string;    
  }
  export interface ILoginInputModel {
    email: string;
    password: string;
  }

}