import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DPedidoDTO } from "./detallepedido.model";

export default function ComponenteListaDetalleproducto(){
  const url = "https://localhost:44394/Proyecto_EC1/detallepedido";
  
  const [detallePedido, setdetallePedido] = useState<DPedidoDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setdetallePedido(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //se llama a la peticion
  useEffect(() => {
    peticionesGet();
  }, []);
    return(

        <div>
            <h1>Lista Detalle Pedido</h1>
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
  <thead className="table-dark">
    <tr>
      <th scope="col">Código DetallePedido</th>
      <th scope="col">Código Pedido</th>
      <th scope="col">Código Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Sub Total</th>
      <th scope="col">Estado</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {detallePedido?.map((dped)=>(
  <tr key={dped.id_dped}>
      <th scope="row">{dped.id_dped}</th>
      <td>{dped.id_pedido}</td>
      <td>{dped.id_prod}</td>
      <td>{dped.cant}</td>
      <td>{dped.precio}</td>
      <td>{dped.subtotal}</td>
      <td>{dped.estado ?<td>Habilitado</td> : <td>Deshabilitado</td>}</td>

    
      <td>
                  <Link
                    to={`/detalleproducto/actualizar/${dped.id_dped}`}
                    className="btn btn-success"
                  >
                    Actualizar
                  </Link>
                </td>
      <td><a href="#" className="btn btn-danger">Eliminar</a></td>
    </tr>
 ))}
  </tbody>
</table>

            </div>
            
            <a href="detalleproducto/registrar" className="btn btn-primary">Registrar Dellate Producto</a>
        </div>
    );

}