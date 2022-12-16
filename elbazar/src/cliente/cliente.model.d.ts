import internal from "stream";

export interface ClienteDTO{
    id_Cliente: integer,
    nombre: string,
    apellido: string,
    fech_nac: integer,
    tip_doc: integer,
    estado: boolean
      
} 
export interface ClienteRegistrarDTO{
    nombre: string,
    apellido: string,
    fech_nac: integer,
    tip_doc: integer,
    estado: boolean

}