import internal from "stream";

export interface ProductoDTO{
    id_prod: integer,
    nomb_prod: string,
    prec_prod: integer,
    stock_prod: integer,
    id_catg: integer,
    estado: boleean,
    categoria: integer,
      
} 
export interface ProductoRegistrarDTO{
    nomb_prod: string,
    prec_prod: integer,
    stock_prod: integer,
    id_catg: integer,
    estado: boolean,
}