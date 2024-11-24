import React from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.j

const Landing: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-start h-screen text-center bg-center bg-contain"
      style={{
        backgroundImage: 'url(/landing.png)', // URL directa de la imagen
      }}
    >
      {/* Título */}
      <h1 className="mt-12 mb-4 text-4xl font-bold text-primary md:text-5xl">
        Bienvenido a Apple Store
      </h1>

      {/* Subtítulo */}
      <p className="mt-4 mb-8 text-lg text-grayMedium md:text-xl">
        Descubre los productos más innovadores de Apple.
      </p>

      <Link href="/home">
        <button className="btn">
          Explora nuestros productos
        </button>
      </Link>
    </div>
  );
};

export default Landing;
