declare module "contexts-types"{
  type RegisterContextProps = {
    logged: boolean;
    signIn: (response: import("viewModels")<import("viewModels").ILoginViewModel>) => void;
    signOut: () => void;
    user: import("viewModels").IRegisterViewModel
    setUser: import("react").Dispatch<import("react").SetStateAction<import("viewModels").IRegisterViewModel>>;
  }
  type Props = {
    children: React.ReactNode;
  }
}