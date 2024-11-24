import Link from "next/link"

const NavbarAuth: React.FC = () =>{
    return(<>
        <Link href="/dashboard">
            <span className="text-white hover:text-grayLight">Mi Perfil</span>
        </Link>
    </>)
}
export default NavbarAuth;