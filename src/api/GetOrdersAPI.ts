import Swal from "sweetalert2";

export const GetOrders= async (token:string)=>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/orders`,{
          method: "GET",
          cache:"no-store",
          headers:{
              "Content-Type":"application/json",
              Authorization: token,
          },
        })
        return res.json()
      } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo obtenes las ordenes de compra",
        });
          
      }
}