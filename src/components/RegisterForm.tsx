// components/RegisterForm.tsx
"use client";

import { useState } from "react";
import { validateRegister } from "../helpers/validateRegister"; 
import { IRegisterData, IRegisterErrors } from "@/interfaces/IRegister";

import { useRouter } from "next/navigation";
import fetchRegister from "@/api/registerAPI";
//cambie router por navigation

const RegisterForm: React.FC = () => {
  const [registerData, setRegisterData] = useState<IRegisterData>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: ""
  });

  const [errors, setErrors] = useState<IRegisterErrors>({});

  const router = useRouter()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });

    const error = validateRegister(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors: IRegisterErrors = {};
    let hasErrors = false;

    for (const [name, value] of Object.entries(registerData)) {
      const error = validateRegister(name, value);
      if (error) {
        validationErrors[name as keyof IRegisterData] = error;
        hasErrors = true;
      }
    }

    setErrors(validationErrors);

    
    if (!hasErrors) {
      await fetchRegister(registerData)
      //REDIRIGIR AL LOGIN
      router.push("/login")

  }
};


  return (
    <form onSubmit={handleSubmit} className="lg:p-11 p-7 mx-auto">
      <div className="mb-11">
        <h1 className="text-black text-center font-manrope text-3xl font-bold leading-10 mb-2">
          Crear Cuenta
        </h1>
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="w-full h-12 text-black placeholder:text-grayMedium text-lg font-normal leading-7 rounded-full border-grayLight border shadow-sm focus:outline-none px-4"
          placeholder="Nombre"
          value={registerData.name}
          name="name"
          onChange={handleInputChange}
        />
        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
      </div>
      <div className="mb-6">
        <input
          type="email"
          className="w-full h-12 text-black placeholder:text-grayMedium text-lg font-normal leading-7 rounded-full border-grayLight border shadow-sm focus:outline-none px-4"
          placeholder="Email"
          value={registerData.email}
          name="email"
          onChange={handleInputChange}
        />
        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <input
          type="password"
          className="w-full h-12 text-black placeholder:text-grayMedium text-lg font-normal leading-7 rounded-full border-grayLight border shadow-sm focus:outline-none px-4"
          placeholder="Contraseña"
          value={registerData.password}
          name="password"
          onChange={handleInputChange}
        />
        {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="w-full h-12 text-black placeholder:text-grayMedium text-lg font-normal leading-7 rounded-full border-grayLight border shadow-sm focus:outline-none px-4"
          placeholder="Dirección"
          value={registerData.address}
          name="address"
          onChange={handleInputChange}
        />
        {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address}</p>}
      </div>
      <div className="mb-6">
        <input
          type="text"
          className="w-full h-12 text-black placeholder:text-grayMedium text-lg font-normal leading-7 rounded-full border-grayLight border shadow-sm focus:outline-none px-4"
          placeholder="Teléfono"
          value={registerData.phone}
          name="phone"
          onChange={handleInputChange}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
      </div>
      <button
        type="submit"
        className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-primary transition-all duration-700 bg-primary shadow-sm mb-11"
      >
        Registrarse
      </button>
      <a href="/login" className="flex justify-center text-black text-base font-medium leading-6">
        ¿Ya tienes una cuenta?
        <span className="text-primary font-semibold pl-3"> Inicia sesión</span>
      </a>
    </form>
  );
};

export default RegisterForm;
