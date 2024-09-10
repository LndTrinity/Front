import { CarroI } from "@/utils/types/carros"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useState } from "react"

type inputs = {
    termo: string
}
type InputPesquisaProps = {
    setCarros: React.Dispatch<React.SetStateAction<CarroI[]>>
}
export function InputPesquisa({setCarros}: InputPesquisaProps) {

    const {register, handleSubmit,reset} = useForm<inputs>()

    async function enviarPesquisa(data: inputs){
        if (data.termo.length <2){
            toast.warning("Digite, no mínimo, 2 caracteres para a pesquisa")
            return
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/carros/pesquisa/${data.termo}`) 
        const dados = await response.json()     
        
        setCarros(dados)

        if (dados.length == 0){
            // toast.error("Não há veículos com o termo pesquisado")
            reset({termo: ""})
            return
        }
       
    }
    function mostraDestaque() {

        const {register, handleSubmit,reset} = useForm<inputs>()
        async function enviarPesquisa(data: inputs){
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/carros`) 
            const dados = await response.json()     
            console.log(dados)
            setCarros(dados)
            reset({termo:""})
           
        }}
    
   

    return (
        <section className="flex max-w-5xl mx-auto mt-3">


            <form className="flex-1"
            onSubmit={handleSubmit(enviarPesquisa)}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Qual veiculo deseja procurar? ex: modelo, marca, ano ou preço" 
                    required
                    {...register("termo")} />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                </div>
            </form>
            <button type="button" 
            className="text-white ms-3 mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={mostraDestaque}
            >Veículos em Destaque</button>
        </section>
    )
}