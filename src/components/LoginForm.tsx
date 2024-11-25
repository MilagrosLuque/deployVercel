"use client"
import { useContext, useState } from "react";
import  {validateLogin}  from "@/helpers/validateLogin";
import { ILoginData, ILoginErrors } from "@/interfaces/ILogin";
import fetchLogin from "@/api/LoginAPI";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserContext } from "@/context/UserContext";
import Swal from "sweetalert2";

const LoginForm: React.FC = ()=> {
  const [loginData, setLoginData] = useState<ILoginData>({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState<ILoginErrors>({});
  const { initializeUserSession } = useContext(UserContext); // Obtén la función del contexto

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value
    });

    const error = validateLogin(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors: ILoginErrors = {};
    let hasErrors = false;

    // Validación de todos los campos antes del submit
    for (const [name, value] of Object.entries(loginData)) {
      const error = validateLogin(name, value);
      if (error) {
        validationErrors[name as keyof ILoginData] = error;
        hasErrors = true;
      }
    }

    setErrors(validationErrors);

    if (!hasErrors) {
      const res = await fetchLogin(loginData)

      if (!res) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Credenciales incorrectas. Por favor, verifica tus datos.",
        });
        return;
      }
  
      const { token, user } = res;
      
      
      //para usar cookies instalar la libreria js-cookie
      //1. npm i js-cookie
      //2. npm i --save-dev @types/js-cookie
      Cookies.set("loginData", JSON.stringify({token, user}), {expires:1});

      // Actualiza la sesión en el contexto
      initializeUserSession();

      //si no funcionan los del feth poner un alert de exito
      //REDIRIGIR AL HOME
      router.push("/home")
      
    }
    
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="lg:p-11 p-7 mx-auto">
              <div className="mb-11">
                <h1 className="text-black text-center font-manrope text-3xl font-bold leading-10 mb-2">
                  Bienvenido de nuevo
                </h1>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  className="w-full h-12 text-black placeholder:text-grayMedium text-lg font-normal leading-7 rounded-full border-grayLight border shadow-sm focus:outline-none px-4"
                  placeholder="email"
                  value={loginData.email}
                  name="email"
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="w-full h-12 text-black placeholder:text-grayMedium text-lg font-normal leading-7 rounded-full border-grayLight border shadow-sm focus:outline-none px-4"
                  placeholder="password"
                  value={loginData.password}
                  name="password"
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-primary transition-all duration-700 bg-primary shadow-sm mb-11"
              >
                Iniciar sesión
              </button>
              <a href="/register" className="flex justify-center text-black text-base font-medium leading-6">
                ¿No tienes una cuenta?
                <span className="text-primary font-semibold pl-3"> Regístrate</span>
              </a>
            </form>
    </>
  );
}



export default LoginForm