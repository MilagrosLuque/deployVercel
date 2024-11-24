
import CardList from "@/components/CardList" 
const Home: React.FC = ()=>{
  return <>
      <div className="bg-[#005bb5] w-full py-8 flex justify-center"> {/* Azul más oscuro */}
        <img 
          src="/home.png" 
          alt="Imagen de productos" 
          className="w-1/2 h-auto mx-auto object-cover rounded-lg" 
        />
      </div> 
      <h1 className="text-3xl font-bold text-primary mb-8 text-center md:text-4xl mt-5">
        Productos
      </h1>
    <CardList/>
  
  </>
}
export default Home