import { ProdutoI } from "@/utils/types/produtos";
import Link from "next/link";

export function ItemProdutos({ data }: { data: ProdutoI }) {
  let parcelas
  if (data.preco < 100) {
    parcelas = ` ou em 2x R$:  ${(data.preco / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} `
  } else if (data.preco > 100 && data.preco < 500) {
    parcelas = ` ou em 4x  ${(data.preco / 4).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  } else if (data.preco > 500) {
    parcelas = ` ou em 5x  ${(data.preco / 5).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <Link href={`/detalhes/${data.id}`}>
        <div className="min-w-96 min-h-56">
          <img className="rounded-t-lg"
            src={`data:image/jpg;base64, ${data.fotos[0].codigoFoto}`}
            alt={`Imagem do ${data.descricao}`} />
        </div>
      </Link>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.tipo.nome} {data.marca.nome} {data.nome}
        </h5>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-200 truncate">
          {data.descricao}
        </p>
        <p className="mb-0.5 font-bold text-gray-700 dark:text-gray-400">
          R$ {Number(data.preco).toLocaleString("pt-br",
            { minimumFractionDigits: 2 }
          )} Avista
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {parcelas}
        </p>

        <Link href={`/detalhes/${data.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ver Detalhes
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  )
}