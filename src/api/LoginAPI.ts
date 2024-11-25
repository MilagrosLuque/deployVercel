import { ILoginData } from "@/interfaces/ILogin";
import Swal from "sweetalert2";

export async function fetchLogin(loginData:ILoginData) {
    try {
      const res = await fetch(`https://drc116rn-3002.brs.devtunnels.ms/users/login`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(loginData),
      })

        if (!res.ok) {
            throw new Error
        }

          Swal.fire({
            icon: "success",
            title: "¡Inicio de sesión exitoso!",
            text: "Redirigiendo al inicio...",
            timer: 2000,
            showConfirmButton: false,
        });
        
        return res.json()
        
    } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo iniciar sesión. Por favor, verifica tus credenciales.",
          confirmButtonText: "Entendido",
      });
      
      return null;
    }
  }

  export default fetchLogin