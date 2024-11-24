const NotFound: React.FC = ()=>{
    return(<>
<section className="bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">404</h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-grayDark md:text-4xl">Algo falta.</p>
      <p className="mb-4 text-lg font-light text-grayMedium">Lo siento, no podemos encontrar esa página. Encontrarás muchas cosas para explorar en la página de inicio.</p>
      <a href="/home" className="inline-flex text-white bg-primary hover:bg-grayMedium focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Volver a la página de inicio</a>
    </div>   
  </div>
</section>

    </>)
}

export default NotFound