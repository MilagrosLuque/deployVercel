import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-grayDark text-sm text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* Enlaces de navegación del footer */}
        <div className="space-x-6 mb-4">
          <Link href="/home">
            <span className="text-white hover:text-grayLight">Inicio</span>
          </Link>
        </div>

        {/* Aviso de derechos de autor */}
        <p className="text-grayMedium">
          &copy; {new Date().getFullYear()} Apple Store. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
