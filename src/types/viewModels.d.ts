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
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    reference: string; 
  }
  export interface ILoginViewModel {
    token: string;
    user?: IRegisterViewModel;
  }
}