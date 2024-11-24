import Link from "next/link"

const NavbarGuest: React.FC = () =>{
    return(<>
    
    <Link href="/login">
            <span className="text-white hover:text-grayLight">Iniciar Sesion</span>
          </Link>
          <Link href="/register">
            <span className="text-white hover:text-grayLight">Registrarse</span>
          </Link>
    
    
    </>)
}
export default NavbarGuest;