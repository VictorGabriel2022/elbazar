import internal from "stream";

export interface PedidoDTO{
    id_pedido: integer,
    id_Cliente: integer,
    fech_ped: integer,
    hor_ped: integer,
    fech_entr: integer,
    obs: string,
    estado: boolean,    
} 
export interface PedidoRegistrarDTO{
    id_Cliente: integer,
    fech_ped: integer,
    hor_ped: integer,
    fech_entr: integer,
    obs: string,
    estado: boolean,   

}