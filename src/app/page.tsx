"use client"
import { InputPesquisa } from "@/components/InputPesquisa";
import { ProdutoI } from "@/utils/types/produtos";
import { ItemProdutos } from "@/components/ItemProdutos";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toaster } from 'sonner'
import chalk from "chalk";

export default function Home() {
  const [produtos, setProdutos] = useState<ProdutoI[]>([])
  
  useEffect(() => {
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/produtos`) 
      const dados = await response.json()     
      console.log(dados)
      setProdutos(dados)
    }
    buscaDados()

  },[])
  let listaProdutos
  if (produtos.length != 0){
     listaProdutos = produtos.map( produto => (
      <ItemProdutos data={produto} key={produto.id}/>
      ))    
  } else{
    listaProdutos = <h1 className="mb-5 text-base font-normal leading-none tracking-tight text-gray-900 md:text-5xl lg:text-base dark:text-white">Nada encontrado</h1>
  }
  
  // console.log(carros)
  // if (listaCarros.length == 0 ){
  //   console.log(listaCarros)
  // }
  
  


  return (
    <main>

      <InputPesquisa  setCarros={setProdutos}/>
      <section className="max-w-screen-xl mx-auto">
        <h1 className="mb-5 mt-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"><span className="underline underline-offset-3 decoration-8 decoration-orange-600 dark:decoration-orange-600">Veiculos em destaque</span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {listaProdutos}
        </div>
      </section>
      <Toaster position="top-center" richColors/>
    </main>
  );
}
