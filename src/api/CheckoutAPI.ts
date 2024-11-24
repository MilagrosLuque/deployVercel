    //req.headers.autorization->token
    //req.body={products:[productId, productId2, ...]}
    //   /orders(post)

import Swal from "sweetalert2";


export const Checkout = async (token:string, products:number[])=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`,{
          method: "POST",
          headers:{
              "Content-Type":"application/json",
              Authorization: token,
          },
          body: JSON.stringify({products}),
        })

        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }

        Swal.fire({
          icon: "success",
          title: "¡Compra finalizada con exito!",
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
            text: "No se pudo finalizar la compra.",
        });
          
      }
}
