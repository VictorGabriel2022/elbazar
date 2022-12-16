import internal from "stream";

export interface CategoriaDTO{
        id_catg: integer;
        nom_catg: string;
        estado: boolean ;
      
} 
export interface CategoriaRegistrarDTO{
        nom_catg: string;
        estado: boolean ;
    
    }