declare module 'viewModels' {
  export interface IRegisterViewModel {
    id: string;
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
  export interface ILoginViewModel {
    token: string;
    user?: IRegisterViewModel;
  }
}