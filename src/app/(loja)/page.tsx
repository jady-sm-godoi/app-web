'use client'

import Pagina from "@/components/template/Pagina";
import Image from "next/image";
import produtos from '@/data/constants/produtos'
import CartaoProduto from "@/components/produto/CartaoProduto";

export default function Home() {
  return (
    <Pagina>
      <div className="flex gap-5 justify-center flex-wrap">
        {produtos.map(produto => (
          <CartaoProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </Pagina>
  );
}
