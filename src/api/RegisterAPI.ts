import { IRegisterData } from "@/interfaces/IRegister";
import Swal from "sweetalert2";


export async function fetchRegister(registerData:IRegisterData) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(registerData),
      })


      if (!res.ok) {
        throw new Error("No se pudo completar el registro");
      } 
  
        // Alerta de éxito
        Swal.fire({
          title: "¡Registro exitoso!",
          text: "Te has registrado correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
  
        return res.json()
      
    } catch (error) {
      console.error(error);
  
      // Alerta de error
      Swal.fire({
        title: "Error",
        text: "Hubo un problema con el registro. Por favor, inténtalo nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }

  export default fetchRegister
