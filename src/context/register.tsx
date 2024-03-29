import { Props, RegisterContextProps } from "contexts-types";
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import usePersistedState from "../hooks/usePersistedState";
import { jwtDecode } from "jwt-decode";
import { ILoginViewModel, IRegisterViewModel } from "viewModels";

const RegisterContext = createContext<RegisterContextProps>({} as RegisterContextProps);

const Register: React.FC<Props> = ({ children }) => {
  const [user, setUser] = usePersistedState<IRegisterViewModel>('user', {} as IRegisterViewModel,false);
  const [token, setToken] = usePersistedState<string | undefined>(
    "@api_laravel",
    undefined
  );
 
  const logged = useMemo(
    () => (token ? (jwtDecode(token) as any).exp > Date.now() / 1000 : false),
    [token]
  );

  const signIn = useCallback(
    (response: ILoginViewModel) => {
      if (!response) return;
      const auth = response;
      setUser(auth.user ?? {} as IRegisterViewModel);
      setToken(auth.token);
    },
    [setToken, setUser]
  );

  const signOut = useCallback(() => {
    setUser({} as IRegisterViewModel);
    setToken(undefined);
  }, [setToken, setUser]);

  return (
    <RegisterContext.Provider
      value={{
        user,
        setUser,
        logged,
        signIn,
        signOut,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister : () => RegisterContextProps = () => useContext(RegisterContext);

export default Register;