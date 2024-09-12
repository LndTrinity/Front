import { MarcaI } from "./marcas"
import { TipoI } from "./tipo"
import { FotoI } from "./fotos"

export interface ProdutoI {
  id: number,     
  nome: String,
  preco: number,  
  cor: String,
  tamanho: String,
  descricao: String
  destaque: boolean,
  deleted: boolean,
  quantidade: number,
  tipo: TipoI,
  marca: MarcaI,  
  marcaId: String,
  tipoId: number,   
  fotos:  FotoI[]    
}