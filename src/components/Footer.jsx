import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Soluções</h6>
          <ul>
            <li className="py-2 text-sm">Análise</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Comércio</li>
            <li className="py-2 text-sm">Percepções</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Suporte</h6>
          <ul>
            <li className="py-2 text-sm">Preços</li>
            <li className="py-2 text-sm">Documentação</li>
            <li className="py-2 text-sm">Guias</li>
            <li className="py-2 text-sm">Status da API</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Empresa</h6>
          <ul>
            <li className="py-2 text-sm">Sobre</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Trabalhos</li>
            <li className="py-2 text-sm">Imprensa</li>
            <li className="py-2 text-sm">Carreiras</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Jurídico</h6>
          <ul>
            <li className="py-2 text-sm">Reclamação</li>
            <li className="py-2 text-sm">Política</li>
            <li className="py-2 text-sm">Termos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
